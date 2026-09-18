import { useEffect, useState } from "react";
import sideImage from "../assets/newabout.webp";
import { useNavigate } from "react-router-dom";
import {
  FiMoon,
  FiSun,
  FiUser,
  FiPhone,
  FiMail,
  FiMapPin,
  FiBriefcase,
  FiTag,
} from "react-icons/fi";
import { toast } from "react-toastify";

const Signup_V2 = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [marketSegment, setMarketSegment] = useState("");

  const [hasReferralCode, setHasReferralCode] = useState(false);
  const [referralCode, setReferralCode] = useState("");

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme")
      ? localStorage.getItem("theme") === "dark"
      : true;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) => /^[0-9]{10}$/.test(phone);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setMessage("");
    setMessageType("");

    // Validation
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
        fullName: fullName,
        phone: phone,
        mobile: phone,
        email: email || "",
        city: city || "",
        marketSegment: marketSegment || "",
        referralcode: hasReferralCode ? referralCode : "",
      };

      // Prepare both requests to run in parallel
      const thirdPartyPromise = fetch("/api/leads/register-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // Your local backend lead management request
      const localLeadPromise = fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // Execute both API calls in parallel
      const [thirdPartyResult, localLeadResult] = await Promise.allSettled([
        thirdPartyPromise,
        localLeadPromise,
      ]);

      // Track internal API outcome quietly in console
      if (localLeadResult.status === "rejected") {
        console.warn("Local Lead API network error:", localLeadResult.reason);
      } else if (!localLeadResult.value.ok) {
        console.warn(
          "Local Lead API returned error response:",
          localLeadResult.value.status,
        );
      }

      // Process the third-party API result (Primary workflow)
      if (thirdPartyResult.status === "fulfilled") {
        const response = thirdPartyResult.value;

        // Safely parse JSON or handle empty response
        const text = await response.text();
        const data = text ? JSON.parse(text) : {};

        if (response.ok) {
          setMessage(data.message || "Registration successful!");
          setMessageType("success");
          toast.success("Registration successful!");

          setTimeout(() => {
            navigate("/login");
          }, 1500);
        } else {
          setMessage(data.message || "Registration failed");
          setMessageType("error");
          toast.error(data.message || "Registration failed");
        }
      } else {
        throw thirdPartyResult.reason;
      }
    } catch (error) {
      console.error("API Integration Error:", error);
      setMessage("Something went wrong. Please try again.");
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-slate-50 dark:bg-[#090D16] transition-colors duration-300 flex flex-col items-center">
      {/* Header */}
      <header className="w-full py-4 px-6 md:px-12 backdrop-blur-md bg-white/70 dark:bg-[#090D16]/70 sticky top-0 z-50 border-b border-slate-200 dark:border-white/10 flex justify-between items-center mb-8">
        <a href="/" className="flex items-center gap-2">
          <img
            src={"/MT-logo.png"}
            alt="Master Trader Logo"
            className="h-12 hover:scale-105 transition-transform duration-300"
          />
        </a>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-700 dark:text-amber-400 transition-all duration-300 shadow-sm"
          title="Toggle Theme"
        >
          {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
      </header>

      {/* Main Card */}
      <main className="w-full max-w-5xl px-4 pb-12">
        <div className="w-full rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/60 shadow-2xl shadow-slate-200/50 dark:shadow-black/50 backdrop-blur-xl flex flex-col md:flex-row">
          {/* Left Decorative Section */}
          <div className="hidden md:block md:w-1/2 relative overflow-hidden group">
            <img
              src={sideImage}
              alt="Master Trader"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-8 text-white">
              <span className="inline-block px-3 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-300 text-xs font-semibold tracking-wider uppercase mb-3 w-fit">
                Start Trading Today
              </span>
              <h2 className="text-2xl font-bold mb-2">
                Elevate Your Market Strategy
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect with professional insights, automated tools, and
                dedicated market support.
              </p>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
                  Create Your Account
                </h1>
                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
                  Fill in your details below to capture your lead and get
                  started.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-base" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-10 pr-3 py-2.5 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <FiPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-base" />
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full pl-10 pr-3 py-2.5 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                        placeholder="10-digit Mobile"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-base" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-3 py-2.5 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                {/* City & Market Segment */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      City
                    </label>
                    <div className="relative">
                      <FiMapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-base" />
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full pl-10 pr-3 py-2.5 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                        placeholder="Mumbai, Delhi, etc."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Market Segmentsss
                    </label>
                    <div className="relative">
                      <FiBriefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-base pointer-events-none z-10" />
                      <select
                        value={marketSegment}
                        onChange={(e) => setMarketSegment(e.target.value)}
                        className="w-full pl-10 pr-3 py-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Select Segment</option>
                        <option value="Equity">Equity</option>
                        <option value="Options">Options</option>
                        <option value="Futures">Futures</option>
                        <option value="Forex">Forex</option>
                        <option value="Commodity">Commodity</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Referral Code Checkbox */}
                <div className="pt-1">
                  <label className="flex items-center gap-2 cursor-pointer select-none text-xs font-medium text-slate-700 dark:text-slate-300">
                    <input
                      type="checkbox"
                      checked={hasReferralCode}
                      onChange={(e) => {
                        setHasReferralCode(e.target.checked);
                        if (!e.target.checked) setReferralCode("");
                      }}
                      className="h-4 w-4 accent-amber-500 rounded border-slate-300 dark:border-white/10 cursor-pointer"
                    />
                    <span>Have a Referral Code?</span>
                  </label>

                  {hasReferralCode && (
                    <div className="mt-2 relative animate-fadeIn">
                      <FiTag className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-base" />
                      <input
                        type="text"
                        value={referralCode}
                        onChange={(e) => setReferralCode(e.target.value)}
                        placeholder="Enter Referral Code"
                        className="w-full pl-10 pr-3 py-2 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                      />
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:brightness-110 active:scale-[0.99] disabled:opacity-50 text-slate-950 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-amber-500/20 text-sm tracking-wide"
                  >
                    {loading ? "Submitting Lead..." : "Create Account"}
                  </button>
                </div>

                {/* Feedback Message */}
                {message && (
                  <div
                    className={`p-3 rounded-xl text-center text-xs font-semibold ${
                      messageType === "success"
                        ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                        : "bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400"
                    }`}
                  >
                    {message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Signup_V2;
