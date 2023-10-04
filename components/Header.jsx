import { Center, Heading } from "@chakra-ui/react";
import LoginButton from "./LoginButton";

export default function Header() {
  return (
    <Center h="100vh" flexDir="column">
      <Heading as="h1" mb="4" fontSize="10px" mt="-150">
       <h1>Login to get started</h1>
      </Heading>
      <LoginButton />
    </Center>
  );
}
