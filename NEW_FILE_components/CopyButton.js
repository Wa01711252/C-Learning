
import React, { useState, useCallback } from 'react';
import { CopyIcon, CheckIcon } from './icons.js';

const CopyButton = ({ textToCopy, className = '', label = 'コピー' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    if (!textToCopy) return;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('クリップボードへのコピーに失敗しました:', err);
      alert('コピーに失敗しました。');
    }
  }, [textToCopy]);

  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center justify-center px-3 py-1.5 border border-slate-600 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out
                  ${copied ? 'bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500' 
                           : 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-sky-300 focus:ring-sky-500'}
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 ${className}`}
      aria-label={copied ? 'コピーしました！' : label}
      disabled={!textToCopy}
    >
      {copied ? <CheckIcon className="w-4 h-4 mr-1.5" /> : <CopyIcon className="w-4 h-4 mr-1.5" />}
      {copied ? 'コピー完了' : label}
    </button>
  );
};

export default CopyButton;