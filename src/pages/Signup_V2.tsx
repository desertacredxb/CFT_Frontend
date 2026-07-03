import { useEffect, useState } from "react";
import sideImage from "../assets/newabout.webp";
import { useNavigate } from "react-router-dom";
import { FiMoon, FiSun } from "react-icons/fi";

// const baseURL = import.meta.env.VITE_API_BASE_URL;

const Signup_V2 = () => {
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");

    const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");

    const [hasReferralCode, setHasReferralCode] = useState(false);
    const [referralCode, setReferralCode] = useState("");


    // const [showPassword, setShowPassword] = useState(false);
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

        // if (password !== confirmPassword) {
        //     setMessage("Passwords do not match");
        //     setMessageType("error");
        //     return;
        // }

        try {
            setLoading(true);
            // if(true){
            //     console.log(
            //         {
            //             name: fullName,
            //             mobile: phone,
            //             email: email || "",
            //             referralcode: hasReferralCode ? referralCode : "", // add referral code field if available
            //         }
            //     )
            //     return;
            // }

            const response = await fetch(
                "https://v2.mastertrader.co.in/api/apiUserRegister",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "x-api-key": import.meta.env.MT_AUTH_KEY,
                    },
                    body: JSON.stringify({
                        name: fullName,
                        mobile: phone,
                        email: email || "",
                        referralcode: hasReferralCode ? referralCode : "", // add referral code field if available
                    }),
                }
            );

            const data = await response.json();

            if (response.ok) {
                setMessage(data.message || "Registration successful!");
                setMessageType("success");

                // Optional: redirect after success
                setTimeout(() => {
                    navigate("/login");
                }, 1500);
            } else {
                setMessage(data.message || "Registration failed");
                setMessageType("error");
            }
        } catch (error) {
            console.error(error);
            setMessage("Something went wrong. Please try again.");
            setMessageType("error");
        } finally {
            setLoading(false);
        }
    };

    /* ---------------------------------------------------------
        RENDER UI
    --------------------------------------------------------- */
    return (
        <>
            {/* <Navbar /> */}
            <div className="min-h-screen w-full bg-white dark:bg-black transition-colors duration-300 flex flex-col items-center">
                {/* Header */}
                <div className="w-full py-5 px-8 shadow-md dark:shadow-gray-200 flex justify-between items-center mb-12">
                    <a href="/">
                        <img
                            src={"/MT-logo.png"}
                            alt="Logo"
                            className="h-16 hover:scale-105 transition-all duration-300"
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
                <div className="w-full max-w-5xl rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900/50 dark:to-black shadow-xl dark:shadow-gray-900/30 flex items-center">
                    <div className="flex flex-col md:flex-row w-full items-stretch">
                        {/* Left Image */}
                        <div className="hidden md:block md:w-1/2">
                            <img
                                src={sideImage}
                                alt="Side Visual"
                                className="w-full h-full object-cover"
                            />
                        </div>


                        {/* Right Form Section - Compact single viewport rendering */}
                        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between h-full min-h-[500px] overflow-y-auto no-scrollbar">
                            <div className="mb-2">
                                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                                    Create Your Account
                                </h1>
                                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                                    Join thousands of traders achieving financial goals
                                </p>
                            </div>

                            {/* FORM */}
                            <form
                                onSubmit={handleSubmit}
                                className="space-y-3 flex-1 mt-6"
                            >
                                <div className="space-y-2.5">
                                    {/* Name */}
                                    <div>
                                        <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            className="w-full px-3 py-3 bg-white dark:bg-white/5 rounded-lg border border-gray-300 dark:border-white/10 text-black dark:text-white text-sm"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full px-3 py-3 bg-white dark:bg-white/5 rounded-lg border border-gray-300 dark:border-white/10 text-black dark:text-white text-sm"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Phone Number
                                        </label>
                                        <div className="flex gap-2">
                                            <input
                                                type="tel"
                                                required
                                                value={phone}
                                                maxLength={10}
                                                onChange={(e) => setPhone(e.target.value)}
                                                className="flex-1 px-3 py-3 bg-white dark:bg-white/5 text-black dark:text-white rounded-lg border border-gray-300 dark:border-white/10 text-sm"
                                                placeholder="Enter Mobile No"
                                            />
                                        </div>
                                    </div>

                                    


                                    {/* Password + Confirm Password Side-by-Side (Saves vertical viewport space) */}
                                    {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <div>
                                            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                Password
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    required
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    className="w-full px-3 py-2 pr-10 bg-white dark:bg-white/5 rounded-lg border border-gray-300 dark:border-white/10 text-black dark:text-white text-sm"
                                                    placeholder="••••••••"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-white"
                                                >
                                                    {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                                                </button>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                Confirm Password
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    required
                                                    value={confirmPassword}
                                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                                    className="w-full px-3 py-2 pr-10 bg-white dark:bg-white/5 rounded-lg border border-gray-300 dark:border-white/10 text-black dark:text-white text-sm"
                                                    placeholder="••••••••"
                                                />
                                            </div>
                                        </div>
                                    </div> */}

                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 cursor-pointer select-none text-xs font-medium text-gray-700 dark:text-gray-300">
                                            <input
                                                type="checkbox"
                                                checked={hasReferralCode}
                                                onChange={(e) => {
                                                    setHasReferralCode(e.target.checked);
                                                    // Clear value when unchecked
                                                    if (!e.target.checked) {
                                                        setReferralCode("");
                                                    }
                                                }}
                                                className="h-3.5 w-3.5 accent-[#E5A834] rounded border-gray-300 dark:border-white/10 dark:bg-white/5 cursor-pointer"
                                            />
                                            <span>Have a Referral Code?</span>
                                        </label>

                                        {hasReferralCode && (
                                            <div className="animate-fadeIn">
                                                <input
                                                    type="text"
                                                    value={referralCode}
                                                    onChange={(e) => setReferralCode(e.target.value)}
                                                    placeholder="Enter Referral Code"
                                                    className="w-full px-3 py-3 bg-white dark:bg-white/5 rounded-lg border border-gray-300 dark:border-white/10 text-black dark:text-white text-sm outline-none focus:border-[#E5A834] transition-all duration-200"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* BUTTON */}
                                <div className="pt-1">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-gradient-to-r from-[#B37D22] via-[#E5A834] to-[#B37D22] hover:brightness-110 disabled:opacity-50 text-[#140E05] py-2.5 rounded-lg font-bold transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(229,168,52,0.4)] text-sm"
                                    >
                                        {loading ? "Creating Account..." : "Create Account"}
                                    </button>
                                </div>

                                {/* MESSAGE */}
                                {message && (
                                    <div
                                        className={`p-2 rounded-lg text-center text-xs font-medium ${messageType === "success"
                                            ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                                            : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
                                            }`}
                                    >
                                        {message}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup_V2;
