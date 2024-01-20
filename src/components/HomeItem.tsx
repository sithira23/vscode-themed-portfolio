import { HStack, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  Icon: IconType;
  Label: string;
}

const HomeItem = ({ Icon, Label }: Props) => {
  return (
    <HStack
      textColor="gray.300"
      cursor="pointer"
      _hover={{ textColor: "white" }}
    >
      <Icon />
      <Text>{Label}</Text>
    </HStack>
  );
};

export default HomeItem;
