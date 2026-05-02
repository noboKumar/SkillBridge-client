import Link from "next/link";
import HeroSearchBar from "../../shared/HeroSearchBar";
import { Button } from "../../ui/button";

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center w-full min-h-[85vh] overflow-hidden bg-slate-50 border-b border-slate-100 py-16 lg:py-0">
      {/* Aceternity UI style Grid Background */}
      <div
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #94a3b8 1px, transparent 1px),
            linear-gradient(to bottom, #94a3b8 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Radial Gradient Mask for fading edges */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-slate-50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* Decorative Blob */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-blue-400 rounded-full blur-[120px] opacity-20 pointer-events-none z-0"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16 lg:gap-8">

        {/* Left Content (Text & Search) */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]">
            Connect with <br className="hidden lg:block" /> Expert Tutors, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400">
              Learn Anything.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
            Unlock your potential with personalized, 1-on-1 tutoring. Find the perfect expert to help you master any subject and achieve your goals.
          </p>

          <div className="w-full max-w-2xl mb-10 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-sky-300 rounded-[2rem] blur opacity-30"></div>
            <div className="relative bg-white p-2 rounded-3xl shadow-xl border border-slate-100">
              <HeroSearchBar />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
            <Link href="/tutors" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto px-8 py-6 text-lg rounded-full bg-slate-900 hover:bg-slate-800 text-white shadow-xl hover:shadow-2xl transition-all">
                Find a Tutor
              </Button>
            </Link>
            <Link href="/howItWorks" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-6 text-lg rounded-full border-2 hover:bg-slate-50 transition-all">
                How it Works
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Content (Photo) */}
        <div className="flex-1 w-full max-w-lg lg:max-w-none relative mt-10 lg:mt-0">
          {/* Decorative background blob for image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-300 to-sky-100 rounded-[3rem] blur-3xl transform rotate-6 scale-105 opacity-40"></div>

          <div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-square rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white -rotate-2 hover:rotate-0 transition-transform duration-500 bg-slate-200">
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Expert tutor helping a student"
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>
          </div>

          {/* Floating UI element 1 */}
          <div className="absolute -bottom-6 -left-6 sm:bottom-10 sm:-left-10 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce shadow-blue-900/5 z-20">
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800">Top Rated</p>
              <p className="text-xs text-slate-500">Expert Tutors</p>
            </div>
          </div>

          {/* Floating UI element 2 */}
          <div className="absolute -top-6 -right-6 sm:top-10 sm:-right-10 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 shadow-blue-900/5 z-20">
            <div className="flex -space-x-2">
              <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=1" alt="Student avatar" />
              <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=2" alt="Student avatar" />
              <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=3" alt="Student avatar" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800">15k+ Students</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
