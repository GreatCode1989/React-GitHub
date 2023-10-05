"use client";

import { Center, Heading, Input, List, ListItem } from "@chakra-ui/react";
import LoginButton from "./LoginButton";
import SearchButton from "./SearchButton";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Header() {
  const { data: session, status } = useSession();
  const [repositories, setRepositories] = useState([]);
  const [username, setUsername] = useState("");

  const fetchRepositories = () => {
    if (status === "authenticated" && username) {
      axios
        .get(`https://api.github.com/users/${username}/repos`)
        .then((response) => {
          const repositoriesData = response.data;
          setRepositories(repositoriesData);
        })
        .catch((error) => {
          console.error("Error fetching GitHub repositories:", error);
        });
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      fetchRepositories();
    }
  }, [status, username]);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <Center h="100vh" flexDir="column">
      <Heading as="h1" mb="4" fontSize="20px" mt="-150" pb="10">
        {status === "authenticated" ? "Welcome" : "Login to get started"}
      </Heading>
      {status === "authenticated" && (
        <>
          <Input
            placeholder="Enter GitHub username"
            value={username}
            onChange={handleUsernameChange}
            mb="4"
            width={200}
            height={20}
            p={4}
          />
          <SearchButton onClick={fetchRepositories} />
        </>
      )}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <List spacing={3} mt="22" p={0} style={{ overflowY: "auto", maxHeight: "300px" }}>
          {repositories.map((repo) => (
            <ListItem
              key={repo.id}
              p="5"
              mt={13}
              bg="lightblue"
              borderRadius="12px"
              textAlign="center"
            >
              {repo.name}
            </ListItem>
          ))}
        </List>
      </div>
      {status !== "authenticated" && <LoginButton />}
    </Center>
  );
}
