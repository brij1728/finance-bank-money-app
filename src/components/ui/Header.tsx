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
    <header className="py-4 bg-white shadow ">
      <div className="container mx-auto flex justify-between items-center font-clash-display">
        <div className="flex gap-3 justify-center items-center">
          <Image src="/uifryLogo.png" alt="Uifry" width={34} height={34} />
          <div className="relative flex items-center">
            <span className="text-2xl font-bold">uifry</span>
            <span className="absolute top-0 right-0 text-xs transform translate-x-1 -translate-y-1">
              TM
            </span>
          </div>
        </div>
        <nav>
          <ul className="flex space-x-4 text-[#000000] font-medium">
            {menu.map((item) => (
              <li
                key={item.name}
                className={`cursor-pointer ${selected === item.name ? 'text-[#FF5555] font-bold' : 'text-black font-medium'} font-`}
                onClick={() => setSelected(item.name)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </nav>
        <button className="btn-primary bg-black text-white text-sm p-2 px-6 rounded-sm">
          Download
        </button>
      </div>
    </header>
  );
};
