import React from 'react';
import Link from 'next/link';
import { navbarTabs } from '~/data';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const { pathname } = useRouter();
  const [activeItem, setActiveItem] = useState<string>('');

  useEffect(() => {
    if (pathname === '/') setActiveItem('About');
    if (pathname === '/projects') setActiveItem('Projects');
    if (pathname === '/resume') setActiveItem('Resume');
  }, []);

  return (
    <div className="flex justify-between space-x-3 my-4">
      <span className="font-bold text-blue-twitter text-lg md:text-2xl border-b border-blue-twitter border-opacity-40">
        {activeItem}
      </span>
      <div className="space-x-5">
        {navbarTabs.map(({ title, route }, i) => (
          <NavItem
            key={i}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            title={title}
            route={route}
          />
        ))}
      </div>
    </div>
  );
}

const NavItem: React.FC<{
  activeItem: string;
  setActiveItem: Function;
  title: string;
  route: string;
}> = ({ activeItem, setActiveItem, title, route }) => {
  return activeItem !== title ? (
    <Link href={route}>
      <a
        onClick={() => setActiveItem(title)}
        className="text-gray-600 dark:text-gray-300 font-medium hover:text-blue-twitter dark:hover:text-blue-twitter transition ease-in-out duration-150"
      >
        {title}
      </a>
    </Link>
  ) : null;
};
