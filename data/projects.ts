export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: "MovieDB Explorer",
    description:
      "A web application that allows users to explore and search for movies using the TMDB API. Features include movie details, ratings, genres, and poster previews with a responsive UI built using React.",
    logo: "/logos/moviedb.png",
    link: "https://github.com/Davakashi/MovieDB",
    slug: "moviedb",
  },
  {
    title: "Personal Portfolio",
    description:
      "Developed this portfolio site to showcase my projects, skills, and experience. Features responsive design, interactive components, and modern frontend best practices.",
    logo: "/logos/vsc.svg",
    link: "https://github.com/Davakashi/portfolia",
    slug: "personal-portfolio",
  },
  {
    title: "Animax Clone",
    description:
      "Recreated the Animax website as a beginner project to practice core web development skills. Focused on responsive layouts, semantic HTML, and clean CSS while adding basic interactivity with vanilla JavaScript.",
    logo: "/logos/animax.png",
    link: "https://github.com/Davakashi/animax-copy",
    slug: "animax",
  },
  {
    title: "Home Finance",
    description:
      "Built a simple web app to track income and expenses while learning the basics of web development. Implemented form handling, dynamic DOM updates, and local storage to save data.",
    logo: "/logos/html_icon.svg",
    link: "https://github.com/Davakashi/home-finance-2024",
    slug: "home-finance",
  },
];
