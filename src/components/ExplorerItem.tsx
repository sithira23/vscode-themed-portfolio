import { HStack, Image, Text } from "@chakra-ui/react";

interface Props {
  Icon: string;
  Label: string;
}

const ExplorerItem = ({ Icon, Label }: Props) => {
  return (
    <HStack width="100%" cursor="pointer" userSelect="none">
      <Image boxSize={3} src={Icon} />
      <Text fontSize="13px" color="gray.200" _hover={{ color: "white" }}>
        {Label}
      </Text>
    </HStack>
  );
};

export default ExplorerItem;
