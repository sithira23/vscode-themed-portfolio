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
import emailjs from "emailjs-com";

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
    name: Yup.string().required("Error: Name is required"),
    email: Yup.string()
      .email("Error: Invalid email format")
      .required("Error: Email is required"),
    subject: Yup.string().required("Error: Subject is required"),
    message: Yup.string().required("Error: Message is required"),
  });

  const handleSubmit = async (values: FormValues, { resetForm }: any) => {
    try {
      const result = await emailjs.send(
        "service_qd1yz1q",
        "template_fnwi8n8",
        {
          from_name: values.name,
          from_email: values.email,
          subject: values.subject,
          message: values.message,
        },
        "gUwncblHHC3oSi7Hd"
      );

      toast({
        title: "Message Sent",
        description: "Your message has been sent successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      resetForm();
      setMessageLines(1);
      console.log(result);
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "There was a problem sending your message.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    setTotalLines(13 + messageLines);
  }, [messageLines]);

  return (
    <Box
      w="full"
      borderRadius="md"
      fontFamily="monospace"
      overflowX="hidden"
      pr="1rem"
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur, errors, touched }) => {
          const errorMap: Record<number, string> = {};
          if (errors.name && touched.name) errorMap[10] = errors.name;
          if (errors.email && touched.email) errorMap[11] = errors.email;
          if (errors.subject && touched.subject) errorMap[12] = errors.subject;
          if (errors.message && touched.message) errorMap[13] = errors.message;

          return (
            <Form>
              <HStack
                align="flex-start"
                w="full"
                flexDirection={useBreakpointValue({
                  base: "column",
                  md: "row",
                })}
                justify={{ md: "space-between" }}
              >
                <HStack
                  align="flex-start"
                  spacing={2}
                  w="full"
                  overflowX={isMobile ? "auto" : "visible"}
                >
                  <ContactCodeLines
                    totalLines={totalLines}
                    errorLines={Object.keys(errorMap).map(Number)}
                    errorMessages={errorMap}
                  />

                  <VStack
                    align="stretch"
                    w="full"
                    minW={isMobile ? "300px" : "auto"}
                  >
                    <ContactDetails />

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
                      placeholder='"Your message here..."'
                      setMessageLines={setMessageLines}
                    />
                  </VStack>
                </HStack>

                <Button
                  type="submit"
                  bg="#0BCEAF"
                  color="white"
                  _hover={{ bg: "#09a88d" }}
                  mt={4}
                  ml={4}
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
