import { Box, Heading, Flex } from "@chakra-ui/react";
import Link from "next/link";
import ProfileIcon from "./ProfileIcon";

export default function Navbar() {
  return (
    <Box
      as="header"
      bg="#33cc33"
      p={4}
      borderRadius="12px"
      mb={4}
      mx="auto"
      maxW="100%"
      textAlign="center"
    >
      <Flex
        justify="space-between"
        alignItems="center"
        height="60px"
        pl={50}
        pr={50}
      >
        <Heading as="h1">
          <nav>
            <Link
              href={"/"}
              style={{ textDecoration: "none", fontSize: "27px" }}
            >
              GitHub Power
            </Link>
          </nav>
        </Heading>
        <ProfileIcon />
      </Flex>
    </Box>
  );
}
