import { useEffect, useState } from "react";
import logo from "../assets/logo-01.svg";
import sideImage from "../assets/newabout.webp";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff, FiMoon, FiSun } from "react-icons/fi";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [phone, setPhone] = useState("");

  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);

  const [showPassword, setShowPassword] = useState(false);
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

  /* ---------------------------------------------------------
      STEP 1 — SEND OTP
  --------------------------------------------------------- */
  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !email || !phone || !city || !password) {
      setMessage("Please fill in all fields.");
      setMessageType("error");
      return;
    }

    if (!validateEmail(email)) {
      setMessage("Invalid email format.");
      setMessageType("error");
      return;
    }

    if (!validatePhone(phone)) {
      setMessage("Phone number must be 10 digits.");
      setMessageType("error");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${baseURL}/api/auth/signup/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName,
          phone: phone,
          email,
          city,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || "Failed to send OTP.");
        setMessageType("error");
      } else {
        setMessage("OTP sent to your WhatsApp.");
        setMessageType("success");
        setStep(2);
      }
    } catch (err) {
      setMessage("Something went wrong. Try again.");
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  /* ---------------------------------------------------------
      STEP 2 — VERIFY OTP
  --------------------------------------------------------- */
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!otp) {
      setMessage("Enter OTP.");
      setMessageType("error");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${baseURL}/api/auth/signup/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: phone,
          otp,
        }),
      });

      const data = await res.json();

      if (data.error) {
        setMessage(data.error);
        setMessageType("error");
        setLoading(false);
        return; // ⛔ STOP — DO NOT REDIRECT
      }

      setMessage("Account Created Successfully!");
      setMessageType("success");

      setFullName("");
      setEmail("");
      setPhone("");
      setCity("");
      setPassword("");
      setOtp("");

      navigate("/");
    } catch (err) {
      setMessage("Something went wrong during verification.");
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  /* ---------------------------------------------------------
      RENDER UI
  --------------------------------------------------------- */
  return (
    <div className="min-h-screen w-full bg-white dark:bg-black transition-colors duration-300 flex flex-col items-center">
      {/* Header */}
      <div className="w-full py-5 px-8 shadow-md dark:shadow-gray-200 flex justify-between items-center mb-12">
        <a href="/">
          <img
            src={logo}
            alt="Logo"
            className="w-40 hover:scale-105 transition-all duration-300"
          />
        </a>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition duration-300"
          title="Toggle Theme"
        >
          {darkMode ? (
            <FiSun size={24} className="text-white" />
          ) : (
            <FiMoon size={24} className="text-gray-700" />
          )}
        </button>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-5xl rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900/50 dark:to-black shadow-xl dark:shadow-gray-900/30">
        <div className="flex flex-col md:flex-row h-full">
          {/* Left Image */}
          <div className="hidden md:block md:w-1/2 relative">
            <img
              src={sideImage}
              alt="Side Visual"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Form Section */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {step === 1 ? "Create Your Account" : "Verify OTP"}
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                {step === 1
                  ? "Join thousands of traders achieving financial goals"
                  : "Enter the OTP sent to your WhatsApp"}
              </p>
            </div>

            {/* FORM */}
            <form
              onSubmit={step === 1 ? handleSendOtp : handleVerifyOtp}
              className="space-y-6"
            >
              <div className="space-y-4">
                {/* STEP 1 Fields */}
                {step === 1 && (
                  <>
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-4 py-3 bg-white dark:bg-white/5 rounded-lg border border-gray-300 dark:border-white/10 text-black dark:text-white"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-white dark:bg-white/5 rounded-lg border border-gray-300 dark:border-white/10 text-black dark:text-white"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* City */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full px-4 py-3 bg-white dark:bg-white/5 rounded-lg border border-gray-300 dark:border-white/10 text-black dark:text-white"
                        placeholder="Delhi, Mumbai, etc."
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="tel"
                          value={phone}
                          max={10}
                          onChange={(e) => setPhone(e.target.value)}
                          className="flex-1 px-4 py-3 bg-white dark:bg-white/5 text-black dark:text-white rounded-lg border border-gray-300 dark:border-white/10"
                          placeholder="9876543210"
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Create Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full px-4 py-3 pr-12 bg-white dark:bg-white/5 rounded-lg border border-gray-300 dark:border-white/10 text-black dark:text-white"
                          placeholder="••••••••"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute top-1/2 right-4 transform -translate-y-1/2"
                        >
                          {showPassword ? (
                            <FiEyeOff size={18} />
                          ) : (
                            <FiEye size={18} />
                          )}
                        </button>
                      </div>
                    </div>
                  </>
                )}

                {/* STEP 2 Fields */}
                {step === 2 && (
                  <>
                    {/* OTP */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Enter OTP
                      </label>
                      <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        className="w-full px-4 py-3 bg-white dark:bg-white/5 rounded-lg border border-gray-300 dark:border-white/10 text-black dark:text-white"
                        placeholder="Enter OTP"
                      />
                    </div>
                  </>
                )}
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white py-3.5 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              >
                {loading
                  ? step === 1
                    ? "Sending OTP..."
                    : "Verifying..."
                  : step === 1
                    ? "Send OTP"
                    : "Verify & Create Account"}
              </button>

              {/* MESSAGE */}
              {message && (
                <div
                  className={`p-3 rounded-lg text-center text-sm ${
                    messageType === "success"
                      ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                      : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
                  }`}
                >
                  {message}
                </div>
              )}
            </form>

            {/* FOOTER */}
            {/* <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/10">
              <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="font-medium text-teal-500 hover:text-teal-600 dark:hover:text-teal-400"
                >
                  Sign in
                </a>
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
