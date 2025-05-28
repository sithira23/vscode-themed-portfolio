import { VStack, Text, Box } from "@chakra-ui/react";
import {
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import HomeItem from "./HomeItem";

const ContactDetails = () => {
  return (
    <Box
      width={{ base: "90%", md: "35%" }}
      bg="gray.800"
      borderRadius="md"
      p={6}
    >
      <Text
        fontSize={{ base: "xl", md: "2xl" }}
        fontWeight="bold"
        color="#0BCEAF"
        mb={6}
      >
        // Contact Details
      </Text>
      <VStack spacing={4} align="flex-start">
        <HomeItem Icon={FaPhoneAlt} Label="+201151119085" Link="" />
        <HomeItem
          Icon={FaWhatsapp}
          Label="+201151119085"
          Link="https://wa.me/+201151119085"
        />
        <HomeItem
          Icon={FaGithub}
          Label="GitHub"
          Link="https://github.com/KareemEhab"
        />
        <HomeItem
          Icon={FaLinkedin}
          Label="LinkedIn"
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
    </Box>
  );
};

export default ContactDetails;
