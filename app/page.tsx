import Navbar from "@/components/navbar/Navbar";
import { Box, Container, Heading, Text } from "@chakra-ui/react";

const App = () => {
  
  const boxStyles = {
    p: "10px",
    bg: "green.500",
    color: "white",
    m: "10px",
    textAlign: "center",
    '&:hover': {
      bg: "blue.500"
    }
  }

  return (
    <>
      <Navbar />
      <Container as="section" className="mx-auto my-10" textAlign={"center"}>
      <Heading className="text-4xl" fontWeight="bold">Chakra UI Components</Heading>

      <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Text>
      <Text color="blue.300" fontWeight="bolder">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Text>
    
      <Box bg="orange.500" color="white" p={4} mt={4}>
        <Text>This is a box</Text>
      </Box>

      <Box {...boxStyles}> 
        Hello Euller
      </Box>
    </Container>
    </>
  )
}
 
export default App;