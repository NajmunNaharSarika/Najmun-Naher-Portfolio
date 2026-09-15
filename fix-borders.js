const fs = require('fs');
let c = fs.readFileSync('c:/Users/USER/Documents/Portfolio/src/components/Contact.tsx', 'utf8');

c = c.replace('className="flex flex-col sm:flex-row items-center justify-between w-full p-6 bg-slate-50 dark:bg-slate-900 border border-black/10 dark:border-slate-800 gap-4 transition-colors hover:border-black/30 dark:hover:border-rose-500/50"', 'className="flex flex-col sm:flex-row items-center justify-between w-full p-6 bg-slate-50 dark:bg-slate-900 border border-black dark:border-slate-800 gap-4 transition-colors hover:border-black dark:hover:border-rose-500/50"');

c = c.replace('className="lg:col-span-7 bg-slate-50 dark:bg-slate-900 p-8 sm:p-12 border border-black/10 dark:border-slate-800 relative"', 'className="lg:col-span-7 bg-slate-50 dark:bg-slate-900 p-8 sm:p-12 border border-black dark:border-slate-800 relative"');

fs.writeFileSync('c:/Users/USER/Documents/Portfolio/src/components/Contact.tsx', c);
