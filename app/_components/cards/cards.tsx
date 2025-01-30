"use client"; // Indica que o componente roda no navegador

import { useEffect, useState } from "react";
import { Box, SimpleGrid, Text, Image, Card, CardHeader, CardBody, CardFooter, Flex, Heading, HStack, Button, Icon, Separator } from "@chakra-ui/react";
import { Eye, SquarePen } from "lucide-react";

interface Task {
  id: number;
  title: string;
  description: string;
  author: string;
  img: string;
}

const Cards = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("/api/tasks");
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Erro ao carregar tarefas:", error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <SimpleGrid p="10px" columns={[1, 2, 3, 4]} gap={10} minChildWidth="250px">
      {tasks.map((task) => (
        <Card.Root key={task.id} bg="white">
          <Card.Body >
            <Card.Header p={1}>
              <Flex gap={5} color="gray.500">
                <Box>
                  <Text>AV</Text>
                </Box>
                <Box>
                  <Heading as="h3" size="sm" fontWeight="bold">{task.title}</Heading>
                  <Text>por {task.author}</Text>
                </Box>
              </Flex>
            </Card.Header>

            <Card.Description>
              <Text>{task.description}</Text>
            </Card.Description>
          </Card.Body>

          <Separator borderColor="red"/>

          <Card.Footer p={1} alignSelf="center">
            <Button bg="gray.200" py="2" px="4" borderRadius="md">
              <Icon color="black" ><Eye /></Icon>
              <Text color="black" fontWeight="semibold">Ver</Text>
            </Button>
            <Button bg="gray.200" py="2" px="4" borderRadius="md">
              <Icon color="black"><SquarePen /></Icon>
              <Text color="black" fontWeight="semibold">Editar</Text>
            </Button>
          </Card.Footer>

        </Card.Root>
      ))}
    </SimpleGrid>
  );
};

export default Cards;
