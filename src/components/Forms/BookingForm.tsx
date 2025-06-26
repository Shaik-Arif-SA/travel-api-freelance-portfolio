'use client';
import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useBookingForm } from '@/hooks/useBookingFom';



export function BookingForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    mutateAsync,
    isPending,
  } = useBookingForm();

  return (
    <Card className={cn(className)} {...props}>
      <CardHeader>
        <CardTitle className="font-montserrat text-secondary text-2xl">
        Let’s connect!
        </CardTitle>
         <p className='text-gray-500'>Let’s spark the future of education—connect with us and ignite your
         teaching journey.</p>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={handleSubmit(async data => {
            await mutateAsync(data);
          })}
        >
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Input
                  {...register('firstName')}
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  className="mt-2 mb-1 bg-white"
                />
                {errors.firstName && (
                  <p className="text-sm text-red-500">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <Input
                  {...register('lastName')}
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  className="mt-2 mb-1 bg-white"
                />
                {errors.lastName && (
                  <p className="text-sm text-red-500">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <Input
                {...register('email')}
                id="email"
                type="email"
                placeholder="Email"
                className="mb-1 bg-white"
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>


            <div>
              <Input
                {...register('number')}
                id="number"
                type="tel"
                placeholder="Phone Number"
                className="mb-1 bg-white"
              />
              {errors.number && (
                <p className="text-sm text-red-500">{errors.number.message}</p>
              )}
            </div>

            <div>
              <Input
                {...register('location')}
                id="location"
                type="text"
                placeholder="Location"
                className="mb-1 bg-white"
              />
              {errors.location && (
                <p className="text-sm text-red-500">{errors.location.message}</p>
              )}
            </div>       
            <div>
              <Textarea
                {...register('message')}
                placeholder="Message"
                id="message"
                  className="mb-1 bg-white"
              />
              {errors.message && (
                <p className="text-sm text-red-500">{errors.message.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <Button
                variant="secondary"
                type="submit"
                className="w-full text-white "
                disabled={isPending}
              >
                {isPending ? (
                  <div className="inline-block font-montserrat  size-6 animate-spin rounded-full border-3 border-current border-t-transparent "></div>
                ) : (
                  'Book Demo'
                )}
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
