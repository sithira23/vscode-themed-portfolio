import { HStack, useColorModeValue } from "@chakra-ui/react";
import JSImage from "../assets/javascript.webp";
import HTMLImage from "../assets/html.webp";
import JSONImage from "../assets/json.webp";
import CSSImage from "../assets/css.webp";
import TabsBarItem from "./TabsBarItem";

interface Props {
  selectedTab: string;
  onSelectTab: (tab: string) => void;
}

const TabsBar = ({ selectedTab, onSelectTab }: Props) => {
  const backgroundColor = useColorModeValue("gray-100", "gray.900");
  const tabs = [
    { Label: "home.js", Icon: JSImage, boxSize: "14px", Link: "/" },
    { Label: "about.html", Icon: HTMLImage, boxSize: "15px", Link: "/about" },
    {
      Label: "projects.json",
      Icon: JSONImage,
      boxSize: "17px",
      Link: "/projects",
    },
    { Label: "github.css", Icon: CSSImage, boxSize: "15px", Link: "/github" },
  ];
  return (
    <HStack bg={backgroundColor} gap={"2px"} px={2} overflowX="auto">
      {tabs.map((tab) => (
        <TabsBarItem
          key={tab.Label}
          selectedTab={selectedTab}
          onSelectTab={onSelectTab}
          Label={tab.Label}
          Icon={tab.Icon}
          boxSize={tab.boxSize}
          Link={tab.Link}
        />
      ))}
    </HStack>
  );
};

export default TabsBar;
