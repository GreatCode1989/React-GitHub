"use client";

import { Center, Heading } from "@chakra-ui/react";
import LoginButton from "./LoginButton";

export default function Header() {
  return (
    <Center h="100vh" flexDir="column">
      <Heading as="h1" mb="4" fontSize="20px" mt="-150"pb="10">
       Login to get started
      </Heading>
      <LoginButton />
    </Center>
  );
}
