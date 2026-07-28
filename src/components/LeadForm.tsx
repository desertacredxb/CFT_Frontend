import { useState } from "react";
import "../index.css";
import Navbar from "./Nav";
import Footer from "./Footer";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const LeadForm = () => {
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [marketSegment, setMarketSegment] = useState("");
    const [email, setEmail] = useState("");

    const [step, setStep] = useState<"form" | "done">("form");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmitForm = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!fullName || !phone || !city || !email) {
            setError("Please fill all fields.");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const res = await fetch(`${baseURL}/api/direct`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, phone, city, email, marketSegment }),
            });

            const data = await res.json();

            if (res.ok) {
                setStep("done");
            } else {
                setError(data.error || "Failed to submit. Please try again.");
            }
        } catch {
            setError("Server error. Try again later.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <>

            <Navbar />
            <div className="flex justify-center items-center z-50 px-4 h-[90vh] bg-white dark:bg-[--bg-color1]">
                <div className="bg-[#140E05] text-white p-6 max-w-md w-full rounded shadow-lg relative border border-[var(--primary-color)] sm:max-w-md sm:w-auto">

                    {step === "done" ? (
                        <div className="text-center">
                            <h2 className="text-2xl font-bold mb-3 text-[var(--primary-color)]">
                                Thank you!
                            </h2>
                            <p className="text-sm text-white">
                                Your lead is created. We’ll contact you shortly.
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
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    className="w-full border border-gray-600 focus:border-[var(--primary-color)] bg-transparent text-white p-2 placeholder-gray-400 outline-none text-sm sm:text-base"
                                />
                                <input
                                    type="number"
                                    placeholder="Phone*"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="w-full border border-gray-600 focus:border-[var(--primary-color)] bg-transparent text-white p-2 placeholder-gray-400 outline-none text-sm sm:text-base"
                                />
                                <input
                                    type="text"
                                    placeholder="City*"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    className="w-full border border-gray-600 focus:border-[var(--primary-color)] bg-transparent text-white p-2 placeholder-gray-400 outline-none text-sm sm:text-base"
                                />
                                <input
                                    type="email"
                                    placeholder="Email*"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full border border-gray-600 focus:border-[var(--primary-color)] bg-transparent text-white p-2 placeholder-gray-400 outline-none text-sm sm:text-base"
                                />
                                <input
                                    type="text"
                                    placeholder="Market Segment?"
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
                                    {loading ? "Submitting..." : "SUBMIT"}
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>
            <Footer />

        </>

    );
};

export default LeadForm;