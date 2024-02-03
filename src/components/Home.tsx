import { Image, Text, VStack, Flex } from "@chakra-ui/react";
import myImage from "../assets/my_image.webp";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import HomeItem from "./HomeItem";

const Home = () => {
  return (
    <Flex
      minHeight="100%"
      justify="space-around"
      align="center"
      direction={{ base: "column-reverse", md: "row" }}
    >
      <VStack
        alignItems="flex-start"
        justify="center"
        mb={{ base: "4", md: "0" }}
      >
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
        <HomeItem
          Icon={IoMdMail}
          Label="kareem.e.hamouda@gmail.com"
          Link="/contact"
        />
        <HomeItem
          Icon={FaLocationDot}
          Label="Cario, Egypt"
          Link="https://www.google.com/maps/place/Cairo,+Cairo+Governorate/@30.0594885,31.2584644,13z/data=!3m1!4b1!4m6!3m5!1s0x14583fa60b21beeb:0x79dfb296e8423bba!8m2!3d30.0444196!4d31.2357116!16zL20vMDF3MnY?entry=ttu"
        />
        <HomeItem Icon={FaPhoneAlt} Label="+201151119085" Link="" />
        <HomeItem
          Icon={FaUniversity}
          Label="Ain Shams University"
          Link="https://www.asu.edu.eg/"
        />
        <HomeItem
          Icon={FaGraduationCap}
          Label="Bachelor's Degree in Computer Sciences"
          Link="https://cis.asu.edu.eg/"
        />
        <HomeItem
          Icon={FaGithub}
          Label="GitHub"
          Link="https://github.com/KareemEhab"
        />
        <HomeItem
          Icon={FaLinkedin}
          Label="Linkedin"
          Link="https://www.linkedin.com/in/kareem-hamouda/"
        />
        <HomeItem
          Icon={FaFacebook}
          Label="Facebook"
          Link="https://www.facebook.com/kareem.ehab.37"
        />
        <HomeItem
          Icon={FaInstagram}
          Label="Instagram"
          Link="https://www.instagram.com/kareem_ehab47/"
        />
      </VStack>
      <Image
        src={myImage}
        boxSize={{ base: "250px", md: "425px" }}
        borderRadius="50%"
      />
    </Flex>
  );
};

export default Home;
