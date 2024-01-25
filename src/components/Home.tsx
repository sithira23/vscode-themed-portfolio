import { HStack, Image, Text, VStack, Flex } from "@chakra-ui/react";
import testImage from "../assets/vscode_icon.svg";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import HomeItem from "./HomeItem";

const Home = () => {
  return (
    <Flex
      height="100%"
      justify="space-around"
      align="center"
      direction={{ base: "column-reverse", md: "row" }}
    >
      <VStack
        alignItems="flex-start"
        justify="center"
        mb={{ base: "4", md: "0" }}
      >
        {" "}
        {/* Add margin bottom on small screens */}
        <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
          KAREEM HAMOUDA
        </Text>
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          fontWeight="bold"
          color="orange"
          marginBottom={{ base: "4", md: "10" }}
        >
          Full Stack Developer | Next.js | React.js | Node.js
        </Text>
        <HomeItem Icon={IoMdMail} Label="kareem.e.hamouda@gmail.com" />
        <HomeItem Icon={FaLocationDot} Label="Cario, Egypt" />
        <HomeItem Icon={FaPhoneAlt} Label="+201151119085" />
        <HomeItem Icon={FaGithub} Label="GitHub" />
        <HomeItem Icon={FaLinkedin} Label="Linkedin" />
      </VStack>
      <Image src={testImage} boxSize="300px" />
    </Flex>
  );
};

export default Home;
