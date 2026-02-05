"use client";

import { motion, useInView } from 'motion/react';
import { Code, Database, Palette, Wrench, BookOpen, Zap } from 'lucide-react';
import { useRef } from 'react';

const skillsData = [
  {
    category: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Java", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 80 },
      { name: "SQL", level: 85 },
      { name: "PHP", level: 90 },
      { name: "C++", level: 75 }
    ],
    gradient: "from-blue-500 to-cyan-500",
    color: "blue"
  },
  {
    category: "Frontend Technologies",
    icon: Palette,
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Bootstrap", level: 90 },
      { name: "jQuery", level: 85 }
    ],
    gradient: "from-purple-500 to-pink-500",
    color: "purple"
  },
  {
    category: "Backend & Frameworks",
    icon: BookOpen,
    skills: [
      { name: "Spring Boot", level: 85 },
      { name: "CodeIgniter 3", level: 90 }
    ],
    gradient: "from-green-500 to-emerald-500",
    color: "green"
  },
  {
    category: "Database",
    icon: Database,
    skills: [
      { name: "MySQL", level: 90 }
    ],
    gradient: "from-orange-500 to-red-500",
    color: "orange"
  },
  {
    category: "Tools & Software",
    icon: Wrench,
    skills: [
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 90 },
      { name: "Git", level: 85 },
      { name: "FileZilla", level: 80 },
      { name: "cPanel", level: 85 },
      { name: "Figma", level: 75 },
      { name: "MS Office", level: 90 }
    ],
    gradient: "from-indigo-500 to-purple-500",
    color: "indigo"
  },
  {
    category: "Core Concepts",
    icon: Zap,
    skills: [
      { name: "RESTful API", level: 90 },
      { name: "Authentication", level: 85 },
      { name: "MVC Architecture", level: 88 },
      { name: "Responsive Design", level: 92 }
    ],
    gradient: "from-pink-500 to-rose-500",
    color: "pink"
  }
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="skills" className="relative py-32 bg-black overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1), transparent 50%)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 5, repeat: Infinity }}
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 backdrop-blur-lg rounded-full border border-blue-500/20 mb-6"
          >
            <Code className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-semibold">Technical Expertise</span>
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
              Skills & Technologies
            </motion.span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            A comprehensive toolkit for building modern web applications
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, catIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative h-full"
                >
                  {/* Glow Effect */}
                  <motion.div
                    className={`absolute -inset-1 bg-gradient-to-r ${category.gradient} rounded-3xl blur-lg opacity-0 group-hover:opacity-25 transition-opacity duration-500`}
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  {/* Card */}
                  <div className="relative h-full bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-white/10 overflow-hidden">
                    {/* Header */}
                    <div className={`h-1 bg-gradient-to-r ${category.gradient}`} />
                    
                    <div className="p-6">
                      {/* Icon & Title */}
                      <div className="flex items-center gap-4 mb-6">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.6 }}
                          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg`}
                        >
                          <IconComponent className="w-7 h-7 text-white" />
                        </motion.div>
                        <h3 className="text-xl font-bold text-white">
                          {category.category}
                        </h3>
                      </div>

                      {/* Skills List */}
                      <div className="space-y-4">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                          >
                            {/* Skill Name */}
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-gray-300 font-medium">
                                {skill.name}
                              </span>
                              <motion.span
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : {}}
                                transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 + 0.3 }}
                                className={`text-sm font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                              >
                                {skill.level}%
                              </motion.span>
                            </div>

                            {/* Progress Bar */}
                            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                              <motion.div
                                className={`h-full bg-gradient-to-r ${category.gradient} relative`}
                                initial={{ width: 0 }}
                                animate={isInView ? { width: `${skill.level}%` } : {}}
                                transition={{
                                  duration: 1,
                                  delay: catIndex * 0.1 + skillIndex * 0.05 + 0.2,
                                  ease: "easeOut"
                                }}
                              >
                                <motion.div
                                  className="absolute inset-0 bg-white"
                                  animate={{
                                    opacity: [0, 0.5, 0],
                                    x: ['-100%', '100%']
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "linear"
                                  }}
                                />
                              </motion.div>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Bottom Stats */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: catIndex * 0.1 + 0.5 }}
                        className="mt-6 pt-6 border-t border-white/10"
                      >
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Skills</span>
                          <span className={`font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                            {category.skills.length}
                          </span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Overall Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-white/10 p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Technologies', value: '30+', icon: Code },
                { label: 'Proficiency', value: '87%', icon: Zap },
                { label: 'Projects', value: '12+', icon: BookOpen },
                { label: 'Experience', value: '18mo', icon: Database }
              ].map((stat, index) => {
                const StatIcon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center"
                    >
                      <StatIcon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="text-3xl font-black text-white mb-2">{stat.value}</div>
                    <div className="text-gray-500 text-sm">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-lg">
            Continuously learning and expanding expertise in modern technologies
          </p>
        </motion.div>
      </div>
    </section>
  );
}
