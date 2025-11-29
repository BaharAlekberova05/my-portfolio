import SmoothScrollSection from "@/components/Animations/SmoothScrollSection";
import Seo from "@/components/Other/Seo";
import Projects from "@/components/Templates/Projects/Projects";

const ProjectsPage = () => {
  return (
    <>
      <Seo
        description="Explore a gallery of inspiring and innovative projects. Each project showcases my commitment to technical excellence and delivering tailored solutions for clients."
        title="Projects • Bahar Alekberova"
      />
      <SmoothScrollSection>
        <Projects />
      </SmoothScrollSection>
    </>
  );
};

export default ProjectsPage;
