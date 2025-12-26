"use client";

import { Brain, UserCircle, GitBranch, School, Plane, FileText, BookCheck } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Psychometric Career Assessments",
    description: "Scientific assessments to identify your strengths, interests, aptitudes, and personality traits. Get detailed reports with career recommendations aligned to your unique profile.",
    color: "primary"
  },
  {
    icon: UserCircle,
    title: "One-to-One Career Counselling",
    description: "Personalized counselling sessions with experienced career experts. Discuss your aspirations, explore career options, and create actionable plans for your professional journey.",
    color: "secondary"
  },
  {
    icon: GitBranch,
    title: "Stream Selection Guidance",
    description: "Expert guidance for students in Grades 9–12 to choose the right stream (Science, Commerce, Arts) based on interests, abilities, and future career goals.",
    color: "accent"
  },
  {
    icon: School,
    title: "College & Course Selection Support",
    description: "Comprehensive assistance in choosing the right college and course. Get insights on admission criteria, career prospects, and institution rankings to make informed decisions.",
    color: "primary"
  },
  {
    icon: Plane,
    title: "Study Abroad Guidance",
    description: "Complete support for students planning to study abroad. Country selection, university shortlisting, application process, visa guidance, and pre-departure preparation.",
    color: "secondary"
  },
  {
    icon: FileText,
    title: "SOP Guidance & IELTS Prep",
    description: "Professional assistance in crafting compelling Statements of Purpose. Comprehensive IELTS preparation with expert trainers to achieve your target scores.",
    color: "accent"
  },
  {
    icon: BookCheck,
    title: "Admission Support",
    description: "End-to-end support throughout the admission process. Application assistance, documentation support, interview preparation, and follow-up with institutions.",
    color: "primary"
  }
];

export function Counselling() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="counselling" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-[#2563eb] via-[#dc2626] to-[#10b981] text-white px-6 py-2 rounded-full font-semibold">
              CareerCode Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Expert Career Counselling & Guidance</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional career guidance services to help students make informed decisions about their academic and professional future
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colorClasses = {
              primary: "from-blue-600 to-blue-300",
              secondary: "from-red-600 to-red-300",
              accent: "from-green-600 to-green-300"
            };
            
            return (
              <div 
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-200"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${colorClasses[service.color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-100 via-red-100 to-green-100 p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Shape Your Future?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our expert counsellors are here to guide you every step of the way. Book your free consultation today and take the first step towards a successful career.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={scrollToContact}
              className="bg-blue-600 text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-lg"
            >
              Book Free Consultation
            </button>
            <button 
              onClick={scrollToContact}
              className="bg-red-500 text-white-foreground px-8 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-lg"
            >
              Get Career Assessment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}