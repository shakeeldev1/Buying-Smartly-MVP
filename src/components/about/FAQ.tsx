import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What makes BuySmartly different from other platforms?",
    answer:
      "BuySmartly offers a unified ecosystem that connects businesses, suppliers, services, and users in one seamless platform. Our AI-powered discovery, verified providers, and comprehensive opportunity matching set us apart from traditional marketplaces.",
  },
  {
    question: "How can my business join the BuySmartly platform?",
    answer:
      "Joining is simple. Click the 'Join Now' button, complete your business profile, verify your credentials, and start connecting with thousands of potential partners and customers within minutes.",
  },
  {
    question: "Are all providers on BuySmartly verified?",
    answer:
      "Yes, we maintain a rigorous verification process for all providers. Each business undergoes identity verification, credential validation, and ongoing quality monitoring to ensure trust and reliability.",
  },
  {
    question: "What types of opportunities are available on BuySmartly?",
    answer:
      "Our platform offers diverse opportunities including business partnerships, supplier connections, service provider matches, educational resources, healthcare options, and career growth possibilities across multiple industries.",
  },
  {
    question: "Is there a free tier available for individual users?",
    answer:
      "Yes! BuySmartly offers a comprehensive free tier that allows individuals to discover opportunities, connect with providers, and access essential platform features. Premium plans unlock advanced features and priority support.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-8">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#A18244]/10 px-4 py-2 text-sm font-semibold text-[#A18244]">
            FAQ
          </span>

          <h2 className="mt-5 text-4xl font-bold text-[#191919] lg:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Find answers to common questions about BuySmartly and how we can help your business grow.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-16 space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:border-[#A18244]/40 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="pr-4 text-lg font-semibold text-[#191919]">
                  {item.question}
                </span>
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[#A18244] transition-all duration-300 ${
                    openIndex === index
                      ? "rotate-45 bg-[#A18244]"
                      : "bg-transparent"
                  }`}
                >
                  <svg
                    className={`h-4 w-4 transition-colors duration-300 ${
                      openIndex === index
                        ? "text-white"
                        : "text-[#A18244]"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 pt-2">
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                  <p className="mt-4 leading-relaxed text-gray-600">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Help */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions?{" "}
            <button className="font-semibold text-[#A18244] transition-colors duration-300 hover:text-[#191919]">
              Contact our support team
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
