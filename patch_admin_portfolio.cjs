const fs = require('fs');
let content = fs.readFileSync('src/components/AdminPanel.tsx', 'utf8');

content = content.replace(
  "import { blogData, BLOG_CATEGORIES } from '../data/blogData';",
  "import { blogData, BLOG_CATEGORIES } from '../data/blogData';\nimport { PORTFOLIO_CATEGORIES } from '../data/agencyData';"
);

// Update handleCreatePortfolio
content = content.replace(
  /category: 'websites',\s*categoryLabel: 'Websites',/,
  "category: 'Website Design & Development',\n      featured: false,"
);

const portfolioModalRegex = /\{\/\* PORTFOLIO EDITOR MODAL \*\/\}([\s\S]*?)<MediaPickerModal/g;
let portfolioModalBlock = content.match(portfolioModalRegex)[0];

// Replace Category and CategoryLabel with Select
const categoryBlockRegex = /<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">\s*<div>\s*<label className="block text-xs font-bold text-slate-300 mb-1">Category Value \(internal\)<\/label>[\s\S]*?<\/div>\s*<\/div>/;

portfolioModalBlock = portfolioModalBlock.replace(
  categoryBlockRegex,
  `<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-slate-300 mb-1">Category</label>
                            <select
                              value={editingPortfolio.category || 'Website Design & Development'}
                              onChange={(e) => setEditingPortfolio({ ...editingPortfolio, category: e.target.value })}
                              className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                            >
                              {PORTFOLIO_CATEGORIES.map(c => (
                                <option key={c} value={c}>{c}</option>
                              ))}
                            </select>
                          </div>
                          <div className="flex items-center gap-3 mt-6">
                            <input
                              type="checkbox"
                              id="featuredToggle"
                              checked={!!editingPortfolio.featured}
                              onChange={(e) => setEditingPortfolio({ ...editingPortfolio, featured: e.target.checked })}
                              className="w-4 h-4 rounded bg-slate-950 border-slate-800 text-sky-500 focus:ring-sky-500"
                            />
                            <label htmlFor="featuredToggle" className="text-xs font-bold text-slate-300 cursor-pointer">
                              Featured on Homepage
                            </label>
                          </div>
                        </div>`
);

// Add detailedDescription below description
const descriptionBlockRegex = /<label className="block text-xs font-bold text-slate-300 mb-1">Project Description<\/label>\s*<textarea[\s\S]*?\/>\s*<\/div>/;

portfolioModalBlock = portfolioModalBlock.replace(
  descriptionBlockRegex,
  `<label className="block text-xs font-bold text-slate-300 mb-1">Short Description (Card)</label>
                          <textarea
                            rows={3}
                            value={editingPortfolio.description || ''}
                            onChange={(e) => setEditingPortfolio({ ...editingPortfolio, description: e.target.value })}
                            className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                            placeholder="Brief summary for the portfolio card..."
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-300 mb-1">Detailed Description (Detail Page)</label>
                          <textarea
                            rows={5}
                            value={editingPortfolio.detailedDescription || ''}
                            onChange={(e) => setEditingPortfolio({ ...editingPortfolio, detailedDescription: e.target.value })}
                            className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                            placeholder="Full case study details..."
                          />
                        </div>`
);

// Add technologies and date below tags
const tagsBlockRegex = /<label className="block text-xs font-bold text-slate-300 mb-1">Tags \(Comma separated\)<\/label>\s*<input[\s\S]*?\/>\s*<\/div>/;

portfolioModalBlock = portfolioModalBlock.replace(
  tagsBlockRegex,
  `<label className="block text-xs font-bold text-slate-300 mb-1">Tags (Comma separated)</label>
                          <input
                            type="text"
                            value={(editingPortfolio.tags || []).join(', ')}
                            onChange={(e) => setEditingPortfolio({ ...editingPortfolio, tags: e.target.value.split(',').map(t => t.trim()).filter(Boolean) })}
                            className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                            placeholder="React, Node.js, UI/UX"
                          />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-slate-300 mb-1">Technologies (Comma separated)</label>
                            <input
                              type="text"
                              value={(editingPortfolio.technologies || []).join(', ')}
                              onChange={(e) => setEditingPortfolio({ ...editingPortfolio, technologies: e.target.value.split(',').map(t => t.trim()).filter(Boolean) })}
                              className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                              placeholder="Figma, Tailwind, React"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-300 mb-1">Date/Year</label>
                            <input
                              type="text"
                              value={editingPortfolio.date || ''}
                              onChange={(e) => setEditingPortfolio({ ...editingPortfolio, date: e.target.value })}
                              className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                              placeholder="e.g. 2024"
                            />
                          </div>
                        </div>`
);

content = content.replace(portfolioModalRegex, portfolioModalBlock);
fs.writeFileSync('src/components/AdminPanel.tsx', content);

