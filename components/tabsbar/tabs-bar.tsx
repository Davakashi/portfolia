import Tab from "./tab";

export default function TabsBar() {
  return (
    <div className="flex bg-[#191a21] overflow-x-auto max-[900px]:w-[78vw] max-[600px]:w-[89.5vw]">
      <Tab icon="/logos/react_icon.svg" filename="home.tsx" path="/" />
      <Tab icon="/logos/html_icon.svg" filename="about.html" path="/about" />
      <Tab icon="/logos/css_icon.svg" filename="contact.css" path="/contact" />
      <Tab icon="/logos/js_icon.svg" filename="projects.js" path="/projects" />
      <Tab icon="/logos/json_icon.svg" filename="articles.json" path="/articles" />
      <Tab icon="/logos/markdown_icon.svg" filename="github.md" path="/github" />
    </div>
  );
}
