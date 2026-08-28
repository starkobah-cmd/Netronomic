import { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, Edit2, Trash2, Image as ImageIcon, Settings, Eye, CheckCircle2, Search, LayoutDashboard } from 'lucide-react';
import { defaultBlogPosts } from '../data/blogData';

export default function AdminBlog() {
  const [activeTab, setActiveTab] = useState('posts');
  const [posts, setPosts] = useState(defaultBlogPosts);
  const [search, setSearch] = useState('');

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen flex font-sans">
      
      {/* Admin Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col h-[calc(100vh-6rem)] sticky top-24">
        <div className="p-6">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">Blog Admin</h2>
          <p className="text-sm text-slate-500">Manage your content</p>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <button 
            onClick={() => setActiveTab('posts')}
            className={`w-full flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'posts' ? 'bg-sky-50 text-sky-600' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            <LayoutDashboard className="w-5 h-5 mr-3" />
            All Posts
          </button>
          <button 
            onClick={() => setActiveTab('new')}
            className={`w-full flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'new' ? 'bg-sky-50 text-sky-600' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            <Plus className="w-5 h-5 mr-3" />
            Add New Post
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'settings' ? 'bg-sky-50 text-sky-600' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            <Settings className="w-5 h-5 mr-3" />
            SEO Settings
          </button>
        </nav>
      </aside>

      {/* Main Admin Area */}
      <main className="flex-1 p-8">
        
        {activeTab === 'posts' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-slate-900">Manage Posts</h1>
              <button 
                onClick={() => setActiveTab('new')}
                className="flex items-center px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors shadow-sm"
              >
                <Plus className="w-4 h-4 mr-2" />
                New Post
              </button>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    type="text" 
                    placeholder="Search posts..." 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-sky-500 text-sm"
                  />
                </div>
              </div>
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="p-4 text-sm font-semibold text-slate-600">Title</th>
                    <th className="p-4 text-sm font-semibold text-slate-600">Category</th>
                    <th className="p-4 text-sm font-semibold text-slate-600">Status</th>
                    <th className="p-4 text-sm font-semibold text-slate-600">Date</th>
                    <th className="p-4 text-sm font-semibold text-slate-600 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.filter(p => p.title.toLowerCase().includes(search.toLowerCase())).map((post) => (
                    <tr key={post.id} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="p-4">
                        <p className="font-medium text-slate-900 line-clamp-1">{post.title}</p>
                        <p className="text-xs text-slate-500">{post.slug}</p>
                      </td>
                      <td className="p-4">
                        <span className="px-2.5 py-1 bg-sky-50 text-sky-600 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className="flex items-center text-xs font-medium text-emerald-600">
                          <CheckCircle2 className="w-3 h-3 mr-1" /> Published
                        </span>
                      </td>
                      <td className="p-4 text-sm text-slate-600">{post.date}</td>
                      <td className="p-4">
                        <div className="flex items-center justify-end space-x-2">
                          <button className="p-1.5 text-slate-400 hover:text-sky-500 rounded-lg hover:bg-sky-50 transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-1.5 text-slate-400 hover:text-sky-500 rounded-lg hover:bg-sky-50 transition-colors">
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button className="p-1.5 text-slate-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {activeTab === 'new' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-slate-900">Create New Post</h1>
              <div className="flex space-x-3">
                <button 
                  onClick={() => setActiveTab('posts')}
                  className="px-4 py-2 border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  Save Draft
                </button>
                <button 
                  onClick={() => setActiveTab('posts')}
                  className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors shadow-sm"
                >
                  Publish Post
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Post Title</label>
                      <input type="text" placeholder="Enter post title" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-sky-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Content (Rich Text Editor)</label>
                      <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-50 border-b border-slate-200 p-2 flex space-x-2">
                          <button className="p-2 hover:bg-slate-200 rounded text-slate-600">B</button>
                          <button className="p-2 hover:bg-slate-200 rounded text-slate-600 italic">I</button>
                          <button className="p-2 hover:bg-slate-200 rounded text-slate-600 underline">U</button>
                          <div className="w-px h-6 bg-slate-300 mx-2 self-center"></div>
                          <button className="p-2 hover:bg-slate-200 rounded text-slate-600"><ImageIcon className="w-4 h-4" /></button>
                        </div>
                        <textarea rows={15} className="w-full p-4 focus:outline-none resize-none" placeholder="Write your post content here..."></textarea>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">SEO Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Meta Title</label>
                      <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-sky-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Meta Description</label>
                      <textarea rows={3} className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-sky-500 resize-none"></textarea>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Canonical URL</label>
                      <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-sky-500" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Publishing</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Status</label>
                      <select className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-sky-500 bg-white">
                        <option>Draft</option>
                        <option>Published</option>
                        <option>Scheduled</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Publish Date</label>
                      <input type="date" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-sky-500" />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Featured Image</h3>
                  <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer">
                    <ImageIcon className="w-8 h-8 text-slate-400 mx-auto mb-3" />
                    <p className="text-sm text-slate-600 font-medium">Click to upload image</p>
                    <p className="text-xs text-slate-400 mt-1">PNG, JPG, WebP up to 5MB</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Organization</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
                      <select className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-sky-500 bg-white">
                        <option>Design</option>
                        <option>Development</option>
                        <option>Branding</option>
                        <option>Marketing</option>
                        <option>SEO</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Tags (comma separated)</label>
                      <input type="text" placeholder="e.g. ui, web, tips" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-sky-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

      </main>
    </div>
  );
}
