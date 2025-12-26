"use client";

import { useState } from "react";
import { BookOpen, Users, Clock, Award, CheckCircle } from "lucide-react";

const allCourses = [
  {
    id: 1,
    category: "K-12 Online Tuitions",
    title: "Grade 1-5 Online Classes",
    description: "Interactive learning with experienced teachers covering all subjects with fun activities and assessments.",
    features: ["Live Interactive Classes", "Daily Homework Support", "Progress Reports", "Recordings Available"],
    duration: "Full Academic Year",
    students: "500+ Enrolled",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    category: "K-12 Online Tuitions",
    title: "Grade 6-8 Online Classes",
    description: "Comprehensive middle school curriculum with focus on building strong fundamentals for higher grades.",
    features: ["CBSE/ICSE/State Board", "Concept Building", "Test Preparation", "Doubt Clearing Sessions"],
    duration: "Full Academic Year",
    students: "750+ Enrolled",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 3,
    category: "K-12 Online Tuitions",
    title: "Grade 9-10 Board Exam Prep",
    description: "Complete board exam preparation with focus on conceptual understanding and exam strategies.",
    features: ["Board Pattern Papers", "Chapter-wise Tests", "Exam Tips & Tricks", "Personalized Attention"],
    duration: "Full Academic Year",
    students: "1000+ Enrolled",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 4,
    category: "K-12 Online Tuitions",
    title: "Grade 11-12 Science/Commerce",
    description: "Advanced coaching for senior secondary with college entrance exam preparation.",
    features: ["Stream-Specific Teaching", "College Prep Integration", "Career Guidance", "Mock Tests"],
    duration: "2 Years Program",
    students: "1200+ Enrolled",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 5,
    category: "NEET/JEE Preparation",
    title: "NEET Complete Program",
    description: "Comprehensive NEET preparation with experienced faculty, study materials, and test series.",
    features: ["Physics, Chemistry, Biology", "NEET Pattern Tests", "Previous Year Papers", "Rank Predictor"],
    duration: "1-2 Years",
    students: "2000+ Enrolled",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop",
    color: "from-red-500 to-red-600"
  },
  {
    id: 6,
    category: "NEET/JEE Preparation",
    title: "JEE Main & Advanced",
    description: "IIT-JEE preparation with problem-solving techniques and competitive exam strategies.",
    features: ["PCM by IITians", "JEE Main & Advanced", "Daily Practice Problems", "All India Test Series"],
    duration: "1-2 Years",
    students: "1800+ Enrolled",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
    color: "from-red-500 to-red-600"
  },
  {
    id: 7,
    category: "Foundation & Crash Courses",
    title: "Foundation Course (Grade 8-10)",
    description: "Build strong foundations for competitive exams while excelling in school curriculum.",
    features: ["Early Start Advantage", "NTSE/Olympiad Prep", "School + Competition Balance", "Concept Clarity"],
    duration: "3 Months - 1 Year",
    students: "600+ Enrolled",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=600&h=400&fit=crop",
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 8,
    category: "Foundation & Crash Courses",
    title: "Board Exam Crash Course",
    description: "Intensive last-minute preparation covering entire syllabus with focus on scoring topics.",
    features: ["Rapid Revision", "Important Topics Focus", "Previous Year Analysis", "Exam Strategy"],
    duration: "2-3 Months",
    students: "800+ Enrolled",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=600&h=400&fit=crop",
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 9,
    category: "Virtual Learning Programs",
    title: "Enhanced Virtual Classes",
    description: "Next-generation online learning with AI-powered personalization and interactive tools.",
    features: ["AI-Driven Learning", "Gamified Content", "Virtual Labs", "Adaptive Tests"],
    duration: "Flexible Duration",
    students: "1500+ Enrolled",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    color: "from-green-500 to-green-600"
  },
  {
    id: 10,
    category: "Virtual Learning Programs",
    title: "Interactive Online Workshops",
    description: "Specialized workshops on skill development, personality enhancement, and career readiness.",
    features: ["Communication Skills", "Critical Thinking", "Leadership Training", "Project-Based Learning"],
    duration: "Short Duration",
    students: "900+ Enrolled",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    color: "from-green-500 to-green-600"
  },
  {
    id: 11,
    category: "Teacher Training Programs",
    title: "Certificate in Digital Teaching",
    description: "Master modern teaching methodologies with EdTech tools and classroom management.",
    features: ["EdTech Platform Training", "Classroom Management", "Assessment Techniques", "100% Placement Support"],
    duration: "3-6 Months",
    students: "400+ Enrolled",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
    color: "from-yellow-500 to-orange-600"
  },
  {
    id: 12,
    category: "Teacher Training Programs",
    title: "Advanced Teacher Training",
    description: "Advanced certification for experienced teachers to upgrade skills for modern classrooms.",
    features: ["AI in Education", "Blended Learning", "Student Psychology", "Career Mentorship"],
    duration: "6-12 Months",
    students: "300+ Enrolled",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
    color: "from-yellow-500 to-orange-600"
  }
];

const categories = [
  "All Courses",
  "K-12 Online Tuitions",
  "NEET/JEE Preparation",
  "Foundation & Crash Courses",
  "Virtual Learning Programs",
  "Teacher Training Programs"
];

export function Courses() {
  const [selectedCategory, setSelectedCategory] = useState("All Courses");

  const filteredCourses = selectedCategory === "All Courses" 
    ? allCourses 
    : allCourses.filter(course => course.category === selectedCategory);

  return (
    <section id="courses" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-[#2563eb] via-[#dc2626] to-[#10b981] text-white px-6 py-2 rounded-full font-semibold">
              CareerCode Programs
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Courses</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive learning programs designed to excel in academics and competitive exams
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div 
              key={course.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100 hover:-translate-y-2"
            >
              {/* Course Image */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t  opacity-60`}></div>
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold">
                  {course.category}
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {course.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {course.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Course Meta */}
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4 pb-4 border-b">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{course.students}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button 
                  onClick={() => {
                    const event = new CustomEvent('openContactModal');
                    window.dispatchEvent(event);
                  }}
                  className={`w-full bg-gradient-to-r ${course.color} text-white py-3 rounded-xl hover:opacity-90 transition-opacity font-semibold shadow-md`}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 via-red-50 to-green-50 p-8 rounded-3xl">
          <h3 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We offer customized learning programs tailored to your specific needs. Contact us for personalized course recommendations.
          </p>
          <button 
            onClick={() => {
              const event = new CustomEvent('openContactModal');
              window.dispatchEvent(event);
            }}
            className="bg-gradient-to-r from-[#2563eb] via-[#dc2626] to-[#10b981] text-white px-10 py-4 rounded-xl hover:opacity-90 transition-opacity shadow-2xl font-bold"
          >
            Get Personalized Course Recommendations
          </button>
        </div>
      </div>
    </section>
  );
}
