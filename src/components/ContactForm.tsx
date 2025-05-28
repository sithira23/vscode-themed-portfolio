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
import {
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

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
    name: Yup.string().required("// Name is required"),
    email: Yup.string()
      .email("// Invalid email format")
      .required("// Email is required"),
    subject: Yup.string().required("// Subject is required"),
    message: Yup.string().required("// Message is required"),
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
          handleSubmit,
          errors,
          touched,
        }) => (
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
                {Array.from(
                  {
                    length:
                      20 +
                      (errors.name && touched.name ? 1 : 0) +
                      (errors.email && touched.email ? 1 : 0) +
                      (errors.subject && touched.subject ? 1 : 0) +
                      (errors.message && touched.message ? 1 : 0),
                  },
                  (_, i) => (
                    <Text key={i + 1}>{i + 1}</Text>
                  )
                )}
              </VStack>

              <VStack align="stretch" width="100%">
                {/* Contact Details Comments */}
                <VStack align="stretch" color="#6A9955">
                  <Text>/**</Text>
                  <Text pl={2}>* Contact Information:</Text>
                  <Text pl={2}>* Phone: +201151119085</Text>
                  <Text pl={2}>* WhatsApp: +201151119085</Text>
                  <Text pl={2}>* GitHub: github.com/KareemEhab</Text>
                  <Text pl={2}>* LinkedIn: linkedin.com/in/kareem-hamouda</Text>
                  <Text pl={2}>* Facebook: facebook.com/kareem.ehab.37</Text>
                  <Text pl={2}>* Instagram: instagram.com/kareem_ehab47</Text>
                  <Text>*/</Text>
                </VStack>

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
                  {errors.name && touched.name && (
                    <Text color="#D16969" fontSize="sm" mt={1}>
                      {errors.name}
                    </Text>
                  )}
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
                  {errors.email && touched.email && (
                    <Text color="#D16969" fontSize="sm" mt={1}>
                      {errors.email}
                    </Text>
                  )}
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
                  {errors.subject && touched.subject && (
                    <Text color="#D16969" fontSize="sm" mt={1}>
                      {errors.subject}
                    </Text>
                  )}
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
                  {errors.message && touched.message && (
                    <Text color="#D16969" fontSize="sm" mt={1}>
                      {errors.message}
                    </Text>
                  )}
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
        )}
      </Formik>
    </Box>
  );
};

export default ContactForm;
