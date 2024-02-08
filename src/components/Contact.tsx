import { Flex } from "@chakra-ui/react";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import { useEffect } from "react";

interface Props {
  setPage: (page: string) => void;
}

const Contact = ({ setPage }: Props) => {
  useEffect(() => {
    setPage("contact.ts");
  }, []);
  return (
    <Flex
      minHeight="100%"
      justify="space-around"
      align="center"
      direction={{ base: "column-reverse", md: "row" }}
    >
      <ContactDetails />
      <ContactForm />
    </Flex>
  );
};

export default Contact;
