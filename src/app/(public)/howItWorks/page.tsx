'use client';

import { useState } from 'react';
import { 
  Search, 
  MessageSquare, 
  Calendar, 
  Video, 
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Users,
  Clock,
  Shield
} from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    number: 1,
    title: 'Browse Tutors',
    description: 'Explore our extensive list of qualified tutors. Filter by subject, rating, price, and availability to find the perfect match for your learning goals.',
    icon: Search,
    color: 'from-blue-500 to-cyan-500',
    details: ['Search by category', 'Filter by rating', 'Compare prices', 'Check availability']
  },
  {
    number: 2,
    title: 'Send Message',
    description: 'Connect directly with your chosen tutor. Ask questions about their teaching style, methodology, and experience before booking your first session.',
    icon: MessageSquare,
    color: 'from-purple-500 to-pink-500',
    details: ['Real-time chat', 'Ask questions', 'Discuss goals', 'Schedule chat']
  },
  {
    number: 3,
    title: 'Book Session',
    description: 'Choose your preferred time and duration. Our flexible scheduling system lets you book sessions that fit perfectly into your busy schedule.',
    icon: Calendar,
    color: 'from-orange-500 to-red-500',
    details: ['Flexible timing', 'Hourly or package', 'Secure booking', 'Instant confirmation']
  },
  {
    number: 4,
    title: 'Learn Live',
    description: 'Join your tutor in a live video session. Experience personalized, one-on-one learning with professional instruction tailored to your needs.',
    icon: Video,
    color: 'from-green-500 to-emerald-500',
    details: ['HD video call', 'Screen sharing', 'Interactive tools', 'Recorded sessions']
  }
];

const features = [
  {
    icon: Shield,
    title: 'Secure & Verified',
    description: 'All tutors are verified professionals with proven teaching experience and credentials.'
  },
  {
    icon: Clock,
    title: 'Flexible Hours',
    description: 'Book lessons at times that work for you. Our platform operates 24/7 to fit your schedule.'
  },
  {
    icon: Users,
    title: 'Expert Tutors',
    description: 'Learn from experienced professionals who are passionate about teaching and student success.'
  },
  {
    icon: Sparkles,
    title: 'Personalized Learning',
    description: 'Every lesson is tailored to your learning style, pace, and specific goals.'
  }
];

const faqs = [
  {
    question: 'How do I get started?',
    answer: 'Simply sign up, browse tutors by subject, and book your first session. Our onboarding process takes less than 5 minutes.'
  },
  {
    question: 'Can I change my tutor?',
    answer: 'Absolutely! If you don\'t feel like a tutor is the right fit, you can easily switch to another tutor at any time.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, debit cards, and digital payment methods. All transactions are secure and encrypted.'
  },
  {
    question: 'Are sessions recorded?',
    answer: 'Yes, sessions can be recorded at the tutor\'s discretion. Recordings help you review and reinforce learning after the session.'
  }
];

export default function HowItWorksPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
//   const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50">
      
      {/* Header */}
      <div className="relative overflow-hidden pt-20 pb-16 md:py-10">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles size={16} />
            Getting Started
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            How It Works
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Connect with expert tutors, learn at your own pace, and achieve your educational goals in just four simple steps.
          </p>
        </div>
      </div>

      {/* Steps Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="space-y-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="group cursor-pointer"
              >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  
                  {/* Content */}
                  <div className={`${idx % 2 === 1 ? 'md:order-2' : ''} animate-fade-in`} style={{ animationDelay: `${idx * 0.1}s` }}>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-linear-to-br ${step.color} text-white font-bold text-lg shadow-lg`}>
                          {step.number}
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900">{step.title}</h2>
                      </div>

                      <p className="text-lg text-slate-600 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Details List */}
                      <div className="grid grid-cols-2 gap-3 pt-4">
                        {step.details.map((detail, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 size={16} className={`text-transparent bg-linear-to-r ${step.color} bg-clip-text`} />
                            <span className="text-sm text-slate-600">{detail}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4">
                        <button className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 bg-linear-to-r ${step.color} text-white hover:shadow-lg hover:scale-105 active:scale-95`}>
                          Learn More
                          <ArrowRight size={18} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Visual Icon */}
                  <div className={`${idx % 2 === 1 ? 'md:order-1' : ''} flex items-center justify-center`}>
                    <div className={`relative w-72 h-72 rounded-3xl bg-linear-to-br ${step.color} shadow-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}>
                      <div className="absolute inset-0 rounded-3xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        <Icon size={120} className="text-white opacity-80" />
                      </div>
                      <div className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                        background: `linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0))`
                      }}></div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {idx < steps.length - 1 && (
                  <div className="my-12 flex justify-center">
                    <div className="w-1 h-16 bg-linear-to-b from-sky-400 to-transparent rounded-full"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Us?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Experience the future of personalized education with our platform designed for your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => {
              const FeatureIcon = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-linear-to-br from-slate-50 to-blue-50 p-8 rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all duration-300 group animate-fade-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-linear-to-br from-sky-500 to-blue-500 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <FeatureIcon size={24} />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-600">
            Have questions? We&#39;s ve got answers.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-sky-300 transition-colors animate-fade-in"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <button
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between hover:bg-slate-50 transition-colors duration-300"
              >
                <span className="text-lg font-semibold text-slate-900 text-left">
                  {faq.question}
                </span>
                <div className={`text-sky-600 transition-transform duration-300 ${expandedFaq === idx ? 'rotate-180' : ''}`}>
                  <ArrowRight size={20} className="rotate-90" />
                </div>
              </button>

              {expandedFaq === idx && (
                <div className="px-8 py-6 bg-slate-50 border-t border-slate-200">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-linear-to-r from-sky-600 to-blue-600 opacity-90"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of students who have already achieved their educational goals with our platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register?role=STUDENT">
              <button className="px-10 py-4 bg-white text-sky-600 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg">
                Get Started as Student
              </button>
            </Link>
            <Link href="/register?role=TUTOR">
              <button className="px-10 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 active:scale-95">
                Become a Tutor
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}