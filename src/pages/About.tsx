import { VStack, Text, List, ListItem, HStack, Button } from "@chakra-ui/react";
import AboutSkill from "../components/AboutSkill";
import { FaDownload } from "react-icons/fa6";
import { useEffect } from "react";

interface Props {
  setPage: (page: string) => void;
}

const About = ({ setPage }: Props) => {
  const Skills = [
    "JavaScript",
    "TypeScript",
    "C#",
    "C++",
    "ReactJS",
    "NodeJS",
    "ExpressJS",
    "ASP.NET",
    "Entity Framework",
    "MVC",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Chakra UI",
    "Bootstrap",
    "SQL Server",
    "MySQL",
    "MongoDB",
    "Mongoose",
    "Problem Solving",
    "Teaching",
    "Leading",
  ];

  const downloadResume = () => {
    const fileId = "1XVeUQEAOpZPKW0apAkq6YG4EV7H9Cg17";
    const url = `https://drive.google.com/uc?export=download&id=${fileId}`;
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "resume.pdf");
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
      padding={{ base: "5", md: "20" }}
    >
      <Text
        fontSize={{ base: "2xl", md: "4xl" }}
        fontWeight="bold"
        textDecoration="underline"
      >
        About me:
      </Text>
      <List
        styleType={{ base: "", md: "disc" }}
        spacing={10}
        fontSize={{ base: "lg", md: "xl" }}
      >
        <ListItem>
          I am Kareem Hamouda, an experienced Full-Stack Developer who graduated
          from the Faculty of Computer and Information Sciences at Ain Shams
          University in July 2021. Following my graduation, I served as a
          Reserve Officer in the military, commencing in October 2021 and
          officially serving from April 2022 until April 2024, achieving the
          rank of First Lieutenant. Currently, I am a fresh graduate
          enthusiastically seeking employment as a Full-Stack MERN Stack
          developer.
        </ListItem>
        <ListItem>
          I have experience in developing, deploying, and maintaining a range of
          web applications, web APIs, and web services. I'm also skilled in
          working with different databases and managing servers. Additionally,
          I've had the opportunity to tutor students, graduates, and military
          officers on programming with various tools.
        </ListItem>
        <ListItem>My skills include:</ListItem>
      </List>
      <HStack wrap="wrap" spacing={3}>
        {Skills.map((skill) => (
          <AboutSkill key={skill} Label={skill}></AboutSkill>
        ))}
      </HStack>
      <Button
        marginTop={3}
        width="200px"
        background={"#0BCEAF"}
        onClick={downloadResume}
      >
        <FaDownload />
        <Text marginLeft={1}>Download Résumé</Text>
      </Button>
    </VStack>
  );
};

export default About;
