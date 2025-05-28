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
    else if (Link) window.open(Link, "_blank");
  };

  return (
    <HStack
      spacing={3}
      textColor="gray.300"
      cursor={Link ? "pointer" : "default"}
      transition="all 0.3s"
      _hover={
        Link
          ? {
              textColor: "#0BCEAF",
              transform: "translateX(5px)",
            }
          : undefined
      }
      onClick={handleClick}
    >
      <Icon size={20} />
      <Text fontSize="md">{Label}</Text>
    </HStack>
  );
};

export default HomeItem;
