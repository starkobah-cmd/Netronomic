const fs = require('fs');

const appContent = fs.readFileSync('src/components/AdminPanel.tsx', 'utf8');

const replacement = `
              <div className="pt-6 border-t border-slate-800">
                <h2 className="text-lg font-bold text-white mb-4">Social Media Links</h2>
                <p className="text-xs text-slate-400 mb-4">Add your social media profile URLs. Leave empty to hide the button on the website.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {['facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'github'].map((network) => (
                    <div key={network}>
                      <label className="block text-xs font-bold text-slate-300 mb-1 capitalize">{network} URL</label>
                      <input
                        type="text"
                        value={(localConfig.agency?.social as any)?.[network] || ''}
                        onChange={(e) =>
                          setLocalConfig({
                            ...localConfig,
                            agency: {
                              ...localConfig.agency,
                              social: {
                                ...localConfig.agency.social,
                                [network]: e.target.value
                              }
                            } as any
                          })
                        }
                        placeholder={\`https://\${network}.com/yourprofile\`}
                        className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-end">`;

const fixedApp = appContent.replace(
  `              <div className="pt-4 border-t border-slate-800 flex justify-end">`,
  replacement
);

fs.writeFileSync('src/components/AdminPanel.tsx', fixedApp);
console.log('Social fields added to Admin Panel');
