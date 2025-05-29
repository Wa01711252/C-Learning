
import React from 'react';
import { NavLink } from 'react-router-dom';
import { CloseIcon } from './icons.js';
import { APP_TITLE, NAVIGATION_ITEMS } from '../constants.js';

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-64 h-full bg-slate-800 shadow-xl transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out md:translate-x-0 md:pt-20 pt-16 flex flex-col`}
    >
      <div className="flex items-center justify-between p-4 border-b border-slate-700 md:hidden">
        <h2 className="text-lg font-semibold text-sky-400">{APP_TITLE}</h2>
        <button
          onClick={closeSidebar}
          className="text-slate-300 hover:text-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-md p-1"
          aria-label="ナビゲーションを閉じる"
        >
          <CloseIcon className="w-6 h-6" />
        </button>
      </div>
      <nav className="flex-grow p-4 space-y-2">
        {NAVIGATION_ITEMS.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={closeSidebar} 
            className={({ isActive }) =>
              `flex items-center px-3 py-2.5 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out
              ${
                isActive
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'text-slate-300 hover:bg-slate-700 hover:text-sky-300'
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
      <footer className="p-4 border-t border-slate-700 text-xs text-slate-500">
        © {new Date().getFullYear()} C学習ドリル
      </footer>
    </aside>
  );
};

export default Sidebar;