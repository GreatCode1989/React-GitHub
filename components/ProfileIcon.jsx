"use client";

import { useSession } from "next-auth/react";
import SignInButton from "./SignInButton";
import { useRouter } from 'next/router';
import { Image } from "@chakra-ui/react";

export default function ProfileIcon() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleSignOut = () => {
    router.push('/repositories');
  };

  if (status === "authenticated") {
    return (
      <div className="flex gap-5">
        <Image
          src={session.user.image}
          width={40}
          height={40}
          className="rounded-full"
        />
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    );
  }
  return <SignInButton />;
}
