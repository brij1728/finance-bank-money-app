'use client';

import Image from 'next/image';
import { useState } from 'react';

export const Header = () => {
  const [selected, setSelected] = useState('Home');

  const menu = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Features', href: '/features' },
    // { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="py-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center font-clash-display text-black w-full h-auto md:h-[60px]">
        <div className="flex items-center gap-4 md:gap-10">
          <div className="flex gap-1 md:gap-4">
            <Image
              src="/uifryLogo.png"
              alt="Uifry"
              width={24}
              height={24}
              className="w-4 h-4 md:w-8 md:h-8"
            />
            <div className="relative flex items-center">
              <span className="text-base md:text-4xl font-normal md:font-bold">
                uifry
              </span>
              <span className="absolute top-0 right-0 text-[4px] md:text-[6px] transform translate-x-1.5 md:translate-x-2.5 translate-y-2.5 md:translate-y-3.5">
                TM
              </span>
            </div>
          </div>

          <nav>
            <ul className="flex items-center space-x-1.5 md:space-x-4 lg:space-x-6 font-light md:font-medium text-sm md:text-xl">
              {menu.map((item) => (
                <li
                  key={item.name}
                  className={`cursor-pointer ${selected === item.name ? 'text-[#FF5555] font-light md:font-bold' : 'text-black'}`}
                  onClick={() => setSelected(item.name)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <button className="bg-black text-white text-sm md:text-[18px] leading-4 md:leading-[28px] py-1 md:py-3 px-2 md:px-6 font-normal md:font-semibold rounded">
          Download
        </button>
      </div>
    </header>
  );
};
