"use client";

import type { FC } from "react";
import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Laptop,
  Video,
  Globe,
  Users,
  Brain,
  Target,
  Rocket,
  ArrowRight,
  Zap,
} from "lucide-react";

interface Program {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  bg: string;
}

export const Programs: FC = () => {
  const programs: Program[] = [
    {
      icon: BookOpen,
      title: "Pre-School & Primary Education",
      description:
        "Age-appropriate curriculum blending play-based and structured learning for young minds.",
      color: "from-rose-500 to-pink-600",
      bg: "from-white to-rose-50",
    },
    {
      icon: Brain,
      title: "Academic Excellence Programs",
      description:
        "Focused coaching for school subjects with innovative teaching methodologies.",
      color: "from-purple-500 to-violet-600",
      bg: "from-white to-purple-50",
    },
    {
      icon: Laptop,
      title: "Digital Learning Platform",
      description:
        "Interactive online resources, video lessons, and adaptive learning tools.",
      color: "from-blue-500 to-cyan-600",
      bg: "from-white to-blue-50",
    },
    {
      icon: Video,
      title: "Virtual Learning Solutions",
      description:
        "Live online classes with experienced educators for flexible, quality education.",
      color: "from-indigo-500 to-blue-600",
      bg: "from-white to-indigo-50",
    },
    // {
    //   icon: Users,
    //   title: "After School Programs",
    //   description:
    //     "Enrichment activities including coding, arts, sports, and personality development.",
    //   color: "from-green-500 to-emerald-600",
    //   bg: "from-white to-green-50",
    // },
    // {
    //   icon: Target,
    //   title: "Career Counselling & Guidance",
    //   description:
    //     "Science-backed assessments and expert counseling to discover the perfect career path.",
    //   color: "from-amber-500 to-orange-600",
    //   bg: "from-white to-amber-50",
    // },
    // {
    //   icon: Globe,
    //   title: "Study Abroad Guidance",
    //   description:
    //     "Complete support for students aspiring to study in India or internationally.",
    //   color: "from-teal-500 to-cyan-600",
    //   bg: "from-white to-teal-50",
    // },
    // {
    //   icon: Rocket,
    //   title: "Skill Development Programs",
    //   description:
    //     "Future-focused training in communication, leadership, critical thinking, and more.",
    //   color: "from-orange-500 to-red-600",
    //   bg: "from-white to-orange-50",
    // },
  ];

  return (
    <section
      id="programs"
      className="py-16 md:py-24 bg-white/40 relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-in fade-in duration-700">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-6 shadow-md">
              <Zap className="w-5 h-5 text-amber-600" />
              <span className="text-amber-800">What We Offer</span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
              Our Programs
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-8 rounded-full" />

            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive learning solutions designed to nurture every aspect
              of your child&apos;s development
            </p>
          </div>

          {/* Program Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => {
              const Icon = program.icon;

              return (
                <div
                  key={program.title}
                  className={`group bg-gradient-to-br ${program.bg} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden animate-in slide-in-from-bottom duration-700`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-600/0 to-orange-600/0 group-hover:from-amber-600/5 group-hover:to-orange-600/5 transition-all duration-500 rounded-2xl" />

                  <div className="relative z-10">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="mb-3 text-gray-900 group-hover:text-amber-700 transition-colors">
                      {program.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {program.description}
                    </p>

                    {/* <div className="mt-4 flex items-center gap-2 text-amber-600 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-sm">Learn more</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div> */}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center animate-in fade-in duration-700 delay-500">
            <a
              href="https://forms.gle/NNjivqxNcFioFxYd8"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full hover:from-amber-700 hover:to-orange-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Explore All Programs
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Programs;