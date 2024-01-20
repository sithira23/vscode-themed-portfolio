import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import testImage from "../assets/vscode_icon.svg";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import HomeItem from "./HomeItem";

const Home = () => {
  return (
    <HStack height="100%" justify="space-around">
      <VStack alignItems="flex-start" justify="center">
        <Text fontSize={50} fontWeight="bold">
          KAREEM HAMOUDA
        </Text>
        <Text fontSize={25} fontWeight="bold" color="orange" marginBottom={10}>
          Full Stack Developer | Next.js | React.js | Node.js
        </Text>
        <HomeItem Icon={IoMdMail} Label="kareem.e.hamouda@gmail.com" />
        <HomeItem Icon={FaLocationDot} Label="Cario, Egypt" />
        <HomeItem Icon={FaPhoneAlt} Label="+201151119085" />
        <HomeItem Icon={FaGithub} Label="GitHub" />
        <HomeItem Icon={FaLinkedin} Label="Linkedin" />
      </VStack>
      <Image src={testImage} boxSize="300px" />
    </HStack>
  );
};

export default Home;
