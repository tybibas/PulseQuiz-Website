import React from 'react';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

interface BlogPageProps {
  onBack: () => void;
  onPostSelect: (postId: string) => void;
}

export default function BlogPage({ onBack, onPostSelect }: BlogPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/30 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={onBack}
              className="inline-flex items-center text-slate-600 hover:text-slate-900 font-medium transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Home
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold text-slate-900">PulseQuiz</span>
            </div>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Insights from the Quiet Growth Engine
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Helpful ideas, smart strategies, and real examples for growing your business without shouting. 
            Practical advice for solo founders and service providers who value authentic connections.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl overflow-hidden hover:shadow-xl hover:border-slate-300/50 transition-all duration-300 ease-out cursor-pointer"
              onClick={() => onPostSelect(post.id)}
            >
              {/* Featured Image Placeholder */}
              <div className="h-48 relative overflow-hidden">
                {post.coverImage ? (
                  <img 
                    src={post.coverImage} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <div className="w-full h-full bg-gradient-to-br from-violet-100 to-slate-100"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-slate-500/10"></div>
                  </>
                )}
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-slate-700 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center space-x-4 text-sm text-slate-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric',
                      year: 'numeric'
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-violet-700 transition-colors duration-200 leading-tight">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <div className="inline-flex items-center text-violet-600 hover:text-violet-700 font-medium transition-colors duration-200 group/link">
                  Read more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup CTA */}
        <div className="mt-20">
          <div className="bg-gradient-to-br from-violet-50 to-slate-50 rounded-2xl p-8 lg:p-12 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
              Get insights delivered to your inbox
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Join solo founders and service providers who get our latest strategies for growing authentic businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm"
              />
              <button className="w-full sm:w-auto px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl transition-all duration-200 ease-out transform hover:scale-105 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-slate-500 mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}