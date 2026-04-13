"use client";

import { useState, useRef } from "react";
import { Mail, Lock, Eye, EyeOff, User, Camera } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { axiosInstance } from "@/lib/axios";
import { RegisterPayload } from "@/types";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  function handleAvatarChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setAvatarPreview(reader.result as string);
    reader.readAsDataURL(file);
  }

  async function handleSubmit(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const avatar = fileInputRef.current?.files?.[0];

    setLoading(true);

    let imageUrl = "";

    if (avatar) {
      const formData = new FormData();
      formData.append("image", avatar);

      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API}`,
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await res.json();
      imageUrl = data.data.url;
    }

    const payload: RegisterPayload = {
      name,
      email,
      password,
      profilePhoto: imageUrl,
    };

    try {
      const res = await axiosInstance.post("/auth/register", payload);

      // login user
      const loginRes = await axiosInstance.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", loginRes.data.data.token);
      window.location.href = "/";

      console.log("User registered:", res.data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error registering user:", error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        handleSubmit(formData);
      }}
      className="space-y-5"
    >
      {/* Profile Photo */}
      <div className="flex flex-col items-center gap-2">
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="relative group w-20 h-20 rounded-full ring-2 ring-sky-200 ring-offset-2 focus:outline-none focus:ring-sky-400 overflow-hidden bg-sky-50 flex items-center justify-center transition-all cursor-pointer hover:ring-sky-300"
          aria-label="Upload profile photo"
        >
          {avatarPreview ? (
            <Image
              src={avatarPreview}
              alt="Profile preview"
              fill
              className="object-cover"
            />
          ) : (
            <User size={32} className="text-sky-300" />
          )}
          <span className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-full">
            <Camera size={18} className="text-white" />
          </span>
        </button>
        <span className="text-xs text-slate-400">
          {avatarPreview ? "Click to change photo" : "Upload profile photo"}
        </span>
        <input
          ref={fileInputRef}
          type="file"
          name="avatar"
          accept="image/*"
          className="hidden"
          onChange={handleAvatarChange}
        />
      </div>

      {/* Full Name */}
      <div className="space-y-1.5">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-slate-700"
        >
          Full Name
        </label>
        <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-sky-400 focus-within:border-sky-400 transition-all">
          <User size={16} className="text-slate-400 shrink-0" />
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="John Doe"
            className="flex-1 text-sm text-slate-700 placeholder:text-slate-400 outline-none bg-transparent"
          />
        </div>
      </div>

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
            autoComplete="new-password"
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

      {/* Confirm Password */}
      <div className="space-y-1.5">
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-slate-700"
        >
          Confirm Password
        </label>
        <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-sky-400 focus-within:border-sky-400 transition-all">
          <Lock size={16} className="text-slate-400 shrink-0" />
          <input
            id="confirmPassword"
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            autoComplete="new-password"
            required
            placeholder="••••••••"
            className="flex-1 text-sm text-slate-700 placeholder:text-slate-400 outline-none bg-transparent"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword((v) => !v)}
            className="text-slate-400 hover:text-slate-600 transition-colors"
            aria-label={showConfirmPassword ? "Hide password" : "Show password"}
          >
            {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </div>

      {/* Submit */}
      <Button disabled={loading} type="submit" className="w-full py-5">
        {loading ? "Creating..." : "Create account"}
      </Button>

      {/* Login link */}
      <p className="text-center text-sm text-slate-500">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-primary font-semibold hover:underline"
        >
          Login
        </Link>
      </p>
    </form>
  );
}
