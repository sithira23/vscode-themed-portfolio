import { HStack, Image, Text } from "@chakra-ui/react";

interface Props {
  Icon: string;
  Label: string;
  boxSize: string;
  selectedTab: string;
  onSelectTab: (tab: string) => void;
}

const TabsBarItem = ({
  Icon,
  Label,
  boxSize,
  selectedTab,
  onSelectTab,
}: Props) => {
  return (
    <HStack
      height={6}
      cursor="pointer"
      userSelect="none"
      bg={Label === selectedTab ? "gray.800" : "gray.900"}
      onClick={() => onSelectTab(Label)}
      width="130px"
      justifyContent="center"
    >
      <HStack gap={1} alignItems="center">
        <Image boxSize={boxSize} src={Icon} />
        <Text
          fontSize="14px"
          width="100%"
          color="gray.200"
          _hover={{ color: "white" }}
        >
          {Label}
        </Text>
      </HStack>
    </HStack>
  );
};

export default TabsBarItem;
