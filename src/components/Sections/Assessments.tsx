import { ClipboardCheck, Brain, BookOpen, User, Target, GraduationCap, Settings, ArrowRight, Sparkles } from "lucide-react";

export function Assessments() {
  const assessments = [
    // {
    //   icon: ClipboardCheck,
    //   title: "5-Dimensional Career Assessment",
    //   badge: "Flagship Test",
    //   description: "Complete assessment evaluating Personality, Interests, Career Motivators & Values, Learning Style, and Skills & Aptitude.",
    //   features: [
    //     "Analyzes 20+ career clusters",
    //     "180+ career paths",
    //     "Detailed 22+ page career blueprint",
    //     "Strengths, weaknesses, and recommended careers",
    //     "Step-by-step roadmap"
    //   ]
    // },
    {
      icon: Brain,
      title: "Multiple Intelligence Assessment",
      badge: "For Younger Students",
      description: "Identifies dominant intelligence category — logical, linguistic, creative, spatial, interpersonal, intrapersonal, bodily-kinesthetic, naturalistic.",
      features: [
        "Understand early strengths",
        "Natural thinking patterns",
        "Learning preferences",
        "Performance indicators"
      ]
    },
    // {
    //   icon: BookOpen,
    //   title: "Learning Style Assessment",
    //   badge: "Study Optimization",
    //   description: "Identifies how the student learns best — visual, auditory, reading/writing, or kinesthetic.",
    //   features: [
    //     "Maximizes understanding",
    //     "Improves performance",
    //     "Better retention strategies",
    //     "Personalized learning approach"
    //   ]
    // },
    // {
    //   icon: User,
    //   title: "Personality Assessment",
    //   badge: "Behavioral Profile",
    //   description: "Complete behavioural and personality profile including thinking pattern, behaviour tendencies, work style, and team orientation.",
    //   features: [
    //     "Understanding thinking patterns",
    //     "Behaviour tendencies",
    //     "Work style preferences",
    //     "Team/people orientation",
    //     "Career path matching"
    //   ]
    // },
    {
      icon: Target,
      title: "Subject / Stream Selector Tests",
      badge: "Academic Planning",
      description: "Detailed tests that help students choose the right subjects and streams based on aptitude + interest + personality fit.",
      features: [
        "Subject Selector (School Level)",
        "Engineering Branch Selector",
        "Stream selection guidance",
        "Branch selection for technical fields"
      ]
    },
    // {
    //   icon: GraduationCap,
    //   title: "Stage-Specific Career Assessments",
    //   badge: "Age-Appropriate",
    //   description: "Tests designed according to the student's age and academic level.",
    //   features: [
    //     "Classes 2–7: Multiple Intelligence + Early Strengths",
    //     "Classes 8–10: Stream selection, early career mapping",
    //     "Classes 11–12: Full career analysis and planning",
    //     "Graduates: Field specialization",
    //     "Professionals: Role fit analysis and career growth"
    //   ]
    // },
    // {
    //   icon: Settings,
    //   title: "Customisable Assessments",
    //   badge: "For Institutions",
    //   description: "Flexible assessment system for building custom tests using different modules.",
    //   features: [
    //     "Aptitude modules",
    //     "Behavioural assessments",
    //     "Subject-specific testing",
    //     "Training assessments",
    //     "Tailored to curriculum needs"
    //   ]
    // }
  ];

  return (
    <section id="assessments" className="py-16 md:py-24 bg-white/40 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in duration-700">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-6 shadow-md">
              <ClipboardCheck className="w-5 h-5 text-purple-600" />
              <span className="text-purple-800">Assessments & Tests</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Career Code – Assessments & Tests
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Comprehensive, scientifically-designed assessments to uncover strengths, interests, and the perfect career path
            </p>
          </div>

          <div className="space-y-6">
            {assessments.map((assessment, index) => {
              const Icon = assessment.icon;
              const colors = [
                { bg: "from-white to-green-50", icon: "from-green-500 to-emerald-600", badge: "bg-green-100 text-green-800" },
                { bg: "from-white to-purple-50", icon: "from-purple-500 to-violet-600", badge: "bg-purple-100 text-purple-800" },
                { bg: "from-white to-blue-50", icon: "from-blue-500 to-indigo-600", badge: "bg-blue-100 text-blue-800" },
                { bg: "from-white to-pink-50", icon: "from-pink-500 to-rose-600", badge: "bg-pink-100 text-pink-800" },
                { bg: "from-white to-green-50", icon: "from-green-500 to-emerald-600", badge: "bg-green-100 text-green-800" },
                { bg: "from-white to-indigo-50", icon: "from-indigo-500 to-blue-600", badge: "bg-indigo-100 text-indigo-800" },
                { bg: "from-white to-teal-50", icon: "from-teal-500 to-cyan-600", badge: "bg-teal-100 text-teal-800" }
              ];
              const colorScheme = colors[index % colors.length];
              
              return (
                <div 
                  key={index}
                  className={`group bg-gradient-to-br ${colorScheme.bg} rounded-3xl shadow-xl p-6 md:p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 animate-in slide-in-from-right duration-700`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 bg-gradient-to-br ${colorScheme.icon} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center gap-3 mb-3">
                        <h3 className="text-xl md:text-2xl text-gray-900 group-hover:text-amber-700 transition-colors">{assessment.title}</h3>
                        <span className={`inline-block ${colorScheme.badge} px-3 py-1 rounded-full w-fit shadow-sm`}>
                          {assessment.badge}
                        </span>
                      </div>
                      
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {assessment.description}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {assessment.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-start gap-2 bg-white/60 p-2 rounded-lg hover:bg-white transition-all duration-200">
                            <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl relative overflow-hidden animate-in fade-in duration-700 delay-500">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-400/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-5 h-5" />
                <span>Start Today</span>
              </div>
              <h3 className="text-2xl md:text-3xl mb-4">Ready to Discover Your True Potential?</h3>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Take the first step towards a fulfilling career with our comprehensive assessments
              </p>
              <a 
                href="https://forms.gle/NNjivqxNcFioFxYd8"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-white text-amber-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all shadow-2xl hover:scale-105"
              >
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Book Your Assessment Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Assessments;