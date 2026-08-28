import { useSEO } from '../hooks/useSEO';
import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, ChevronRight, Clock, User, ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { defaultBlogPosts } from '../data/blogData';

const categories = ['All', 'Design', 'Development', 'Branding', 'Marketing', 'SEO'];

export default function BlogList() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  useSEO({ title: 'Blog - Netronomic Web', description: 'Discover the latest trends, strategies, and tutorials from our team of expert designers and developers.' });

  const filteredPosts = defaultBlogPosts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filteredPosts[0];
  const regularPosts = filteredPosts.slice(1);

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6"
          >
            Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Ideas</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto mb-10"
          >
            Discover the latest trends, strategies, and tutorials from our team of expert designers and developers.
          </motion.p>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl mx-auto relative"
          >
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search articles..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 shadow-sm transition-all"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-sky-500 border border-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <Link to={`/blog/${featuredPost.slug}`} className="group flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-500">
              <div className="lg:w-1/2 overflow-hidden relative min-h-[300px] lg:min-h-full">
                <img 
                  src={featuredPost.imageUrl} 
                  alt={featuredPost.title} 
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-sky-500 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-lg">
                    {featuredPost.category}
                  </span>
                </div>
              </div>
              <div className="lg:w-1/2 p-10 lg:p-14 flex flex-col justify-center">
                <div className="flex items-center space-x-4 text-sm text-slate-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1.5" />
                    {featuredPost.readingTime}
                  </div>
                  <span>•</span>
                  <span>{featuredPost.date}</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 group-hover:text-sky-500 transition-colors leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center space-x-3">
                    <img src={featuredPost.author.avatar} alt={featuredPost.author.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <p className="text-sm font-bold text-slate-900">{featuredPost.author.name}</p>
                      <p className="text-xs text-slate-500">{featuredPost.author.role}</p>
                    </div>
                  </div>
                  <span className="flex items-center text-sky-500 font-semibold group-hover:translate-x-2 transition-transform">
                    Read Article <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/blog/${post.slug}`} className="flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-500 group h-full">
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold uppercase tracking-wider py-1.5 px-3 rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center space-x-3 text-xs text-slate-500 mb-4">
                    <span className="flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1" />
                      {post.readingTime}
                    </span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-sky-500 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 mb-6 line-clamp-3 text-sm flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-slate-50 mt-auto">
                    <div className="flex items-center space-x-3">
                      <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full object-cover" />
                      <p className="text-xs font-bold text-slate-900">{post.author.name}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">No articles found</h3>
            <p className="text-slate-600">Try adjusting your search or selecting a different category.</p>
          </div>
        )}

      </section>

      {/* Newsletter */}
      <section className="py-20 mt-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-900 to-[#050816] rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500 rounded-full mix-blend-screen filter blur-[100px] opacity-30 pointer-events-none" />
            
            <Mail className="w-12 h-12 text-sky-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Subscribe to our Newsletter</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Get the latest insights, tutorials, and agency news delivered straight to your inbox every month.
            </p>
            
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                required
                className="flex-grow px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
              <button 
                type="submit"
                className="px-8 py-4 rounded-xl bg-sky-500 text-white font-bold hover:bg-sky-400 transition-colors whitespace-nowrap shadow-lg shadow-sky-500/25"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
