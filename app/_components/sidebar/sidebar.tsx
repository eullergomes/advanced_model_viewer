import { HStack, List } from "@chakra-ui/react";
import { BadgePlus, CircleUserRound, LayoutDashboard, Scan } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <List.Root color="white" fontSize="1.2rem" gap={4}>
      <List.Item>
        <Link href="/">
          <HStack gap={2}>
            <LayoutDashboard />
            <span>Dashboard</span>
          </HStack>
        </Link>
      </List.Item>
      <List.Item>
        <Link href="/create">
          <HStack gap={2}>
            <BadgePlus />
            <span>Nova tarefa</span>
          </HStack>
        </Link>
      </List.Item>
      <List.Item>
        <Link href="/profile">
          <HStack gap={2}>
            <CircleUserRound />
            <span>Perfil</span>
          </HStack>
        </Link>
      </List.Item>
      <List.Item>
        <Link href="/ra">
          <HStack gap={2}>
            <Scan />
            <span>RA</span>
          </HStack>
        </Link>
      </List.Item>
    </List.Root>
  );
};

export default Sidebar;
