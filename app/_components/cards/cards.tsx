import { Box, SimpleGrid, Text } from "@chakra-ui/react";

const Cards = () => {
  return ( 
    <SimpleGrid p="10px" columns={4} gap={10} minChildWidth="250px">
      <Box bg="white" h="200px" border="1px solid black">
        <Text color={{ base: 'pink', md: 'blue', lg:'green' }}>Card 1</Text>
      </Box>
      <Box bg="white" h="200px" border="1px solid black"></Box>
      <Box bg="white" h="200px" border="1px solid black"></Box>
      <Box bg="white" h="200px" border="1px solid black"></Box>
      <Box bg="white" h="200px" border="1px solid black"></Box>

      <Box bg="white" h="200px" border="1px solid black"></Box>
      <Box bg="white" h="200px" border="1px solid black"></Box>
      <Box bg="white" h="200px" border="1px solid black"></Box>
      <Box bg="white" h="200px" border="1px solid black"></Box>
      <Box bg="white" h="200px" border="1px solid black"></Box>

      <Box bg="white" h="200px" border="1px solid black"></Box>
      <Box bg="white" h="200px" border="1px solid black"></Box>
      <Box bg="white" h="200px" border="1px solid black"></Box>
      <Box bg="white" h="200px" border="1px solid black"></Box>
      <Box bg="white" h="200px" border="1px solid black"></Box>
    </SimpleGrid>
   );
}
 
export default Cards;