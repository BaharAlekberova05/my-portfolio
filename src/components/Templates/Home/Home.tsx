import AdvancedTransition from "@/components/Animations/AdvancedTransition";
import SmoothScrollSection from "@/components/Animations/SmoothScrollSection";
import About from "@/components/Other/About/About";
import FrontendExpertise from "@/components/Other/FrontendExpertise/FrontendExpertise";
import GithubActivity from "@/components/Other/GithubContributions/GithubActivity";
import InitialHome from "@/components/Other/InitialHome/InitialHome";
import Reviews from "@/components/Other/Reviews/Reviews";
import Work from "@/components/Other/Work/Work";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const Home = () => {
  return (
    <AdvancedTransition>
      <div className="overflow-hidden">
        <InitialHome />
        
        <SmoothScrollSection>
          <About />
        </SmoothScrollSection>

        <SmoothScrollSection>
          <Work />
        </SmoothScrollSection>

        <SmoothScrollSection>
          <FrontendExpertise />
        </SmoothScrollSection>

        <SmoothScrollSection>
          <GithubActivity />
        </SmoothScrollSection>

        {/* <SmoothScrollSection>
          <Reviews />
        </SmoothScrollSection> */}
      </div>
      <Analytics />
      <SpeedInsights />
    </AdvancedTransition>
  );
};

export default Home;
