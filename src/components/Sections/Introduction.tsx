"use client";

import type { FC } from "react";
import {
  Sparkles,
  Heart,
  Users,
  Trophy,
  Award,
  Star,
} from "lucide-react";

export const Introduction: FC = () => {
  return (
    <section
      id="introduction"
      className="py-16 md:py-24 relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-in fade-in duration-700">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-6 shadow-md">
              <Award className="w-5 h-5 text-amber-600" />
              <span className="text-amber-800">About CareerCode</span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl mb-4 bg-gradient-to-r from-gray-900 via-amber-900 to-gray-900 bg-clip-text text-transparent">
              Welcome to CareerCode
            </h2>

            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-12 h-1 bg-gradient-to-r from-transparent to-amber-600 rounded-full" />
              <Star className="w-5 h-5 text-amber-600" />
              <div className="w-12 h-1 bg-gradient-to-l from-transparent to-amber-600 rounded-full" />
            </div>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proud franchise bringing i2Global&apos;s legacy to our region
            </p>
          </div>

          {/* Content Card */}
          <div className="bg-gradient-to-br from-white to-amber-50/30 rounded-3xl shadow-2xl p-8 md:p-12 mb-12 border border-amber-100/50 relative overflow-hidden animate-in slide-in-from-bottom duration-700">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-200/30 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-200/30 to-transparent rounded-tr-full" />

            <div className="relative z-10">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Welcome to{" "}
                <span className="text-amber-600">Career Code</span>, a proud
                franchise bringing{" "}
                <span className="text-amber-600">i2Global&apos;s legacy</span> of
                quality education and innovative learning to our region. At
                Career Code, we believe that{" "}
                <span className="text-amber-600">
                  every child learns differently
                </span>
                , and our goal is to make learning a joyful, engaging, and
                meaningful experience.
              </p>

              {/* <p className="text-lg text-gray-700 leading-relaxed mb-6">
                With a focus on{" "}
                <span className="text-amber-600">
                  academic excellence, life skills, and overall development
                </span>
                , we prepare students to think creatively and grow confidently.
                Our classrooms blend traditional values with modern teaching
                methods.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Through Career Code, we guide students in{" "}
                <span className="text-amber-600">
                  discovering their strengths and choosing the right career
                  paths
                </span>{" "}
                for their future.
              </p> */}
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Innovative Learning",
                desc: "Modern teaching methods that engage and inspire",
                icon: Sparkles,
                gradient: "from-amber-500 to-amber-600",
                border: "border-amber-100/50",
                bg: "to-amber-50",
                delay: "delay-100",
              },
              {
                title: "Personalized Care",
                desc: "Every child learns differently, we adapt to them",
                icon: Heart,
                gradient: "from-pink-500 to-rose-600",
                border: "border-pink-100/50",
                bg: "to-pink-50",
                delay: "delay-200",
              },
              {
                title: "Life Skills",
                desc: "Holistic development beyond academics",
                icon: Users,
                gradient: "from-blue-500 to-indigo-600",
                border: "border-blue-100/50",
                bg: "to-blue-50",
                delay: "delay-300",
              },
              {
                title: "Future Ready",
                desc: "Preparing students for tomorrow's challenges",
                icon: Trophy,
                gradient: "from-purple-500 to-violet-600",
                border: "border-purple-100/50",
                bg: "to-purple-50",
                delay: "delay-400",
              },
            ].map(({ title, desc, icon: Icon, gradient, border, bg, delay }) => (
              <div
                key={title}
                className={`group bg-gradient-to-br from-white ${bg} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center border ${border} animate-in slide-in-from-bottom duration-700 ${delay}`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="mb-2 text-gray-900">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Introduction;