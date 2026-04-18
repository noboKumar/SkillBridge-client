"use client";
import { useAuth } from "@/hooks/useAuth";
import { User } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

const UserAvatar = () => {
  const { user } = useAuth();
  return (
    <div className="flex items-center gap-3">
      {/* Profile Photo / Fallback Icon */}
      {user ? (
        <>
          <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-200 flex items-center justify-center ring-2 ring-gray-500">
            {user.profilePhoto ? (
              <Image
                src={user.profilePhoto}
                alt={user.name}
                width={100}
                height={100}
                className="w-full h-full object-cover "
              />
            ) : (
              <User size={20} className="text-slate-500" />
            )}
          </div>

          <div>
            {/* User Name */}
            <h1 className="text-lg font-medium">
              Welcome, <span className="font-bold">{user.name}</span>
            </h1>
            <LogoutButton></LogoutButton>
          </div>
        </>
      ) : (
        <>
          <Button variant={"outline"}>
            <Link href={"/register"}>Register</Link>
          </Button>
          <Button>
            <Link href={"/login"}>Login</Link>
          </Button>
        </>
      )}
    </div>
  );
};

export default UserAvatar;
