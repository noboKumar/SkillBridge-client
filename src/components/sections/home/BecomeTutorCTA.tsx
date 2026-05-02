import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function BecomeTutorCTA() {
  const benefits = [
    "Set your own schedule and hourly rates",
    "Reach thousands of motivated learners",
    "Secure, automated payments",
    "Dedicated support team",
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="w-11/12 mx-auto relative z-10">
        <div className="bg-sky-900 rounded-[2.5rem] overflow-hidden shadow-2xl relative">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 sm:p-16 lg:p-20 flex flex-col justify-center relative z-10">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
                Share your knowledge. <br />
                <span className="text-sky-400">Earn on your terms.</span>
              </h2>
              <p className="text-sky-100 text-lg mb-8 leading-relaxed max-w-lg">
                Join our network of expert tutors. Whether you're a seasoned professor or an industry professional, SkillBridge provides the tools you need to build a successful tutoring business.
              </p>

              <ul className="space-y-4 mb-10">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                    <span className="text-sky-50 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div>
                <Link href="/register">
                  <Button size="lg" className="bg-sky-500 hover:bg-sky-400 text-slate-900 font-bold rounded-full px-8 py-6 h-auto text-lg w-full sm:w-auto flex items-center justify-center gap-2 group">
                    Become a Tutor
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative hidden lg:block bg-sky-800">
              {/* Using a placeholder aesthetic image for the tutor CTA */}
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Students collaborating"
                fill
                className="object-cover opacity-80 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-sky-900 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
