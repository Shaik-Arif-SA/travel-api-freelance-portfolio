"use client";

import { GraduationCap, BookOpen, Users, ArrowRight, Play } from "lucide-react";
import { useState } from "react";

export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  const openContactModal = () => {
    const event = new CustomEvent('openContactModal');
    window.dispatchEvent(event);
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-100 via-red-100 to-green-100 py-20 md:py-32 overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-block mb-4 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md">
                <p className="text-sm font-semibold text-blue-600">🎯 Trusted by 1000+ Students</p>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-[#2563eb] via-[#dc2626] to-[#10b981] bg-clip-text text-transparent">
                  Transform Your Future
                </span>
                <br />
                <span className="text-gray-800">with CareerCode</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                Combining <span className="font-semibold text-blue-600">quality education</span> with <span className="font-semibold text-red-600">expert career guidance</span>. From K–12 online learning to competitive exam prep, career assessments, and study abroad support.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                <button 
                  onClick={openContactModal}
                  className="group bg-gradient-to-r from-[#2563eb] via-[#dc2626] to-[#10b981] text-white px-8 py-4 rounded-xl hover:opacity-90 transition-all shadow-xl hover:shadow-2xl flex items-center gap-2"
                >
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => setVideoOpen(true)}
                  className="bg-white text-gray-800 px-8 py-4 rounded-xl hover:bg-gray-50 transition-all shadow-lg flex items-center gap-2 border border-gray-200"
                >
                  <Play className="w-5 h-5" />
                  Watch Video
                </button>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm">
                <div>
                  <p className="text-2xl font-bold text-blue-600">95%</p>
                  <p className="text-gray-600">Success Rate</p>
                </div>
                <div className="border-l-2 border-gray-300 pl-6">
                  <p className="text-2xl font-bold text-red-600">15+</p>
                  <p className="text-gray-600">Countries</p>
                </div>
                <div className="border-l-2 border-gray-300 pl-6">
                  <p className="text-2xl font-bold text-green-600">4.9/5</p>
                  <p className="text-gray-600">Rating</p>
                </div>
              </div>
            </div>

            {/* Right Content - Features */}
            <div className="grid gap-6 order-1 lg:order-2">
              {/* Hero Image */}
              {/* <div className="relative overflow-hidden rounded-3xl shadow-2xl mb-4 lg:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1759884247289-f9f3db44988e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NjY1NzY5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Students Learning Together"
                  className="w-full h-auto object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl"></div>
              </div> */}

              <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 hover:scale-105 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-300 rounded-xl flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Quality Education</h3>
                    <p className="text-gray-600">CareerCode virtual learning programs for K-12, NEET, JEE with expert faculty</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 hover:scale-105 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-300 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Expert Guidance</h3>
                    <p className="text-gray-600">Psychometric assessments and one-on-one career counselling sessions</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 hover:scale-105 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-green-300 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Personalized Support</h3>
                    <p className="text-gray-600">Study abroad guidance, stream selection, and continuous mentorship</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {videoOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setVideoOpen(false)}
        >
          <div className="bg-white rounded-2xl p-6 max-w-4xl w-full animate-scaleIn" onClick={(e) => e.stopPropagation()}>
            <div className="aspect-video mb-4">
              <iframe
                className="w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="CareerCode Introduction"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <button 
              onClick={() => setVideoOpen(false)}
              className="w-full bg-gradient-to-r from-[#2563eb] to-[#dc2626] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}