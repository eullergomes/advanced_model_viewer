import { Box, Button, Flex, Heading, HStack, Spacer, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex as="nav" p="10px" alignItems="center" >
      <Heading color="black" as="h1" fontWeight="bold" className="text-3xl">Euller Tasks</Heading>
      <Spacer />

      <HStack gap={4}>
        <Box bg="gray.300" p="3">M</Box>
        <Text color="black">eullertexeira@gmail.com</Text>
        <Button background="purple.500" color="white" p="4">Logout</Button>
      </HStack>
      
    </Flex> 
   );
}
 
export default Navbar;