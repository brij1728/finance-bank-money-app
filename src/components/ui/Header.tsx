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
      <div className="container mx-auto flex justify-between items-center font-clash-display text-black w-full h-[60px]">
        <div className="flex gap-10 items-center">
          <div className="flex gap-3 items-center">
            <Image src="/uifryLogo.png" alt="Uifry" width={30} height={30} />
            <div className="relative flex items-center">
              <span className="text-4xl font-bold">uifry</span>
              <span className="absolute top-0 right-0 text-[6px] transform translate-x-2.5 translate-y-3.5 ">
                TM
              </span>
            </div>
          </div>
          <nav>
            <ul className="flex space-x-6 font-medium text-xl">
              {menu.map((item) => (
                <li
                  key={item.name}
                  className={`cursor-pointer ${selected === item.name ? 'text-[#FF5555] font-bold' : 'text-black'}`}
                  onClick={() => setSelected(item.name)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <button className="bg-black text-white text-[18px] leading-[28px] py-3 px-6 font-semibold rounded-sm">
          Download
        </button>
      </div>
    </header>
  );
};
