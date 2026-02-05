"use client";

import { motion, useInView } from 'motion/react';
import { GraduationCap, Award, Calendar, TrendingUp } from 'lucide-react';
import { useRef } from 'react';

const educationData = [
  {
    degree: "B.Tech",
    institution: "Siddartha Institute Of Science and Technology",
    field: "Computer Science And Engineering",
    score: "9.1",
    icon: "🎓",
    color: "blue",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    degree: "Diploma",
    institution: "Vasavi Polytechnic College",
    field: "Mechanical Engineering",
    score: "8.4",
    icon: "📚",
    color: "purple",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    degree: "SSC",
    institution: "Priyadarshini English Medium High School",
    field: "Secondary Education",
    score: "",
    icon: "🏫",
    color: "green",
    gradient: "from-green-500 to-emerald-500"
  }
];

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="education" className="relative py-32 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"
            style={{ left: `${20 * (i + 1)}%` }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scaleY: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 backdrop-blur-lg rounded-full border border-blue-500/20 mb-6"
          >
            <GraduationCap className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-semibold">Academic Journey</span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
            <motion.span
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: '200% 200%' }}
            >
              Education
            </motion.span>
          </h2>
          
          <motion.div
            className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.div>

        {/* Education Cards */}
        <div className="max-w-6xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="mb-8 last:mb-0"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -8 }}
                className="relative group"
              >
                {/* Card Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${edu.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>

                {/* Main Card */}
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
                  {/* Top Gradient Bar */}
                  <motion.div
                    className={`h-2 bg-gradient-to-r ${edu.gradient}`}
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                  />

                  <div className="p-8 sm:p-10">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                        className={`relative flex-shrink-0 w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br ${edu.gradient} shadow-xl`}
                      >
                        <span className="text-4xl">{edu.icon}</span>
                        <motion.div
                          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${edu.gradient}`}
                          animate={{
                            opacity: [0, 0.5, 0],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                          <div>
                            <h3 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                              {edu.degree}
                              <motion.span
                                animate={{ rotate: [0, 5, 0, -5, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                🎯
                              </motion.span>
                            </h3>
                            <p className={`text-xl font-semibold mb-2 bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent`}>
                              {edu.institution}
                            </p>
                            <p className="text-gray-400 text-lg">{edu.field}</p>
                          </div>

                          {/* Score Badge */}
                          {edu.score && (
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              className={`relative bg-gradient-to-br ${edu.gradient} p-[2px] rounded-2xl`}
                            >
                              <div className="bg-gray-900 rounded-2xl px-6 py-4">
                                <div className="flex items-center gap-2">
                                  <Award className="w-6 h-6 text-yellow-400" />
                                  <div>
                                    <div className="text-sm text-gray-400">CGPA</div>
                                    <div className="text-2xl font-bold text-white">{edu.score}</div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </div>

                        {/* Progress Bar */}
                        {edu.score && (
                          <div className="mt-4">
                            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                              <motion.div
                                className={`h-full bg-gradient-to-r ${edu.gradient}`}
                                initial={{ width: 0 }}
                                animate={isInView ? { width: `${(parseFloat(edu.score) / 10) * 100}%` } : {}}
                                transition={{ duration: 1.5, delay: index * 0.2 + 0.8 }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Decorative Line */}
                  <motion.div
                    className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 1, delay: index * 0.2 + 1 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { label: 'Years of Education', value: '16+', icon: Calendar },
            { label: 'Highest CGPA', value: '9.1', icon: TrendingUp },
            { label: 'Qualifications', value: '3', icon: Award }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 text-center"
              >
                <Icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
