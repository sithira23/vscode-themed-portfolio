import {
  Box,
  SimpleGrid,
  Text,
  Image,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const themes = [
  {
    key: "dark",
    name: "VSCode Dark",
    image:
      "https://user-images.githubusercontent.com/37961837/279943318-9cf03269-dc15-4961-a7f0-3a379d8e9a90.png",
    description: "Classic VSCode dark theme.",
  },
  {
    key: "light",
    name: "Night Owl Light",
    image:
      "https://user-images.githubusercontent.com/37961837/279943319-6c6740fa-56d5-4a90-9d07-715d17f0cc6d.png",
    description: "Night Owl Light: Vibrant and readable theme.",
  },
];

const ThemeSwitcher = () => {
  const { setColorMode, colorMode } = useColorMode();
  const cardBg = useColorModeValue("gray.100", "gray.700");
  const borderColor = useColorModeValue("gray.300", "gray.600");

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={8}
      width="100%"
      maxW="700px"
      mx="auto"
    >
      {themes.map((theme) => (
        <Box
          key={theme.key}
          bg={cardBg}
          borderWidth="2px"
          borderColor={colorMode === theme.key ? "#0BCEAF" : borderColor}
          borderRadius="lg"
          boxShadow={colorMode === theme.key ? "0 0 0 2px #0BCEAF" : "md"}
          p={6}
          textAlign="center"
          transition="all 0.2s"
        >
          <Image
            src={theme.image}
            alt={theme.name}
            borderRadius="full"
            boxSize="80px"
            objectFit="cover"
            mb={4}
            mx="auto"
          />
          <Text fontWeight="bold" fontSize="xl" mb={2}>
            {theme.name}
          </Text>
          <Text fontSize="sm" color="gray.500" mb={4}>
            {theme.description}
          </Text>
          <Button
            colorScheme={colorMode === theme.key ? "teal" : "gray"}
            variant={colorMode === theme.key ? "solid" : "outline"}
            onClick={() => setColorMode(theme.key)}
            isDisabled={colorMode === theme.key}
            width="100%"
          >
            {colorMode === theme.key ? "Selected" : "Use Theme"}
          </Button>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default ThemeSwitcher;
