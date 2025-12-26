"use client";

import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
// import logoImage from "figma:asset/7767f93cc4d938f8364d64376d4a8bca32c0f3a2.png";

interface FooterProps {
  onContactClick: () => void;
}

export function Footer({ onContactClick }: FooterProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="mb-4">
              {/* <img 
                src={logoImage} 
                alt="CareerCode Logo" 
                className="h-20 w-auto object-contain mb-4"
              /> */}
            </div>
            <p className="text-gray-300 mb-4">
              Empowering students from classroom to career with quality education and expert guidance.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-blue-600 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gradient-to-tr from-[#dc2626] to-[#2563eb]  hover:bg-accent rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-blue-600 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-red-600 hover:bg-secondary rounded-full flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('programs')} className="text-gray-400 hover:text-white transition-colors">
                  Programs
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('counselling')} className="text-gray-400 hover:text-white transition-colors">
                  Counselling Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('testimonials')} className="text-gray-400 hover:text-white transition-colors">
                  Testimonials
                </button>
              </li>
              <li>
                <button onClick={onContactClick} className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Programs</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>K-12 Online Tuitions</li>
              <li>Virtual Learning Programs</li>
              <li>Foundation Courses</li>
              <li>NEET Preparation</li>
              <li>JEE Preparation</li>
              <li>Teacher Training</li>
              <li>Career Counselling</li>
              <li>Study Abroad Guidance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+919561672908" className="text-gray-400 hover:text-white transition-colors block">
                    +91 9561672908
                  </a>
                  {/* <a href="tel:+911234567890" className="text-gray-400 hover:text-white transition-colors block">
                    +91 12345 67890
                  </a> */}
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:info@careercode.com" className="text-gray-400 hover:text-white transition-colors block">
                    careercode.edu@gmail.com
                  </a>
                  {/* <a href="mailto:support@careercode.com" className="text-gray-400 hover:text-white transition-colors block">
                    support@careercode.com
                  </a> */}
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-400">
                  CareerCode Education Hub<br />
                  123 Knowledge Street<br />
                  Mumbai, Maharashtra 400001
                </p>
              </div>

              <div className="pt-3">
                <a 
                  href="https://wa.me/919561672908" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity text-sm"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} CareerCode by i2Global. All rights reserved.</p>
            <p className="mt-2">
              <span className="mx-2">|</span>
              <button className="hover:text-white transition-colors">Privacy Policy</button>
              <span className="mx-2">|</span>
              <button className="hover:text-white transition-colors">Terms & Conditions</button>
              <span className="mx-2">|</span>
              <button className="hover:text-white transition-colors">Refund Policy</button>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}