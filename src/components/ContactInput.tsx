import { Input, HStack, Text, Box, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

type Props = {
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder: string;
};

const ContactInput = ({
  name,
  value,
  handleChange,
  handleBlur,
  placeholder,
}: Props) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box height="19.5px">
      <HStack spacing={2} height="19.5px">
        <Text color="#569CD6">const</Text>
        <Text color="#9CDCFE">{name}</Text>
        <Text color="#569CD6">=</Text>
        <Input
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          variant="unstyled"
          color="#CE9178"
          placeholder={placeholder}
          _placeholder={{ color: "gray.600" }}
          display="inline-block"
          width={isMobile ? "150px" : "100%"}
          minW="100px"
        />
      </HStack>
    </Box>
  );
};

export default ContactInput;
