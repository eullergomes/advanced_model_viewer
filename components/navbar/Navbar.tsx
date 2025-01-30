import { Box, Button, Flex, Heading, HStack, Spacer, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex as="nav" p="10px" alignItems="center">
      <Heading as="h1" fontWeight="bold" className="text-2xl">Euller Tasks</Heading>
      <Spacer />

      <HStack gap={4}>
        <Box bg="gray.200" p="10px">M</Box>
        <Text>eullertexeira@gmail.com</Text>
        <Button colorScheme="normal">Button</Button>
      </HStack>
      
    </Flex> 
   );
}
 
export default Navbar;