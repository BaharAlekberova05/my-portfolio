import { AnimatePresence, motion, useAnimation } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

import AdvancedTextAnimation from "@/components/Animations/AdvancedTextAnimation";
import {
  fadeInUp,
  staggerContainer,
} from "@/components/Animations/AdvancedTransition";
import ScrollToTop from "@/components/Animations/ScrollToTop";
import ProjectCard from "@/components/Other/ProjectCard/ProjectCard";
import { workData } from "@/data/work";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Projects = () => {
  const controls = useAnimation();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const { ref, inView } = useInView({ threshold: 0.1 });

  // --- ANIMATIONS ---
  useEffect(() => {
    if (inView) controls.start("animate");
  }, [inView]);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { backgroundPositionX: "0%" },
        {
          backgroundPositionX: "100%",
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: "linear",
        }
      );
    }
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
      </div>

      {/* MAIN CONTENT */}
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="initial"
        animate={controls}
        className="container mx-auto px-4 relative z-10"
      >
        {/* TITLE */}
        <motion.div
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2
            ref={titleRef}
            className="section-title mb-6 text-center mx-auto bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent bg-300%"
          >
            MY PROJECTS
          </h2>

          <AdvancedTextAnimation
            text="A bit of my journey as a developer. Many projects are no longer on the old site, or don't have source code access as they are private projects. Thank you for visiting!"
            animationStyle="fade"
            speed={0.02}
            once={true}
            className="text-md text-white/50 max-w-3xl mx-auto text-center"
          />
        </motion.div>

        {/* PROJECTS GRID — ✔ Tab YOX ✔ Filtr YOX */}
        <motion.div ref={gridRef} className="lg:grid lg:grid-cols-3 gap-6 mt-8">
          <AnimatePresence>
            {workData.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -10 }}
                className="h-full"
              >
                <ProjectCard
                  id={index.toString()}
                  project={project}
                  specialStyle={true}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      <ScrollToTop showBelow={300} />
    </div>
  );
};

export default Projects;
