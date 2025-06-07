import { VStack, Text, HStack, Show } from "@chakra-ui/react";
import {
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const ContactDetails = () => {
  return (
    <VStack align="stretch" color="#6A9955">
      <Text>/**</Text>
      <Text pl={2}>* Contact Information:</Text>
      <HStack pl={2}>
        <Text>*</Text>
        <FaPhoneAlt size={14} />
        <Text>Phone: +20 115 111 9085</Text>
      </HStack>
      <HStack pl={2}>
        <Text>*</Text>
        <FaWhatsapp size={14} />
        <Text>WhatsApp: +20 115 111 9085</Text>
      </HStack>
      <HStack pl={2}>
        <Text>*</Text>
        <FaGithub size={14} />
        <Text>GitHub: github.com/KareemEhab</Text>
      </HStack>
      <HStack pl={2}>
        <Text>*</Text>
        <FaLinkedin size={14} />
        <Text>
          <Show above="sm">LinkedIn: </Show>linkedin.com/in/kareem-hamouda
        </Text>
      </HStack>
      <HStack pl={2}>
        <Text>*</Text>
        <FaFacebook size={14} />
        <Text>
          <Show above="sm">Facebook: </Show>facebook.com/kareem.ehab.37
        </Text>
      </HStack>
      <HStack pl={2}>
        <Text>*</Text>
        <FaInstagram size={14} />
        <Text>
          <Show above="sm">Instagram: </Show>instagram.com/kareem.ehabz
        </Text>
      </HStack>
      <Text>*/</Text>
    </VStack>
  );
};

export default ContactDetails;
