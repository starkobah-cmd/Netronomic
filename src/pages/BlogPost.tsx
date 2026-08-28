import { useSEO } from '../hooks/useSEO';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, User, Calendar, Share2, Facebook, Twitter, Linkedin, MessageCircle } from 'lucide-react';
import { defaultBlogPosts } from '../data/blogData';

export default function BlogPost() {
  const { slug } = useParams();
  useSEO({ author: post.author.name, datePublished: new Date(post.date).toISOString(), title: post.title + ' - Netronomic Web', description: post.excerpt, image: post.imageUrl, type: 'article' });
  const post = defaultBlogPosts.find((p) => p.slug === slug) || defaultBlogPosts[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <article className="pt-24 pb-20 bg-white min-h-screen font-sans">
      
      {/* Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 text-center">
        <Link to="/blog" className="inline-flex items-center text-sky-500 font-medium hover:text-sky-600 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
        
        <div className="mb-6 flex justify-center">
          <span className="bg-sky-50 text-sky-600 text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full">
            {post.category}
          </span>
        </div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-8 leading-tight"
        >
          {post.title}
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500"
        >
          <div className="flex items-center">
            <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full mr-3 object-cover" />
            <div className="text-left">
              <p className="font-bold text-slate-900">{post.author.name}</p>
              <p className="text-xs">{post.author.role}</p>
            </div>
          </div>
          <span className="hidden sm:inline">•</span>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            {post.date}
          </div>
          <span className="hidden sm:inline">•</span>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            {post.readingTime}
          </div>
        </motion.div>
      </header>

      {/* Featured Image */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="rounded-3xl overflow-hidden shadow-2xl relative aspect-[21/9]"
        >
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 relative">
        
        {/* Left Sidebar - Share & Sticky Nav */}
        <aside className="hidden lg:block w-48 flex-shrink-0">
          <div className="sticky top-32">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">Share Article</h4>
            <div className="flex flex-col gap-4">
              <button className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-sky-500 hover:border-sky-200 transition-colors">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-sky-500 hover:border-sky-200 transition-colors">
                <Linkedin className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-sky-500 hover:border-sky-200 transition-colors">
                <Facebook className="w-4 h-4" />
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="max-w-3xl flex-grow">
          <div className="prose prose-lg prose-slate prose-headings:font-bold prose-headings:tracking-tight prose-a:text-sky-500 hover:prose-a:text-sky-600 prose-img:rounded-2xl max-w-none">
            {/* Using a pre for raw content representation since we don't have a markdown parser yet, but styled nicely */}
            <div dangerouslySetInnerHTML={{ 
              __html: post.content
                .replace(/# (.*?)\n/g, '<h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">$1</h2>')
                .replace(/## (.*?)\n/g, '<h3 class="text-2xl font-bold mt-8 mb-4 text-slate-800">$1</h3>')
                .replace(/### (.*?)\n/g, '<h4 class="text-xl font-bold mt-6 mb-3 text-slate-800">$1</h4>')
                .replace(/> (.*?)\n/g, '<blockquote class="border-l-4 border-sky-500 pl-6 italic text-slate-700 my-8 py-2 bg-slate-50 rounded-r-lg">$1</blockquote>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\n\n/g, '</p><p class="mb-6 text-slate-600 leading-relaxed text-lg">')
                .replace(/^- (.*?)$/gm, '<li class="ml-6 mb-2 text-slate-600">$1</li>')
                .replace(/(<li.*<\/li>)/s, '<ul class="list-disc mb-8">$1</ul>')
            }} />
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-slate-100">
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-medium">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Comments Section (Mock UI) */}
          <div className="mt-16 pt-16 border-t border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
              <MessageCircle className="w-6 h-6 mr-3 text-sky-500" />
              Join the Conversation
            </h3>
            <div className="bg-slate-50 rounded-2xl p-8 mb-10">
              <form>
                <textarea 
                  rows={4}
                  placeholder="Share your thoughts..."
                  className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent mb-4 resize-none"
                ></textarea>
                <button type="button" className="px-6 py-3 rounded-xl bg-sky-500 text-white font-bold hover:bg-sky-600 transition-colors">
                  Post Comment
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </article>
  );
}
