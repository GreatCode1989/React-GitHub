
import { Button } from "@chakra-ui/react";
import { signIn } from "next-auth/react";

export default function SignInButton() {
  return (
    <Button
      onClick={() => signIn("github")}
      colorScheme="green"
      size="md"
      borderRadius="8px"
      fontWeight="bold"
      boxShadow="md"
      p={8}
      width={100}
      _hover={{
        background: "linear-gradient(135deg, #ff0000, #007bff)",
        cursor: "pointer",
        color: "white",
        transition: "background .2s",
      }}
      _active={{
        background: "linear-gradient(135deg, #b3e0ff, #ff9900)",
        transition: "background .2s",
      }}
      _focus={{ outline: "none" }}
    >
      Sign In
    </Button>
  );
}
