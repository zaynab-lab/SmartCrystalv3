import BuildingStage from "@/public/img/text/BuildingStage";
import Devices from "@/public/img/tabs/Devices";
import Modern from "@/public/img/tabs/Modern";
import Satisfiable from "@/public/img/tabs/Satisfiable";

const tabs = [
  {
    title: "Scalable",
    text:
      "Each System dosen't grow means that the creation of the system was wrong, that means each system should be scalable and growable; that is what we build for our customers..",
    img: <Satisfiable />
  },
  {
    title: "Light",
    text: "We care about building a low size high efficiency applications..",
    img: <Devices />
  },
  {
    title: "Modern",
    text: "We use the latest styles and technologies in the field..",
    img: <Modern />
  }
];

export default function SysDev() {
  return (
    <>
      System Development
      <BuildingStage />
    </>
  );
}
