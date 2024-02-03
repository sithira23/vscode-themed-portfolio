import { HStack, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  Icon: IconType;
  Label: string;
  Link: string;
}

const HomeItem = ({ Icon, Label, Link }: Props) => {
  return (
    <HStack
      textColor="gray.300"
      cursor="pointer"
      _hover={{ textColor: "white" }}
      onClick={() => window.open(Link, "_blank")}
    >
      <Icon />
      <Text>{Label}</Text>
    </HStack>
  );
};

export default HomeItem;
