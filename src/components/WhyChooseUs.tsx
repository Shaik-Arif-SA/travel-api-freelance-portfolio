"use client";

import { useState } from "react";
import { Monitor, Award, Laptop, Calendar, TrendingUp, Heart, Globe, Zap, CheckCircle } from "lucide-react";

const tabsContent = {
  "Course Highlights": {
    title: "Building a Future-Ready Skill Set for the Modern Classroom",
    features: [
      {
        icon: Monitor,
        title: "Digital Teaching Tools",
        description: "Hands-on experience with EdTech platforms and AI-assisted learning",
        color: "from-blue-500 to-blue-600"
      },
      {
        icon: Laptop,
        title: "Learn Anytime, Anywhere",
        description: "Access your course online with complete scheduling freedom",
        color: "from-purple-500 to-purple-600"
      },
      {
        icon: TrendingUp,
        title: "Next-Gen Educator Skills",
        description: "Lead with digital confidence in evolving classrooms",
        color: "from-green-500 to-green-600"
      }
    ]
  },
  "100% Placement": {
    title: "From Qualified to Hired: Our Commitment to Your Job Placement",
    features: [
      {
        icon: Award,
        title: "Certified for Success",
        description: "Step-by-step guidance from training to job placement",
        color: "from-red-500 to-red-600"
      },
      {
        icon: Heart,
        title: "Dedicated Career Mentorship",
        description: "Personalized resume, interview, and career mentorship until you're hired",
        color: "from-pink-500 to-pink-600"
      },
      {
        icon: CheckCircle,
        title: "Career-Ready Credentials",
        description: "Globally trusted qualification that enhances your professional profile",
        color: "from-yellow-500 to-orange-600"
      }
    ]
  },
  "Why CareerCode": {
    title: "A Smarter Pathway to a Successful Teaching Career",
    features: [
      {
        icon: Heart,
        title: "Mentorship That Inspires",
        description: "Personalized support & expert guidance to help you grow with confidence",
        color: "from-red-500 to-pink-600"
      },
      {
        icon: Zap,
        title: "Seamless Access",
        description: "Join live classes from any device and continue learning through recordings anytime",
        color: "from-blue-500 to-cyan-600"
      },
      {
        icon: Globe,
        title: "Global Career Placements",
        description: "Graduates thriving in top schools and international EdTech firms",
        color: "from-green-500 to-emerald-600"
      }
    ]
  }
};

export function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState<keyof typeof tabsContent>("Course Highlights");

  const content = tabsContent[activeTab];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-[#2563eb] via-[#dc2626] to-[#10b981] text-white px-6 py-2 rounded-full font-semibold">
              Level Up Your Teaching Journey
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Level Up Your Teaching Journey & Land Your Dream Job
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive training program designed to transform educators into future-ready professionals
          </p>
        </div>

        {/* Dynamic Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {(Object.keys(tabsContent) as Array<keyof typeof tabsContent>).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-4 rounded-xl font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-[#2563eb] via-[#dc2626] to-[#10b981] text-white shadow-xl scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg border border-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fadeIn">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              {content.title}
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100 animate-slideInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-[#2563eb] via-[#dc2626] to-[#10b981] rounded-3xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Teaching Career?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              Join our Teacher Training Program and get 100% placement support with dedicated career mentorship
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button 
                onClick={() => {
                  const event = new CustomEvent('openContactModal');
                  window.dispatchEvent(event);
                }}
                className="bg-white text-blue-600 px-10 py-4 rounded-xl hover:bg-gray-100 transition-all shadow-2xl font-bold"
              >
                Enroll in Teacher Training
              </button>
              <button 
                onClick={() => {
                  const event = new CustomEvent('openContactModal');
                  window.dispatchEvent(event);
                }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-4 rounded-xl hover:bg-white/20 transition-all font-bold"
              >
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
