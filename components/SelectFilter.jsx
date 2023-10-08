import {
  FormControl,
  FormLabel,
  Select,
  Input,
  Flex,
  Box,
} from "@chakra-ui/react";

export default function SelectFilter({ sortBy, setSortBy, limit, setLimit }) {
  return (
    <Flex
    align="center" 
    position="reletive" 
    transform="translate(0%, -40%)" 
    >
      <Box ml="2">
        <FormControl>
          <FormLabel htmlFor="sortBy" mb={10} fontWeight="bold">Sort By:</FormLabel>
          <Select
            id="sortBy"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            width="200px"
            mb="4"
            
            borderColor="lightblue"
            boxShadow="0 0 5px 2px rgba(255, 165, 0, 0.5)" 
          >
            <option value="name">Name</option>
            <option value="stars">Stars</option>
          </Select>
        </FormControl>
      </Box>
      <Box ml="2">
        <FormControl>
          <FormLabel htmlFor="limit"  mb={10} fontWeight="bold">Show:</FormLabel>
          <Input
            type="number"
            id="limit"
            value={limit}
            onChange={(e) => setLimit(parseInt(e.target.value))}
            width="70px"
            mb="4"
            borderColor="lightblue"
            boxShadow="0 0 5px 2px rgba(255, 165, 0, 0.5)" 
          />
        </FormControl>
      </Box>
    </Flex>
  );
}
