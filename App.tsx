import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Calendar, MessageCircle, Sparkles, BarChart3, TrendingUp, Users, Target } from 'lucide-react';
import ContactForm from './components/ContactForm';
import BlogSection from './components/BlogSection';
import BlogPage from './components/BlogPage';
import BlogPost from './components/BlogPost';
import { getPostById } from './data/blogPosts';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'blog' | 'post'>('home');
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [stepsVisible, setStepsVisible] = useState(false);
  const [whyVisible, setWhyVisible] = useState(false);

  // Handle navigation
  const handleBlogNavigation = () => {
    setCurrentView('blog');
    window.scrollTo(0, 0);
  };

  const handlePostSelect = (postId: string) => {
    setSelectedPostId(postId);
    setCurrentView('post');
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedPostId(null);
    window.scrollTo(0, 0);
  };

  const handleBackToBlog = () => {
    setCurrentView('blog');
    setSelectedPostId(null);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    // Handle URL-based navigation
    const path = window.location.pathname;
    if (path === '/blog') {
      setCurrentView('blog');
    } else if (path.startsWith('/blog/')) {
      const postId = path.substring(6);
      const post = getPostById(postId);
      if (post) {
        setSelectedPostId(postId);
        setCurrentView('post');
      }
    }

    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    const stepsTimer = setTimeout(() => setStepsVisible(true), 800);
    const whyTimer = setTimeout(() => setWhyVisible(true), 1200);
    return () => {
      clearTimeout(timer);
      clearTimeout(stepsTimer);
      clearTimeout(whyTimer);
    };
  }, []);

  // Update URL when view changes
  useEffect(() => {
    if (currentView === 'blog') {
      window.history.pushState({}, '', '/blog');
    } else if (currentView === 'post' && selectedPostId) {
      window.history.pushState({}, '', `/blog/${selectedPostId}`);
    } else if (currentView === 'home') {
      window.history.pushState({}, '', '/');
    }
  }, [currentView, selectedPostId]);

  // Render different views
  if (currentView === 'blog') {
    return <BlogPage onBack={handleBackToHome} onPostSelect={handlePostSelect} />;
  }

  if (currentView === 'post' && selectedPostId) {
    const post = getPostById(selectedPostId);
    if (post) {
      return <BlogPost post={post} onBack={handleBackToBlog} />;
    }
  }

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">PulseQuiz</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">How It Works</a>
              <a href="#why-it-works" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Why It Works</a>
              <button onClick={handleBlogNavigation} className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
                Insights
              </button>
              <a href="#get-started" className="inline-flex items-center px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 lg:pb-32 bg-gradient-to-br from-slate-50 via-white to-violet-50/30 relative overflow-hidden">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
        
        {/* Subtle background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-violet-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-slate-100/30 rounded-full blur-3xl"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Headline */}
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 mb-6 leading-tight transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Marketing that actually{' '}
              <span className="text-violet-600 relative">
                helps
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-violet-200/40 rounded-full -z-10"></div>
              </span>{' '}
              your audience.
            </h1>
            
            {/* Subheadline */}
            <p className={`text-lg sm:text-xl lg:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium transition-all duration-1000 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              PulseQuiz builds branded digital quizzes that feel like consultations and quietly grow your list with people who already trust you.
            </p>
            
            {/* Data Insights Cards */}
            <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto transition-all duration-1000 ease-out delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="bg-white/60 backdrop-blur-sm border border-slate-200/50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-slate-900">+438</div>
                <div className="text-sm text-slate-600">Leads captured</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm border border-slate-200/50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-slate-900">73%</div>
                <div className="text-sm text-slate-600">Completion rate</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm border border-slate-200/50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-slate-900">2.4x</div>
                <div className="text-sm text-slate-600">Higher engagement</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 ease-out delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {/* Primary CTA */}
              <a
                href="https://glittery-cupcake-77c2bc.netlify.app/"
                className="group inline-flex items-center justify-center px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 ease-out transform hover:scale-105 w-full sm:w-auto"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                See a sample quiz
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              
              {/* Secondary CTA */}
              <a
                href="https://calendly.com/tybibas10/pulsequizzes"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white/80 hover:bg-white text-slate-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 ease-out transform hover:scale-105 border border-slate-200/50 w-full sm:w-auto"
              >
                <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                Book a free consult
              </a>
            </div>
            
            {/* Trust indicator */}
            <div className={`mt-12 transition-all duration-1000 ease-out delay-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <p className="text-sm text-slate-500 font-medium mb-2">
                Backed by insight. Built with intention.
              </p>
              <p className="text-sm text-slate-400">
                For consultants, advisors, and client-focused professionals who value insight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 lg:py-32 bg-gradient-to-b from-white to-slate-50/50 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              How It Works
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              A thoughtful process designed to create quizzes that feel authentically yours
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-16 lg:space-y-20">
            {/* Step 1 */}
            <div className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 transition-all duration-1000 ease-out ${
              stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <div className="flex-shrink-0 order-2 lg:order-1">
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-violet-100 to-violet-200 rounded-2xl flex items-center justify-center shadow-lg border border-violet-200/50">
                  <MessageCircle className="w-10 h-10 lg:w-12 lg:h-12 text-violet-600" />
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left order-1 lg:order-2">
                <div className="inline-flex items-center justify-center w-8 h-8 bg-violet-600 text-white rounded-full text-sm font-semibold mb-4 lg:mb-6">
                  1
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 lg:mb-6">
                  We learn about your audience and your brand
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mb-6">
                  This isn't a cookie-cutter template. We ask smart questions and study your voice so the quiz feels like it came from you.
                </p>
                {/* Simple stat card */}
                <div className="bg-white/60 backdrop-blur-sm border border-slate-200/50 rounded-lg p-4 max-w-sm">
                  <div className="text-sm font-medium text-slate-700">Brand-aligned by design</div>
                </div>
              </div>
            </div>

            {/* Connector Line */}
            <div className="flex justify-center lg:justify-start lg:ml-12">
              <div className="w-px h-12 bg-gradient-to-b from-violet-200 to-slate-200"></div>
            </div>

            {/* Step 2 */}
            <div className={`flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16 transition-all duration-1000 ease-out delay-200 ${
              stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <div className="flex-shrink-0 order-2 lg:order-1">
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center shadow-lg border border-emerald-200/50">
                  <Sparkles className="w-10 h-10 lg:w-12 lg:h-12 text-emerald-600" />
                </div>
              </div>
              <div className="flex-1 text-center lg:text-right order-1 lg:order-2">
                <div className="inline-flex items-center justify-center w-8 h-8 bg-emerald-600 text-white rounded-full text-sm font-semibold mb-4 lg:mb-6">
                  2
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 lg:mb-6">
                  We build a quiz that feels like a mini consultation
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl lg:ml-auto mb-6">
                  No hard sells. Just thoughtful questions and AI-powered advice that helps people feel seen — and excited to take the next step.
                </p>
                {/* Simple stat card */}
                <div className="bg-white/60 backdrop-blur-sm border border-slate-200/50 rounded-lg p-4 max-w-sm lg:ml-auto">
                  <div className="text-sm font-medium text-slate-700">73% avg. completion rate</div>
                </div>
              </div>
            </div>

            {/* Connector Line */}
            <div className="flex justify-center lg:justify-end lg:mr-12">
              <div className="w-px h-12 bg-gradient-to-b from-emerald-200 to-slate-200"></div>
            </div>

            {/* Step 3 */}
            <div className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 transition-all duration-1000 ease-out delay-400 ${
              stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <div className="flex-shrink-0 order-2 lg:order-1">
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center shadow-lg border border-slate-200/50">
                  <BarChart3 className="w-10 h-10 lg:w-12 lg:h-12 text-slate-600" />
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left order-1 lg:order-2">
                <div className="inline-flex items-center justify-center w-8 h-8 bg-slate-600 text-white rounded-full text-sm font-semibold mb-4 lg:mb-6">
                  3
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 lg:mb-6">
                  Visitors get insights, and you get qualified leads
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mb-6">
                  While users walk away with value, you get emails, behavior data, and an insight dashboard that shows what your audience actually wants.
                </p>
                {/* Simple stat card */}
                <div className="bg-white/60 backdrop-blur-sm border border-slate-200/50 rounded-lg p-4 max-w-sm">
                  <div className="text-sm font-medium text-slate-700">2.4x conversion lift</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className={`text-center mt-16 lg:mt-20 transition-all duration-1000 ease-out delay-600 ${
            stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Want to explore what this could look like for your business?
            </p>
            <a
              href="https://calendly.com/tybibas10/pulsequizzes"
              className="group inline-flex items-center justify-center px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-out transform hover:scale-105"
            >
              Explore your quiz
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </div>

        {/* Subtle background elements */}
        <div className="absolute top-1/4 -right-32 w-64 h-64 bg-violet-100/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-slate-100/10 rounded-full blur-3xl"></div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      {/* Why It Works Section */}
      <section id="why-it-works" className="py-20 lg:py-32 bg-gradient-to-br from-slate-50/50 via-white to-violet-50/20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Why It Works
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 font-medium">
              Your customers want insight — not another funnel.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16 transition-all duration-1000 ease-out ${
            whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {/* Benefit 1 */}
            <div className="flex items-start space-x-4 group p-6 bg-white/60 backdrop-blur-sm border border-slate-200/50 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="flex-shrink-0 w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center mt-1 group-hover:bg-violet-200 transition-colors duration-300">
                <div className="w-3 h-3 bg-violet-600 rounded-full"></div>
              </div>
              <div>
                <h3 className="text-lg lg:text-xl font-semibold text-slate-900 mb-2">
                  Captures warm, qualified leads without feeling pushy
                </h3>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex items-start space-x-4 group p-6 bg-white/60 backdrop-blur-sm border border-slate-200/50 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mt-1 group-hover:bg-emerald-200 transition-colors duration-300">
                <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
              </div>
              <div>
                <h3 className="text-lg lg:text-xl font-semibold text-slate-900 mb-2">
                  Feels like a service, not an ad
                </h3>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex items-start space-x-4 group p-6 bg-white/60 backdrop-blur-sm border border-slate-200/50 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="flex-shrink-0 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center mt-1 group-hover:bg-slate-200 transition-colors duration-300">
                <div className="w-3 h-3 bg-slate-600 rounded-full"></div>
              </div>
              <div>
                <h3 className="text-lg lg:text-xl font-semibold text-slate-900 mb-2">
                  Gives you real insight into your audience's needs
                </h3>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="flex items-start space-x-4 group p-6 bg-white/60 backdrop-blur-sm border border-slate-200/50 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="flex-shrink-0 w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center mt-1 group-hover:bg-violet-200 transition-colors duration-300">
                <div className="w-3 h-3 bg-violet-600 rounded-full"></div>
              </div>
              <div>
                <h3 className="text-lg lg:text-xl font-semibold text-slate-900 mb-2">
                  Seamlessly integrates with your brand's voice and tone
                </h3>
              </div>
            </div>
          </div>

          {/* Quote Block */}
          <div className={`text-center mb-16 transition-all duration-1000 ease-out delay-200 ${
            whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-8 lg:p-12 shadow-lg">
              <blockquote className="text-2xl lg:text-3xl font-medium text-slate-700 italic max-w-2xl mx-auto leading-relaxed">
                "A quiz that listens better than most marketers do."
              </blockquote>
            </div>
          </div>

          {/* CTA */}
          <div className={`text-center transition-all duration-1000 ease-out delay-400 ${
            whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-lg text-slate-600 mb-6">
              Want to see one in action?
            </p>
            <a
              href="https://glittery-cupcake-77c2bc.netlify.app/"
              className="group inline-flex items-center justify-center px-8 py-4 bg-white/80 hover:bg-white text-slate-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-out transform hover:scale-105 border border-slate-200/50"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
              See a sample quiz
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </div>

        {/* Subtle background elements */}
        <div className="absolute top-1/3 -left-20 w-64 h-64 bg-violet-100/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-64 h-64 bg-slate-100/10 rounded-full blur-3xl"></div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      {/* Blog Section */}
      <BlogSection />

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      {/* Get Started Section */}
      <section id="get-started" className="py-20 lg:py-32 bg-gradient-to-b from-white to-violet-50/30 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Get Started
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Tell us about your business and we'll create a custom quiz strategy that feels authentically yours.
            </p>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>

        {/* Subtle background elements */}
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-violet-100/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-slate-100/10 rounded-full blur-3xl"></div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">PulseQuiz</span>
              </div>
              <p className="text-slate-400 max-w-md leading-relaxed">
                AI-powered quiz funnels that feel like consultations. Built for wellness coaches, consultants, and boutique retailers who value authentic connections.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#why-it-works" className="hover:text-white transition-colors">Why It Works</a></li>
                <li><button onClick={handleBlogNavigation} className="hover:text-white transition-colors text-left">Insights</button></li>
                <li><a href="https://glittery-cupcake-77c2bc.netlify.app/" className="hover:text-white transition-colors">Sample Quiz</a></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Get Started</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="https://calendly.com/tybibas10/pulsequizzes" className="hover:text-white transition-colors">Book Consultation</a></li>
                <li><a href="mailto:hello@pulsequiz.com" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2025 PulseQuiz. Backed by insight. Built with intention.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Privacy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;