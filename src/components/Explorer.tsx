import { Box, HStack, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import ExplorerItem from "./ExplorerItem";
import JSImage from "../assets/javascript.webp";
import HTMLImage from "../assets/html.webp";
import JSONImage from "../assets/json.webp";
import CSSImage from "../assets/css.webp";

const Explorer = () => {
  const backgroundColor = useColorModeValue("gray-100", "gray.900");
  const [isOpen, setIsOpen] = useState(true);
  return (
    <VStack height="inherit" bg={backgroundColor}>
      <HStack width="100%" paddingX={3} paddingTop={2}>
        <Text>EXPLORER</Text>
      </HStack>
      <Box width="100%">
        <HStack
          marginTop={2}
          paddingLeft={2}
          gap={0}
          cursor="pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
          <Text userSelect="none" fontSize={13} fontWeight="bold">
            PORTFOLIO
          </Text>
        </HStack>
        {isOpen && (
          <VStack width="100%" paddingLeft={3} marginTop={2}>
            <ExplorerItem Icon={JSImage} Label="home.js" />
            <ExplorerItem Icon={HTMLImage} Label="about.html" />
            <ExplorerItem Icon={JSONImage} Label="projects.json" />
            <ExplorerItem Icon={CSSImage} Label="github.css" />
          </VStack>
        )}
      </Box>
    </VStack>
  );
};

export default Explorer;
