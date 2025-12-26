"use client";

export function ImageShowcase() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Learning Like Never Before</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of students who are transforming their futures with CareerCode
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Online Learning */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all">
            <img 
              src="https://images.unsplash.com/photo-1596247290824-e9f12b8c574f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwb25saW5lfGVufDF8fHx8MTc2NjU1OTk2N3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Online Learning"
              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">Interactive Online Classes</h3>
                <p className="text-white/90">Live sessions with expert teachers from anywhere</p>
              </div>
            </div>
          </div>

          {/* Career Counselling */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all">
            <img 
              src="https://images.unsplash.com/photo-1758518727707-b023e285b709?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBjb3Vuc2VsaW5nJTIwbWVldGluZ3xlbnwxfHx8fDE3NjY1NzY5OTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Career Counselling"
              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">Expert Career Guidance</h3>
                <p className="text-white/90">One-on-one counselling for your bright future</p>
              </div>
            </div>
          </div>
        </div>

        {/* Three Column Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Success Stories */}
          <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
            <img 
              src="https://images.unsplash.com/photo-1762438136374-b2fe754053f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwZ3JhZHVhdGlvbiUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzY2NTc2OTk1fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Success Stories"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0  to-transparent flex items-end p-4">
              <div className="text-white">
                <h3 className="font-bold text-lg mb-1">Success Stories</h3>
                <p className="text-sm text-white/90">Students achieving dreams</p>
              </div>
            </div>
          </div>

          {/* Teacher Support */}
          <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
            <img 
              src="https://images.unsplash.com/photo-1589395937658-0557e7d89fad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwc3R1ZGVudCUyMGxlYXJuaW5nfGVufDF8fHx8MTc2NjU3Njk5NXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Teacher Support"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0  flex items-end p-4">
              <div className="text-white">
                <h3 className="font-bold text-lg mb-1">Dedicated Teachers</h3>
                <p className="text-sm text-white/90">Personalized attention always</p>
              </div>
            </div>
          </div>

          {/* Study Abroad */}
          <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
            <img 
              src="https://images.unsplash.com/photo-1766226083712-be8e02074247?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkeSUyMGFicm9hZCUyMHVuaXZlcnNpdHl8ZW58MXx8fHwxNzY2NTc2OTk1fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Study Abroad"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0  flex items-end p-4">
              <div className="text-white">
                <h3 className="font-bold text-lg mb-1">Study Abroad</h3>
                <p className="text-sm text-white/90">Global opportunities await</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button 
            onClick={() => {
              const event = new CustomEvent('openContactModal');
              window.dispatchEvent(event);
            }}
            className="bg-gradient-to-r from-[#2563eb] via-[#dc2626] to-[#10b981] text-white px-12 py-4 rounded-xl hover:opacity-90 transition-opacity shadow-2xl font-bold text-lg"
          >
            Join Us Today - Transform Your Future! 🎓
          </button>
        </div>
      </div>
    </section>
  );
}
