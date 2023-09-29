import Mission from "@/components/Mission";
import WhoWeAre from "../components/WhoWeAre/index";
import Home from "./Home/Home";
import Vision from "@/components/Vision";
import Commitment from "@/components/Commitment";
import DonateOption from "@/components/DonateOption";

export default function PageChildren() {
  return (
    <section>
      <Home />
      <section className="md:w-[75%] w-[90%] mx-auto py-14">
        <WhoWeAre />
        <Mission />
        <Vision />
      </section>
      <Commitment />
      <DonateOption />
    </section>
  )
}
