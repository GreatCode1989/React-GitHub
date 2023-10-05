"use client";

import { Center, Heading } from "@chakra-ui/react";
import LoginButton from "./LoginButton";
import {useSession} from "next-auth/react"

export default function Header() {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <Center h="100vh" flexDir="column">
        <Heading as="h1" mb="4" fontSize="20px" mt="-150"pb="10">
         Welcome
        </Heading>
        <span style={{ fontSize: "36px", color: "blue" }}>{session.user.name}</span>
      </Center>
    );}
   

  return (
    <Center h="100vh" flexDir="column">
      <Heading as="h1" mb="4" fontSize="20px" mt="-150"pb="10">
       Login to get started
      </Heading>
      <LoginButton />
    </Center>
  );
}
