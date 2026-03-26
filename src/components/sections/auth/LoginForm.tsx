"use client";

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(formData: FormData) {
    const email = formData.get("email");
    const password = formData.get("password");
    // TODO: call your auth API here
    console.log({ email, password });
  }

  return (
    <form action={handleSubmit} className="space-y-5">
      {/* Email */}
      <div className="space-y-1.5">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-700"
        >
          Email Address
        </label>
        <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-sky-400 focus-within:border-sky-400 transition-all">
          <Mail size={16} className="text-slate-400 shrink-0" />
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="youremail@example.com"
            className="flex-1 text-sm text-slate-700 placeholder:text-slate-400 outline-none bg-transparent"
          />
        </div>
      </div>

      {/* Password */}
      <div className="space-y-1.5">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-slate-700"
        >
          Password
        </label>
        <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-sky-400 focus-within:border-sky-400 transition-all">
          <Lock size={16} className="text-slate-400 shrink-0" />
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            required
            placeholder="••••••••"
            className="flex-1 text-sm text-slate-700 placeholder:text-slate-400 outline-none bg-transparent"
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="text-slate-400 hover:text-slate-600 transition-colors"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </div>

      {/* Submit */}
      <Button type="submit" className="w-full py-5">
        Login to your account
      </Button>

      {/* Register link */}
      <p className="text-center text-sm text-slate-500">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-primary font-semibold hover:underline">
          Register
        </Link>
      </p>
    </form>
  );
}
