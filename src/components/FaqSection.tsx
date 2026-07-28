import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ReactNode } from "react";

export interface FaqItem {
  question: string;
  answer: ReactNode;
}

interface FaqSectionProps {
  faqs: FaqItem[];
  title?: string;
  subtitle?: string;
}

export default function FaqSection({
  faqs,
  title = "Frequently Asked Questions",
  subtitle,
}: FaqSectionProps) {
  const [active, setActive] = useState<number>(-1);

  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-[#0F0903] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold tracking-wide mb-5">
            FAQ
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-[--bg-color1] dark:text-white leading-tight">
            {title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-[--primary-color]">
              {title.split(" ").slice(-1)}
            </span>
          </h2>

          <div className="w-24 h-1 bg-[--bg-primary-gradient] rounded-full mx-auto my-6" />

          {subtitle && (
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {subtitle}
            </p>
          )}
        </div>

        <div className="max-w-5xl mx-auto space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 dark:border-[--primary-color]/20 bg-white dark:bg-[#1B1207] overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setActive(active === index ? -1 : index)}
                className="w-full flex items-center justify-between text-left p-7"
              >
                <h3 className="text-xl font-semibold text-[--bg-color1] dark:text-white pr-6">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`w-6 h-6 text-[--primary-color] transition-transform duration-300 flex-shrink-0 ${
                    active === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  active === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-7 pb-7 text-gray-600 dark:text-gray-400 leading-8">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
