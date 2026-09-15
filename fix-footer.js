const fs = require('fs');
let c = fs.readFileSync('c:/Users/USER/Documents/Portfolio/src/components/Footer.tsx', 'utf8');

const logoStr = `<div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-600 via-purple-600 to-pink-500 dark:from-rose-500 dark:to-pink-600 text-white font-bold text-base flex items-center justify-center shadow-md">
              NN
            </div>`;
c = c.replace(logoStr, '');

c = c.replace(/text-\[#1E1B4B\]/g, 'text-black');
c = c.replace(/border-violet-100/g, 'border-slate-200');

c = c.replace(/bg-violet-50 dark:bg-slate-800 text-violet-700 dark:text-slate-200 hover:text-pink-600 dark:hover:text-rose-400 hover:bg-violet-100 transition-colors border border-violet-200/g, 
              'bg-slate-100 dark:bg-slate-800 text-black dark:text-slate-200 hover:text-black dark:hover:text-rose-400 hover:bg-slate-200 transition-colors border border-slate-200');

c = c.replace(/bg-emerald-50 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-950\/40 transition-colors border border-emerald-200/g, 
              'bg-slate-100 dark:bg-slate-800 text-black dark:text-emerald-400 hover:bg-slate-200 dark:hover:bg-emerald-950/40 transition-colors border border-slate-200');

c = c.replace(/bg-pink-50 dark:bg-slate-800 text-pink-600 dark:text-rose-500 hover:bg-pink-100 dark:hover:bg-rose-950\/40 transition-colors border border-pink-200/g, 
              'bg-slate-100 dark:bg-slate-800 text-black dark:text-rose-500 hover:bg-slate-200 dark:hover:bg-rose-950/40 transition-colors border border-slate-200');

c = c.replace(/bg-violet-50 dark:bg-slate-800 text-violet-700 dark:text-indigo-500 hover:bg-violet-100 dark:hover:bg-indigo-950\/40 transition-colors border border-violet-200/g, 
              'bg-slate-100 dark:bg-slate-800 text-black dark:text-indigo-500 hover:bg-slate-200 dark:hover:bg-indigo-950/40 transition-colors border border-slate-200');

c = c.replace(/bg-gradient-to-r from-violet-600 to-pink-500 dark:from-rose-500 dark:to-pink-600/g, 
              'bg-black dark:bg-gradient-to-r dark:from-rose-500 dark:to-pink-600');

fs.writeFileSync('c:/Users/USER/Documents/Portfolio/src/components/Footer.tsx', c);
