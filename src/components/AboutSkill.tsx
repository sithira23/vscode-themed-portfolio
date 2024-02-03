import { Box } from "@chakra-ui/react";

interface Props {
  Label: string;
}

const AboutSkill = ({ Label }: Props) => {
  return (
    <Box
      borderRadius="md"
      color="white"
      borderColor="#0BCEAF"
      borderWidth="2px"
      padding={2}
      fontSize={{ base: "sm", md: "lg" }}
    >
      {Label}
    </Box>
  );
};

export default AboutSkill;
