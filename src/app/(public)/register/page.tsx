import RegisterForm from "@/components/sections/auth/RegisterForm";
import Logo from "@/components/shared/Logo";
import { GraduationCap } from "lucide-react";

export const metadata = {
  title: "Register - SkillBridge",
  description: "Create your SkillBridge account.",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-sky-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl shadow-sky-100 overflow-hidden flex flex-col md:flex-row">
        {/* Left Panel */}
        <div className="md:w-5/12 bg-linear-to-br from-sky-100 via-teal-50 to-sky-200 flex flex-col items-center justify-center gap-6 py-14 px-8">
          <div className="w-full max-w-260px">
            <RegisterIllustration />
          </div>
          <div className="text-center">
            <Logo></Logo>
            <p className="text-sm text-slate-500">
              Connecting you to knowledge
            </p>
          </div>
        </div>

        {/* Right Panel — scrollable on small screens */}
        <div className="md:w-7/12 flex flex-col justify-center px-8 py-10 sm:px-12 overflow-y-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight mb-2">
            Create your account
          </h1>
          <p className="text-sm text-slate-500 mb-8">
            Join thousands of learners on SkillBridge.
          </p>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

function RegisterIllustration() {
  return (
    <svg
      viewBox="0 0 280 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      aria-hidden
    >
      {/* Background blob */}
      <ellipse
        cx="140"
        cy="125"
        rx="112"
        ry="92"
        fill="#99f6e4"
        fillOpacity="0.35"
      />

      {/* Desk */}
      <rect x="50" y="168" width="180" height="10" rx="5" fill="#0d9488" />
      <rect x="70" y="178" width="8" height="28" rx="4" fill="#0f766e" />
      <rect x="202" y="178" width="8" height="28" rx="4" fill="#0f766e" />

      {/* Laptop */}
      <rect x="95" y="130" width="90" height="58" rx="6" fill="#0f172a" />
      <rect x="99" y="134" width="82" height="50" rx="4" fill="#38bdf8" />
      {/* Screen content lines */}
      <rect
        x="108"
        y="142"
        width="50"
        height="4"
        rx="2"
        fill="white"
        fillOpacity="0.8"
      />
      <rect
        x="108"
        y="150"
        width="36"
        height="3"
        rx="1.5"
        fill="white"
        fillOpacity="0.5"
      />
      <rect
        x="108"
        y="157"
        width="44"
        height="3"
        rx="1.5"
        fill="white"
        fillOpacity="0.5"
      />
      {/* Avatar circle on screen */}
      <circle cx="158" cy="153" r="10" fill="#2dd4bf" />
      <circle cx="158" cy="150" r="4" fill="white" fillOpacity="0.9" />
      <path d="M150 160 Q158 155 166 160" fill="white" fillOpacity="0.7" />
      {/* Laptop base */}
      <rect x="85" y="188" width="110" height="6" rx="3" fill="#1e293b" />

      {/* Person sitting */}
      {/* chair */}
      <rect x="168" y="155" width="40" height="6" rx="3" fill="#0284c7" />
      <rect x="175" y="161" width="6" height="20" rx="3" fill="#0369a1" />
      <rect x="193" y="161" width="6" height="20" rx="3" fill="#0369a1" />
      {/* body */}
      <ellipse cx="185" cy="148" rx="13" ry="16" fill="#2dd4bf" />
      {/* head */}
      <circle cx="185" cy="126" r="13" fill="#fcd34d" />
      {/* hair */}
      <path d="M173 120 Q185 110 197 120" fill="#92400e" />
      {/* arm pointing at screen */}
      <path
        d="M174 148 Q160 150 152 155"
        stroke="#2dd4bf"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />

      {/* Floating profile card */}
      <rect
        x="30"
        y="68"
        width="72"
        height="56"
        rx="10"
        fill="white"
        stroke="#7dd3fc"
        strokeWidth="1.5"
      />
      <circle cx="66" cy="86" r="10" fill="#bae6fd" />
      <circle cx="66" cy="83" r="4" fill="#0284c7" />
      <path d="M58 94 Q66 89 74 94" fill="#0284c7" fillOpacity="0.5" />
      <rect x="42" y="100" width="48" height="3" rx="1.5" fill="#94a3b8" />
      <rect x="50" y="107" width="32" height="3" rx="1.5" fill="#cbd5e1" />

      {/* Upload icon badge */}
      <circle
        cx="210"
        cy="78"
        r="22"
        fill="white"
        stroke="#99f6e4"
        strokeWidth="2"
      />
      <path
        d="M210 70 L210 86"
        stroke="#0d9488"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M204 76 L210 70 L216 76"
        stroke="#0d9488"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M203 86 Q210 89 217 86"
        stroke="#0d9488"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Stars / sparkles */}
      <circle cx="44" cy="152" r="4" fill="#0d9488" fillOpacity="0.4" />
      <circle cx="240" cy="130" r="3" fill="#38bdf8" fillOpacity="0.5" />
      <circle cx="235" cy="170" r="3" fill="#0d9488" fillOpacity="0.3" />
      <circle cx="58" cy="178" r="3" fill="#7dd3fc" fillOpacity="0.5" />
    </svg>
  );
}
