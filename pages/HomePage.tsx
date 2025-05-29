
import React from 'react';
import { Link } from 'react-router-dom';
import { NavigationPath } from '../types.js';
import { APP_TITLE } from '../constants.js';
import { CodeBracketSquareIcon, SparklesIcon, BookOpenIcon, ChevronRightIcon } from '../components/icons.js';

const FeatureCard = ({ icon, title, description, animationDelay = '0ms' }) => (
  <div 
    className="bg-slate-800 p-6 rounded-lg shadow-xl hover:shadow-sky-500/30 transition-shadow duration-300 transform hover:-translate-y-1 animate-fade-in-up"
    style={{ animationDelay }}
  >
    <div className="flex items-center justify-center w-12 h-12 bg-sky-600 rounded-full text-white mb-4">
      {React.cloneElement(icon, { className: "w-6 h-6" })}
    </div>
    <h3 className="text-xl font-semibold text-sky-400 mb-2">{title}</h3>
    <p className="text-slate-300 text-sm leading-relaxed">{description}</p>
  </div>
);

const HomePage = () => {
  return (
    <div className="min-h-full flex flex-col items-center text-center px-4 py-8 md:py-12">
      <style>
        {`
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.5s ease-out forwards;
            opacity: 0; 
          }
        `}
      </style>
      <header 
        className="mb-10 md:mb-16 animate-fade-in-up"
        style={{ animationDelay: '100ms' }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-sky-400 mb-4">
          {APP_TITLE}
        </h1>
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
          インタラクティブな問題演習と充実したC言語辞書で、あなたのC言語学習を強力にサポートします。
          さあ、C言語の世界へ、最初の一歩を踏み出しましょう！
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            to={NavigationPath.Problems}
            className="inline-flex items-center justify-center px-8 py-3 bg-sky-600 text-white font-semibold rounded-lg shadow-md hover:bg-sky-700 transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-900 w-full sm:w-auto"
          >
            問題に挑戦する
            <ChevronRightIcon className="w-5 h-5 ml-2" />
          </Link>
          <Link
            to={NavigationPath.Reference}
            className="inline-flex items-center justify-center px-8 py-3 bg-slate-700 text-slate-100 font-semibold rounded-lg shadow-md hover:bg-slate-600 transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900 w-full sm:w-auto"
          >
            C言語辞書を見る
            <BookOpenIcon className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </header>

      <section className="w-full max-w-5xl">
        <h2 
            className="text-3xl font-semibold text-slate-100 mb-8 md:mb-12 animate-fade-in-up"
            style={{ animationDelay: '300ms' }}
        >
            主な特徴
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <FeatureCard
            icon={<CodeBracketSquareIcon />}
            title="実践的な演習問題"
            description="C言語の基本から応用まで、手を動かしながら学べる多彩な問題を用意。ステップバイステップで実力を養成します。"
            animationDelay="500ms"
          />
          <FeatureCard
            icon={<SparklesIcon />}
            title="AIによる即時フィードバック"
            description="あなたのコードをAIが解析。正誤だけでなく、改善点も具体的にアドバイス。効率的な学習をサポートします。"
            animationDelay="700ms"
          />
          <FeatureCard
            icon={<BookOpenIcon />}
            title="便利なC言語辞書"
            description="困ったときにすぐ引ける。主要な関数や構文を網羅した詳細なC言語辞書で、疑問を即座に解決します。"
            animationDelay="900ms"
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;