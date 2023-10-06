"use client";

import { Center, Heading, Input, List, ListItem } from "@chakra-ui/react";
import LoginButton from "./LoginButton";
import SearchButton from "./SearchButton";
import SelectFilter from "./SelectFilter";
import { useSession } from "next-auth/react";
import { useState } from "react";
import axios from "axios";

export default function Header() {
  const { data: session, status } = useSession();
  const [repositories, setRepositories] = useState([]);
  const [username, setUsername] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [limit, setLimit] = useState(10);

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

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSearchClick = () => {
    fetchRepositories();
  };

  const sortRepositories = (repos) => {
    if (sortBy === "name") {
      return [...repos].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "stars") {
      return [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count);
    }
    return repos;
  };

  const sortedRepositories = sortRepositories(repositories);

  const limitedRepositories = sortedRepositories.slice(0, limit);

  return (
    <Center h="100vh" flexDir="column" >
      <Heading as="h1" mb="4" fontSize="20px" mt="-150" pb="10" position="relative">
        {status === "authenticated" ? "Welcome" : "Login to get started"}
      </Heading>
      {status === "authenticated" && (
        <>
         <SelectFilter
            sortBy={sortBy}
            setSortBy={setSortBy}
            limit={limit}
            setLimit={setLimit}
          />
          <Input
            placeholder="Enter GitHub username"
            value={username}
            onChange={handleUsernameChange}
            mb="4"
            width={200}
            height={20}
            p={4}
            boxShadow="0 0 5px 2px rgba(255, 65, 0, 0.5)" 
          />
          <SearchButton onClick={handleSearchClick} />
         
        </>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <List
          spacing={3}
          mt="22"
          p={0}
          style={{ overflowY: "auto", maxHeight: "300px" }}
        >
          {limitedRepositories.map((repo) => (
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