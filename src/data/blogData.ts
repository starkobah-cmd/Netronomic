export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  date: string;
  category: string;
  readingTime: string;
  imageUrl: string;
  tags: string[];
}

export const defaultBlogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'future-of-web-design-2027',
    title: 'The Future of Web Design: Trends to Watch in 2027',
    excerpt: 'Explore the cutting-edge trends that are reshaping the digital landscape, from AI-driven interfaces to immersive 3D experiences.',
    content: `
# The Future of Web Design

As we approach 2027, the landscape of web design is undergoing a massive transformation. The boundaries between digital and physical realities are blurring, thanks to advancements in AI, WebGL, and responsive architecture.

## AI-Driven Interfaces

Artificial intelligence is no longer just a backend tool. We are seeing AI actively shape user interfaces in real-time, adapting color schemes, typography, and layout structures based on user behavior and preferences.

> "The best design is the one you don't even notice, because it perfectly anticipates your needs." - Digital Design Lead

## Immersive 3D Experiences

With the rise of WebGPU, browsers can now handle complex 3D rendering without breaking a sweat. Expect to see more interactive, story-driven landing pages that feel like video games rather than traditional websites.

### Key Takeaways
- **Personalization is paramount:** Static websites are becoming obsolete.
- **Performance matters:** 3D elements must be optimized to ensure blazing-fast load times.
- **Accessibility:** As experiences become more complex, ensuring they remain accessible to all users is more critical than ever.
    `,
    author: {
      name: 'Sarah Jenkins',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
      role: 'Lead UI/UX Designer'
    },
    date: 'Aug 24, 2026',
    category: 'Design',
    readingTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000',
    tags: ['Web Design', 'UI/UX', 'Trends']
  },
  {
    id: '2',
    slug: 'maximizing-seo-with-nextjs',
    title: 'Maximizing SEO Potential with Next.js and Server Components',
    excerpt: 'Learn how to leverage the latest features in React and Next.js to build lightning-fast, SEO-optimized web applications.',
    content: 'Full content here...',
    author: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150',
      role: 'Senior Frontend Developer'
    },
    date: 'Aug 20, 2026',
    category: 'Development',
    readingTime: '8 min read',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000',
    tags: ['SEO', 'Next.js', 'React']
  },
  {
    id: '3',
    slug: 'building-brand-identity-startups',
    title: 'Building a Strong Brand Identity for Tech Startups',
    excerpt: 'A comprehensive guide to establishing a memorable and trustworthy brand presence in the crowded tech industry.',
    content: 'Full content here...',
    author: {
      name: 'Emma Roberts',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150',
      role: 'Brand Strategist'
    },
    date: 'Aug 15, 2026',
    category: 'Branding',
    readingTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000',
    tags: ['Branding', 'Startups', 'Marketing']
  },
  {
    id: '4',
    slug: 'mastering-tailwind-css',
    title: 'Mastering Tailwind CSS: Advanced Patterns and Tricks',
    excerpt: 'Take your Tailwind skills to the next level with these advanced utility patterns, custom plugins, and architecture tips.',
    content: 'Full content here...',
    author: {
      name: 'David Kim',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
      role: 'Frontend Engineer'
    },
    date: 'Aug 10, 2026',
    category: 'Development',
    readingTime: '7 min read',
    imageUrl: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=1000',
    tags: ['CSS', 'Tailwind', 'Frontend']
  }
];
