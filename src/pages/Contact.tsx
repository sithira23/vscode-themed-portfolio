import { Box } from "@chakra-ui/react";
import ContactForm from "../components/ContactForm";
import { useEffect } from "react";

interface Props {
  setPage: (page: string) => void;
}

const Contact = ({ setPage }: Props) => {
  useEffect(() => {
    setPage("contact.ts");
  }, []);

  return (
    <Box minHeight="100%" width="100%">
      <ContactForm />
    </Box>
  );
};

export default Contact;
