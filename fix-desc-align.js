const fs = require('fs');
let c = fs.readFileSync('c:/Users/USER/Documents/Portfolio/src/components/Projects.tsx', 'utf8');

c = c.replace('className="text-sm text-black/60 dark:text-slate-400 line-clamp-3 mb-5 leading-relaxed font-light"', 'className="text-sm text-black/60 dark:text-slate-400 line-clamp-3 mb-5 leading-relaxed font-light text-justify"');

fs.writeFileSync('c:/Users/USER/Documents/Portfolio/src/components/Projects.tsx', c);
console.log('Fixed text alignment');
