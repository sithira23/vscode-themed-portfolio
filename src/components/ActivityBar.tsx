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
        <ActivityBarIcon Label="Home" Image={VscFiles} />
        <ActivityBarIcon Label="Projects" Image={VscDebugAlt} />
        <ActivityBarIcon Label="GitHub" Image={VscGithub} />
      </Box>
      <Box marginBottom={2}>
        <ActivityBarIcon Label="About" Image={VscAccount} />
        <ActivityBarIcon Label="Change Theme" Image={VscSettingsGear} />
      </Box>
    </VStack>
  );
};

export default ActivityBar;
