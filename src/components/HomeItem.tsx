import { HStack, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { useNavigate } from "react-router-dom";

interface Props {
  Icon: IconType;
  Label: string;
  Link: string;
}

const HomeItem = ({ Icon, Label, Link }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (Link === "/contact") navigate(Link);
    else window.open(Link, "_blank");
  };

  return (
    <HStack
      textColor="gray.300"
      cursor="pointer"
      _hover={{ textColor: "white" }}
      onClick={handleClick}
    >
      <Icon />
      <Text>{Label}</Text>
    </HStack>
  );
};

export default HomeItem;
