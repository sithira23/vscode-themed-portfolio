import { Textarea, HStack, Text, Box } from "@chakra-ui/react";
import React from "react";

type ContactTextareaProps = {
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  onInput?: (e: React.FormEvent<HTMLTextAreaElement>) => void;
};

const ContactTextarea: React.FC<ContactTextareaProps> = ({
  name,
  value,
  handleChange,
  handleBlur,
  placeholder,
  onInput,
}) => (
  <Box>
    <HStack spacing={2}>
      <Text color="#569CD6">const</Text>
      <Text color="#9CDCFE">{name}</Text>
      <Text color="#569CD6">=</Text>
    </HStack>
    <Textarea
      pt={1}
      name={name}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      variant="unstyled"
      color="#CE9178"
      placeholder={placeholder}
      _placeholder={{ color: "gray.600" }}
      minH="32px"
      h="auto"
      resize="none"
      width="100%"
      overflow="hidden"
      lineHeight="27.48px"
      rows={1}
      style={{ height: "auto", minHeight: "32px", maxHeight: "none" }}
      onInput={onInput}
    />
  </Box>
);

export default ContactTextarea;
