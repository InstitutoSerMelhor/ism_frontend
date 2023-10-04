import Mission from "@/components/Mission";
import WhoWeAre from "../components/WhoWeAre/index";
import Home from "./Home/Home";
import Vision from "@/components/Vision";
import Commitment from "@/components/Commitment";
import DonateOption from "@/components/DonateOption";
import Projects from "./Projects/page";

export default function PageChildren() {
  return (
    <section>
      <Home />
      <section className="lg:w-[75%] w-[90%] sm:h-[200vh] h-[120vh] flex flex-col justify-around mx-auto">
        <WhoWeAre />
        <Mission />
        <Vision />
      </section>
      <Commitment />
      <Projects />
      <DonateOption />
    </section>
  );
}

