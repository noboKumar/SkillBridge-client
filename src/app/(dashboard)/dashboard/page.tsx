"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardRedirectPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && user) {
      if (user.role === "STUDENT") {
        router.push("/dashboard/student");
      } else if (user.role === "TUTOR") {
        router.push("/dashboard/tutor");
      } else if (user.role === "ADMIN") {
        router.push("/dashboard/admin");
      }
    }
  }, [user, isLoading, router]);

  return (
    <div className="flex items-center justify-center h-full">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    </div>
  );
}
