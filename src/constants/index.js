import project1 from "../assets/projects/pro1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/pro3.webp";
import project4 from "../assets/projects/project-4.webp";

// Los textos viven en src/translations/*.json. Aquí solo van los datos que no se traducen.
// Deja liveUrl o repoUrl en null y el botón correspondiente no se muestra.
export const PROJECTS = [
  {
    image: project1,
    liveUrl: null,
    repoUrl: null,
  },
  {
    image: project2,
    liveUrl: null,
    repoUrl: null,
  },
  {
    image: project3,
    liveUrl: null,
    repoUrl: "https://github.com/jmario157/Jose-Portfolio",
  },
  {
    image: project4,
    liveUrl: null,
    repoUrl: null,
  },
];

export const SOCIAL_LINKS = {
  linkedin:
    "https://www.linkedin.com/in/jos%C3%A9-mario-salgado-41194130a/",
  github: "https://github.com/jmario157",
  instagram: "https://www.instagram.com/iamjosemario07/",
};
