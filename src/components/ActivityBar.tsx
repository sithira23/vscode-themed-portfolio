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
    <VStack height="inherit" justify="space-between">
      <Box>
        <ActivityBarIcon Label="Home" Icon={VscFiles} />
        <ActivityBarIcon Label="Projects" Icon={VscDebugAlt} />
        <ActivityBarIcon Label="GitHub" Icon={VscGithub} />
      </Box>
      <Box>
        <ActivityBarIcon Label="About" Icon={VscAccount} />
        <ActivityBarIcon Label="Change Theme" Icon={VscSettingsGear} />
      </Box>
    </VStack>
  );
};

export default ActivityBar;
