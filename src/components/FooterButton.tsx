import { Button, Text } from "@chakra-ui/react";

import { IconType } from "react-icons";

interface Props {
  Icon: IconType;
  Content: string;
}

const FooterButton = ({ Icon, Content }: Props) => {
  return (
    <Button bg="transparent" borderRadius={0} size="xs">
      <Icon fontSize="16px" />
      <Text fontSize="13px" marginLeft="4px">
        {Content}
      </Text>
    </Button>
  );
};

export default FooterButton;
