const fs = require('fs');
let c = fs.readFileSync('c:/Users/USER/Documents/Portfolio/src/components/Skills.tsx', 'utf8');

c = c.replace('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8', 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8');

c = c.replace(/className="group"/g, 'className={`group ${idx === 3 ? "lg:col-span-2" : "lg:col-span-1"}`}');
c = c.replace(/<ul className="space-y-4">/g, '<ul className={`w-full ${idx === 3 ? "grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4" : "space-y-4"}`}>');

fs.writeFileSync('c:/Users/USER/Documents/Portfolio/src/components/Skills.tsx', c);
console.log('Fixed Skills layout');
