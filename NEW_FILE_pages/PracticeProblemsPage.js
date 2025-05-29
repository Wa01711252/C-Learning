
import React, { useState, useCallback, useEffect, useMemo, useRef } from 'react';
import { PRACTICE_PROBLEMS, CHAPTER_TITLES } from '../constants.js';
import { LightBulbIcon, ChevronRightIcon } from '../components/icons.js';
import { GoogleGenAI } from "@google/genai";

// Initialize GoogleGenAI client
let ai = null;
let aiInitializationError = null;

const apiKey = process.env.API_KEY;

if (apiKey && apiKey !== "" && apiKey !== "YOUR_API_KEY_PLACEHOLDER") {
  try {
    ai = new GoogleGenAI({ apiKey });
  } catch (error) {
    console.error("Failed to initialize GoogleGenAI:", error);
    aiInitializationError = error instanceof Error ? error.message : "AI機能の初期化中に不明なエラーが発生しました。";
  }
} else {
  aiInitializationError = "APIキーが設定されていません。AIによるコード判定機能は無効です。";
  console.warn(aiInitializationError);
}

const getChapterKeyFromProblemId = (problemId) => {
  return problemId.split('-')[0];
};

const PracticeProblemsPage = () => {
  const [activeProblemId, setActiveProblemId] = useState(
    PRACTICE_PROBLEMS.length > 0 ? PRACTICE_PROBLEMS[0].id : null
  );
  const [userCode, setUserCode] = useState('');
  const [feedback, setFeedback] = useState({ type: 'none', message: '' });
  const [showSolution, setShowSolution] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [loading, setLoading] = useState(false);
  const [expandedChapterKeys, setExpandedChapterKeys] = useState(new Set());
  
  const problemRefs = useRef({});


  const currentProblemIndex = useMemo(() => {
    if (!activeProblemId) return -1;
    return PRACTICE_PROBLEMS.findIndex(p => p.id === activeProblemId);
  }, [activeProblemId]);

  const currentProblem = useMemo(() => {
    if (currentProblemIndex === -1) return undefined;
    return PRACTICE_PROBLEMS[currentProblemIndex];
  }, [currentProblemIndex]);

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
      .filter(key => groups[key] && groups[key].length > 0) // Filter out chapters with no problems or no title
      .map(key => ({
        id: key,
        title: CHAPTER_TITLES[key] || `Chapter ${key.replace('ch', '')}`, // Fallback title
        problems: groups[key],
      }));
  }, []);

  useEffect(() => {
    if (currentProblem) {
      setUserCode(currentProblem.starterCode);
      setFeedback({ type: 'none', message: '' });
      setShowSolution(false);
      setShowExplanation(false);
      setLoading(false);
      
      const chapterKey = getChapterKeyFromProblemId(currentProblem.id);
      setExpandedChapterKeys(prev => new Set(prev).add(chapterKey));

      setTimeout(() => { 
        const activeProblemElement = problemRefs.current[currentProblem.id];
        if (activeProblemElement) {
            activeProblemElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 0);

    } else if (PRACTICE_PROBLEMS.length > 0) {
      setActiveProblemId(PRACTICE_PROBLEMS[0].id);
    }
  }, [currentProblem]);


  const handleCodeChange = useCallback((event) => {
    setUserCode(event.target.value);
  }, []);

  const handleSubmitCode = useCallback(async () => {
    if (!currentProblem) return;
    setShowSolution(false);
    setShowExplanation(false);
    setFeedback({ type: 'none', message: '' });

    if (!userCode.trim()) {
      setFeedback({ type: 'info', message: 'コードを入力してください。' });
      return;
    }

    if (!ai || aiInitializationError) {
      setFeedback({ 
        type: 'info', 
        message: (aiInitializationError || 'AI判定機能が利用できません。') + '基本的なチェックを行います。' 
      });
      setLoading(true);
      setTimeout(() => {
        const normalize = (str) => str.replace(/\s+/g, ' ').trim();
        if (normalize(userCode) === normalize(currentProblem.solutionExample)) {
          setFeedback({ type: 'success', message: '正解です！（簡易チェック）' });
        } else {
          setFeedback({ type: 'error', message: '不正解です。（簡易チェック）ヒントや解答例も参考にしてください。' });
        }
        setLoading(false);
      }, 1000);
      return;
    }

    setLoading(true);
    const prompt = `あなたはC言語の専門家です。以下のC言語のコードが、指定された問題を正しく解決しているか評価してください。

問題のタイトル: ${currentProblem.title}
問題の説明:
${currentProblem.description}

ユーザーのコード:
\`\`\`c
${userCode}
\`\`\`

期待される動作のヒント (もしあれば):
${currentProblem.solutionExample ? `類似の解答例:\n\`\`\`c\n${currentProblem.solutionExample}\n\`\`\`` : 'なし'}

評価基準:
- コードはC言語の構文として正しいか。
- コードは問題の要件（上記「問題の説明」を参照）をすべて満たしているか。
- コードは期待される結果を生成するか。

応答は以下のJSON形式で、マークダウンブロックなしで返してください:
{
  "isCorrect": trueかfalse,
  "feedback": "ユーザーへの具体的で建設的なフィードバックを日本語でお願いします。（例: '素晴らしいです！問題の要件を満たしています。' または '惜しい！○○の部分を見直してみてください。期待される出力は△△ですが、現在のコードでは□□となりそうです。'）"
}
`;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-04-17",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
        },
      });

      let jsonStr = response.text.trim();
      const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
      const match = jsonStr.match(fenceRegex);
      if (match && match[2]) {
        jsonStr = match[2].trim();
      }
      
      const result = JSON.parse(jsonStr);

      if (result.isCorrect) {
        setFeedback({ type: 'success', message: `AI判定: ${result.feedback || '正解です！素晴らしい！ 🎉'}` });
      } else {
        setFeedback({ type: 'error', message: `AI判定: ${result.feedback || 'もう少しです。頑張りましょう！'}` });
      }
    } catch (error) {
      console.error('AI判定エラー:', error);
      let errorMessage = 'AIによる判定中にエラーが発生しました。';
      if (error instanceof Error) {
          if (error.message.toLowerCase().includes("api key not valid") || error.message.toLowerCase().includes("permission denied")) {
              errorMessage = 'APIキーが無効か、権限がありません。設定を確認してください。';
          } else if (error.message.toLowerCase().includes("quota") || error.message.toLowerCase().includes("resource has been exhausted")) {
              errorMessage = 'APIの利用上限に達した可能性があります。時間をおいて再試行してください。';
          } else if (error.message.toLowerCase().includes("model not found")) {
              errorMessage = '指定されたAIモデルが見つかりません。';
          }
      }
      setFeedback({ type: 'error', message: errorMessage + ' (詳細はコンソールを確認してください)' });
    } finally {
      setLoading(false);
    }
  }, [userCode, currentProblem, aiInitializationError]);

  const navigateProblem = (direction) => {
    if (PRACTICE_PROBLEMS.length === 0) return;
    let newIndex = currentProblemIndex;
    if (direction === 'next') {
      newIndex = (currentProblemIndex + 1) % PRACTICE_PROBLEMS.length;
    } else {
      newIndex = (currentProblemIndex - 1 + PRACTICE_PROBLEMS.length) % PRACTICE_PROBLEMS.length;
    }
    setActiveProblemId(PRACTICE_PROBLEMS[newIndex].id);
  };

  const handleNextProblem = useCallback(() => navigateProblem('next'), [currentProblemIndex]);
  const handlePrevProblem = useCallback(() => navigateProblem('prev'), [currentProblemIndex]);

  const handleProblemSelect = useCallback((problemId) => {
    setActiveProblemId(problemId);
  }, []);

  const handleChapterToggle = useCallback((chapterKey) => {
    setExpandedChapterKeys(prev => {
      const newSet = new Set(prev);
      if (newSet.has(chapterKey)) {
        newSet.delete(chapterKey);
      } else {
        newSet.add(chapterKey);
      }
      return newSet;
    });
  }, []);

  const toggleSolution = useCallback(() => {
    setShowSolution(prev => !prev);
    if (!showSolution) setFeedback({ type: 'none', message: '' });
  }, [showSolution]);
  
  const toggleExplanation = useCallback(() => {
    setShowExplanation(prev => !prev);
     if (!showExplanation) setFeedback({ type: 'none', message: '' });
  }, [showExplanation]);

  const getDifficultyClass = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-600 text-green-100';
      case 'Medium': return 'bg-yellow-500 text-yellow-900';
      case 'Hard': return 'bg-red-600 text-red-100';
      default: return 'bg-slate-600 text-slate-100';
    }
  };
  
  const getFeedbackClass = (type) => {
    switch (type) {
      case 'success': return 'bg-emerald-700 border-emerald-500 text-emerald-100';
      case 'error': return 'bg-red-700 border-red-500 text-red-100';
      case 'info': return 'bg-sky-700 border-sky-500 text-sky-100';
      default: return 'hidden';
    }
  };

  if (PRACTICE_PROBLEMS.length === 0) {
    return <div className="text-center py-10 text-slate-400">問題がありません。</div>;
  }
  if (!currentProblem) {
     return <div className="text-center py-10 text-slate-400">問題の読み込み中...</div>;
  }

  return (
    <div className="space-y-6">
      <header className="pb-4 border-b border-slate-700">
        <h2 className="text-3xl font-bold text-sky-400 mb-2">問題演習 ({currentProblemIndex + 1}/{PRACTICE_PROBLEMS.length})</h2>
        <p className="text-slate-400">C言語のプログラミングスキルを試してみましょう。</p>
      </header>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Navigation Panel */}
        <nav className="md:w-1/3 lg:w-1/4 md:sticky md:top-24 md:max-h-[calc(100vh-7rem)] overflow-y-auto bg-slate-800 p-4 rounded-lg shadow-lg scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800">
          <h3 className="text-lg font-semibold text-sky-300 mb-3">章と問題一覧</h3>
          <ul className="space-y-2">
            {groupedProblems.map(chapter => (
              <li key={chapter.id}>
                <button
                  onClick={() => handleChapterToggle(chapter.id)}
                  className="w-full flex items-center justify-between text-left px-3 py-2.5 rounded-md hover:bg-slate-700 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  aria-expanded={expandedChapterKeys.has(chapter.id)}
                  aria-controls={`chapter-problems-${chapter.id}`}
                >
                  <span className="font-medium text-slate-200 text-sm">{chapter.title}</span>
                  <ChevronRightIcon className={`w-5 h-5 text-slate-400 transform transition-transform duration-200 ${expandedChapterKeys.has(chapter.id) ? 'rotate-90' : ''}`} />
                </button>
                {expandedChapterKeys.has(chapter.id) && (
                  <ul id={`chapter-problems-${chapter.id}`} className="mt-2 ml-3 pl-3 border-l border-slate-700 space-y-1">
                    {chapter.problems.map(problem => (
                      <li key={problem.id} ref={el => { problemRefs.current[problem.id] = el; }}>
                        <button
                          onClick={() => handleProblemSelect(problem.id)}
                          className={`w-full text-left px-3 py-2 rounded-md text-xs transition-colors duration-150 ${
                            problem.id === activeProblemId
                              ? 'bg-sky-600 text-white font-semibold shadow-md'
                              : 'text-slate-300 hover:bg-slate-600 hover:text-sky-300'
                          }`}
                        >
                          <span className={`mr-1.5 px-1.5 py-0.5 text-xs font-semibold rounded-full text-opacity-90 ${getDifficultyClass(problem.difficulty)}`}>
                            {problem.difficulty[0]}
                          </span>
                          {problem.title.substring(problem.title.indexOf(':') + 1).trim()}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Problem Details Panel */}
        <div className="md:w-2/3 lg:w-3/4 bg-slate-800 p-6 rounded-lg shadow-xl">
          <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-semibold text-slate-100">{currentProblem.title}</h3>
              <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getDifficultyClass(currentProblem.difficulty)}`}>
              {currentProblem.difficulty}
              </span>
          </div>
          <p className="text-slate-300 mb-6 whitespace-pre-line leading-relaxed">{currentProblem.description}</p>

          <div className="mb-6">
            <label htmlFor="userCode" className="block text-sm font-medium text-slate-300 mb-2">
              あなたのコード:
            </label>
            <textarea
              id="userCode"
              value={userCode}
              onChange={handleCodeChange}
              rows={12}
              className="w-full p-3 bg-slate-900 border border-slate-700 rounded-md text-slate-100 font-roboto-mono text-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-900"
              placeholder="ここにC言語のコードを入力してください..."
              aria-label="C言語コード入力エリア"
            />
          </div>

          {feedback.type !== 'none' && (
            <div className={`p-4 mb-6 rounded-md border text-sm ${getFeedbackClass(feedback.type)}`} role="alert">
              {feedback.message}
            </div>
          )}

          {showSolution && (
            <div className="mb-6 p-4 bg-slate-700 rounded-md">
              <h4 className="text-md font-semibold text-sky-300 mb-2">解答例:</h4>
              <pre className="bg-slate-900 p-3 rounded-md text-slate-100 font-roboto-mono text-sm overflow-x-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-900">
                <code>{currentProblem.solutionExample}</code>
              </pre>
            </div>
          )}
          
          {showExplanation && currentProblem.explanation && (
            <div className="mb-6 p-4 bg-slate-700/50 border border-slate-600 rounded-md">
              <div className="flex items-center text-md font-semibold text-sky-300 mb-2">
                <LightBulbIcon className="w-5 h-5 mr-2 text-yellow-400"/>
                <span>解説:</span>
              </div>
              <p className="text-slate-300 whitespace-pre-line leading-relaxed text-sm">{currentProblem.explanation}</p>
            </div>
          )}

          <div className="flex flex-wrap gap-3 items-center justify-between">
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleSubmitCode}
                disabled={loading || !userCode.trim() || !currentProblem}
                className="px-5 py-2.5 bg-sky-600 text-white font-semibold rounded-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-800 transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[120px]"
                aria-live="polite"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    判定中...
                  </>
                ) : (
                  'コード確認'
                )}
              </button>
              <button
                onClick={toggleSolution}
                disabled={loading || !currentProblem}
                className="px-5 py-2.5 bg-slate-600 text-slate-100 font-semibold rounded-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-800 transition-colors duration-150 disabled:opacity-50"
              >
                {showSolution ? '解答例を隠す' : '解答例表示'}
              </button>
              {currentProblem.explanation && (
                <button
                  onClick={toggleExplanation}
                  disabled={loading || !currentProblem}
                  className="px-5 py-2.5 bg-yellow-600 text-white font-semibold rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-slate-800 transition-colors duration-150 disabled:opacity-50"
                >
                  {showExplanation ? '解説を隠す' : '解説表示'}
                </button>
              )}
            </div>
            <div className="flex gap-3">
              <button
                onClick={handlePrevProblem}
                disabled={PRACTICE_PROBLEMS.length <= 1 || loading}
                className="px-5 py-2.5 bg-slate-500 text-slate-100 font-semibold rounded-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-800 transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                前の問題
              </button>
              <button
                onClick={handleNextProblem}
                disabled={PRACTICE_PROBLEMS.length <= 1 || loading}
                className="px-5 py-2.5 bg-slate-500 text-slate-100 font-semibold rounded-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-800 transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                次の問題
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeProblemsPage;