
import React, { useMemo } from 'react';
import { PRACTICE_PROBLEMS, CHAPTER_TITLES } from '../constants.js';
import CopyButton from '../components/CopyButton.js';
import { LightBulbIcon } from '../components/icons.js';

const getChapterKeyFromProblemId = (problemId) => {
  return problemId.split('-')[0];
};

const SolutionsPage = () => {
  const groupedProblems = useMemo(() => {
    const groups = {};
    PRACTICE_PROBLEMS.forEach(problem => {
      const chapterKey = getChapterKeyFromProblemId(problem.id);
      if (!groups[chapterKey]) {
        groups[chapterKey] = [];
      }
      groups[chapterKey].push(problem);
    });

    return Object.keys(CHAPTER_TITLES)
      .filter(key => groups[key] && groups[key].length > 0)
      .map(key => ({
        id: key,
        title: CHAPTER_TITLES[key] || `Chapter ${key.replace('ch', '')}`,
        problems: groups[key].sort((a, b) => { // Sort problems within chapter by difficulty and then ID
          const diffOrder = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
          if (diffOrder[a.difficulty] !== diffOrder[b.difficulty]) {
            return diffOrder[a.difficulty] - diffOrder[b.difficulty];
          }
          return a.id.localeCompare(b.id);
        }),
      }));
  }, []);

  const getDifficultyClass = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-600 text-green-100';
      case 'Medium': return 'bg-yellow-500 text-yellow-900';
      case 'Hard': return 'bg-red-600 text-red-100';
      default: return 'bg-slate-600 text-slate-100';
    }
  };

  return (
    <div className="space-y-8">
      <header className="pb-4 border-b border-slate-700">
        <h2 className="text-3xl font-bold text-sky-400 mb-2">問題 解答一覧</h2>
        <p className="text-slate-400">各問題の解答例と解説（利用可能な場合）を確認できます。</p>
      </header>

      {groupedProblems.length > 0 ? (
        groupedProblems.map(chapter => (
          <section key={chapter.id} className="space-y-6">
            <h3 className="text-2xl font-semibold text-sky-300 pt-6 border-t border-slate-700 first-of-type:border-t-0 first-of-type:pt-0">
              {chapter.title}
            </h3>
            {chapter.problems.map(problem => (
              <article key={problem.id} className="bg-slate-800 p-5 md:p-6 rounded-lg shadow-xl">
                <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2 mb-3">
                  <h4 className="text-xl font-semibold text-slate-100">{problem.title.substring(problem.title.indexOf(':') + 1).trim()}</h4>
                  <span className={`flex-shrink-0 px-3 py-1 text-xs font-semibold rounded-full ${getDifficultyClass(problem.difficulty)}`}>
                    {problem.difficulty}
                  </span>
                </div>
                <p className="text-slate-300 mb-4 whitespace-pre-line leading-relaxed text-sm">{problem.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-2">
                      <h5 className="text-md font-semibold text-sky-300">解答例:</h5>
                      <CopyButton textToCopy={problem.solutionExample} label="解答コピー" className="w-full sm:w-auto"/>
                  </div>
                  <pre className="bg-slate-900 p-3 rounded-md text-slate-100 font-roboto-mono text-xs overflow-x-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-900">
                    <code>{problem.solutionExample}</code>
                  </pre>
                </div>

                {problem.explanation && (
                  <div className="border-t border-slate-700 pt-4 mt-4">
                    <h5 className="flex items-center text-md font-semibold text-sky-300 mb-2">
                      <LightBulbIcon className="w-5 h-5 mr-2 text-yellow-400 flex-shrink-0"/>
                      解説:
                    </h5>
                    <p className="text-slate-300 whitespace-pre-line leading-relaxed text-sm">{problem.explanation}</p>
                  </div>
                )}
              </article>
            ))}
          </section>
        ))
      ) : (
         <div className="text-center py-12">
            <p className="text-slate-400 text-lg">解答が表示できる問題がありません。</p>
        </div>
      )}
    </div>
  );
};

export default SolutionsPage;