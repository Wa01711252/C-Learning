
import React, { useState, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';
import HomePage from './pages/HomePage.js';
import PracticeProblemsPage from './pages/PracticeProblemsPage.js';
import ReferencePage from './pages/ReferencePage.js';
import SolutionsPage from './pages/SolutionsPage.js';
import { APP_TITLE } from './constants.js';
import { NavigationPath } from './types.js';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-slate-100">
      <Header title={APP_TITLE} toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <main className={`flex-grow p-4 pt-20 md:pt-24 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'md:ml-64' : ''}`}>
        <div className="container mx-auto max-w-7xl">
          <Routes>
            <Route path={NavigationPath.Home} element={<HomePage />} />
            <Route path={NavigationPath.Problems} element={<PracticeProblemsPage />} />
            <Route path={NavigationPath.Reference} element={<ReferencePage />} />
            <Route path={NavigationPath.Solutions} element={<SolutionsPage />} />
          </Routes>
        </div>
      </main>
       {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black opacity-50 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}
    </div>
  );
};

export default App;