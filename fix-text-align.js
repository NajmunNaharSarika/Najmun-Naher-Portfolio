const fs = require('fs');
let c = fs.readFileSync('c:/Users/USER/Documents/Portfolio/src/components/Hero.tsx', 'utf8');

c = c.replace('className="text-base sm:text-lg text-black/60 dark:text-slate-400 leading-relaxed max-w-lg mb-10 font-light"', 'className="text-base sm:text-lg text-black/60 dark:text-slate-400 leading-relaxed max-w-lg mb-10 font-light text-justify"');

fs.writeFileSync('c:/Users/USER/Documents/Portfolio/src/components/Hero.tsx', c);
console.log('Fixed text alignment');
