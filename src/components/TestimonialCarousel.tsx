"use client";

import { Play } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "./styles/slick.css";

const testimonials = [
  {
    name: "Mrs. Sharma",
    role: "Parent of Grade 10 Student",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    name: "Rahul Verma",
    role: "NEET Student",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    name: "Mr. & Mrs. Patel",
    role: "Parents",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=300&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    name: "Priya Singh",
    role: "Class 12 Graduate",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    name: "Anita Desai",
    role: "Parent of JEE Student",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    name: "Dr. Kumar",
    role: "Parent & Educator",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    name: "Neha Agarwal",
    role: "Study Abroad Student",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    name: "Amit Kumar",
    role: "JEE Advanced Qualifier",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=300&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

export function TestimonialsCarousel() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: isVisible,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section ref={sectionRef} id="testimonials" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students & Parents Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Watch real testimonials from families who have experienced our programs and services
          </p>
        </div>

        <Slider {...settings} className="testimonials-slider">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-3">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100 group">
                <div 
                  className="relative cursor-pointer overflow-hidden"
                  onClick={() => setSelectedVideo(testimonial.videoUrl)}
                >
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-64 object-cover transition-transform group-hover:scale-110 duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent group-hover:from-black/90 transition-colors">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                        <Play className="w-10 h-10 text-white ml-1" fill="white" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white font-bold text-xl mb-1">{testimonial.name}</h3>
                      <p className="text-white/90 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Video Modal */}
        {selectedVideo && (
          <div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setSelectedVideo(null)}
          >
            <div className="bg-white rounded-2xl p-6 max-w-4xl w-full animate-scaleIn" onClick={(e) => e.stopPropagation()}>
              <div className="aspect-video">
                <iframe
                  className="w-full h-full rounded-xl"
                  src={`${selectedVideo}?autoplay=1`}
                  title="Video Testimonial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <button 
                onClick={() => setSelectedVideo(null)}
                className="mt-6 bg-gradient-to-r from-red-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:opacity-90 w-full transition-opacity"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}