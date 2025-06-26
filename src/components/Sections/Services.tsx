'use client';
import React, { useState } from 'react';
import Sections from '../myUi/Section';
import clsx from 'clsx';
import JEEContainer from './JEEContainer';
import { services } from '@/constant/data';

export default function Services() {
  const [mode, setMode] = useState<'jee' | 'neet' | 'tt'>('jee');

  return (
    <div
      id="services"
      className="font-montserrat bg-cover bg-center py-20"
      style={{
        backgroundImage: `url('/images/hero/contact_bg1.webp')`
      }}
    >
      <Sections className="px-3 lg:px-6 xl:!px-6">

        <div className="text-md flex items-center justify-center gap-2 font-semibold text-white">
          <button
            className="data-[state=jee]:text-primary flex cursor-pointer items-center gap-2 rounded-sm px-4 py-2 data-[state=jee]:bg-white"
            data-state={mode}
            onClick={() => setMode('jee')}
          >
            JEE
          </button>
          <button
            className={clsx(
              'data-[state=neet]:text-primary flex cursor-pointer items-center gap-2 rounded-sm px-4 py-2 data-[state=neet]:bg-white'
            )}
            data-state={mode}
            onClick={() => setMode('neet')}
          >
            NEET
          </button>
          <button
            className={clsx(
              'data-[state=tt]:text-primary flex cursor-pointer items-center gap-2 rounded-sm px-4 py-2 data-[state=tt]:bg-white'
            )}
            data-state={mode}
            onClick={() => setMode('tt')}
          >
            TT
          </button>
        </div>

        <div className="mt-10 rounded-2xl bg-white p-3 py-20 text-center xl:p-5 xl:px-27">
          {mode === 'jee' && <JEEContainer jee={services.jee} />}

          {/* {mode === 'neet' && <NEETContainer />}
          {mode === 'tt' && <TTContainer />} */}
        </div>
      </Sections>
    </div>
  );
}
