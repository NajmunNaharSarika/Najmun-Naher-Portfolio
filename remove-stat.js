const fs = require('fs');
let c = fs.readFileSync('c:/Users/USER/Documents/Portfolio/src/components/Hero.tsx', 'utf8');

const startStr = "{/* ── Minimalist Stat Bar ── */}";
const startIndex = c.indexOf(startStr);
if (startIndex !== -1) {
    // Find the end of the light mode block
    const endStr = "{/* DARK MODE — 100% Untouched";
    let endIndex = c.indexOf(endStr, startIndex);
    
    // Actually the stat bar ends just before the closing </div> of light mode block
    // Let's just find the closing </div> that is followed by the dark mode comment
    let searchStr = "      </div>\n\n      {/* ════════";
    let realEnd = c.indexOf("{/* DARK MODE");
    
    // I can just replace the specific code block
    const block = `        {/* ── Minimalist Stat Bar ── */}
        <div className="border-t border-black/10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center max-w-4xl mx-auto divide-y sm:divide-y-0 sm:divide-x divide-black/10">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="flex flex-col items-center pt-6 sm:pt-0"
                >
                  <span className="text-4xl sm:text-5xl font-black text-black mb-2">{stat.value}</span>
                  <span className="text-xs text-black/50 font-bold uppercase tracking-widest">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>`;
    
    c = c.replace(block, '');
    fs.writeFileSync('c:/Users/USER/Documents/Portfolio/src/components/Hero.tsx', c);
    console.log('Removed');
}
