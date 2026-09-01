const fs = require('fs');

let content = fs.readFileSync('src/components/AdminPanel.tsx', 'utf8');

// 1. Add Share2 icon to imports
content = content.replace(/import \{([^}]+)\} from 'lucide-react';/, (match, p1) => {
  if (!p1.includes('Share2')) {
    return `import { ${p1.trim()}, Share2 } from 'lucide-react';`;
  }
  return match;
});

// 2. Add 'social' to tabs
content = content.replace(/\{ id: 'branding', label: 'Site Branding & Logo', icon: Settings, badge: null \},/, `{ id: 'branding', label: 'Site Branding & Logo', icon: Settings, badge: null },
              { id: 'social', label: 'Social Media', icon: Share2, badge: null },`);

// 3. Remove Social Media from Branding Tab
const socialMediaRegex = /<h2 className="text-lg font-bold text-white mb-4">Social Media Links<\/h2>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;
content = content.replace(socialMediaRegex, '</div>');

// 4. Add the new Social Media Tab
const socialTabCode = `
          {activeTab === 'social' && (
            <div className="space-y-8 max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h1 className="text-xl font-extrabold text-white">
                  Social Media Platforms
                </h1>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="hideAllSocial"
                    checked={localConfig.agency?.social?.hideAll || false}
                    onChange={(e) =>
                      setLocalConfig({
                        ...localConfig,
                        agency: {
                          ...localConfig.agency,
                          social: {
                            ...localConfig.agency?.social,
                            hideAll: e.target.checked
                          }
                        } as any
                      })
                    }
                    className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-sky-500 focus:ring-sky-500"
                  />
                  <label htmlFor="hideAllSocial" className="text-sm font-bold text-slate-300 cursor-pointer">
                    Hide All Social Icons
                  </label>
                </div>
              </div>
              <p className="text-xs text-slate-400">Manage all your social media platforms here. To hide a specific platform, just clear its URL.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {['facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'github', 'tiktok', 'pinterest'].map((network) => (
                  <div key={network} className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <label className="block text-xs font-bold text-slate-300 mb-2 capitalize">{network} Profile URL</label>
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
                      className="w-full px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>
                ))}
              </div>
              
              <div className="pt-6 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => triggerSaveNotification('Social Media updated!')}
                  className="px-6 py-2.5 rounded-xl bg-sky-500 text-slate-950 font-bold text-xs"
                >
                  Save Social Settings
                </button>
              </div>
            </div>
          )}
`;

content = content.replace(/\{activeTab === 'agency' && \(/, socialTabCode + '\n          {activeTab === \'agency\' && (');

// 5. Enhance Logo size and placement controls
const customLogoRegex = /Logo Size \(\{localConfig\.logo\?\.logoSize \|\| 100\}%\)[\s\S]*?<\/div>\s*<div>\s*<label className="block text-xs font-bold text-slate-300 mb-1">/m;
const logoSizeReplacement = `
                      Global Logo Size ({localConfig.logo?.logoSize || 100}%)
                    </label>
                    <input
                      type="range"
                      min="20"
                      max="300"
                      value={localConfig.logo?.logoSize || 100}
                      onChange={(e) =>
                        setLocalConfig({
                          ...localConfig,
                          logo: { ...localConfig.logo, logoSize: parseInt(e.target.value) },
                        })
                      }
                      className="w-full mt-2 accent-sky-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Header Logo Alignment
                    </label>
                    <select
                      value={localConfig.logo?.headerLogoAlign || 'left'}
                      onChange={(e) =>
                        setLocalConfig({
                          ...localConfig,
                          logo: { ...localConfig.logo, headerLogoAlign: e.target.value as any },
                        })
                      }
                      className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                    >
                      <option value="left">Left</option>
                      <option value="center">Center</option>
                      <option value="right">Right</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Footer Logo Alignment
                    </label>
                    <select
                      value={localConfig.logo?.footerLogoAlign || 'left'}
                      onChange={(e) =>
                        setLocalConfig({
                          ...localConfig,
                          logo: { ...localConfig.logo, footerLogoAlign: e.target.value as any },
                        })
                      }
                      className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                    >
                      <option value="left">Left</option>
                      <option value="center">Center</option>
                      <option value="right">Right</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">`;

content = content.replace(customLogoRegex, logoSizeReplacement);

fs.writeFileSync('src/components/AdminPanel.tsx', content);
