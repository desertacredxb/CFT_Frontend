import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import { usePopup } from "../components/PopupContext";
import { toast } from "react-toastify";
const BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://cft-backend.onrender.com";

type ApiResponse = {
  message?: string;
  status?: boolean | string;
  success?: boolean;
  duplicate?: boolean;
  field?: string;
};

// Both APIs can answer with an empty or non-JSON body, so never let a parse
// failure surface as "Something went wrong".
const parseResponse = async (response: Response): Promise<ApiResponse> => {
  try {
    const text = await response.text();
    return text ? JSON.parse(text) : {};
  } catch {
    return {};
  }
};

const Popup = () => {
  const navigate = useNavigate();
  const { showPopup, openPopup, closePopup } = usePopup();

  const [step, setStep] = useState<"form" | "done">("form");
  const [loading, setLoading] = useState(false);

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [marketSegment, setMarketSegment] = useState("");

  const [hasReferralCode] = useState(false);
  const [referralCode] = useState("");

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");

  useEffect(() => {
    const hasShown = sessionStorage.getItem("bonusPopupShown");
    if (!hasShown) {
      const timer = setTimeout(() => {
        sessionStorage.setItem("bonusPopupShown", "true");
        openPopup();
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [openPopup]);

  const handleClose = () => {
    closePopup();
    setStep("form");
    setFullName("");
    setPhone("");
    setCity("");
    setMarketSegment("");
    setEmail("");
    setMessage("");
    setMessageType("");
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) => /^[0-9]{10}$/.test(phone);

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    setMessage("");
    setMessageType("");

    // Field Validation
    if (!fullName.trim()) {
      setMessage("Full name is required");
      setMessageType("error");
      return;
    }

    if (!validatePhone(phone)) {
      setMessage("Please enter a valid 10-digit mobile number");
      setMessageType("error");
      return;
    }

    if (email && !validateEmail(email)) {
      setMessage("Please enter a valid email address");
      setMessageType("error");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        // "name"/"mobile" are what the registration API expects,
        // "fullName"/"phone" are what the lead API expects.
        name: fullName.trim(),
        fullName: fullName.trim(),
        phone: phone.trim(),
        mobile: phone.trim(),
        email: email.trim().toLowerCase(),
        city: city.trim(),
        marketSegment: marketSegment.trim(),
        referralcode: hasReferralCode ? referralCode : "",
      };

      // 1. Third Party API (Needs full URL in production)
      const thirdPartyPromise = fetch(`${BASE_URL}/api/leads/register-user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // 2. Local Express Backend API
      const localLeadPromise = fetch(`${BASE_URL}/api/leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const [thirdPartyResult, localLeadResult] = await Promise.allSettled([
        thirdPartyPromise,
        localLeadPromise,
      ]);

      // The lead submission decides what the user sees. The third party only
      // gets logged - its errors must not block a captured lead.
      if (thirdPartyResult.status === "rejected") {
        console.warn("Registration API network error:", thirdPartyResult.reason);
      } else if (!thirdPartyResult.value.ok) {
        const thirdPartyData = await parseResponse(thirdPartyResult.value);
        console.warn(
          "Registration API returned error response:",
          thirdPartyResult.value.status,
          thirdPartyData.message || "",
        );
      }

      if (localLeadResult.status === "rejected") {
        console.warn("Local Lead API network error:", localLeadResult.reason);
        throw localLeadResult.reason;
      }

      const leadResponse = localLeadResult.value;
      const leadData = await parseResponse(leadResponse);

      // Lead API rejected a repeat mobile/email - stop here, no success view.
      if (leadResponse.status === 409) {
        const duplicateMessage =
          leadData.message ||
          "We have already received your request with this mobile number or email. Our team will contact you shortly.";
        setMessage(duplicateMessage);
        setMessageType("error");
        return;
      }

      if (leadResponse.ok) {
        setMessage("Registration successful!");
        setMessageType("success");
        toast.success("Registration successful!");

        // Switch view to thank-you modal confirmation
        setStep("done");

        // Navigate after brief delay and auto-close modal
        setTimeout(() => {
          handleClose();
          navigate("/login");
        }, 2000);
      } else {
        const failureMessage = leadData.message || "Registration failed";
        setMessage(failureMessage);
        setMessageType("error");
        toast.error(failureMessage);
      }
    } catch (error) {
      console.error("API Integration Error:", error);
      setMessage("Something went wrong. Please try again.");
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 px-4">
      <div className="bg-[#140E05] text-white p-6 max-w-md w-full rounded shadow-lg relative border border-[var(--primary-color)] sm:max-w-md sm:w-auto">
        <button
          className="absolute top-2 right-2 text-white hover:text-[var(--primary-color)] text-xl cursor-pointer"
          onClick={handleClose}
        >
          &times;
        </button>

        {step === "done" ? (
          <div className="text-center p-6 space-y-3">
            <div className="mx-auto w-12 h-12 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-2xl font-bold border border-green-500">
              ✓
            </div>
            <h2 className="text-2xl font-bold text-[var(--primary-color)]">
              Registration Successful!
            </h2>
            <p className="text-sm text-gray-300">
              Thank you for registering. Redirecting you shortly...
            </p>
          </div>
        ) : (
          <>
            <p className="text-center mb-4 text-sm text-[var(--primary-color)] font-medium">
              0% Commission & Upto 500x Margin
            </p>

            {message && (
              <div
                className={`mb-4 text-xs sm:text-sm p-2.5 rounded text-center font-medium ${
                  messageType === "success"
                    ? "bg-green-950/80 text-green-400 border border-green-700"
                    : "bg-red-950/80 text-red-400 border border-red-700"
                }`}
              >
                {message}
              </div>
            )}

            <form className="space-y-3" onSubmit={handleSubmitForm}>
              <input
                type="text"
                placeholder="Full Name*"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border border-gray-600 focus:border-[var(--primary-color)] bg-transparent text-white p-2 placeholder-gray-400 outline-none text-sm sm:text-base rounded"
              />
              <input
                type="tel"
                inputMode="numeric"
                placeholder="Phone*"
                required
                maxLength={10}
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
                }
                className="w-full border border-gray-600 focus:border-[var(--primary-color)] bg-transparent text-white p-2 placeholder-gray-400 outline-none text-sm sm:text-base rounded"
              />
              <input
                type="text"
                placeholder="City (Optional)"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full border border-gray-600 focus:border-[var(--primary-color)] bg-transparent text-white p-2 placeholder-gray-400 outline-none text-sm sm:text-base rounded"
              />
              <input
                type="email"
                placeholder="Email (Optional)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-600 focus:border-[var(--primary-color)] bg-transparent text-white p-2 placeholder-gray-400 outline-none text-sm sm:text-base rounded"
              />
              <input
                type="text"
                placeholder="Market Segment? (Optional)"
                value={marketSegment}
                onChange={(e) => setMarketSegment(e.target.value)}
                className="w-full border border-gray-600 focus:border-[var(--primary-color)] bg-transparent text-white p-2 placeholder-gray-400 outline-none text-sm sm:text-base rounded"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[var(--primary-color)] hover:bg-opacity-90 text-[#140E05] font-bold py-2 text-sm sm:text-base transition-colors rounded disabled:opacity-50"
              >
                {loading ? "Registering..." : "SUBMIT"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Popup;
