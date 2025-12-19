'use client';

import Sections from '../myUi/Section';
import { footerLinks } from '@/constant/navLinks';
import { NavLinksType } from '@/types/type';
import { toast } from 'react-hot-toast';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { subscribeSchema } from '@/schemas/register_form';
import { apiPost } from '@/lib/api_service';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import clsx from 'clsx';
import { RiWhatsappFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';
import ScrollLink from '../myUi/ScrollLink';
import Link from 'next/link';
import { Instagram } from 'lucide-react';

export default function Footer() {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(subscribeSchema),
    defaultValues: {
      email: ''
    }
  });
  const { mutateAsync, isPending } = useMutation({
    mutationKey: ['subscribe'],
    mutationFn: async (data: any) => apiPost('/api/subscribe', data),
    onSuccess: () => {
      toast.success('Successfully subscribed');
      queryClient.invalidateQueries({ queryKey: ['subscribe'] });
      reset();
    },
    onError: () => {
      toast.error('Subscribe failed');
      reset();
    }
  });
  return (
    <footer className="bg-black/95 py-4 text-white/80 xl:py-13">
      <Sections>
        <div className="grid grid-cols-1 p-2 xl:grid-cols-3">
           <div>
              <div className="flex items-center gap-2 mb-4 group cursor-pointer">
                <div className="relative">
                  {/* <GraduationCap className="w-8 h-8 text-amber-400 group-hover:scale-110 transition-transform" /> */}
                  {/* <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div> */}
                   <img className="w-9 h-9 text-amber-600 group-hover:scale-110 transition-transform duration-300" src="/images/logo.jpg" alt="CareerCode Logo" style={{height: "100px", width: "100px",borderRadius:"50%"}} />
                </div>
                <span className="text-2xl bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">CareerCode</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering students with quality education and science-backed career guidance.
              </p>
            </div>
            <div className='ml-10'>
              <h4 className="mb-4 text-lg ml-22 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Quick Links</h4>
                <div className="grid grid-cols-2 gap-8">
                  {/* Left column */}
                  <ul className="space-y-3">
                    <li>
                      <button
                        onClick={() =>
                          document
                            .getElementById("introduction")
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="text-gray-400 hover:text-amber-400 transition-all hover:translate-x-1 inline-block"
                      >
                        → About Us
                      </button>
                    </li>

                    <li>
                      <button
                        onClick={() =>
                          document
                            .getElementById("programs")
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="text-gray-400 hover:text-amber-400 transition-all hover:translate-x-1 inline-block"
                      >
                        → Programs
                      </button>
                    </li>

                    <li>
                      <button
                        onClick={() =>
                          document
                            .getElementById("mentors")
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="text-gray-400 hover:text-amber-400 transition-all hover:translate-x-1 inline-block"
                      >
                        → Mentors
                      </button>
                    </li>
                  </ul>

                  {/* Right column */}
                  <ul className="space-y-3">
                    <li>
                      <button
                        onClick={() =>
                          document
                            .getElementById("course-exploration")
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="text-gray-400 hover:text-amber-400 transition-all hover:translate-x-1 inline-block"
                      >
                        → Courses
                      </button>
                    </li>

                    <li>
                      <button
                        onClick={() =>
                          document
                            .getElementById("testimonial")
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="text-gray-400 hover:text-amber-400 transition-all hover:translate-x-1 inline-block"
                      >
                        → Testimonials
                      </button>
                    </li>

                    <li>
                      <button
                        onClick={() =>
                          document
                            .getElementById("contact")
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="text-gray-400 hover:text-amber-400 transition-all hover:translate-x-1 inline-block"
                      >
                        → Contact
                      </button>
                    </li>
                  </ul>
                </div>


            </div>
          <div className="col-span-1">
            <p className="font-montserrat text-sm font-medium">
              Subscribe to Newsletter
            </p>
            <div></div>
            <form
              className="mt-4"
              onSubmit={handleSubmit(async data => {
                await mutateAsync(data);
              })}
            >
              <div className="flex max-w-72 gap-x-2 overflow-hidden rounded-md bg-white">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="text-primary w-full border-0 bg-transparent p-4 text-sm focus:outline-none"
                  {...register('email')}
                />
                <button
                  disabled={isPending}
                  type="submit"
                  className={clsx(
                    'bg-ms-secondary cursor-pointer px-2 py-3 text-sm text-white',
                    isPending && 'cursor-not-allowed opacity-50'
                  )}
                >
                  Subscribe
                </button>
              </div>
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email.message}</p>
              )}
            </form>
            <div className="mt-6 flex items-center gap-2 text-sm font-normal">
              <a
                href="https://wa.me/919561672908"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-green-500 transition-colors"
              >
                <RiWhatsappFill className="text-green-500" size={20} />
                <span>9561672908</span>
              </a>
            </div>

            <div className="mt-2 flex items-center gap-2 text-sm font-normal">
              <a
                href="mailto:careercode.edu@gmail.com"
                className="flex items-center gap-2 text-white hover:text-red-500 transition-colors"
              >
                <MdEmail className="text-red-500" size={20} />
                <span>careercode.edu@gmail.com</span>
              </a>
            </div>

            <div className="mt-2 flex items-center gap-2 text-sm font-normal">
              <FaInstagram size={25} className="text-pink-500" />
             <Link
            href="https://www.instagram.com/the.careercode?igsh=MWM4YzdvODYxMDF0Zg=="
            target="_blank" className='hover:text-pink-500 transition-colors'
          >  <span>
            
          the.careercode</span>
          </Link>
          </div>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-center gap-2 xl:mt-0">
          {/* <Link
            href="https://www.facebook.com/share/1BakvabY1e/?mibextid=wwXIfr"
            target="_blank"
          >
            <Image
              src="/images/facebook.svg"
              alt="Logo"
              width={25}
              height={25}
            />
          </Link> */}
         
        </div>
      </Sections>
    </footer>
  );
}
// export default Footer;