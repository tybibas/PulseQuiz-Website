import React from 'react';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { BlogPost as BlogPostType } from '../data/blogPosts';

interface BlogPostProps {
  post: BlogPostType;
  onBack: () => void;
}

export default function BlogPost({ post, onBack }: BlogPostProps) {
  // Convert markdown-style content to JSX
  const formatContent = (content: string) => {
    const lines = content.trim().split('\n');
    const elements: React.ReactNode[] = [];
    let currentParagraph: string[] = [];
    
    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        elements.push(
          <p key={elements.length} className="text-lg text-slate-700 leading-relaxed mb-6">
            {currentParagraph.join(' ')}
          </p>
        );
        currentParagraph = [];
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      
      if (trimmedLine.startsWith('# ')) {
        flushParagraph();
        elements.push(
          <h1 key={elements.length} className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
            {trimmedLine.substring(2)}
          </h1>
        );
      } else if (trimmedLine.startsWith('## ')) {
        flushParagraph();
        elements.push(
          <h2 key={elements.length} className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6 mt-12 leading-tight">
            {trimmedLine.substring(3)}
          </h2>
        );
      } else if (trimmedLine.startsWith('### ')) {
        flushParagraph();
        elements.push(
          <h3 key={elements.length} className="text-xl lg:text-2xl font-semibold text-slate-900 mb-4 mt-8">
            {trimmedLine.substring(4)}
          </h3>
        );
      } else if (trimmedLine.startsWith('- ')) {
        flushParagraph();
        // Look ahead to collect all list items
        const listItems = [];
        let i = index;
        while (i < lines.length && lines[i].trim().startsWith('- ')) {
          listItems.push(lines[i].trim().substring(2));
          i++;
        }
        elements.push(
          <ul key={elements.length} className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700">
            {listItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        );
        // Skip the processed lines
        for (let j = index + 1; j < i; j++) {
          lines[j] = '';
        }
      } else if (trimmedLine.startsWith('1. ')) {
        flushParagraph();
        // Look ahead to collect all numbered list items
        const listItems = [];
        let i = index;
        let num = 1;
        while (i < lines.length && lines[i].trim().startsWith(`${num}. `)) {
          listItems.push(lines[i].trim().substring(`${num}. `.length));
          i++;
          num++;
        }
        elements.push(
          <ol key={elements.length} className="list-decimal list-inside space-y-2 mb-6 text-lg text-slate-700">
            {listItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ol>
        );
        // Skip the processed lines
        for (let j = index + 1; j < i; j++) {
          lines[j] = '';
        }
      } else if (trimmedLine.startsWith('*') && trimmedLine.endsWith('*') && trimmedLine.length > 2) {
        flushParagraph();
        elements.push(
          <div key={elements.length} className="bg-violet-50 border-l-4 border-violet-200 p-6 mb-8 rounded-r-lg">
            <p className="text-lg text-slate-700 italic">
              {trimmedLine.substring(1, trimmedLine.length - 1)}
            </p>
          </div>
        );
      } else if (trimmedLine === '') {
        flushParagraph();
      } else if (trimmedLine) {
        currentParagraph.push(trimmedLine);
      }
    });
    
    flushParagraph();
    return elements;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/30 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={onBack}
              className="inline-flex items-center text-slate-600 hover:text-slate-900 font-medium transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Insights
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

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Article Header */}
        <header className="mb-12">
          {/* Cover Image */}
          {post.coverImage && (
            <div className="mb-8 rounded-2xl overflow-hidden">
              <img 
                src={post.coverImage} 
                alt={post.title}
                className="w-full h-64 lg:h-80 object-cover"
              />
            </div>
          )}

          {/* Category */}
          <div className="mb-4">
            <span className="inline-flex items-center px-3 py-1 bg-violet-100 text-violet-700 text-sm font-medium rounded-full">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-slate-600">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric',
                year: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {formatContent(post.content)}
        </div>

        {/* Footer CTA */}
        <footer className="mt-16 pt-12 border-t border-slate-200">
          <div className="bg-gradient-to-br from-violet-50 to-slate-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to create your own quiz strategy?
            </h3>
            <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
              Let's explore how a custom quiz could help grow your business with qualified leads who already trust you.
            </p>
            <a
              href="https://calendly.com/tybibas10/pulsequizzes"
              className="inline-flex items-center justify-center px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 ease-out transform hover:scale-105"
            >
              Book a Free Consultation
            </a>
          </div>
        </footer>
      </article>
    </div>
  );
}