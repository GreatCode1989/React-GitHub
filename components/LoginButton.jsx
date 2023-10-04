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
      _hover={{ bgColor: "blue", cursor: "pointer", color: "white" }}
      _active={{ bgColor: "lightblue" }}
      _focus={{ outline: "none" }}
    >
      Sign in with GitHub
    </Button>
  );
}