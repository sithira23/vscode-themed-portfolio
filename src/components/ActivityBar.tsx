import { Box, VStack } from "@chakra-ui/react";
import {
  VscFiles,
  VscDebugAlt,
  VscGithub,
  VscAccount,
  VscSettingsGear,
} from "react-icons/vsc";
import ActivityBarIcon from "./ActivityBarIcon";

const ActivityBar = () => {
  return (
    <VStack height="inherit" justify="space-between" marginTop={2}>
      <Box>
        <ActivityBarIcon Label="Home" Image={VscFiles} Link="/" />
        <ActivityBarIcon
          Label="Projects"
          Image={VscDebugAlt}
          Link="/projects"
        />
        <ActivityBarIcon Label="GitHub" Image={VscGithub} Link="/github" />
      </Box>
      <Box marginBottom={2}>
        <ActivityBarIcon Label="About" Image={VscAccount} Link="/about" />
        <ActivityBarIcon
          Label="Change Theme"
          Image={VscSettingsGear}
          Link="/theme"
        />
      </Box>
    </VStack>
  );
};

export default ActivityBar;
