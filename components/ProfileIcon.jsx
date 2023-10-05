"use client";

import { Flex } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import { Image } from "@chakra-ui/react";

export default function ProfileIcon() {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <Flex alignItems="center">
        <Image
          src={session.user.image}
          width={40}
          height={40}
          p={15}
          borderRadius="50%"
        />
        <SignOutButton />
      </Flex>
    );
  }

  return <SignInButton />;
}




