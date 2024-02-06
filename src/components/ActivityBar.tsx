import { Box, VStack } from "@chakra-ui/react";
import {
  VscFiles,
  VscDebugAlt,
  VscGithub,
  VscAccount,
  VscSettingsGear,
} from "react-icons/vsc";
import ActivityBarIcon from "./ActivityBarIcon";

interface Props {
  selectedPage: string;
  onSelectPage: (page: string) => void;
}

const ActivityBar = ({ onSelectPage }: Props) => {
  const topAreaPages = [
    { Label: "Home", Icon: VscFiles, Navigate: "home.js", Link: "/" },
    {
      Label: "Projects",
      Icon: VscDebugAlt,
      Navigate: "projects.json",
      Link: "/projects",
    },
    {
      Label: "GitHub",
      Icon: VscGithub,
      Navigate: "github.css",
      Link: "/github",
    },
  ];

  return (
    <VStack height="inherit" justify="space-between" marginTop={2}>
      <Box>
        {topAreaPages.map((page) => (
          <ActivityBarIcon
            Label={page.Label}
            Image={page.Icon}
            Navigate={page.Navigate}
            Link={page.Link}
            onSelectPage={onSelectPage}
          />
        ))}
      </Box>
      <Box marginBottom={2}>
        <ActivityBarIcon
          Label="About"
          Image={VscAccount}
          Navigate="about.html"
          Link="/about"
          onSelectPage={onSelectPage}
        />
        <ActivityBarIcon
          Label="Change Theme"
          Image={VscSettingsGear}
          Navigate="theme"
          Link="/theme"
          onSelectPage={onSelectPage}
        />
      </Box>
    </VStack>
  );
};

export default ActivityBar;
