
import React from 'react';
import { HamburgerIcon } from './icons.js';

const Header = ({ title, toggleSidebar }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-800 shadow-lg h-16 md:h-20 flex items-center justify-between px-4 md:px-6">
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="text-slate-300 hover:text-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-md p-2 mr-2 md:mr-4"
          aria-label="ナビゲーションを開閉"
        >
          <HamburgerIcon className="w-6 h-6 md:w-7 md:h-7" />
        </button>
        <h1 className="text-xl md:text-2xl font-bold text-sky-400 tracking-tight">{title}</h1>
      </div>
    </header>
  );
};

export default Header;