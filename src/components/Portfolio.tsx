import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Tag, Sparkles, Filter, Eye, FolderOpen, ArrowLeft, Layers } from 'lucide-react';
import { portfolioData } from '../data/agencyData';
import { PortfolioItem } from '../types';
import { SiteConfig } from '../data/siteConfig';

interface PortfolioProps {
  onSelectPortfolio: (item: PortfolioItem) => void;
  siteConfig?: SiteConfig;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectPortfolio, siteConfig }) => {
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);

  const sourceData = siteConfig?.portfolio || portfolioData;
  
  // Group portfolio items by category dynamically
  const folders = useMemo(() => {
    const grouped = sourceData.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = {
          id: item.category,
          label: item.categoryLabel,
          items: [],
          coverImage: item.image,
          coverVideo: item.videoUrl
        };
      }
      acc[item.category].items.push(item);
      return acc;
    }, {} as Record<string, { id: string; label: string; items: PortfolioItem[]; coverImage: string; coverVideo?: string }>);
    return Object.values(grouped);
  }, [sourceData]);

  // Find the currently active folder data
  const activeFolderData = selectedFolder ? folders.find(f => f.id === selectedFolder) : null;
  const filteredItems = activeFolderData ? activeFolderData.items : [];

  return (
    <section id="portfolio" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Explore Our <span className="text-sky-600">Creative Portfolios</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Browse through our dedicated service categories to see high-impact projects we've delivered.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!selectedFolder ? (
            // FOLDER VIEW
            <motion.div 
              key="folders"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {folders.map((folder) => (
                <div 
                  key={folder.id}
                  onClick={() => setSelectedFolder(folder.id)}
                  className="group cursor-pointer bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:border-sky-300 transition-all duration-300 overflow-hidden flex flex-col"
                >
                  <div className="relative h-48 sm:h-56 bg-slate-100 overflow-hidden">
                    {folder.coverVideo ? (
                      <video src={folder.coverVideo} autoPlay loop muted playsInline className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <img src={folder.coverImage} alt={folder.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-end p-6">
                      <div className="flex items-center gap-2 text-sky-300 mb-1">
                        <FolderOpen className="w-5 h-5" />
                        <span className="text-xs font-bold tracking-wider uppercase">{folder.items.length} Projects</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">{folder.label}</h3>
                    </div>
                    {/* Hover Overlay Button */}
                    <div className="absolute inset-0 bg-sky-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <span className="px-5 py-2.5 bg-white text-sky-700 rounded-xl font-bold shadow-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <Layers className="w-4 h-4" />
                        View Portfolio
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            // ITEMS VIEW (Inside a Folder)
            <motion.div 
              key="items"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Back Button & Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setSelectedFolder(null)}
                    className="p-2.5 bg-slate-100 hover:bg-sky-100 text-slate-600 hover:text-sky-600 rounded-xl transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{activeFolderData?.label} Projects</h3>
                    <p className="text-xs text-slate-500 font-medium">{activeFolderData?.items.length} items in this category</p>
                  </div>
                </div>
              </div>

              {/* Grid of Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-sky-300 transition-all group flex flex-col justify-between"
                  >
                    <div>
                      {/* Image Container with hover overlay */}
                      <div className="relative h-52 overflow-hidden bg-slate-100">
                        {item.videoUrl ? (
                          <video
                            src={item.videoUrl}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <img
                            src={item.image}
                            alt={item.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                          <button
                            onClick={() => onSelectPortfolio(item)}
                            className="px-4 py-2 rounded-xl bg-white text-slate-900 text-xs font-bold shadow-lg hover:bg-sky-50 flex items-center gap-1.5 cursor-pointer"
                          >
                            <Eye className="w-4 h-4 text-sky-600" />
                            <span>Preview Details</span>
                          </button>
                        </div>
                      </div>
                      {/* Body Content */}
                      <div className="p-6 space-y-3">
                        <div className="flex items-center justify-between text-xs text-sky-600 font-semibold">
                          <span>Client: {item.client}</span>
                          {item.stats && (
                            <span className="bg-sky-50 px-2 py-0.5 rounded text-sky-700 font-bold">
                              {item.stats}
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-1">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    {/* Footer Tags */}
                    <div className="px-6 pb-6 pt-2 border-t border-slate-50 flex flex-wrap gap-1.5">
                      {item.tags.slice(0, 3).map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-medium px-2 py-1 rounded-md bg-slate-100 text-slate-600 uppercase tracking-wide"
                        >
                          {t}
                        </span>
                      ))}
                      {item.tags.length > 3 && (
                        <span className="text-[10px] font-medium px-2 py-1 rounded-md bg-slate-100 text-slate-600 uppercase tracking-wide">
                          +{item.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
