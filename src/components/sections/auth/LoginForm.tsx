"use client";

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { axiosInstance } from "@/lib/axios";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const DEMO_ACCOUNTS = [
  {
    label: "Student",
    email: "student@student.com",
    password: "student@student.com",
    color: "bg-sky-50 text-sky-700 border-sky-200 hover:bg-sky-100",
    dot: "bg-sky-500",
  },
  {
    label: "Teacher",
    email: "teachersir@gmail.com",
    password: "teachersir@gmail.com",
    color: "bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100",
    dot: "bg-purple-500",
  },
  {
    label: "Admin",
    email: "admin@gmail.com",
    password: "admin1234",
    color: "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100",
    dot: "bg-amber-500",
  },
];

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [suspendedModalOpen, setSuspendedModalOpen] = useState(false);

  async function loginWithCredentials(emailVal: string, passwordVal: string) {
    setLoading(true);
    try {
      const res = await axiosInstance.post("/auth/login", {
        email: emailVal,
        password: passwordVal,
      });

      const { token, user } = res.data.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      toast.success(`Welcome back, ${user.name}!`, {
        description: "You have been logged in successfully.",
      });

      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 800);
    } catch (error: any) {
      const message =
        error.response?.data?.message || error.message || "Invalid email or password.";
      
      if (message.toLowerCase().includes("suspended")) {
        setSuspendedModalOpen(true);
      } else {
        toast.error("Login failed", { description: message });
      }
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await loginWithCredentials(email, password);
  }

  function handleDemoLogin(demoEmail: string, demoPassword: string) {
    setEmail(demoEmail);
    setPassword(demoPassword);
    loginWithCredentials(demoEmail, demoPassword);
  }

  return (
    <div className="space-y-5">
      {/* Demo Login Buttons */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">
          <Zap size={13} className="text-amber-500" />
          Quick Demo Login
        </div>
        <div className="grid grid-cols-3 gap-2">
          {DEMO_ACCOUNTS.map((acc) => (
            <button
              key={acc.label}
              type="button"
              disabled={loading}
              onClick={() => handleDemoLogin(acc.email, acc.password)}
              className={`flex flex-col items-center gap-1.5 border rounded-xl px-2 py-2.5 text-xs font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed ${acc.color}`}
            >
              <span className={`w-2 h-2 rounded-full ${acc.dot}`} />
              {acc.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-slate-200" />
        <span className="text-xs text-slate-400 font-medium">or login manually</span>
        <div className="flex-1 h-px bg-slate-200" />
      </div>

      {/* Manual Login Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-sm font-medium text-slate-700">
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="youremail@example.com"
              className="flex-1 text-sm text-slate-700 placeholder:text-slate-400 outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Password */}
        <div className="space-y-1.5">
          <label htmlFor="password" className="block text-sm font-medium text-slate-700">
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
        <Button disabled={loading} type="submit" className="w-full py-5">
          {loading ? "Logging in..." : "Login"}
        </Button>

        {/* Register link */}
        <p className="text-center text-sm text-slate-500">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-primary font-semibold hover:underline">
            Register
          </Link>
        </p>
      </form>

      {/* Suspended User Modal */}
      <AlertDialog open={suspendedModalOpen} onOpenChange={setSuspendedModalOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-red-600 flex items-center gap-2">
              Account Suspended
            </AlertDialogTitle>
            <AlertDialogDescription className="text-slate-600">
              Your account has been suspended by the administrator. You cannot log in or access the platform at this time.
              <br /><br />
              If you believe this is a mistake, please contact support.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              onClick={() => setSuspendedModalOpen(false)}
              className="bg-slate-900 hover:bg-slate-800 text-white"
            >
              Close
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
