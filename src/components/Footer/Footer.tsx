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
import ScrollLink from '../myUi/ScrollLink';
import Link from 'next/link';
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
        <div className="grid grid-cols-1 p-2 xl:grid-cols-4">
          <div className="col-span-1 mt-3 flex flex-col items-center justify-center xl:mt-0 xl:items-start">
            <Image src="/images/logo2.webp" alt="Logo" width={60} height={60} />
            <p className="font-montserrat mt-5 text-sm leading-relaxed font-light">
              MindSpace Academy is a premier learning platform helping students
              master JEE, NEET, and TT with expert guidance and proven
              strategies.
            </p>
          </div>
          <div className="col-span-2 my-5 border-y-1 border-white/80 py-4 xl:my-0 xl:place-self-center xl:border-y-0">
            <ul className="flex flex-col gap-8 xl:flex-row">
              {footerLinks.map((link: NavLinksType) => (
                <li key={link.name}>
                  <ScrollLink
                    to={link.link}
                    className="text-md cursor-pointer font-normal"
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
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
              <RiWhatsappFill className="text-white" size={20} />
              <span className="text-white">8886891111</span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm font-normal">
              <MdEmail className="text-white" size={20} />
              <span className="text-white">
                mindspaceacademy.i2global@gmail.com
              </span>
            </div>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-center gap-2 xl:mt-0">
          <Link
            href="https://www.facebook.com/share/1BakvabY1e/?mibextid=wwXIfr"
            target="_blank"
          >
            <Image
              src="/images/facebook.svg"
              alt="Logo"
              width={25}
              height={25}
            />
          </Link>
          <Link
            href="https://www.instagram.com/mindspaceacademy1?igsh=MWp5dWJ2ZHV6ZHR0dA=="
            target="_blank"
          >
            <Image src="/images/insta.svg" alt="Logo" width={25} height={25} />
          </Link>
        </div>
      </Sections>
    </footer>
  );
}
