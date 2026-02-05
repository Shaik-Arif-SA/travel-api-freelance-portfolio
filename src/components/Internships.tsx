"use client";

import { motion, useInView } from 'motion/react';
import { Briefcase, TrendingUp, Star, CheckCircle } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

const internships = [
  {
    title: "Web Developer Intern",
    company: "Provab Technosoft",
    period: "July 2025 – Present",
    description: "Leading development on 7+ real-time projects with focus on full-stack web applications",
    achievements: [
      "Worked on 7+ real-time projects involving end-to-end web application development",
      "Gained hands-on experience in Payment Gateway Integration, Email Integration, and API Development",
      "Implemented currency conversion modules and optimized backend performance",
      "Enhanced system stability and user experience through debugging and troubleshooting",
      "Collaborated with cross-functional teams to deliver secure, scalable applications"
    ],
    gradient: "from-blue-500 to-cyan-500",
    icon: "💼",
    stats: { projects: "7+", integrations: "15+", performance: "40%" }
  },
  {
    title: "Web Development Internship",
    company: "Rooman Technologies",
    period: "Feb 2025 – July 2025",
    description: "Full-stack development with Spring Boot and modern Java frameworks",
    achievements: [
      "Developed School Marks Management System using Spring Boot, Java, MySQL",
      "Designed and consumed REST APIs connecting frontend with backend services",
      "Created dynamic database operations with custom table structures",
      "Implemented complete CRUD functionality with secure data management"
    ],
    gradient: "from-purple-500 to-pink-500",
    icon: "🚀",
    stats: { apis: "20+", modules: "5", uptime: "99%" }
  },
  {
    title: "Python Internship",
    company: "Dhara Global Solution",
    period: "July 2024 – Jan 2025",
    description: "Backend development and automation with Python ecosystem",
    achievements: [
      "Developed backend modules with RESTful APIs and CRUD operations",
      "Built functional Desktop Assistant showcasing integration skills",
      "Implemented authentication and CRUD APIs for React.js interfaces",
      "Improved debugging and testing skills using Python libraries and Postman"
    ],
    gradient: "from-green-500 to-emerald-500",
    icon: "🐍",
    stats: { apis: "25+", automation: "10+", efficiency: "35%" }
  }
];

export function Internships() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [particles, setParticles] = useState<Array<{ left: number; top: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    // Generate particle positions once on client mount
    setParticles(
      Array.from({ length: 30 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 2 + Math.random() * 2,
        delay: Math.random() * 2,
      }))
    );
  }, []);

  return (
    <section id="internships" className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
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
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 backdrop-blur-lg rounded-full border border-green-500/20 mb-6"
          >
            <Briefcase className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-semibold">Professional Experience</span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
            <motion.span
              className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: '200% 200%' }}
            >
              Internships
            </motion.span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto relative">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 transform -translate-x-1/2" />

          <div className="space-y-24">
            {internships.map((internship, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative lg:flex lg:items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Timeline Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                  className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 z-10"
                >
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${internship.gradient} flex items-center justify-center text-3xl border-4 border-black shadow-2xl`}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {internship.icon}
                  </motion.div>
                </motion.div>

                {/* Card */}
                <div className={`lg:w-[calc(50%-4rem)] ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -8 }}
                    className="group relative"
                  >
                    {/* Glow Effect */}
                    <motion.div
                      className={`absolute -inset-1 bg-gradient-to-r ${internship.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />

                    {/* Main Card */}
                    <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-white/10 overflow-hidden">
                      {/* Top Accent */}
                      <div className={`h-1.5 bg-gradient-to-r ${internship.gradient}`} />

                      <div className="p-8">
                        {/* Header */}
                        <div className="flex items-start justify-between gap-4 mb-6">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                                className="lg:hidden text-3xl"
                              >
                                {internship.icon}
                              </motion.div>
                              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                                {internship.title}
                              </h3>
                            </div>
                            <p className={`text-xl font-semibold mb-2 bg-gradient-to-r ${internship.gradient} bg-clip-text text-transparent`}>
                              {internship.company}
                            </p>
                            <p className="text-gray-400 text-sm">{internship.period}</p>
                          </div>
                          <motion.div
                            whileHover={{ rotate: 180, scale: 1.2 }}
                            transition={{ duration: 0.5 }}
                            className={`w-12 h-12 rounded-full bg-gradient-to-br ${internship.gradient} flex items-center justify-center flex-shrink-0`}
                          >
                            <Star className="w-6 h-6 text-white" />
                          </motion.div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 mb-6 text-lg">
                          {internship.description}
                        </p>

                        {/* Achievements */}
                        <div className="space-y-3 mb-6">
                          {internship.achievements.map((achievement, aIndex) => (
                            <motion.div
                              key={aIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: index * 0.2 + 0.4 + aIndex * 0.05 }}
                              whileHover={{ x: 5 }}
                              className="flex items-start gap-3 group/item"
                            >
                              <CheckCircle className={`w-5 h-5 text-green-400 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform`} />
                              <span className="text-gray-400 text-sm group-hover/item:text-gray-300 transition-colors">
                                {achievement}
                              </span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                          {Object.entries(internship.stats).map(([key, value], sIndex) => (
                            <motion.div
                              key={sIndex}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : {}}
                              transition={{ delay: index * 0.2 + 0.6 + sIndex * 0.1 }}
                              whileHover={{ scale: 1.1 }}
                              className="text-center"
                            >
                              <div className={`text-2xl font-black bg-gradient-to-r ${internship.gradient} bg-clip-text text-transparent mb-1`}>
                                {value}
                              </div>
                              <div className="text-xs text-gray-500 uppercase tracking-wider">
                                {key}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-white/10 p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Total Experience', value: '18+', unit: 'Months' },
                { label: 'Projects Delivered', value: '12+', unit: 'Projects' },
                { label: 'Technologies', value: '15+', unit: 'Tools' },
                { label: 'Code Quality', value: 'A+', unit: 'Grade' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center"
                >
                  <motion.div
                    className="text-4xl font-black text-white mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-gray-400 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-600">{stat.unit}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
