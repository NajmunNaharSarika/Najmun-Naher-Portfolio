const fs = require('fs');

function rewriteLightMode(filePath, generateLightModeContent) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  const lines = content.split('\n');
  let lightStartIndex = -1;
  let darkStartIndex = -1;

  for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('{/* LIGHT MODE')) {
          if (i > 0 && lines[i-1].includes('=====')) {
              lightStartIndex = i - 1;
          } else {
              lightStartIndex = i;
          }
      }
      if (lines[i].includes('{/* DARK MODE')) {
          if (i > 0 && lines[i-1].includes('=====')) {
              darkStartIndex = i - 1;
          } else {
              darkStartIndex = i;
          }
      }
  }

  if (lightStartIndex === -1 || darkStartIndex === -1) {
    console.log('Markers not found in', filePath);
    return;
  }

  const beforeLight = lines.slice(0, lightStartIndex).join('\n') + '\n';
  const darkSection = lines.slice(darkStartIndex).join('\n');
  
  const newLightMode = generateLightModeContent();
  
  fs.writeFileSync(filePath, beforeLight + newLightMode + darkSection);
  console.log('Updated:', filePath);
}

// 4. Skills.tsx
rewriteLightMode('c:/Users/USER/Documents/Portfolio/src/components/Skills.tsx', () => `
      {/* ========================================================================= */}
      {/* LIGHT MODE: Professional & Clean                                          */}
      {/* ========================================================================= */}
      <div className="block dark:hidden bg-slate-50 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Technical Expertise
            </h2>
            <p className="text-base text-slate-600">
              A comprehensive overview of my technical stack, focusing on enterprise application development, clean architecture, and modern web technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Languages */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <FiCode className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Languages</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {skills.languages.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-3 rounded-md bg-slate-50 border border-slate-100">
                    <FiCheckCircle className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-semibold text-slate-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <FiLayers className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Frameworks</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {skills.frameworks.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-3 rounded-md bg-slate-50 border border-slate-100">
                    <FiCheckCircle className="w-4 h-4 text-indigo-500" />
                    <span className="text-sm font-semibold text-slate-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Database & Patterns */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <FiDatabase className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Databases & Patterns</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.databases_and_patterns.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-3 rounded-md bg-slate-50 border border-slate-100">
                    <FiCheckCircle className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm font-semibold text-slate-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center">
                  <FiTool className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Tools & Other</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-md text-sm font-medium bg-slate-50 border border-slate-200 text-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
\n`);

// 5. Education.tsx
rewriteLightMode('c:/Users/USER/Documents/Portfolio/src/components/Education.tsx', () => `
      {/* ========================================================================= */}
      {/* LIGHT MODE: Professional & Clean                                          */}
      {/* ========================================================================= */}
      <div className="block dark:hidden bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Education & Training
            </h2>
            <p className="text-base text-slate-600">
              My academic background and specialized technical training programs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Education Column */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <FiBookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, i) => (
                  <div key={i} className="relative pl-6 sm:pl-8 border-l-2 border-slate-200">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white" />
                    
                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                          {edu.year}
                        </span>
                        <span className="text-sm font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                          {edu.result}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1 leading-snug">
                        {edu.degree}
                      </h4>
                      <p className="text-sm text-slate-600 font-medium">
                        {edu.institute}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Training Column */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center">
                  <FiAward className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Certifications</h3>
              </div>

              <div className="space-y-6">
                {training.map((train, i) => (
                  <div key={i} className="relative pl-6 sm:pl-8 border-l-2 border-slate-200">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-pink-500 border-4 border-white" />
                    
                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="inline-block text-xs font-bold uppercase tracking-wider text-pink-600 bg-pink-50 px-2.5 py-1 rounded-md mb-3">
                        {train.duration}
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                        {train.course}
                      </h4>
                      <p className="text-sm text-slate-600 font-medium">
                        {train.institute}
                      </p>
                      
                      {i === 0 && (
                        <div className="mt-4 pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-2">
                           <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1.5"><FiCheckCircle className="w-3.5 h-3.5 text-pink-400" /> ASP.NET MVC / Core</span>
                           <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1.5"><FiCheckCircle className="w-3.5 h-3.5 text-pink-400" /> C# & MS SQL</span>
                           <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1.5"><FiCheckCircle className="w-3.5 h-3.5 text-pink-400" /> Angular 16</span>
                           <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1.5"><FiCheckCircle className="w-3.5 h-3.5 text-pink-400" /> Enterprise Architecture</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
\n`);
