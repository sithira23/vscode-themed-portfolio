import { SimpleGrid } from "@chakra-ui/react";
import Project from "./Project";
import ProjectGameHub from "../assets/project-gamehub.webp";
import ProjectVSCodePortfolio from "../assets/project-vscode.webp";
import ProjectRecipePage from "../assets/project-recipepage.webp";
import { useEffect } from "react";

interface Props {
  setPage: (page: string) => void;
}

const Projects = ({ setPage }: Props) => {
  useEffect(() => {
    setPage("projects.json");
  }, []);

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding={10}
      spacing={6}
      minWidth={"100%"}
      maxH={"100%"}
    >
      <Project
        ImageURL={ProjectGameHub}
        Title="Game Hub"
        Description="A React web application for viewing the latest video games using the rawg.io API."
        Technologies={[
          "react",
          "typescript",
          "chakra-ui",
          "react-query",
          "axios",
          "mobile-responsive",
        ]}
        Source="https://github.com/KareemEhab/Game-Hub"
        Demo="https://game-hub-alpha-orcin.vercel.app/"
      />
      <Project
        ImageURL={ProjectVSCodePortfolio}
        Title="VSCode Themed Portfolio"
        Description="My personal portfolio with the Visual Studio Code IDE theme."
        Technologies={["react", "typescript", "chakra-ui", "mobile-responsive"]}
        Source="https://github.com/KareemEhab/VSCode-Themed-Portfolio"
        Demo="https://vs-code-themed-portfolio-theta.vercel.app/"
      />
      <Project
        ImageURL={ProjectRecipePage}
        Title="Recipe Page"
        Description="A simple recipe page for making an omelette."
        Technologies={["html", "css", "mobile-responsive"]}
        Source="https://github.com/KareemEhab/recipe-page-main"
        Demo="https://recipe-page-main-phi.vercel.app/"
      />
    </SimpleGrid>
  );
};

export default Projects;
