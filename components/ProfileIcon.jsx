import { Button } from "@chakra-ui/react";

export default function ProfileIcon() {
  return (
    <Button
      colorScheme="teal"
      size="md"
      borderRadius="8px"
      fontWeight="bold"
      boxShadow="md"
      p={8}
      width={100}
      _hover={{ bgColor: "teal", cursor: "pointer", color: "white" }}
      _active={{ bgColor: "teal" }}
      _focus={{ outline: "none" }}
    >
      Sign In
    </Button>
  );
}
