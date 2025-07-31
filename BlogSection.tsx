import React from 'react';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { getFeaturedPosts } from '../data/blogPosts';

export default function BlogSection() {
  const featuredPosts = getFeaturedPosts(3);

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-slate-50/30 to-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Insights from the Quiet Growth Engine
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Helpful ideas, smart strategies, and real examples for growing your business without shouting.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post, index) => (
            <article
              key={post.id}
              className="group bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl overflow-hidden hover:shadow-xl hover:border-slate-300/50 transition-all duration-300 ease-out"
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
                <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-violet-700 transition-colors duration-200 leading-tight">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <a
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-violet-600 hover:text-violet-700 font-medium transition-colors duration-200 group/link"
                >
                  Read more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Posts CTA */}
        <div className="text-center">
          <a
            href="/blog"
            className="inline-flex items-center justify-center px-8 py-4 bg-white/80 hover:bg-white text-slate-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-out transform hover:scale-105 border border-slate-200/50 group"
          >
            View All Posts
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>

      {/* Subtle background elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-violet-100/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-slate-100/10 rounded-full blur-3xl"></div>
    </section>
  );
}