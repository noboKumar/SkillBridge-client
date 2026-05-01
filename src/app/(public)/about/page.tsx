import { CheckCircle2, GraduationCap, Users, Globe2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "About Us - SkillBridge",
  description: "Learn more about SkillBridge's mission to connect learners with expert tutors worldwide.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-sky-900 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Bridging the Gap Between <br className="hidden sm:block" />
            <span className="text-sky-400">Ambition and Expertise</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-sky-100 mx-auto">
            SkillBridge is the premier platform connecting passionate learners with verified, world-class tutors across hundreds of disciplines.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              We believe that quality education should be accessible, flexible, and personalized. Our mission is to empower individuals worldwide to achieve their educational and professional goals by providing a seamless, secure, and intuitive platform for 1-on-1 learning.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Whether you're mastering a new programming language, preparing for critical exams, or exploring a new hobby, SkillBridge ensures you find the perfect mentor to guide your journey.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Platform Highlights</h3>
            <ul className="space-y-4">
              {[
                "Strict tutor verification process",
                "Instant, hassle-free session booking",
                "Transparent review and rating system",
                "Secure, integrated communication",
              ].map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                  <span className="text-slate-700 font-medium">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Core Values / Stats */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Why Choose SkillBridge?</h2>
            <p className="mt-4 text-slate-500">Built for learners, designed for success.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-2xl bg-sky-50 border border-sky-100 transition-transform hover:-translate-y-1">
              <div className="w-14 h-14 mx-auto bg-sky-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-sky-200">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Expert Community</h3>
              <p className="text-slate-600">
                Every tutor on our platform is vetted for expertise and teaching ability, ensuring you get the highest quality guidance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-100 transition-transform hover:-translate-y-1">
              <div className="w-14 h-14 mx-auto bg-emerald-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-emerald-200">
                <Globe2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Learn Anywhere</h3>
              <p className="text-slate-600">
                Connect with tutors globally. Schedule sessions that fit your timezone and learn from the comfort of your home.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-purple-50 border border-purple-100 transition-transform hover:-translate-y-1">
              <div className="w-14 h-14 mx-auto bg-purple-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-purple-200">
                <GraduationCap className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Guaranteed Growth</h3>
              <p className="text-slate-600">
                With tailored 1-on-1 sessions, personalized feedback, and community reviews, your progress is our top priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          Ready to Start Your Learning Journey?
        </h2>
        <p className="text-lg text-slate-600 mb-8">
          Join thousands of students and expert tutors who are already part of the SkillBridge community.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/register">
            <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 h-auto rounded-full bg-sky-600 hover:bg-sky-700 shadow-lg shadow-sky-200">
              Join as a Student
            </Button>
          </Link>
          <Link href="/tutors">
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-6 h-auto rounded-full border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700">
              Browse Tutors
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
