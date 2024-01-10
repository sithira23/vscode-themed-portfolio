import { Button, Text, useBreakpointValue } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  Icon: IconType;
  Content: string;
}

const FooterButton = ({ Icon, Content }: Props) => {
  const iconFontSize = useBreakpointValue({
    base: "10px",
    md: "16px",
  });
  const textFontSize = useBreakpointValue({ base: "8px", md: "13px" });

  return (
    <Button bg="transparent" borderRadius={0} size="xs">
      <Icon fontSize={iconFontSize} />
      <Text fontSize={textFontSize} marginLeft="4px">
        {Content}
      </Text>
    </Button>
  );
};

export default FooterButton;
