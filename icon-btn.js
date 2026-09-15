const fs = require('fs');

let c = fs.readFileSync('c:/Users/USER/Documents/Portfolio/src/components/Contact.tsx', 'utf8');

const oldBtn = `<a href="/NajmunNaher_FinalCV.pdf" target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 h-12 bg-transparent hover:bg-black text-black hover:text-white border border-black transition-colors text-xs font-bold uppercase tracking-widest">
                      <FiExternalLink className="w-4 h-4" />
                      <span>View Full CV</span>
                    </a>`;

const newBtn = `<a href="/NajmunNaher_FinalCV.pdf" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full flex-shrink-0 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors text-black" title="View Full CV">
                      <FiExternalLink className="w-4 h-4" />
                    </a>`;

c = c.replace(oldBtn, newBtn);
fs.writeFileSync('c:/Users/USER/Documents/Portfolio/src/components/Contact.tsx', c);
console.log('Done');
