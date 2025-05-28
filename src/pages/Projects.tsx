import { SimpleGrid, keyframes } from "@chakra-ui/react";
import Project from "../components/Project";
import ProjectGameHub from "../assets/project-gamehub.webp";
import ProjectEshterely from "../assets/project-eshterely.webp";
import ProjectVSCodePortfolio from "../assets/project-vscode.webp";
import ProjectRecipePage from "../assets/project-recipepage.webp";
import ProjectKanbanTaskManager from "../assets/project-kanban-task-management-app.webp";
import ProjectAudiophile from "../assets/project-audiophile.webp";
import { useEffect } from "react";

interface Props {
  setPage: (page: string) => void;
}

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

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
      animation={`${fadeIn} 0.5s ease-out`}
    >
      <Project
        ImageURL={ProjectEshterely}
        Title="Eshterely"
        Description="A full-stack modern e-commerce platform for high-end audio and visual equipment."
        Technologies={[
          "react",
          "javascript",
          "tailwind",
          "redux toolkit",
          "responsive",
          "node",
          "express",
          "mongodb",
        ]}
        Source="https://github.com/KareemEhab/Eshterely-Frontend"
        Demo="https://eshtrely.netlify.app/"
      />
      <Project
        ImageURL={ProjectGameHub}
        Title="Game Hub"
        Description="A full-stack e-commerce platform for buying and viewing games"
        Technologies={[
          "angular",
          "typescript",
          "tailwind",
          "ngxs",
          "responsive",
          "node",
          "express",
          "mongodb",
          "javascript",
        ]}
        Source="https://github.com/KareemEhab/game-hub-frontend"
        Demo="https://game-hub-iti.netlify.app/"
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
        ImageURL={ProjectKanbanTaskManager}
        Title="Kanban Task Management App"
        Description="A full-stack task management app to help you organize and manage your work more easily."
        Technologies={[
          "node",
          "express",
          "react",
          "mongodb",
          "typescript",
          "chakra-ui",
          "mobile-responsive",
        ]}
        Source="https://github.com/KareemEhab/kanban-task-management-app"
        Demo="https://kanban-task-management-app-jet.vercel.app/"
      />
      <Project
        ImageURL={ProjectAudiophile}
        Title="Audiophile Ecommerce Web Application "
        Description="A full-stack ecommerce web application for electornic audio devices."
        Technologies={[
          "node",
          "express",
          "react",
          "mongodb",
          "typescript",
          "chakra-ui",
          "html",
          "css",
          "mobile-responsive",
          "tablet-responsive",
        ]}
        Source="https://github.com/KareemEhab/audiophile-ecommerce-webapp"
        Demo="https://audiophile-ecommerce-webapp.vercel.app/"
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
