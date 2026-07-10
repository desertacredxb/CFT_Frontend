// import { useEffect, useState } from "react";
// import "../index.css";
// import { usePopup } from "../components/PopupContext";

// const baseURL = import.meta.env.VITE_API_BASE_URL;

// const Popup = () => {
//   const { showPopup, openPopup, closePopup } = usePopup();

//   const [fullName, setFullName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [city, setCity] = useState("");
//   const [marketSegment, setMarketSegment] = useState("");
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");

//   const [step, setStep] = useState<"form" | "otp" | "done">("form");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const hasShown = sessionStorage.getItem("bonusPopupShown");
//     if (!hasShown) {
//       const timer = setTimeout(() => {
//         sessionStorage.setItem("bonusPopupShown", "true");
//         openPopup();
//       }, 7000);
//       return () => clearTimeout(timer);
//     }
//   }, [openPopup]);

//   const handleClose = () => {
//     closePopup();
//     setStep("form");
//     setFullName("");
//     setPhone("");
//     setCity("");
//     setMarketSegment("");
//     setEmail("");
//     setOtp("");
//     setError("");
//   };

//   const handleSubmitForm = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!fullName || !phone || !city || !email || !marketSegment) {
//       setError("Please fill all fields.");
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       const res = await fetch(`${baseURL}/api/send-otp`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ fullName, phone, city, email, marketSegment }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         setStep("otp");
//       } else {
//         setError(data.error || "Failed to send OTP.");
//       }
//     } catch {
//       setError("Server error. Try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleVerifyOtp = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!otp.trim()) {
//       setError("Please enter the OTP.");
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       const res = await fetch(`${baseURL}/api/verify-otp`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, otp }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         setStep("done");
//       } else {
//         setError(data.error || "Invalid OTP.");
//       }
//     } catch {
//       setError("Verification failed. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!showPopup) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 px-4">
//       <div className="bg-[#140E05] text-white p-6 max-w-md w-full rounded shadow-lg relative border border-[var(--primary-color)] sm:max-w-md sm:w-auto">
//         <button
//           className="absolute top-2 right-2 text-white hover:text-[var(--primary-color)] text-xl"
//           onClick={handleClose}
//         >
//           &times;
//         </button>

//         {step === "done" ? (
//           <div className="text-center">
//             <h2 className="text-2xl font-bold mb-3 text-[var(--primary-color)]">
//               Thank you!
//             </h2>
//             <p className="text-sm text-white">
//               Your account is verified. We’ll contact you shortly.
//             </p>
//           </div>
//         ) : step === "form" ? (
//           <>
//             <p className="text-center mb-4 text-sm text-[var(--primary-color)] font-medium">
//               0% Commission & Upto 500x Margin
//             </p>
//             <form className="space-y-3" onSubmit={handleSubmitForm}>
//               <input
//                 type="text"
//                 placeholder="Full Name*"
//                 value={fullName}
//                 onChange={(e) => setFullName(e.target.value)}
//                 className="w-full border border-gray-600 focus:border-[var(--primary-color)] bg-transparent text-white p-2 placeholder-gray-400 outline-none text-sm sm:text-base"
//               />
//               <input
//                 type="number"
//                 placeholder="Phone*"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 className="w-full border border-gray-600 focus:border-[var(--primary-color)] bg-transparent text-white p-2 placeholder-gray-400 outline-none text-sm sm:text-base"
//               />
//               <input
//                 type="text"
//                 placeholder="City*"
//                 value={city}
//                 onChange={(e) => setCity(e.target.value)}
//                 className="w-full border border-gray-600 focus:border-[var(--primary-color)] bg-transparent text-white p-2 placeholder-gray-400 outline-none text-sm sm:text-base"
//               />
//               <input
//                 type="email"
//                 placeholder="Email*"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full border border-gray-600 focus:border-[var(--primary-color)] bg-transparent text-white p-2 placeholder-gray-400 outline-none text-sm sm:text-base"
//               />
//               <input
//                 type="text"
//                 placeholder="Market Segment?"
//                 value={marketSegment}
//                 onChange={(e) => setMarketSegment(e.target.value)}
//                 className="w-full border border-gray-600 focus:border-[var(--primary-color)] bg-transparent text-white p-2 placeholder-gray-400 outline-none text-sm sm:text-base"
//               />
//               {error && (
//                 <p className="text-red-500 text-sm text-center">{error}</p>
//               )}
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-[var(--primary-color)] hover:bg-opacity-90 text-[#140E05] font-bold py-2 text-sm sm:text-base transition-colors"
//               >
//                 {loading ? "Sending OTP..." : "SUBMIT"}
//               </button>
//             </form>
//           </>
//         ) : (
//           <form className="space-y-3" onSubmit={handleVerifyOtp}>
//             <h3 className="text-lg font-semibold text-center text-[var(--primary-color)]">
//               Enter the OTP sent to your Watsapp
//             </h3>
//             <input
//               type="text"
//               placeholder="Enter OTP"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               className="w-full border border-gray-600 focus:border-[var(--primary-color)] bg-transparent text-white p-2 placeholder-gray-400 outline-none text-sm sm:text-base"
//             />
//             {error && (
//               <p className="text-red-500 text-sm text-center">{error}</p>
//             )}
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-[var(--primary-color)] hover:bg-opacity-90 text-[#140E05] font-bold py-2 text-sm sm:text-base transition-colors"
//             >
//               {loading ? "Verifying..." : "VERIFY OTP"}
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Popup;


import { useEffect, useState } from "react";
import "../index.css";
import { usePopup } from "../components/PopupContext";

const Popup = () => {
  const { showPopup, openPopup, closePopup } = usePopup();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [marketSegment, setMarketSegment] = useState("");
  const [email, setEmail] = useState("");

  const [step, setStep] = useState<"form" | "done">("form");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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
    setError("");
  };

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    // Field Validation
    if (!fullName.trim() || !phone.trim()) {
      setError("Name and Phone number are required.");
      return;
    }

    setLoading(true);
    setError("");

    // Prepare JSON payload strictly matching the API expectations
    const payload = {
      name: fullName,
      mobile: phone,
      email: email || "",
      referralcode: "" // Left empty or can be mapped if you have a referral system
    };

    try {
      // Routes seamlessly through your Vite Proxy (Local) or Vercel Rewrite (Live)
      const res = await fetch("/api/apiUserRegister", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_MT_AUTH_KEY || "X9dPa4Lm7QvR2nHt8YsK5cZw1FuJ6eGb"
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        setStep("done");
      } else {
        setError(data.message || "Registration failed. Please try again.");
      }
    } catch (err) {
      console.error("Popup API Integration Error:", err);
      setError("Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 px-4">
      <div className="bg-[#140E05] text-white p-6 max-w-md w-full rounded shadow-lg relative border border-[var(--primary-color)] sm:max-w-md sm:w-auto">
        <button
          className="absolute top-2 right-2 text-white hover:text-[var(--primary-color)] text-xl"
          onClick={handleClose}
        >
          &times;
        </button>

        {step === "done" ? (
          <div className="text-center p-4">
            <h2 className="text-2xl font-bold mb-3 text-[var(--primary-color)]">
              Thank you!
            </h2>
            <p className="text-sm text-white">
              Your registration is successful. We’ll contact you shortly.
            </p>
          </div>
        ) : (
          <>
            <p className="text-center mb-4 text-sm text-[var(--primary-color)] font-medium">
              0% Commission & Upto 500x Margin
            </p>
            <form className="space-y-3" onSubmit={handleSubmitForm}>
              <input
                type="text"
                placeholder="Full Name*"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border border-gray-600 focus:border-[var(--primary-color)] bg-transparent text-white p-2 placeholder-gray-400 outline-none text-sm sm:text-base"
              />
              <input
                type="tel"
                placeholder="Phone*"
                required
                maxLength={10}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-gray-600 focus:border-[var(--primary-color)] bg-transparent text-white p-2 placeholder-gray-400 outline-none text-sm sm:text-base"
              />
              <input
                type="text"
                placeholder="City (Optional)"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full border border-gray-600 focus:border-[var(--primary-color)] bg-transparent text-white p-2 placeholder-gray-400 outline-none text-sm sm:text-base"
              />
              <input
                type="email"
                placeholder="Email (Optional)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-600 focus:border-[var(--primary-color)] bg-transparent text-white p-2 placeholder-gray-400 outline-none text-sm sm:text-base"
              />
              <input
                type="text"
                placeholder="Market Segment? (Optional)"
                value={marketSegment}
                onChange={(e) => setMarketSegment(e.target.value)}
                className="w-full border border-gray-600 focus:border-[var(--primary-color)] bg-transparent text-white p-2 placeholder-gray-400 outline-none text-sm sm:text-base"
              />
              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[var(--primary-color)] hover:bg-opacity-90 text-[#140E05] font-bold py-2 text-sm sm:text-base transition-colors"
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