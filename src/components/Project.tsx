import { VStack, Image, Text, HStack, Link } from "@chakra-ui/react";
import ProjectTech from "./ProjectTech";

interface Props {
  ImageURL: string;
  Title: string;
  Description: string;
  Technologies: string[];
  Source: string;
  Demo: string;
}

const Project = ({
  ImageURL,
  Title,
  Description,
  Technologies,
  Source,
  Demo,
}: Props) => {
  return (
    <VStack bg={"gray.900"} borderRadius={"10px"} height={"100%"}>
      <Image width={"100%"} src={ImageURL} borderTopRadius={"10px"} />
      <VStack
        align={"left"}
        borderRadius={"10px"}
        width={"100%"}
        padding={3}
        paddingX={5}
        height={"100%"}
      >
        <Text fontWeight={"bold"} marginLeft={"3px"}>
          {Title}
        </Text>
        <Text marginBottom={2} marginLeft={"3px"}>
          {Description}
        </Text>
        <HStack wrap="wrap" marginBottom={2}>
          {Technologies.map((t) => (
            <ProjectTech key={t} label={t} borderColor="#ffffff" />
          ))}
        </HStack>
        <HStack spacing={4} marginBottom={2}>
          <Link
            href={Source}
            color="blue.500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source
          </Link>
          <Link
            href={Demo}
            color="blue.500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </Link>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Project;
