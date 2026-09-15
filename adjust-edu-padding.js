const fs = require('fs');

let c = fs.readFileSync('c:/Users/USER/Documents/Portfolio/src/components/Education.tsx', 'utf8');
c = c.replace('<section id="education" className="py-24 relative overflow-hidden">', '<section id="education" className="relative overflow-hidden">');
c = c.replace('className="block dark:hidden bg-slate-50 text-black py-24 relative overflow-hidden"', 'className="block dark:hidden bg-slate-50 text-black pt-12 pb-24 relative overflow-hidden"');
fs.writeFileSync('c:/Users/USER/Documents/Portfolio/src/components/Education.tsx', c);

console.log('Padding adjusted');
