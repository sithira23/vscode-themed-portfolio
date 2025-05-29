import {
  Box,
  Text,
  Input,
  Textarea,
  Button,
  useToast,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import ContactDetails from "./ContactDetails";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const toast = useToast();

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
  };

  return (
    <Box width="100%" bg="gray.800" borderRadius="md" fontFamily="monospace">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          handleChange,
          handleBlur,
          // handleSubmit,
          errors,
          touched,
        }) => {
          // Determine which lines have errors
          const errorLines: Number[] = [];
          if (errors.name && touched.name) errorLines.push(10);
          if (errors.email && touched.email) errorLines.push(11);
          if (errors.subject && touched.subject) errorLines.push(12);
          if (errors.message && touched.message) errorLines.push(13);

          // Calculate total lines needed (base lines + contact details + form fields)
          const totalLines = 20; // Adjust this based on your actual content

          return (
            <Form>
              <HStack align="flex-start" spacing={2}>
                <VStack
                  pr={2}
                  borderRight="1px"
                  borderColor="gray.600"
                  color="gray.500"
                  minW="40px"
                  align="flex-end"
                >
                  {Array.from({ length: totalLines }, (_, i) => (
                    <HStack key={i + 1} spacing={1}>
                      {errorLines.includes(i + 1) && (
                        <Box w="8px" h="8px" bg="red.500" borderRadius="sm" />
                      )}
                      <Text>{i + 1}</Text>
                    </HStack>
                  ))}
                </VStack>

                <VStack align="stretch" width="100%">
                  {/* Contact Details Comments */}
                  <ContactDetails />

                  {/* Form Fields */}
                  <Box height="19.5px">
                    <HStack spacing={2} height="19.5px">
                      <Text color="#569CD6">const</Text>
                      <Text color="#9CDCFE">name</Text>
                      <Text color="#569CD6">=</Text>
                      <Input
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        variant="unstyled"
                        color="#CE9178"
                        placeholder='"Your name"'
                        _placeholder={{ color: "gray.600" }}
                        display="inline-block"
                        width="auto"
                      />
                    </HStack>
                  </Box>

                  <Box height="19.5px">
                    <HStack spacing={2} height="19.5px">
                      <Text color="#569CD6">const</Text>
                      <Text color="#9CDCFE">email</Text>
                      <Text color="#569CD6">=</Text>
                      <Input
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        variant="unstyled"
                        color="#CE9178"
                        placeholder='"your.email@example.com"'
                        _placeholder={{ color: "gray.600" }}
                        display="inline-block"
                        width="100%"
                      />
                    </HStack>
                  </Box>

                  <Box height="19.5px">
                    <HStack spacing={2} height="19.5px">
                      <Text color="#569CD6">const</Text>
                      <Text color="#9CDCFE">subject</Text>
                      <Text color="#569CD6">=</Text>
                      <Input
                        name="subject"
                        value={values.subject}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        variant="unstyled"
                        color="#CE9178"
                        placeholder='"Message subject"'
                        _placeholder={{ color: "gray.600" }}
                        display="inline-block"
                        width="auto"
                        height="19.5px"
                      />
                    </HStack>
                  </Box>

                  <Box>
                    <HStack spacing={2}>
                      <Text color="#569CD6">const</Text>
                      <Text color="#9CDCFE">message</Text>
                      <Text color="#569CD6">=</Text>
                    </HStack>
                    <Textarea
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      variant="unstyled"
                      color="#CE9178"
                      placeholder='"Your message here..."'
                      _placeholder={{ color: "gray.600" }}
                      minH="32px"
                      height="32px"
                      resize="none"
                      width="100%"
                      overflow="hidden"
                      onInput={(e) => {
                        const target = e.target as HTMLTextAreaElement;
                        target.style.height = "32px";
                        target.style.height = `${target.scrollHeight}px`;
                      }}
                    />
                  </Box>

                  <Button
                    type="submit"
                    bg="#0BCEAF"
                    color="white"
                    _hover={{ bg: "#09a88d" }}
                    alignSelf="flex-start"
                    mt={4}
                  >
                    Send Message
                  </Button>
                </VStack>
              </HStack>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default ContactForm;
