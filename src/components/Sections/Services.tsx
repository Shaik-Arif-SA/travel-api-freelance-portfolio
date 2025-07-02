'use client';
import React, { useState } from 'react';
import Sections from '../myUi/Section';
import clsx from 'clsx';
import JEEContainer from './JEEContainer';
import { services } from '@/constant/data';
import NEETContainer from './NEETContainer';
import TTContainer from './TTContainer';

export default function Services() {
  const [mode, setMode] = useState<'jee' | 'neet' | 'tt'>('jee');

  return (
    <div
      id="services"
      className="font-montserrat bg-cover bg-center py-2"
      style={{
        backgroundImage: `url('/images/hero/contact_bg1.webp')`
      }}
    >
      <Sections className="px-3 lg:px-6 xl:!px-6">
        <div className="text-md py-5 flex items-center justify-center gap-2 font-semibold text-white">
          <button
            className="data-[state=jee]:text-primary data-[state=jee]:bg-ms-primary-50 flex cursor-pointer items-center gap-2 rounded-sm px-4 py-2"
            data-state={mode}
            onClick={() => setMode('jee')}
          >
            JEE
          </button>
          <button
            className={clsx(
              'data-[state=neet]:text-primary data-[state=neet]:bg-ms-primary-50 flex cursor-pointer items-center gap-2 rounded-sm px-4 py-2'
            )}
            data-state={mode}
            onClick={() => setMode('neet')}
          >
            NEET
          </button>
          <button
            className={clsx(
              'data-[state=tt]:text-primary data-[state=tt]:bg-ms-primary-50 flex cursor-pointer items-center gap-2 rounded-sm px-4 py-2'
            )}
            data-state={mode}
            onClick={() => setMode('tt')}
          >
            TT
          </button>
        </div>
        <div className=" rounded-2xl bg-white p-3 md:p-8 xl:p-5 xl:px-8">
          {mode === 'jee' && <JEEContainer jee={services.jee} />}
          {mode === 'neet' && <NEETContainer neet={services.neet} />}
          {mode === 'tt' && <TTContainer tt={services.tt} />}
        </div>
      </Sections>
    </div>
  );
}
