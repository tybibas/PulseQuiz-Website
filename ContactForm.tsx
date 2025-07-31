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