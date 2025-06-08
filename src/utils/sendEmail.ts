import emailjs from "emailjs-com";

export const sendEmail = async (values: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  return await emailjs.send(
    "service_qd1yz1q",
    "template_fnwi8n8",
    {
      name: values.name,
      email: values.email,
      subject: values.subject,
      message: values.message,
    },
    "gUwncblHHC3oSi7Hd"
  );
};
