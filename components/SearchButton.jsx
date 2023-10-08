import { Button } from "@chakra-ui/react";


export default function SignInButton({ onClick }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <Button
      onClick={onClick}
      onKeyDown={handleKeyDown} 
      colorScheme="green"
      size="md"
      borderRadius="8px"
      fontWeight="bold"
      boxShadow="md"
      p={8}
      mt={12}
      mb={12}
      width={200}
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
      type="button"
      tabIndex={0}
    >
      Search Repositories
    </Button>
  );
}
