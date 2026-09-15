const fs = require('fs');

let c = fs.readFileSync('c:/Users/USER/Documents/Portfolio/src/components/Contact.tsx', 'utf8');

if (!c.includes('FiExternalLink')) {
    c = c.replace('FiDownload', 'FiDownload, FiExternalLink');
}

const oldBlock = `<a href="/NajmunNaher_FinalCV.pdf" download="Najmun_Naher_CV.pdf" className="group inline-flex items-center justify-between w-full p-6 bg-slate-50 border border-black/10 hover:border-black transition-colors">
                  <div>
                    <span className="block font-bold text-lg mb-1">Curriculum Vitae</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-black/50">PDF FORMAT · 156 KB</span>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                    <FiDownload className="w-5 h-5" />
                  </div>
                </a>`;

const newBlock = `<div className="flex flex-col sm:flex-row items-center justify-between w-full p-6 bg-slate-50 border border-black/10 gap-4 transition-colors hover:border-black/30">
                  <div className="text-center sm:text-left">
                    <span className="block font-bold text-lg mb-1">Curriculum Vitae</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-black/50">PDF FORMAT · 156 KB</span>
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <a href="/NajmunNaher_FinalCV.pdf" target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 h-12 bg-transparent hover:bg-black text-black hover:text-white border border-black transition-colors text-xs font-bold uppercase tracking-widest">
                      <FiExternalLink className="w-4 h-4" />
                      <span>View Full CV</span>
                    </a>
                    <a href="/NajmunNaher_FinalCV.pdf" download="Najmun_Naher_CV.pdf" className="w-12 h-12 rounded-full flex-shrink-0 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors text-black" title="Download CV">
                      <FiDownload className="w-4 h-4" />
                    </a>
                  </div>
                </div>`;

c = c.replace(oldBlock, newBlock);
fs.writeFileSync('c:/Users/USER/Documents/Portfolio/src/components/Contact.tsx', c);
console.log('CV buttons updated');
