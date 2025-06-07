import { Box, Heading, VStack } from "@chakra-ui/react";
import ThemeSwitcher from "../components/ThemeSwitcher";
import { useEffect } from "react";

interface Props {
  setPage: (page: string) => void;
}

const Theme = ({ setPage }: Props) => {
  useEffect(() => {
    setPage("theme.css");
  }, []);

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={4}
    >
      <VStack spacing={8} width="100%">
        <Heading color="#0BCEAF" fontSize={{ base: "2xl", md: "3xl" }}>
          Pick Your VSCode Theme
        </Heading>
        <ThemeSwitcher />
      </VStack>
    </Box>
  );
};

export default Theme;
