import { Search, Compass, BookMarked, TrendingUp, ArrowRight, Sparkles } from "lucide-react";

export function CourseExploration() {
  const fields = [
    "Engineering", "Medicine", "Management", "Design", "Architecture", 
    "Psychology", "IT", "Finance", "Aviation", "Arts", "Media", 
    "Hospitality", "Paramedical", "Agriculture", "Law", "Sports", 
    "Nursing", "Pharmacy", "Data Science", "Fashion", "Film Making",
    "Biotechnology", "Environmental Science", "Public Policy"
  ];

  return (
    <section id="course-exploration" className="py-16 md:py-24 bg-white/40 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in duration-700">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full mb-6 shadow-md">
              <Compass className="w-5 h-5 text-purple-600" />
              <span className="text-purple-800">🎯 Discover Your Path</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-purple-900 via-pink-800 to-purple-900 bg-clip-text text-transparent">
              Course & Pathway Exploration
            </h2>
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="w-12 h-1 bg-gradient-to-r from-transparent to-purple-600 rounded-full"></div>
              <Sparkles className="w-5 h-5 text-purple-600" />
              <div className="w-12 h-1 bg-gradient-to-l from-transparent to-purple-600 rounded-full"></div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white via-purple-50/30 to-pink-50/20 rounded-3xl shadow-2xl p-8 md:p-12 mb-8 border border-purple-100/50 animate-in slide-in-from-left duration-700">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <Search className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl text-gray-900 mb-4">
                  <span className="text-3xl md:text-4xl text-purple-600">500+</span> Verified Courses
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With access to over <span className="text-purple-600">500 verified courses</span>, we help students explore every possible opportunity across <span className="text-purple-600">40+ fields</span>. Students get clarity not only on "what careers exist," but also which ones match their strengths.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4 bg-white/60 p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <BookMarked className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-2 text-gray-900">Comprehensive Database</h4>
                  <p className="text-gray-600">
                    Access to thousands of courses across universities in India and abroad
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/60 p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-2 text-gray-900">Strength-Based Matching</h4>
                  <p className="text-gray-600">
                    Find courses that align with your unique abilities and interests
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="bg-gradient-to-br from-purple-50 to-amber-50 rounded-2xl p-6 md:p-8">
              <h4 className="text-xl mb-4 text-gray-900">Explore Fields Including:</h4>
              <div className="flex flex-wrap gap-2">
                {fields.map((field, index) => (
                  <span 
                    key={index}
                    className="bg-white px-4 py-2 rounded-full shadow-sm text-gray-700 border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all duration-200"
                  >
                    {field}
                  </span>
                ))}
                <span className="bg-gradient-to-r from-amber-100 to-purple-100 px-4 py-2 rounded-full shadow-sm text-gray-700 border border-amber-200">
                  ...and many more
                </span>
              </div>
            </div> */}
          </div>

          <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl relative overflow-hidden animate-in fade-in duration-700 delay-500">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-400/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-5 h-5" />
                <span>Your Future Awaits</span>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl mb-4">
                Don't Just Follow Trends, Follow Your Strengths
              </h3>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Let us help you discover the career path that's right for you
              </p>
              <a 
                href="https://forms.gle/NNjivqxNcFioFxYd8"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-white text-purple-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all shadow-2xl hover:scale-105"
              >
                <Compass className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                Explore Your Options
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CourseExploration;