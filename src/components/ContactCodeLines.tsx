import { VStack, Text, HStack, Box } from "@chakra-ui/react";

interface Props {
  totalLines: number;
  errorLines: number[];
}

const ContactCodeLines = ({ totalLines, errorLines }: Props) => {
  return (
    <VStack
      pr={2}
      borderRight="1px"
      borderColor="gray.600"
      color="gray.500"
      minW="40px"
      align="flex-end"
      flexShrink={0}
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
  );
};

export default ContactCodeLines;
