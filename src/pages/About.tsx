import {
  VStack,
  Text,
  HStack,
  Button,
  Grid,
  GridItem,
  Box,
  Heading,
  keyframes,
} from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa6";
import { useEffect } from "react";

interface Props {
  setPage: (page: string) => void;
}

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const About = ({ setPage }: Props) => {
  const technicalSkills = {
    "Programming Languages": ["JavaScript", "TypeScript", "C#", "C++"],
    "Frontend Development": [
      "React",
      "Next.js",
      "Angular",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Tailwind",
      "Chakra UI",
      "Redux Toolkit",
    ],
    "Backend Development": [
      "Node.js",
      "Express.js",
      ".NET",
      "MongoDB",
      "Mongoose",
      "SQL",
      "MySQL",
    ],
    "UI/UX Design": [
      "Figma",
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Miro",
      "MockFlow",
    ],
    "Tools & Technologies": [
      "Git",
      "GitHub",
      "Agile (Scrum, Jira, Kanban)",
      "Trello",
    ],
    "Soft Skills": [
      "Presentation",
      "Communication",
      "Professional Demeanor",
      "Leadership",
      "Mentorship",
    ],
  };

  const downloadCV = () => {
    const fileId = "1vqkYvwaAUv3WlqJh1cg4PuwS3PFXBjSM";
    const url = `https://drive.google.com/uc?export=download&id=${fileId}`;
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "cv.pdf");
    document.body.appendChild(link);
    link.click();
  };

  useEffect(() => {
    setPage("about.html");
  }, []);

  return (
    <VStack
      alignItems="left"
      justify="center"
      padding={{ base: "5", md: "10" }}
      spacing={8}
      animation={`${fadeIn} 0.5s ease-out`}
    >
      <Box>
        <Heading
          as="h1"
          fontSize={{ base: "2xl", md: "4xl" }}
          fontWeight="bold"
          color="#0BCEAF"
          mb={4}
        >
          About Me
        </Heading>
        <Text fontSize={{ base: "lg", md: "xl" }} mb={6} lineHeight="tall">
          A Full Stack Developer (MERN) with a degree in Computer Science
          (Information Systems) from Ain Shams University and 9 months of
          professional training at Information Technology Institute (ITI) in Web
          & UI Development.
        </Text>
        <Text fontSize={{ base: "lg", md: "xl" }} lineHeight="tall">
          Experienced in leadership, teaching, and mentoring, having served as a
          military reserve officer with a background in web development. Skilled
          in front-end and back-end development, as well as UI/UX design, and
          can deliver results under pressure. Passionate about building scalable
          web applications and contributing to innovative projects.
        </Text>
      </Box>

      <Button
        marginTop={6}
        width="200px"
        background="#0BCEAF"
        onClick={downloadCV}
        _hover={{ background: "#09a88d" }}
        transition="all 0.3s"
      >
        <FaDownload />
        <Text marginLeft={2}>Download CV</Text>
      </Button>

      <Box width="100%">
        <Heading
          as="h2"
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="bold"
          mb={8}
          color="#0BCEAF"
        >
          Technical Expertise
        </Heading>
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={8}
        >
          {Object.entries(technicalSkills).map(([category, skills]) => (
            <GridItem
              key={category}
              bg="whiteAlpha.50"
              borderRadius="xl"
              p={6}
              boxShadow="sm"
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "md",
              }}
              transition="all 0.3s"
            >
              <Text fontWeight="bold" fontSize="lg" color="#0BCEAF" mb={4}>
                {category}
              </Text>
              <VStack align="start" spacing={3}>
                {skills.map((skill) => (
                  <HStack key={skill} spacing={3} width="100%">
                    <Box w="2" h="2" borderRadius="full" bg="#0BCEAF" />
                    <Text fontSize="md">{skill}</Text>
                  </HStack>
                ))}
              </VStack>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </VStack>
  );
};

export default About;
