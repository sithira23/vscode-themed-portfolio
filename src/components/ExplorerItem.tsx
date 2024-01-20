import { HStack, Image, Text } from "@chakra-ui/react";

interface Props {
  Icon: string;
  Label: string;
}

const ExplorerItem = ({ Icon, Label }: Props) => {
  return (
    <HStack width="100%" height={6} cursor="pointer" userSelect="none">
      <Image boxSize="14px" src={Icon} />
      <Text
        fontSize="14px"
        width="100%"
        color="gray.200"
        _hover={{ color: "white" }}
      >
        {Label}
      </Text>
    </HStack>
  );
};

export default ExplorerItem;
