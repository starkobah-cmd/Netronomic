const fs = require('fs');
let content = fs.readFileSync('src/components/AdminPanel.tsx', 'utf8');

const regex = /<label className="block text-xs font-bold text-slate-300 mb-2 capitalize">\{network\} Profile URL<\/label>\\s*<input[\\s\\S]*?className="w-full px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-sky-500 transition-colors"\\s*\/>/;

const replacement = `<div className="flex items-center justify-between mb-2">
                      <label className="block text-xs font-bold text-slate-300 capitalize">{network} URL</label>
                      <div className="flex items-center gap-1.5 cursor-pointer" onClick={(e) => {
                        e.preventDefault();
                        setLocalConfig({
                          ...localConfig,
                          agency: {
                            ...localConfig.agency,
                            social: {
                              ...localConfig.agency?.social,
                              [\`\${network}_hidden\`]: !(localConfig.agency?.social as any)?.[network + '_hidden']
                            }
                          } as any
                        });
                      }}>
                        <input
                          type="checkbox"
                          checked={!(localConfig.agency?.social as any)?.[network + '_hidden']}
                          readOnly
                          className="w-3 h-3 rounded border-slate-700 bg-slate-900 text-emerald-500 focus:ring-emerald-500 pointer-events-none"
                        />
                        <span className="text-[10px] text-slate-400 font-bold uppercase">
                          {(localConfig.agency?.social as any)?.[network + '_hidden'] ? 'Hidden' : 'Visible'}
                        </span>
                      </div>
                    </div>
                    <input
                      type="text"
                      value={(localConfig.agency?.social as any)?.[network] || ''}
                      onChange={(e) =>
                        setLocalConfig({
                          ...localConfig,
                          agency: {
                            ...localConfig.agency,
                            social: {
                              ...localConfig.agency?.social,
                              [network]: e.target.value
                            }
                          } as any
                        })
                      }
                      placeholder={\`https://\${network}.com/yourprofile\`}
                      className={\`w-full px-4 py-2 rounded-xl bg-slate-900 border text-xs focus:outline-none transition-colors \${(localConfig.agency?.social as any)?.[network + '_hidden'] ? 'border-slate-800 text-slate-500 bg-slate-950 opacity-50' : 'border-slate-700 text-white focus:border-sky-500'}\`}
                    />`;

content = content.replace(regex, replacement);
fs.writeFileSync('src/components/AdminPanel.tsx', content);
