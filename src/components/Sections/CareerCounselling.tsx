"use client";

import type { FC } from "react";
import {
  Sparkles,
  CheckCircle,
  TrendingUp,
  Target,
  Users,
  Compass,
  Star,
  ArrowRight,
} from "lucide-react";

export const CareerCounselling: FC = () => {
  return (
    <section
      id="counselling"
      className="py-16 md:py-24 relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-in fade-in duration-700">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 rounded-full mb-6 shadow-md animate-pulse">
              <Sparkles className="w-5 h-5 text-amber-600" />
              <span className="text-amber-800">✨ Career Code</span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-amber-900 via-orange-800 to-amber-900 bg-clip-text text-transparent">
              Career Counselling That Truly Makes a Difference
            </h2>

            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="w-12 h-1 bg-gradient-to-r from-transparent to-amber-600 rounded-full" />
              <Sparkles className="w-5 h-5 text-amber-600" />
              <div className="w-12 h-1 bg-gradient-to-l from-transparent to-amber-600 rounded-full" />
            </div>

            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Choosing the right career is one of the biggest decisions a child
              will make — and guessing based on marks, trends, or pressure can
              lead to years of confusion. Career Code brings clarity through{" "}
              <span className="text-amber-600">
                science-backed assessments
              </span>
              , <span className="text-amber-600">counsellor expertise</span>, and
              a deeply{" "}
              <span className="text-amber-600">personalised approach</span>.
            </p>
          </div>

          {/* Why Students Need Career Counselling */}
          <div className="bg-gradient-to-br from-white via-amber-50/30 to-orange-50/20 rounded-3xl shadow-2xl p-8 md:p-12 mb-8 border border-amber-100/50 animate-in slide-in-from-left duration-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl text-gray-900">
                Why Students Need Career Counselling
              </h3>
            </div>

            <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-6 mb-6">
              <p className="text-lg text-gray-800">
                With more than{" "}
                <span className="text-2xl text-amber-700">
                  3,000 career options
                </span>{" "}
                and{" "}
                <span className="text-2xl text-amber-700">
                  500+ courses
                </span>{" "}
                available today, choosing the right path has become incredibly
                complex.
              </p>
            </div>

            <p className="text-lg text-gray-700 mb-6">
              Career counselling helps students and parents by providing:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Clarity on strengths, interests, and abilities",
                "Confidence in choosing subjects, streams, or college courses",
                "Awareness of career paths they may never have known about",
                "A roadmap from today to their future goals",
                "Emotional & behavioural insights beyond academics",
              ].map((text) => (
                <div
                  key={text}
                  className="flex items-start gap-3 bg-white/60 p-4 rounded-xl hover:bg-white transition-all duration-300 hover:shadow-md md:last:col-span-2"
                >
                  <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Career Counseling & Guidance */}
          {/* <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-amber-600" />
              <h3 className="text-2xl md:text-3xl text-gray-900">
                Career Counseling & Guidance
              </h3>
            </div>

            <p className="text-lg text-gray-700 mb-6">
              After evaluation, our expert counsellors provide personalised
              guidance that includes:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "Stream/subject selection",
                "Course and exam planning",
                "Career pathway suggestions",
                "Skill-building and interest development",
                "Profile building",
                "Long-term academic and career planning",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Compass className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-700">
              Each session is designed to give students clarity and a sense of
              direction they can confidently follow.
            </p>
          </div> */}

          {/* CTA */}
          <div className="mt-12 text-center animate-in fade-in duration-700 delay-500">
            <a
              href="https://forms.gle/NNjivqxNcFioFxYd8"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full hover:from-amber-700 hover:to-orange-700 transition-all shadow-2xl hover:scale-105"
            >
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Request Career Counselling
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CareerCounselling;