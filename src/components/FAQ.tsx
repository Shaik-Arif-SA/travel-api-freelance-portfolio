"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Plus, Minus, HelpCircle, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "What programs does CareerCode/i2Global offer?",
    answer: "We offer comprehensive K-12 online tuitions, NEET/JEE preparation courses, foundation & crash courses, teacher training programs, psychometric career assessments, one-on-one counselling, stream selection guidance, and study abroad support."
  },
  {
    question: "How do online classes work?",
    answer: "Our live interactive classes are conducted via secure online platforms with experienced faculty. Students can participate in real-time, ask questions, access recordings, and receive personalized attention just like in traditional classrooms."
  },
  {
    question: "What is psychometric career assessment?",
    answer: "A psychometric assessment is a scientific evaluation of your aptitude, interests, personality traits, and skills. It helps identify the most suitable career paths aligned with your strengths and passions, making career decisions easier and more confident."
  },
  {
    question: "Do you provide study material?",
    answer: "Yes! We provide comprehensive study materials, practice papers, test series, video lectures, and access to our online library. All materials are designed by experts and regularly updated to match current exam patterns."
  },
  {
    question: "What is the success rate of your students?",
    answer: "We maintain a 95%+ success rate across our programs. Our students consistently achieve top ranks in competitive exams and secure admissions to premier institutions in India and abroad."
  },
  {
    question: "How does the study abroad counselling work?",
    answer: "Our study abroad services include university selection, application assistance, test preparation (IELTS/TOEFL/SAT), visa guidance, scholarship assistance, and pre-departure briefings. We have partnerships with universities in 15+ countries."
  },
  {
    question: "Can I get a free trial or demo class?",
    answer: "Absolutely! We offer free demo classes for all our courses and a complimentary career counselling session. Book your free consultation to experience our teaching methodology and counselling approach firsthand."
  },
  {
    question: "What are your course fees?",
    answer: "Course fees vary based on the program, duration, and level. We offer flexible payment plans and scholarship opportunities for deserving students. Contact us for detailed fee structure and available discounts."
  }
];

export function FAQModern() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} id="faq" className="py-24 md:py-32 bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="inline-block mb-6"
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full shadow-2xl">
                <HelpCircle className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                Got Questions?
              </span>
              <br />
              <span className="text-gray-900">We've Got Answers</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600"
            >
              Everything you need to know about our programs and services
            </motion.p>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="relative group"
                >
                  {/* Glow Effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity ${openIndex === index ? 'opacity-30' : ''}`}></div>

                  {/* FAQ Card */}
                  <div className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all ${
                    openIndex === index 
                      ? 'border-purple-500 shadow-xl' 
                      : 'border-gray-200'
                  }`}>
                    {/* Question */}
                    <motion.button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-3 flex items-center justify-between gap-4 text-left"
                    >
                      <span className={`font-bold text-lg md:text-xl transition-colors ${
                        openIndex === index 
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent' 
                          : 'text-gray-900'
                      }`}>
                        {faq.question}
                      </span>

                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                          openIndex === index
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                            : 'bg-gray-200'
                        }`}
                      >
                        {openIndex === index ? (
                          <Minus className="w-5 h-5 text-white" />
                        ) : (
                          <Plus className="w-5 h-5 text-gray-600" />
                        )}
                      </motion.div>
                    </motion.button>

                    {/* Answer */}
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-0">
                            <motion.div
                              initial={{ y: -10 }}
                              animate={{ y: 0 }}
                              className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200"
                            >
                              <p className="text-gray-700 text-lg leading-relaxed">
                                {faq.answer}
                              </p>
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="relative inline-block">
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-3xl blur-xl"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
              <div className="relative bg-white rounded-3xl p-8 border border-gray-200">
                <MessageCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Still Have Questions?
                </h3>
                <p className="text-gray-600 mb-6">
                  Our team is here to help you 24/7
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const event = new CustomEvent('openContactModal');
                    window.dispatchEvent(event);
                  }}
                  className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl"
                >
                  Contact Us Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
