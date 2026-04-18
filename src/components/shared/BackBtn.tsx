"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const BackBtn = () => {
  const router = useRouter();

  return (
    <Button
      onClick={() => {
        if (window.history.length > 1) {
          router.back();
        } else {
          router.push("/tutors");
        }
      }}
      className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 mb-4 px-5 py-2 cursor-pointer"
    >
      <ArrowLeft size={18} />
      <span className="font-bold">Back</span>
    </Button>
  );
};

export default BackBtn;
