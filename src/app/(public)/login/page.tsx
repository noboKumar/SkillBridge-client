import LoginForm from "@/components/sections/auth/LoginForm";
import Logo from "@/components/shared/Logo";

export const metadata = {
  title: "Login – SkillBridge",
  description: "Sign in to your SkillBridge account.",
};

export default function page() {
  return (
    <div className="min-h-screen bg-sky-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl shadow-sky-100 overflow-hidden flex flex-col md:flex-row">
        {/* Left Panel */}
        <div className="md:w-5/12 bg-linear-to-br from-sky-100 via-teal-50 to-sky-200 flex flex-col items-center justify-center gap-6 py-14 px-8">
          <div className="w-full max-w-260px">
            <TutoringIllustration />
          </div>
          <div className="text-center">
            <Logo></Logo>
            <p className="text-sm text-slate-500">
              Connecting you to knowledge
            </p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="md:w-7/12 flex flex-col justify-center px-8 py-12 sm:px-12">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight mb-8">
            Welcome back to <br className="hidden sm:block" />
            SkillBridge
          </h1>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

function TutoringIllustration() {
  return (
    <svg
      viewBox="0 0 280 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      aria-hidden
    >
      <ellipse
        cx="140"
        cy="130"
        rx="115"
        ry="95"
        fill="#99f6e4"
        fillOpacity="0.35"
      />
      <rect x="55" y="175" width="170" height="12" rx="6" fill="#0d9488" />
      <path
        d="M70 175 Q100 140 130 175"
        stroke="#0d9488"
        strokeWidth="7"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M150 175 Q180 140 210 175"
        stroke="#0d9488"
        strokeWidth="7"
        fill="none"
        strokeLinecap="round"
      />
      <rect x="126" y="160" width="8" height="15" rx="2" fill="#0f766e" />
      <rect x="146" y="160" width="8" height="15" rx="2" fill="#0f766e" />
      <rect x="52" y="162" width="38" height="8" rx="3" fill="#38bdf8" />
      <rect x="56" y="155" width="30" height="8" rx="3" fill="#7dd3fc" />
      <rect x="60" y="148" width="22" height="8" rx="3" fill="#bae6fd" />
      <ellipse cx="90" cy="148" rx="14" ry="18" fill="#2dd4bf" />
      <circle cx="90" cy="124" r="13" fill="#fcd34d" />
      <path d="M78 118 Q90 108 102 118" fill="#1e293b" />
      <path
        d="M100 148 Q118 145 128 150"
        stroke="#2dd4bf"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      <rect x="148" y="118" width="28" height="40" rx="10" fill="#0284c7" />
      <circle cx="162" cy="108" r="14" fill="#fcd34d" />
      <path d="M154 115 Q162 122 170 115" fill="#a16207" />
      <path
        d="M148 130 Q138 132 132 138"
        stroke="#0284c7"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      <rect x="118" y="133" width="18" height="22" rx="3" fill="#0f172a" />
      <rect x="120" y="135" width="6" height="18" rx="1" fill="#38bdf8" />
      <rect
        x="155"
        y="55"
        width="68"
        height="30"
        rx="10"
        fill="white"
        stroke="#0d9488"
        strokeWidth="1.5"
      />
      <path
        d="M168 85 L163 93 L175 85"
        fill="white"
        stroke="#0d9488"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <rect x="162" y="64" width="40" height="4" rx="2" fill="#0d9488" />
      <rect x="162" y="72" width="28" height="4" rx="2" fill="#99f6e4" />
      <rect
        x="42"
        y="62"
        width="48"
        height="36"
        rx="6"
        fill="white"
        stroke="#7dd3fc"
        strokeWidth="1.5"
      />
      <rect x="51" y="82" width="6" height="10" rx="2" fill="#38bdf8" />
      <rect x="61" y="74" width="6" height="18" rx="2" fill="#0d9488" />
      <rect x="71" y="78" width="6" height="14" rx="2" fill="#7dd3fc" />
      <circle cx="42" cy="130" r="5" fill="#0d9488" fillOpacity="0.4" />
      <circle cx="238" cy="105" r="4" fill="#38bdf8" fillOpacity="0.5" />
      <circle cx="228" cy="168" r="3" fill="#0d9488" fillOpacity="0.3" />
      <circle cx="55" cy="108" r="3" fill="#7dd3fc" fillOpacity="0.6" />
    </svg>
  );
}
