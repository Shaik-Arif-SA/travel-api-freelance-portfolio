"use client";

import { motion, useInView } from 'motion/react';
import { Code2, Rocket, Zap, ExternalLink, GitBranch } from 'lucide-react';
import { useRef } from 'react';

const projects = [
  {
    title: "Travel Booking System",
    subtitle: "Advanced Full Stack Platform",
    company: "Provab Technosoft",
    period: "July 2025 – Present",
    technologies: ["PHP", "CodeIgniter 3", "JavaScript", "jQuery", "HTML5", "CSS3", "Bootstrap", "MySQL"],
    description: "End-to-end travel booking platform similar to Travelomatix B2C flow with complete booking workflow",
    highlights: [
      "Flight Search & Fare Update",
      "Passenger Management System",
      "Payment Integration",
      "Real-time API Integration",
      "Ticket Generation"
    ],
    stats: [
      { label: "Modules", value: "5+" },
      { label: "APIs", value: "10+" },
      { label: "Users", value: "1K+" }
    ],
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    accentColor: "blue"
  },
  {
    title: "inn-play.fun",
    subtitle: "Event Extranet & Custom CRS",
    company: "Provab Technosoft",
    period: "Oct 2025 – Present",
    technologies: ["PHP", "CodeIgniter 3", "JavaScript", "jQuery", "HTML5", "CSS3", "Bootstrap", "MySQL"],
    description: "Comprehensive travel management platform with B2C & Supervision modules",
    highlights: [
      "500+ Production Bugs Resolved",
      "Multi-module Integration",
      "Custom Event Management",
      "Hotel Contract System",
      "Shareable Booking Links"
    ],
    stats: [
      { label: "Bugs Fixed", value: "500+" },
      { label: "Modules", value: "4" },
      { label: "Hotels", value: "100+" }
    ],
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    accentColor: "purple"
  }
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="relative py-32 bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(59, 130, 246) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 backdrop-blur-lg rounded-full border border-purple-500/20 mb-6"
          >
            <Rocket className="w-5 h-5 text-purple-400" />
            <span className="text-purple-400 font-semibold">Featured Work</span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
            <motion.span
              className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: '200% 200%' }}
            >
              Projects
            </motion.span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="group"
            >
              <div className="relative">
                {/* Floating Glow */}
                <motion.div
                  className={`absolute -inset-4 bg-gradient-to-r ${project.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700`}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-white/10 overflow-hidden">
                  {/* Animated Border */}
                  <div className="absolute inset-0">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      style={{
                        clipPath: 'polygon(0 0, 100% 0, 100% 2px, 0 2px, 0 100%, 2px 100%, 2px 2px, calc(100% - 2px) 2px, calc(100% - 2px) calc(100% - 2px), 2px calc(100% - 2px), 2px 100%, 100% 100%, 100% calc(100% - 2px), 0 calc(100% - 2px))'
                      }}
                    />
                  </div>

                  <div className="relative p-8 lg:p-12">
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Left Column */}
                      <div>
                        {/* Header */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.3 + 0.2 }}
                        >
                          <div className={`inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${project.gradient} rounded-full text-sm font-semibold text-white mb-4`}>
                            <GitBranch className="w-4 h-4" />
                            {project.company}
                          </div>

                          <h3 className="text-4xl sm:text-5xl font-black text-white mb-2">
                            {project.title}
                          </h3>
                          <p className={`text-xl font-semibold mb-4 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                            {project.subtitle}
                          </p>
                          <p className="text-gray-400 mb-6 text-lg">{project.description}</p>
                        </motion.div>

                        {/* Highlights */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: index * 0.3 + 0.4 }}
                          className="space-y-3 mb-8"
                        >
                          {project.highlights.map((highlight, hIndex) => (
                            <motion.div
                              key={hIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: index * 0.3 + 0.4 + hIndex * 0.1 }}
                              whileHover={{ x: 10 }}
                              className="flex items-center gap-3 group/item"
                            >
                              <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                                className={`w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br ${project.gradient} flex-shrink-0`}
                              >
                                <Zap className="w-4 h-4 text-white" />
                              </motion.div>
                              <span className="text-gray-300 group-hover/item:text-white transition-colors">
                                {highlight}
                              </span>
                            </motion.div>
                          ))}
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: index * 0.3 + 0.6 }}
                          className="grid grid-cols-3 gap-4"
                        >
                          {project.stats.map((stat, sIndex) => (
                            <div key={sIndex} className="text-center">
                              <div className={`text-3xl font-black bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-1`}>
                                {stat.value}
                              </div>
                              <div className="text-xs text-gray-500 uppercase tracking-wider">
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-6">
                        {/* Technologies */}
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.3 + 0.3 }}
                        >
                          <div className="flex items-center gap-2 mb-4">
                            <Code2 className="w-5 h-5 text-gray-400" />
                            <h4 className="text-lg font-bold text-white">Tech Stack</h4>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, tIndex) => (
                              <motion.span
                                key={tIndex}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: index * 0.3 + 0.5 + tIndex * 0.05 }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="relative group/tech"
                              >
                                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-lg blur opacity-0 group-hover/tech:opacity-50 transition-opacity`} />
                                <div className="relative px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:border-white/30 transition-all">
                                  {tech}
                                </div>
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>

                        {/* Visual Element */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: index * 0.3 + 0.5 }}
                          className="relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/0 border border-white/10"
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                              animate={{
                                rotate: 360,
                              }}
                              transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                              }}
                              className="w-32 h-32"
                            >
                              {[...Array(3)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  className={`absolute inset-0 border-4 rounded-full border-gradient-to-r ${project.gradient}`}
                                  style={{
                                    borderColor: i === 0 ? 'rgb(59, 130, 246)' : i === 1 ? 'rgb(147, 51, 234)' : 'rgb(236, 72, 153)',
                                    transform: `scale(${1 + i * 0.3})`,
                                    opacity: 0.3 - i * 0.1
                                  }}
                                  animate={{
                                    rotate: -360,
                                    scale: [1 + i * 0.3, 1.2 + i * 0.3, 1 + i * 0.3],
                                  }}
                                  transition={{
                                    duration: 10 - i * 2,
                                    repeat: Infinity,
                                    ease: "linear"
                                  }}
                                />
                              ))}
                            </motion.div>
                          </div>
                        </motion.div>

                        {/* Action Button */}
                        <motion.button
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: index * 0.3 + 0.7 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`w-full py-4 bg-gradient-to-r ${project.gradient} rounded-xl font-bold text-white flex items-center justify-center gap-2 group/btn`}
                        >
                          <span>View Details</span>
                          <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
