import { Tooltip, IconButton, useColorModeValue } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  Label: string;
  Icon: IconType;
}

const ActivityBarIcon = ({ Label, Icon }: Props) => {
  const tooltipBgColor = useColorModeValue("gray.200", "gray.700");
  const tooltipTextColor = useColorModeValue("gray.800", "gray.200");

  return (
    <Tooltip
      hasArrow
      label={Label}
      placement="right"
      bg={tooltipBgColor}
      color={tooltipTextColor}
    >
      <IconButton
        marginBottom={2}
        paddingLeft={2}
        variant=""
        colorScheme="gray-50"
        aria-label="Button"
        fontSize="24px"
        icon={<Icon />}
      />
    </Tooltip>
  );
};

export default ActivityBarIcon;
