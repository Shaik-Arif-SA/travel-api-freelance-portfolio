"use client";

import { motion, useInView } from 'motion/react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageSquare } from 'lucide-react';
import { useRef, useState } from 'react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  return (
    <section id="contact" className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[150px] opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-[150px] opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
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
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 backdrop-blur-lg rounded-full border border-purple-500/20 mb-6"
          >
            <MessageSquare className="w-5 h-5 text-purple-400" />
            <span className="text-purple-400 font-semibold">Let's Connect</span>
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
              Get In Touch
            </motion.span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Let's Talk</h3>
              <p className="text-gray-400 text-lg mb-8">
                Whether you have a question, want to start a project, or just want to connect, feel free to reach out!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  title: 'Email',
                  value: 'sarifmec2019@gmail.com',
                  href: 'mailto:sarifmec2019@gmail.com',
                  gradient: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: Phone,
                  title: 'Phone',
                  value: '9440363077',
                  href: 'tel:9440363077',
                  gradient: 'from-purple-500 to-pink-500'
                },
                {
                  icon: MapPin,
                  title: 'Location',
                  value: 'Electronic City Phase 2',
                  href: '#',
                  gradient: 'from-pink-500 to-rose-500'
                }
              ].map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <motion.a
                    key={index}
                    href={contact.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="group block"
                  >
                    <div className="relative">
                      {/* Glow */}
                      <div className={`absolute -inset-1 bg-gradient-to-r ${contact.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                      
                      {/* Card */}
                      <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 flex items-center gap-4">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center flex-shrink-0`}
                        >
                          <IconComponent className="w-7 h-7 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <div className="text-sm text-gray-500 mb-1">{contact.title}</div>
                          <div className="text-white font-semibold break-words">{contact.value}</div>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="pt-8"
            >
              <h4 className="text-white font-bold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: '#', gradient: 'from-gray-500 to-gray-700' },
                  { icon: Linkedin, href: '#', gradient: 'from-blue-500 to-blue-700' },
                  { icon: Twitter, href: '#', gradient: 'from-sky-500 to-blue-600' }
                ].map((social, index) => {
                  const SocialIcon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="group relative"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${social.gradient} rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity`} />
                      <div className={`relative w-12 h-12 bg-gradient-to-br ${social.gradient} rounded-xl flex items-center justify-center`}>
                        <SocialIcon className="w-6 h-6 text-white" />
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-20" />
              
              {/* Form Card */}
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-white/10 p-8">
                <form className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-white font-semibold mb-2">
                      Your Name
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-white font-semibold mb-2">
                      Your Email
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message" className="block text-white font-semibold mb-2">
                      Your Message
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.02 }}
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative w-full group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity" />
                    <div className="relative w-full px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl font-bold text-white flex items-center justify-center gap-2">
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </div>
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />
          <p className="text-gray-500">
            &copy; 2026 Shaik Arif. Built with passion and code. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
