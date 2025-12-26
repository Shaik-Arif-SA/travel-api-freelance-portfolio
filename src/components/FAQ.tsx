"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What programs does i2Global offer?",
    answer: "i2Global offers comprehensive K-12 online tuitions, virtual learning programs, foundation & crash courses, NEET/JEE preparation, and teacher training programs. All programs are designed with expert curriculum and interactive learning methods."
  },
  {
    question: "How does the career counselling process work?",
    answer: "Our career counselling includes psychometric assessments to identify your strengths and interests, followed by one-on-one sessions with expert counsellors. We provide personalized guidance for stream selection, college choices, and career paths aligned with your goals."
  },
  {
    question: "Do you provide study abroad assistance?",
    answer: "Yes! We offer complete study abroad guidance including country and university selection, application assistance, SOP writing support, IELTS preparation, visa guidance, and pre-departure orientation."
  },
  {
    question: "What makes your NEET/JEE preparation different?",
    answer: "Our NEET/JEE programs feature expert faculty with proven track records, comprehensive study materials, regular mock tests, personalized doubt clearing sessions, and performance analytics to track progress and improve weak areas."
  },
  {
    question: "How do I book a free consultation?",
    answer: "You can book a free consultation by clicking any 'Book Free Consultation' button on our website, calling us directly, or messaging us on WhatsApp. Our team will schedule a convenient time for your session."
  },
  {
    question: "Are the online classes interactive?",
    answer: "Absolutely! Our virtual learning programs feature live interactive sessions where students can ask questions in real-time, participate in discussions, and engage with teachers and peers through our advanced learning platform."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our programs and services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 bg-gray-50 animate-fadeIn">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-[#2563eb] via-[#dc2626] to-[#10b981] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-lg"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
