"use client";

import { Button } from "@chakra-ui/react";

export default function ProfileIcon() {


  return (
    <Button
      colorScheme="blue"
      size="md"
      borderRadius="8px"
      fontWeight="bold"
      boxShadow="md"
      p={8}
      width={200}
      _hover={{
        background: "linear-gradient(135deg, #007bff, #b3e0ff)", 
        cursor: "pointer",
        color: "white",
        transition: "background .1s" 
      }}
      _active={{
        background: "linear-gradient(135deg, #b3e0ff, #007bff)", 
        transition: "background .1s" 
      }}
      _focus={{ outline: "none" }}
    >
      Sign in with GitHub
    </Button>
  );
}
