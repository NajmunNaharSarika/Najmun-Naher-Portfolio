const fs = require('fs');

let skills = fs.readFileSync('c:/Users/USER/Documents/Portfolio/src/components/Skills.tsx', 'utf8');
skills = skills.replace('<section id="skills" className="py-24 relative overflow-hidden">', '<section id="skills" className="relative overflow-hidden">');
skills = skills.replace('className="block dark:hidden bg-white text-black pt-12 pb-24 relative overflow-hidden"', 'className="block dark:hidden bg-white text-black pt-12 pb-12 relative overflow-hidden"');
fs.writeFileSync('c:/Users/USER/Documents/Portfolio/src/components/Skills.tsx', skills);

let projects = fs.readFileSync('c:/Users/USER/Documents/Portfolio/src/components/Projects.tsx', 'utf8');
projects = projects.replace('<section id="projects" className="py-24 relative overflow-hidden">', '<section id="projects" className="relative overflow-hidden">');
projects = projects.replace('className="block dark:hidden bg-slate-50 text-black py-24 relative overflow-hidden"', 'className="block dark:hidden bg-slate-50 text-black pt-12 pb-24 relative overflow-hidden"');
fs.writeFileSync('c:/Users/USER/Documents/Portfolio/src/components/Projects.tsx', projects);

console.log('Padding adjusted');
