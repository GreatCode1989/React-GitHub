"use client";

import {
  Box,
  Text, 
  Center,
  Heading,
  Input,
  List,
  ListItem,
} from "@chakra-ui/react";
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
  const [limit, setLimit] = useState(20);
  const [searchError, setSearchError] = useState("");

  const fetchRepositories = () => {
    if (status === "authenticated" && username) {
      axios
        .get(`https://api.github.com/users/${username}/repos`)
        .then((response) => {
          const repositoriesData = response.data;
          setRepositories(repositoriesData);
          setSearchError("");
        })
        .catch((error) => {
          console.error("Error fetching GitHub repositories:", error);
          setSearchError("Error fetching repositories");
        });
    }
  };

  const handleSetLimit = (newLimit) => {
    if (newLimit >= 0) {
      setLimit(newLimit);
    } else {
      setLimit(0); 
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSearchClick = () => {
    if (username.trim() === "") {
      setSearchError("Please enter a GitHub username");
    } else {
      fetchRepositories();
    }
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
    <Center
      h="80vh"
      flexDir="column"
      bgImage={`url(${
        limitedRepositories.length > 0
          ? "https://p12.com.ua/public/user_files/7/1/3/6/rick-and-morty.png"
          : ""
      })`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      transition="background-image .3s ease-in-out"
      borderRadius="12px"
    >
      <Heading
        color={limitedRepositories.length > 0 ? "transparent" : "black"}
        as="h1"
        ml={10}
        fontSize="20px"
        pb="20"
        position="relative"
        mb={status === "authenticated" ? "4" : "-90px"} 
      >
        {status === "authenticated" ? "Welcome" : "Login to get started"}
      </Heading>
      {status === "authenticated" && (
        <>
          <SelectFilter
            sortBy={sortBy}
            setSortBy={setSortBy}
            limit={limit}
            setLimit={handleSetLimit}
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
     {searchError &&
      <Text
     color={"red"}
     fontWeight={"bold"}
     >{searchError}</Text>}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100px"
        overflowY="auto"
        maxHeight="300px"
      >
        <List spacing={3} mt="4" p={0}>
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
      </Box>
      {status !== "authenticated" && <LoginButton />}
    </Center>
  );
}
