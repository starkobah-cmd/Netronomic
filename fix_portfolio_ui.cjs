const fs = require('fs');
let content = fs.readFileSync('src/components/AdminPanel.tsx', 'utf8');

const portfolioTabView = `
          {/* TAB 3.5: PORTFOLIO MANAGEMENT */}
          {/* ------------------------------------------------------------- */}
          {activeTab === 'portfolio' && (
            <div className="space-y-6 max-w-6xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-extrabold text-white">Portfolio Management</h1>
                  <p className="text-xs text-slate-400 mt-1">
                    Manage your portfolio case studies, projects, and media.
                  </p>
                </div>

                <button
                  onClick={handleCreatePortfolio}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold text-xs shadow-lg shadow-sky-500/20 transition-all cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Project</span>
                </button>
              </div>

              {/* PORTFOLIO LIST GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(localConfig.portfolio || []).map((port) => (
                  <div key={port.id} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden group">
                    <div className="h-40 bg-slate-800 relative">
                      {port.image ? (
                        <img src={port.image} alt={port.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-500"><ImageIcon className="w-8 h-8 opacity-50" /></div>
                      )}
                      <div className="absolute top-2 right-2 flex items-center gap-2">
                        <button onClick={() => handleEditPortfolio(port)} className="w-8 h-8 rounded-lg bg-slate-900/80 backdrop-blur-sm text-sky-400 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors border border-white/10 shadow-sm"><Edit3 className="w-4 h-4" /></button>
                        <button onClick={() => handleDeletePortfolio(port.id)} className="w-8 h-8 rounded-lg bg-slate-900/80 backdrop-blur-sm text-rose-400 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-colors border border-white/10 shadow-sm"><Trash2 className="w-4 h-4" /></button>
                      </div>
                      <div className="absolute bottom-2 left-2 px-2 py-1 bg-slate-900/80 backdrop-blur-sm rounded border border-white/10 text-[10px] font-bold text-white uppercase tracking-wider">
                        {port.categoryLabel}
                      </div>
                    </div>
                    <div className="p-5 space-y-3">
                      <h3 className="text-sm font-bold text-white truncate">{port.title}</h3>
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{port.description}</p>
                      {port.client && (
                         <p className="text-[11px] text-slate-500"><span className="font-bold text-slate-300">Client:</span> {port.client}</p>
                      )}
                    </div>
                  </div>
                ))}
                {(localConfig.portfolio || []).length === 0 && (
                  <div className="col-span-full py-12 text-center border-2 border-dashed border-slate-800 rounded-2xl">
                    <Briefcase className="w-8 h-8 text-slate-600 mx-auto mb-3" />
                    <h3 className="text-sm font-bold text-slate-300">No Portfolio Projects Found</h3>
                    <p className="text-xs text-slate-500 mt-1">Click "Add New Project" to get started.</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* PORTFOLIO EDITOR MODAL */}
          <AnimatePresence>
            {isPortfolioModalOpen && editingPortfolio && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 overflow-y-auto"
              >
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-5xl shadow-2xl flex flex-col my-auto max-h-[90vh]"
                >
                  <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between shrink-0 sticky top-0 bg-slate-900 z-10 rounded-t-2xl">
                    <h2 className="text-lg font-extrabold text-white flex items-center gap-2">
                      <FolderGit2 className="w-5 h-5 text-sky-400" />
                      {editingPortfolio.id?.includes('port-') && editingPortfolio.title === '' ? 'Create New Project' : 'Edit Project'}
                    </h2>
                    <button
                      onClick={() => setIsPortfolioModalOpen(false)}
                      className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                    >
                      <XCircle className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-300 mb-1">Project Title</label>
                          <input
                            type="text"
                            required
                            value={editingPortfolio.title || ''}
                            onChange={(e) => setEditingPortfolio({ ...editingPortfolio, title: e.target.value })}
                            className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                            placeholder="e.g. Skyline Digital Transformation"
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-slate-300 mb-1">Category Value (internal)</label>
                            <input
                              type="text"
                              value={editingPortfolio.category || ''}
                              onChange={(e) => setEditingPortfolio({ ...editingPortfolio, category: e.target.value })}
                              className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                              placeholder="e.g. websites"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-300 mb-1">Category Label</label>
                            <input
                              type="text"
                              value={editingPortfolio.categoryLabel || ''}
                              onChange={(e) => setEditingPortfolio({ ...editingPortfolio, categoryLabel: e.target.value })}
                              className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                              placeholder="e.g. Websites"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-slate-300 mb-1">Client Name</label>
                            <input
                              type="text"
                              value={editingPortfolio.client || ''}
                              onChange={(e) => setEditingPortfolio({ ...editingPortfolio, client: e.target.value })}
                              className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                              placeholder="e.g. Acme Corp"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-300 mb-1">Highlight Stats</label>
                            <input
                              type="text"
                              value={editingPortfolio.stats || ''}
                              onChange={(e) => setEditingPortfolio({ ...editingPortfolio, stats: e.target.value })}
                              className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                              placeholder="e.g. 240% Growth"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-xs font-bold text-slate-300 mb-1">Live Link</label>
                          <input
                            type="text"
                            value={editingPortfolio.link || ''}
                            onChange={(e) => setEditingPortfolio({ ...editingPortfolio, link: e.target.value })}
                            className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                            placeholder="https://..."
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-300 mb-1">Project Description</label>
                          <textarea
                            rows={5}
                            value={editingPortfolio.description || ''}
                            onChange={(e) => setEditingPortfolio({ ...editingPortfolio, description: e.target.value })}
                            className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                            placeholder="Describe the project..."
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-300 mb-1">Tags (Comma separated)</label>
                          <input
                            type="text"
                            value={(editingPortfolio.tags || []).join(', ')}
                            onChange={(e) => setEditingPortfolio({ ...editingPortfolio, tags: e.target.value.split(',').map(t => t.trim()).filter(Boolean) })}
                            className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                            placeholder="React, Node.js, UI/UX"
                          />
                        </div>
                      </div>

                      <div className="space-y-6">
                        <MediaPickerField
                          label="Project Cover Image"
                          value={editingPortfolio.image || ''}
                          onChange={(url) => setEditingPortfolio({ ...editingPortfolio, image: url })}
                          category="portfolio"
                          helperText="Select or upload a thumbnail image from the media gallery."
                        />

                        <MediaPickerField
                          label="Project Video (Optional MP4)"
                          value={editingPortfolio.videoUrl || ''}
                          onChange={(url) => setEditingPortfolio({ ...editingPortfolio, videoUrl: url })}
                          category="portfolio"
                          helperText="Upload a video to display instead of the image in the project view."
                        />
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 border-t border-slate-800 flex items-center justify-end gap-3 shrink-0 bg-slate-900 rounded-b-2xl">
                    <button
                      onClick={() => setIsPortfolioModalOpen(false)}
                      className="px-4 py-2 rounded-xl bg-transparent border border-slate-700 text-slate-300 font-bold text-xs hover:bg-slate-800 transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSavePortfolio}
                      disabled={!editingPortfolio.title}
                      className="inline-flex items-center gap-2 px-6 py-2 rounded-xl bg-sky-500 text-slate-950 font-extrabold text-xs shadow-lg shadow-sky-500/20 hover:bg-sky-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      <Save className="w-4 h-4" />
                      Save Project
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
`;

if (!content.includes('TAB 3.5: PORTFOLIO MANAGEMENT')) {
  content = content.replace("{/* TAB 4: ADVANCED SEO SUITE (YOAST / RANKMATH STYLE) */}", portfolioTabView + '\n          {/* TAB 4: ADVANCED SEO SUITE (YOAST / RANKMATH STYLE) */}');
  fs.writeFileSync('src/components/AdminPanel.tsx', content, 'utf8');
  console.log('Portfolio Management UI injected.');
} else {
  console.log('Already injected.');
}
