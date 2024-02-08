import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikProps,
  FormikHelpers,
} from "formik"; // Import FormikHelpers
import * as Yup from "yup";

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
    email: Yup.string().email("Invalid email").required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    // TODO: Implement send email logic
    console.log(values);
    toast({
      title: "Email Sent",
      description: "Your message has been sent successfully!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    // Reset form after submission
    resetForm();
  };

  return (
    <Box width={{ base: "80%", md: "30%" }}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }: FormikProps<FormValues>) => (
          <Form>
            <Field name="name">
              {({ field, form }: { field: any; form: any }) => (
                <FormControl
                  id="name"
                  isInvalid={form.errors.name && form.touched.name}
                >
                  <FormLabel>Name</FormLabel>
                  <Input {...field} />
                  <ErrorMessage name="name" />
                </FormControl>
              )}
            </Field>
            <Field name="email">
              {({ field, form }: { field: any; form: any }) => (
                <FormControl
                  id="email"
                  isInvalid={form.errors.email && form.touched.email}
                >
                  <FormLabel>Email</FormLabel>
                  <Input type="email" {...field} />
                  <ErrorMessage name="email" />
                </FormControl>
              )}
            </Field>
            <Field name="subject">
              {({ field, form }: { field: any; form: any }) => (
                <FormControl
                  id="subject"
                  isInvalid={form.errors.subject && form.touched.subject}
                >
                  <FormLabel>Subject</FormLabel>
                  <Input {...field} />
                  <ErrorMessage name="subject" />
                </FormControl>
              )}
            </Field>
            <Field name="message">
              {({ field, form }: { field: any; form: any }) => (
                <FormControl
                  id="message"
                  isInvalid={form.errors.message && form.touched.message}
                >
                  <FormLabel>Message</FormLabel>
                  <Textarea {...field} />
                  <ErrorMessage name="message" />
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              colorScheme="blue"
              isLoading={isSubmitting}
              type="submit"
            >
              Send
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ContactForm;
