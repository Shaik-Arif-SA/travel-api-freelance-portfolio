'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { Menu, X } from 'lucide-react';
import { MdEmail } from 'react-icons/md';
import { RiWhatsappFill } from 'react-icons/ri';

import {
  MotionDiv,
  MotionAnimatePresence,
  MotionLi
} from '@/motions/framermotions';
import { navLinks } from '@/constant/navLinks';
import { NavLinksType } from '@/types/type';
import ScrollLink from '../myUi/ScrollLink';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="font-montserrat fixed top-0 z-20 w-full bg-white">
      <div className="bg-primary flex w-full justify-between p-3 px-5 md:px-10">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-2 rounded-lg bg-[#FFFCEB] p-1 md:p-2">
            <RiWhatsappFill className="text-secondary" size={23} />
            <p className="hidden text-sm font-medium md:block">8886891111</p>
          </span>
          <span className="flex items-center gap-2 rounded-lg bg-[#FFFCEB] p-1 md:p-2">
            <MdEmail className="text-secondary" size={23} />
            <p className="hidden text-sm font-medium md:block">
              mindspaceacademy.i2global@gmail.com
            </p>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/images/facebook.svg" alt="Logo" width={25} height={45} />
          <Image src="/images/x.svg" alt="Logo" width={25} height={45} />
          <Image src="/images/linkedin.svg" alt="Logo" width={25} height={45} />
        </div>
      </div>
      <div className="flex items-center justify-between px-5 py-4 shadow-lg xl:px-10 xl:shadow-sm">
        <div className="flex items-center gap-4">
          <Image
            className=""
            src="/images/logo.webp"
            alt="Logo"
            width={45}
            height={45}
          />
          <strong className="text-primary bold text-center text-sm font-bold md:text-lg">
            Mindspace Academy
          </strong>
        </div>

        <ul className="hidden gap-6 xl:flex xl:justify-center">
          {navLinks.map((link: NavLinksType, index: number) => (
            <li key={index}>
              <ScrollLink
                className={clsx(
                  'hover:text-primary cursor-pointer rounded-full px-3 py-2 text-sm font-medium transition-colors ease-in-out'
                )}
                to={link.link}
              >
                {link.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
        <button
          className="cursor-pointer xl:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={24} />
        </button>
      </div>
      <MotionAnimatePresence>
        {isOpen && (
          <MotionDiv
            ref={mobileMenuRef}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: [50, -10, 10, -5, 5, 0] }}
            exit={{ opacity: 0, x: 50 }}
            transition={{
              duration: 0.2,
              ease: 'easeInOut'
            }}
            className="absolute top-0 right-0 h-[100vh] w-[80%] rounded-l-xl border-l-2 border-gray-100 bg-black/70 shadow-lg backdrop-blur-3xl xl:hidden"
          >
            <button
              className="mt-3 ml-3 cursor-pointer text-white/80 xl:hidden"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>

            <ul className="flex flex-col items-center gap-4 px-3 py-4">
              {navLinks.map((link: NavLinksType, index: number) => (
                <MotionLi
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: 'easeOut',
                    delay: 0.2 + index * 0.1
                  }}
                  key={index}
                >
                  <ScrollLink
                    className="cursor-pointer rounded px-3 py-2 text-center text-sm leading-relaxed font-[400] text-white transition-colors ease-in-out"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    to={link.link}
                  >
                    {link.name}
                  </ScrollLink>
                </MotionLi>
              ))}
            </ul>
          </MotionDiv>
        )}
      </MotionAnimatePresence>
    </nav>
  );
}
