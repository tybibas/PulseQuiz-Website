src/import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    font-family: 'Inter', system-ui, sans-serif;
    scroll-behavior: smooth;
  }
  
  body {
    font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11';
  }
}
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readTime: string;
  category: string;
  featured?: boolean;
  coverImage?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "the-one-quiz-format-that-actually-converts",
    title: "The One Quiz Format That Actually Converts",
    excerpt: "Does your lead magnet feel more like a sieve—only catching a few, maybe not-so-ideal leads, while others slip through the net unnoticed? Stop second-guessing and start converting.",
    content: `
# The One Quiz Format That Actually Converts

Does your lead magnet feel more like a sieve—only catching a few, maybe not-so-ideal leads, while others slip through the net unnoticed? Stop second-guessing and start converting. Interactive quizzes, when designed strategically, can powerfully turn curious clicks into engaged leads.

## Introduction: The Transformational Power of Interactive Lead Magnets

Gone are the days when static PDFs and one-size-fits-all e-books held dominion over the landscape of lead magnets. As the digital marketing arena continues to evolve at lightning speed, so too have the strategies to attract, engage, and convert your potential clients. The transformation? Interactive experiences that deliver immediate, personalized value—a crucial element in today's dynamic and crowded marketplace. Enter quizzes.

Whether you're a wellness coach decoding a person's fitness style or a consultant helping individuals define their leadership archetype, the key to a powerful lead magnet lies in your ability to personalize the experience and provide specifically tailored results. Now more than ever, your audience is yearning for a two-way dialogue wherein they're not just spectators, but active participants. This is the essence why quizzes stand out—they're not just content to be consumed; they're individual journeys that your audiece embarks upon.

It's time to recalibrate your lead magnet—away from static, information-heavy downloads towards interactive, personalized quizzes. But why exactly does a quiz format resonate so deeply with potential leads? And how does it manage to do what the garlands of e-books and guides have strived yet often failed to do—consistently convert?

In the following sections, we'll dive deeper into this topic, examining why quizzes are shaping up as the one format that actually converts, what sets them apart, and how you can tailor an engaging, effective quiz that hits the bull's eye every time.

The journey towards a better lead magnet starts here. Transform your marketing strategies and audience engagement with the power of quizzes.

## Traditional Lead Magnets vs. Interactive Quizzes

One familiar scene in the marketing world is the flux of businesses offering traditional lead magnets like downloadable PDFs, checklists, templates, and guides. While these resources certainly hold value, their static nature has a few limitations. Once users opt-in and download the item, the level of engagement often ends there. The content is generalized, aiming to be useful to a broad audience but not personally relevant to each individual reader. This often limits its appeal and in turn, its potential to convert at a higher rate.

On the flip side of the coin is a method that throws "one-size-fits-all" out the window: interactive quizzes. Embracing the shift toward more personalized user experiences, interactive quizzes provide instant, individually tailored value that resonates with each quiz-taker. This approach seems counter-intuitive—more work for more leads?—but the data proves it's a worthy trade.

Interactive quizzes have started gaining attention as potent marketing tools. In fact, according to a study by Demand Gen Report, interactive content like quizzes, calculators, and assessments convert at a 2x rate compared to static content.

The secret of this conversion power lies in the personalization and engagement. A well-designed quiz captivates its takers. They want to know their results and are more likely to provide accurate contact information in return. This opens the door for further personalized interactions and relationship building, increasing the likelihood of conversion in the long term.

While traditional lead magnets will always have their place, dynamic content formats like quizzes are emerging as the frontrunners for generating engaged leads. In the next section, we'll delve deeper into what makes a quiz funnel tick and how it's about so much more than just a single interaction—it's about fostering an ongoing connection.

## Breaking Down the Quiz Funnel

When we talk about a 'quiz funnel', what we're really discussing is a strategic, step-by-step process that uses an interactive quiz to engage your audience and capture invaluable lead data. The goal? To magnetize potential leads who are genuinely interested in what you offer and guide them into your database, and eventually, towards a sale. If designed and implemented effectively, a quiz funnel can revolutionize your lead generation efforts, improving both the quality and quantity of your leads.

### Step 1: The Attractive Headline

Your quiz must begin with an irresistible headline. Think about it: you're not just competing against other quizzes, but also against every other piece of content your audience consumes online. The goal is to be appealing enough to entice a potential lead to click and start answering the quiz. However, avoid misleading or sensationalist headlines. Stay authentic and relevant to your business.

### Step 2: Relevant Questions

Crafting the perfect set of questions is where market research and customer knowledge really come into play. Begin by identifying your ideal customer persona. Then, engineer your questions to add value and resonate with that persona. The power of a quiz rests in its interactive nature, and nothing screams interaction more than relevant, thought-provoking questions.

### Step 3: Personalized Results

Once a potential lead completes your quiz, it's time to reveal their results. But remember, these should never be generic—one size does not fit all here. Your quiz participant has given you the gift of their time and data, now it's your turn to offer value. Tailor the result to the answers they've provided and strive to deliver insights, solutions, or advice that match their unique needs.

Let's take a wellness coach, for example. She wants to promote a new mindfulness program. Instead of conventional lead magnets, she uses a quiz called "What's Your Stress Personality?" and crafts personality-specific follow-ups. A user who scores as a 'Worry Warrior' receives personalized tips to cope with anxiety, along with a nudge towards the mindfulness program. A 'Zen Master', on the other hand, learns about advanced mental wellness tactics and other services the coach provides. This level of personalization leaves a lasting impression on participants and typically prompts higher levels of engagement with your brand.

By leveraging these critical components—an enticing headline, relevant questions, and personalized results—you can turn the interactive quiz funnel into a potent lead-generating tool. It's not just about creating a quiz, it's about designing a meaningful, personalized engagement that effortlessly bridges the gap between the audience and your offering.

## The Key Drivers of Quiz Funnel Conversions

Understanding the elements that drive high conversions in quiz funnels is crucial for effective marketing. Your goal isn't simply to entertain your prospects but to convert them into quality leads. Let's discuss three foremost conversion drivers in your quiz funnel: personalization, instant gratification, and user-centricity.

### Embrace Personalization

In an era of digital savvy consumers, specialized content is no longer a bonus. It is a requirement.

By integrating personalization into your quiz funnels, the questions strategically guide potential leads towards content that resonates with their individual responses. This personal touch makes your audience feel:

- Acknowledged
- Valued
- Eager to learn more

By capitalizing on personal interaction, you deepen their connection with your brand leading to an improved conversion rate.

### Harness the Power of Instant Gratification

We are part of a culture increasingly driven by quick responses and immediate satisfaction. In this context, quizzes offer an excellent platform for instant feedback. This immediacy not only satisfies the consumers longing for instant gratification but also offers them:

- Valuable insights
- Keeps them engaged
- Increases their willingness to share personal information

This ultimately leads to increased conversion rates.

### Focus on User-Centricity

The modern consumer is not a passive bystander. They want to be included and be a part of the process. User-centric quizzes address this need. By concentrating on user experience and value, your quiz becomes more than just another lead generation tool. Instead, it becomes a resource that offers:

- Insights
- Solutions

When users recognize this value, they're more likely to be converted.

## A Practical Guide: Making Your Quiz Funnel Work

In crafting your strategy, relevancy should always be a priority. Always ensure that your quiz is directly linked with the challenges and interests of your target audience. The results of your quiz need to be engaging, but more importantly, they should offer actionable insights. Solutions, recommendations, or tips that align with your customer's primary concerns.

To wrap it up, success in quiz funnels is not about getting the structure correct - it's about understanding what strikes a chord with your audience. By capitalizing on personalization, instant gratification, and user-centricity, your quiz funnel can secure high-quality leads that convert effectively.

## The PulseQuizzes Edge

Consider PulseQuiz as your strategic ally in your quest to create an effective interactive lead generation quiz. No overbearing sales pitches here, merely a friendly introduction to a tool designed to increase your conversion rates, helping your business thrive.

Critical to generating conversions that matter for your business is making sense of your audience's behavior; unlocking insights and patterns that can guide you in building a more compelling, high-impact quiz. PulseQuiz supports this effort with its comprehensive analytics suite, providing you a deeper understanding of quiz performance and audience interaction. This goes beyond basic metrics to reveal critical trends and patterns in your responses.

You don't have to be a data analyst to understand it either. PulseQuiz presents information in an accessible and digestible format, making it easy to adapt your approach based on real data. As a result, you can continuously improve and optimize your quizzes, ensuring relevance and offering insights that resonate with your audience.

Blending strategic value with ease of use, PulseQuiz is more than just a quiz-building platform. It's a custom-built tool with a single focus: helping you, as a small business owner, build the kind of interactive quizzes that not only engage your audience but also convert them into quality leads.

The wellness, coaching, and consulting areas — where relationships, trust, and understanding of unique user needs are essential — stand to gain particularly much from such a targeted and user-friendly approach. As you deepen engagement with these quizzes, you'll enjoy a higher quality of leads, more informed marketing decisions, and a more connected customer base.

Align your lead generation strategy with the changing trends of online marketing, and let PulseQuiz be your guiding light in the realm of interactive quizzes that really convert. By evolving with the demands of your audience and the trends of the market, your business will not only survive, but truly thrive.

## Call to Action

No one wants to spend time and effort on lead generation strategies that feel more like sifting sand than striking gold. Interactive quizzes are not a fad; they're the lead generation tool that consistently proves its worth. Evidenced by data-driven results, quizzes offer personalisation, instant gratification, and user-centricity; three strong pillars that serve to elevate conversion rates in current marketing landscapes.

Time to step away from guesswork and embrace this game changer in generating high-value leads. If your business hasn't yet discovered the potential of quizzes, there's no better moment than now. Capitalize on the power of interaction and customization that quizzes provide.

For businesses that are new to the world of quizzes, it can seem daunting. But remember, the goal of a quiz isn't to perplex; rather, it's to engage, gain insight, build a connect, and most importantly, to convert. Succeeding in crafting such a quiz may require some strategizing, some trial and error, but the reward is worth the effort.

PulseQuiz is here to support you through this transformative journey. Without dipping into hard-sale tactics, we'd like to extend an invitation. Test-drive the platform, explore its potential, and experience the benefits that many of our satisfied customers swear by—increased conversions, rich audience insights, and reduced marketing waste.

Interactive quizzes are foremost about your audience—their needs, interests, aspirations. Make your audience feel valued and they're more likely to engage with your brand, and eventually convert. Discover a new way to connect with potential clients, and leave a lasting impact on your business's bottom line.

Take a leap of faith with us. Dive into the world of interactive quizzes with PulseQuiz. From high-converting quiz templates to in-depth analytics, we ensure you have the right tools to optimize your lead conversion.

So, why wait? Begin your journey towards more effective lead generation and nurturing by leveraging the power of interactive quizzes. Visit PulseQuiz to start creating your bespoke lead-magnet quiz today and say goodbye to lukewarm results.
    `,
    author: "PulseQuiz Team",
    publishedAt: "2025-01-11",
    readTime: "8 min read",
    category: "Strategy",
    featured: true,
    coverImage: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export function getFeaturedPosts(limit: number = 3): BlogPost[] {
  return blogPosts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}

export function getPostById(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id);
}
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
import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { submitContactForm, type ContactSubmission } from '../lib/supabase';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    business_name: '',
    contact_name: '',
    email: '',
    website: '',
    business_type: '',
    quiz_goal: '',
    wants_sample_quiz: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset previous error state
    setErrorMessage('');
    
    // Basic validation
    if (!formData.business_name.trim() || !formData.contact_name.trim() || !formData.email.trim() || !formData.business_type.trim() || !formData.quiz_goal.trim()) {
      setSubmitStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await submitContactForm(formData as ContactSubmission);
      setSubmitStatus('success');
      setFormData({
        business_name: '',
        contact_name: '',
        email: '',
        website: '',
        business_type: '',
        quiz_goal: '',
        wants_sample_quiz: false
      });
    } catch (error) {
      setSubmitStatus('error');
      const errorMsg = error instanceof Error ? error.message : 'An unexpected error occurred';
      setErrorMessage(errorMsg);
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
    
    // Clear error state when user starts typing
    if (submitStatus === 'error') {
      setSubmitStatus('idle');
      setErrorMessage('');
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8">
          <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-slate-900 mb-2">
            Thank you for your interest!
          </h3>
          <p className="text-slate-600 mb-6">
            We've received your submission and will get back to you within 1 business day.
          </p>
          <button
            onClick={() => setSubmitStatus('idle')}
            className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
          >
            Submit another inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Business Name */}
        <div>
          <label htmlFor="business_name" className="block text-sm font-medium text-slate-700 mb-2">
            Business Name <span className="text-violet-600">*</span>
          </label>
          <input
            type="text"
            id="business_name"
            name="business_name"
            value={formData.business_name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm"
            placeholder="Your business name"
          />
        </div>

        {/* Contact Name */}
        <div>
          <label htmlFor="contact_name" className="block text-sm font-medium text-slate-700 mb-2">
            Contact Name <span className="text-violet-600">*</span>
          </label>
          <input
            type="text"
            id="contact_name"
            name="contact_name"
            value={formData.contact_name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm"
            placeholder="Your name"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
            Email Address <span className="text-violet-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm"
            placeholder="your@email.com"
          />
        </div>

        {/* Website */}
        <div>
          <label htmlFor="website" className="block text-sm font-medium text-slate-700 mb-2">
            Website <span className="text-slate-400">(optional)</span>
          </label>
          <input
            type="url"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm"
            placeholder="https://yourwebsite.com"
          />
        </div>

        {/* Business Type */}
        <div>
          <label htmlFor="business_type" className="block text-sm font-medium text-slate-700 mb-2">
            What kind of business do you run? <span className="text-violet-600">*</span>
          </label>
          <input
            type="text"
            id="business_type"
            name="business_type"
            value={formData.business_type}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm"
            placeholder="e.g., Wellness coaching, Yoga studio, Boutique retail"
          />
        </div>

        {/* Quiz Goals */}
        <div>
          <label htmlFor="quiz_goal" className="block text-sm font-medium text-slate-700 mb-2">
            What would you like your quiz to help with? <span className="text-violet-600">*</span>
          </label>
          <textarea
            id="quiz_goal"
            name="quiz_goal"
            value={formData.quiz_goal}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm resize-none"
            placeholder="Tell us about your goals for lead generation, audience insights, or customer engagement..."
          />
        </div>

        {/* Sample Quiz Checkbox */}
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="wants_sample_quiz"
            name="wants_sample_quiz"
            checked={formData.wants_sample_quiz}
            onChange={handleChange}
            className="mt-1 w-4 h-4 text-violet-600 border-slate-300 rounded focus:ring-violet-500"
          />
          <label htmlFor="wants_sample_quiz" className="text-sm text-slate-600">
            Send me a free sample quiz link
          </label>
        </div>

        {/* Error Message */}
        {submitStatus === 'error' && errorMessage && (
          <div className="flex items-start space-x-2 text-red-600 bg-red-50 border border-red-200 rounded-lg p-4">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-medium">Error submitting form</p>
              <p>{errorMessage}</p>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center px-8 py-4 bg-violet-600 hover:bg-violet-700 disabled:bg-violet-400 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 ease-out transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Start My Quiz
              </>
            )}
          </button>
        </div>

        {/* Micro-copy */}
        <p className="text-center text-sm text-slate-500">
          We'll get back to you within 1 business day.
        </p>
      </form>
    </div>
  );
}
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
/// <reference types="vite/client" />

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl) {
  throw new Error('Missing VITE_SUPABASE_URL environment variable')
}

if (!supabaseAnonKey) {
  throw new Error('Missing VITE_SUPABASE_ANON_KEY environment variable')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type ContactSubmission = {
  business_name: string
  contact_name: string
  email: string
  website?: string
  business_type: string
  quiz_goal: string
  wants_sample_quiz: boolean
}

export async function submitContactForm(data: ContactSubmission) {
  try {
    const { data: result, error } = await supabase
      .from('contact_submissions')
      .insert([{
        business_name: data.business_name,
        contact_name: data.contact_name,
        email: data.email,
        website: data.website || null,
        business_type: data.business_type,
        quiz_goal: data.quiz_goal,
        wants_sample_quiz: data.wants_sample_quiz,
        created_at: new Date().toISOString()
      }])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      throw new Error(`Database error: ${error.message}`)
    }

    console.log('Form submitted successfully:', result)
    return result
  } catch (error) {
    console.error('Error submitting form:', error)
    throw error
  }
}
