const fs = require('fs');

const content = fs.readFileSync('src/components/AdminPanel.tsx', 'utf8');

const injection = `
              {/* Logo Layout & Custom Button Options */}
              <div className="pt-6 border-t border-slate-800">
                <h2 className="text-lg font-bold text-white mb-4">Logo Image & Layout Controls</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Logo Icon Mode</label>
                    <select
                      value={localConfig.logo?.iconVariant || 'network-orb'}
                      onChange={(e) =>
                        setLocalConfig({
                          ...localConfig,
                          logo: { ...localConfig.logo, iconVariant: e.target.value as any },
                        })
                      }
                      className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                    >
                      <option value="network-orb">Default Vector Orb</option>
                      <option value="custom-image">Custom Image (Upload above)</option>
                      <option value="none">Hide Icon Entirely</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Logo Size ({localConfig.logo?.logoSize || 100}%)
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
                      Gap between Icon & Text ({localConfig.logo?.gap !== undefined ? localConfig.logo.gap : 12}px)
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="40"
                      value={localConfig.logo?.gap !== undefined ? localConfig.logo.gap : 12}
                      onChange={(e) =>
                        setLocalConfig({
                          ...localConfig,
                          logo: { ...localConfig.logo, gap: parseInt(e.target.value) },
                        })
                      }
                      className="w-full mt-2 accent-sky-500"
                    />
                  </div>
                  <div className="flex items-center mt-6">
                    <input
                      type="checkbox"
                      id="showTagline"
                      checked={localConfig.logo?.showTagline !== false}
                      onChange={(e) =>
                        setLocalConfig({
                          ...localConfig,
                          logo: { ...localConfig.logo, showTagline: e.target.checked },
                        })
                      }
                      className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-sky-500 focus:ring-sky-500 focus:ring-offset-slate-950"
                    />
                    <label htmlFor="showTagline" className="ml-2 text-sm text-slate-300 font-semibold cursor-pointer">
                      Show Tagline under Brand Name
                    </label>
                  </div>
                </div>

                <div className="p-5 border border-sky-500/30 bg-sky-950/20 rounded-xl space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-sky-400">Custom Action Button Instead of Text</h3>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="showCustomButton"
                        checked={localConfig.logo?.showCustomButton || false}
                        onChange={(e) =>
                          setLocalConfig({
                            ...localConfig,
                            logo: { ...localConfig.logo, showCustomButton: e.target.checked },
                          })
                        }
                        className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-sky-500 focus:ring-sky-500 focus:ring-offset-slate-950"
                      />
                      <label htmlFor="showCustomButton" className="ml-2 text-xs text-sky-200 font-bold cursor-pointer">
                        Replace Text with Button
                      </label>
                    </div>
                  </div>
                  
                  {localConfig.logo?.showCustomButton && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 mb-1">Button Text</label>
                        <input
                          type="text"
                          value={localConfig.logo?.customButtonText || ''}
                          placeholder="e.g., Click Here"
                          onChange={(e) =>
                            setLocalConfig({
                              ...localConfig,
                              logo: { ...localConfig.logo, customButtonText: e.target.value },
                            })
                          }
                          className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-sky-500"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 mb-1">Button Link / URL</label>
                        <input
                          type="text"
                          value={localConfig.logo?.customButtonUrl || ''}
                          placeholder="https://..."
                          onChange={(e) =>
                            setLocalConfig({
                              ...localConfig,
                              logo: { ...localConfig.logo, customButtonUrl: e.target.value },
                            })
                          }
                          className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-sky-500"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 mb-1">Button Color</label>
                        <select
                          value={localConfig.logo?.customButtonColor || 'sky'}
                          onChange={(e) =>
                            setLocalConfig({
                              ...localConfig,
                              logo: { ...localConfig.logo, customButtonColor: e.target.value },
                            })
                          }
                          className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-sky-500"
                        >
                          <option value="sky">Sky Blue</option>
                          <option value="emerald">Emerald Green</option>
                          <option value="rose">Rose Red</option>
                          <option value="indigo">Indigo Purple</option>
                          <option value="slate">Dark Slate</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-2 justify-end pb-1">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            checked={localConfig.logo?.customButtonShine || false}
                            onChange={(e) =>
                              setLocalConfig({
                                ...localConfig,
                                logo: { ...localConfig.logo, customButtonShine: e.target.checked },
                              })
                            }
                            className="w-3.5 h-3.5 rounded border-slate-700 bg-slate-900 text-sky-500"
                          />
                          <span className="ml-2 text-[11px] text-slate-300">Enable Shine Animation</span>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            checked={localConfig.logo?.customButtonBorder || false}
                            onChange={(e) =>
                              setLocalConfig({
                                ...localConfig,
                                logo: { ...localConfig.logo, customButtonBorder: e.target.checked },
                              })
                            }
                            className="w-3.5 h-3.5 rounded border-slate-700 bg-slate-900 text-sky-500"
                          />
                          <span className="ml-2 text-[11px] text-slate-300">Show Light Border</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800">`;

const fixedContent = content.replace(
  /<div className="pt-6 border-t border-slate-800">\n\s*<h2 className="text-lg font-bold text-white mb-4">Social Media Links<\/h2>/,
  injection + '\n                <h2 className="text-lg font-bold text-white mb-4">Social Media Links</h2>'
);

fs.writeFileSync('src/components/AdminPanel.tsx', fixedContent);
