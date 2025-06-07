import {
  Box,
  Button,
  useToast,
  HStack,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import ContactDetails from "./ContactDetails";
import ContactCodeLines from "./ContactCodeLines";
import ContactInput from "./ContactInput";
import ContactTextarea from "./ContactTextarea";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const toast = useToast();
  const [totalLines, setTotalLines] = useState(14);
  const [messageLines, setMessageLines] = useState(1);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const initialValues: FormValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values: FormValues, { resetForm }: any) => {
    console.log(values);
    toast({
      title: "Message Sent",
      description: "Your message has been sent successfully!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    resetForm();
    setMessageLines(1);
  };

  useEffect(() => {
    setTotalLines(13 + messageLines);
  }, [messageLines]);

  return (
    <Box
      width="100%"
      borderRadius="md"
      fontFamily="monospace"
      overflowX="hidden"
      paddingRight="1rem"
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur, errors, touched }) => {
          // Determine which lines have errors
          const errorLines: number[] = [];
          if (errors.name && touched.name) errorLines.push(10);
          if (errors.email && touched.email) errorLines.push(11);
          if (errors.subject && touched.subject) errorLines.push(12);
          if (errors.message && touched.message) errorLines.push(13);

          return (
            <Form>
              <HStack
                align="flex-start"
                spacing={2}
                overflowX={isMobile ? "auto" : "visible"}
              >
                <ContactCodeLines
                  totalLines={totalLines}
                  errorLines={errorLines}
                />

                <VStack
                  align="stretch"
                  width="100%"
                  minW={isMobile ? "300px" : "auto"}
                >
                  {/* Contact Details Comments */}
                  <ContactDetails />

                  {/* Form Fields */}
                  <ContactInput
                    name="name"
                    value={values.name}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    placeholder='"Your name"'
                  />

                  <ContactInput
                    name="email"
                    value={values.email}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    placeholder='"your.email@example.com"'
                  />

                  <ContactInput
                    name="subject"
                    value={values.subject}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    placeholder='"Message subject"'
                  />

                  <ContactTextarea
                    name="message"
                    value={values.message}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    placeholder="'Your message here...'"
                  />
                </VStack>
                <Button
                  type="submit"
                  bg="#0BCEAF"
                  color="white"
                  _hover={{ bg: "#09a88d" }}
                  mt={4}
                >
                  Send Message
                </Button>
              </HStack>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default ContactForm;
