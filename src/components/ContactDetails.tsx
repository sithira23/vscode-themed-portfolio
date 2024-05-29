import { VStack, Text } from "@chakra-ui/react";
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
    <VStack
      alignItems="flex-start"
      justify="center"
      mb={{ base: "4", md: "0" }}
    >
      <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
        Contact Details:
      </Text>
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
  );
};

export default ContactDetails;
