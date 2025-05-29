
import React, { useState, useMemo } from 'react';
import { C_REFERENCE_ITEMS } from '../constants.js';
import CopyButton from '../components/CopyButton.js';

const ReferencePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = useMemo(() => {
    if (!searchTerm.trim()) {
      return C_REFERENCE_ITEMS;
    }
    const lowerSearchTerm = searchTerm.toLowerCase();
    return C_REFERENCE_ITEMS.filter(item =>
      item.name.toLowerCase().includes(lowerSearchTerm) ||
      item.description.toLowerCase().includes(lowerSearchTerm) ||
      item.syntax.toLowerCase().includes(lowerSearchTerm)
    );
  }, [searchTerm]);

  return (
    <div className="space-y-8">
      <header className="pb-4 border-b border-slate-700">
        <h2 className="text-3xl font-bold text-sky-400 mb-2">C言語リファレンス</h2>
        <p className="text-slate-400">よく使われるC言語の関数や構文の一覧です。クリックで詳細をコピーできます。</p>
      </header>

      <div className="mb-6">
        <input
          type="text"
          placeholder="関数名、説明、構文で検索..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md p-3 bg-slate-800 border border-slate-700 rounded-md text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
        />
      </div>

      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-slate-800 p-5 rounded-lg shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-sky-400 mb-2">{item.name}</h3>
                <p className="text-sm text-slate-300 mb-3 leading-relaxed">{item.description}</p>
                <div className="mb-4">
                  <p className="text-xs text-slate-500 mb-1">構文:</p>
                  <pre className="bg-slate-900 p-2.5 rounded-md text-slate-100 font-roboto-mono text-xs overflow-x-auto">
                    <code>{item.syntax}</code>
                  </pre>
                </div>
                {item.example && (
                  <div className="mb-4">
                    <p className="text-xs text-slate-500 mb-1">使用例:</p>
                    <pre className="bg-slate-900 p-2.5 rounded-md text-slate-100 font-roboto-mono text-xs overflow-x-auto">
                      <code>{item.example}</code>
                    </pre>
                  </div>
                )}
              </div>
              <div className="mt-auto pt-3 flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
                <CopyButton textToCopy={item.syntax} label="構文コピー" className="w-full sm:w-auto" />
                {item.example && <CopyButton textToCopy={item.example} label="使用例コピー" className="w-full sm:w-auto" />}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-slate-400 text-lg">検索条件に一致する項目は見つかりませんでした。</p>
        </div>
      )}
    </div>
  );
};

export default ReferencePage;