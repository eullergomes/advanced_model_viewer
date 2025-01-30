import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./_components/navbar/navbar";
import Cards from "./_components/cards/cards";
import Sidebar from "./_components/sidebar/sidebar";

const App = () => {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      <GridItem
        as="aside"
        colSpan={{ base: 6, lg: 2, xl: 1 }}
        bg="purple.400"
        minHeight={{ lg: "100vh" }}
        p={{ base: "20px", lg: "30px" }}
      >
        <Sidebar />
      </GridItem>
      <GridItem as="main" colSpan={{ base: 6, lg: 4, xl: 5 }} p="40px">
        <Navbar />
        <Cards />
      </GridItem>
    </Grid>
  );
};

export default App;