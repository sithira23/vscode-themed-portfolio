import {
  Button,
  Text,
  Tooltip,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  Icon: IconType;
  Content: string;
  TooltipLabel: string;
}

const FooterButton = ({ Icon, Content, TooltipLabel }: Props) => {
  const iconFontSize = useBreakpointValue({
    base: "10px",
    md: "16px",
  });
  const textFontSize = useBreakpointValue({ base: "8px", md: "13px" });
  const tooltipBgColor = useColorModeValue("gray.200", "gray.700");
  const tooltipTextColor = useColorModeValue("gray.800", "gray.200");

  // Render the Button component with or without Tooltip based on TooltipLabel
  const renderButton = () => (
    <Button bg="transparent" borderRadius={0} size="xs">
      <Icon fontSize={iconFontSize} />
      <Text fontSize={textFontSize} marginLeft="4px">
        {Content}
      </Text>
    </Button>
  );

  // If TooltipLabel is provided, wrap the Button component with Tooltip
  return TooltipLabel ? (
    <Tooltip
      hasArrow
      label={TooltipLabel}
      placement="top"
      bg={tooltipBgColor}
      color={tooltipTextColor}
    >
      {renderButton()}
    </Tooltip>
  ) : (
    renderButton()
  );
};

export default FooterButton;
