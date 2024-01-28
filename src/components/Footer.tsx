import { Box, HStack } from "@chakra-ui/react";
import {
  VscGitMerge,
  VscError,
  VscWarning,
  VscJson,
  VscCheck,
  VscBell,
} from "react-icons/vsc";
import FooterButton from "./FooterButton";

const Footer = () => {
  return (
    <Box>
      <HStack justifyContent="space-between">
        <Box>
          <FooterButton Icon={VscGitMerge} Content="main" />
          <FooterButton Icon={VscError} Content="0" />
          <FooterButton Icon={VscWarning} Content="0" />
        </Box>
        <Box>
          <FooterButton Icon={VscJson} Content="TypeScript JSX" />
          <FooterButton Icon={VscCheck} Content="Prettier" />
          <FooterButton Icon={VscBell} Content="" />
        </Box>
      </HStack>
    </Box>
  );
};

export default Footer;
