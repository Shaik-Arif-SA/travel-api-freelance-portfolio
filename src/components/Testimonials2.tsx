"use client";

import { Star, Quote, Award } from "lucide-react";

const testimonials = [
  {
    name: "Kartik",
    role: "student",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
    quote: "I gave the psychometric test at Career Code and honestly it was an eye opener. The report showed me my strengths and areas I never thought about. Komal ma'am explained it so simply that I finally know which career suits me."
  },
  {
    name: "Manav Chainan",
    role: "student",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop",
    quote: "Very helpful! Would 100% recommend"
  },
  {
    name: "Prudenciana Alphanso",
    role: "parent",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=300&fit=crop",
    quote: "We were very confused about what stream my daughter should choose. After the aptitude test and one-to-one session, things became clear. Komal ma'am guided her so patiently and I could see my child getting more confident about her future."
  },
  {
    name: "Manjusha Chainani",
    role: "parent",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=300&fit=crop",
    quote: "My son was confused about what to do after Bcom .. we got to know his strengths and shortcomings & he was guided well on the suitable post graduation options and the job profiles where he will excel. I recommend school and college students to take the career assessment tests at Career Code."
  },
  {
    name: "Tejal Bandekar",
    role: "parent",
    rating: 5,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=300&fit=crop",
    quote: "My son studying in 9th standard was very confused about his stream selection. We approached Career Code and got excellent guidance and support. He took the advised tests and they provided a detailed report along with career mapping …"
  },
  // {
  //   name: "Vikram Singh",
  //   role: "student",
  //   rating: 5,
  //   image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=300&fit=crop",
  //   quote: "The psychometric career assessment changed my life! I was confused about choosing between engineering and commerce. The detailed assessment and one-on-one counselling helped me discover my true interests. I'm now a successful software engineer and couldn't be happier!"
  // },
  {
    name: "Sarthak Bandekar",
    role: "Student - 9th grade",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop",
    quote: "Career Code really helped me find clarity about my goals and choose the right subjects in 9th standard. Earlier I was unsure and confused, but the counseling sessions guided me to understand my strengths and interests, due to which I was able to choose commerce with confidence and able to move ahead with focus"
  },
  // {
  //   name: "Dr. Anil Verma",
  //   role: "Parent & Medical Professional",
  //   rating: 5,
  //   image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop",
  //   quote: "As a doctor, I appreciate CareerCode's scientific approach to career counselling. The psychometric assessments are thorough, and the counsellors provide evidence-based guidance. My son is now pursuing the career path that's perfect for his aptitudes and interests."
  // },
  // {
  //   name: "Anjali Khanna",
  //   role: "Teacher Training Graduate - International School",
  //   rating: 5,
  //   image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop",
  //   quote: "CareerCode's promise of 100% placement support is not just marketing - it's real! After completing the Teacher Training Program, my dedicated mentor helped me with resume building, interview preparation, and I got placed at an international school. Forever grateful!"
  // }
];

export function Testimonials2() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-[#2563eb] via-[#dc2626] to-[#10b981] text-white px-6 py-2 rounded-full font-semibold flex items-center gap-2">
              <Award className="w-5 h-5" />
              Success Stories
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hear From Our Successful Students & Parents
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real stories from real people who transformed their careers and lives with CareerCode
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:-translate-y-2"
            >
              {/* Header with Image and Info */}
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 mb-1">{testimonial.role}</p>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="relative">
                <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                <p className="text-gray-700 leading-relaxed pl-6 italic">
                  "{testimonial.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of students who have achieved their dreams with CareerCode 
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={() => {
                const event = new CustomEvent('openContactModal');
                window.dispatchEvent(event);
              }}
              className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-10 py-4 rounded-xl hover:opacity-90 transition-opacity shadow-xl font-bold"
            >
              Book Free Consultation
            </button>
            <button 
              onClick={() => {
                const event = new CustomEvent('openContactModal');
                window.dispatchEvent(event);
              }}
              className="bg-gradient-to-r from-green-300 to-green-600 text-white px-10 py-4 rounded-xl hover:opacity-90 transition-opacity shadow-xl font-bold"
            >
              Get Career Assessment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
