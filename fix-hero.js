const fs = require('fs');
let c = fs.readFileSync('c:/Users/USER/Documents/Portfolio/src/components/Hero.tsx', 'utf8');
c = c.replace('className="gradient-text-animated font-heading"', 'className="text-black dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-violet-500 dark:via-pink-500 dark:to-orange-500 font-heading"');
c = c.replace('bg-violet-500', 'bg-black dark:bg-violet-500');
fs.writeFileSync('c:/Users/USER/Documents/Portfolio/src/components/Hero.tsx', c);
console.log('Fixed');
