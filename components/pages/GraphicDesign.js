import Concept from "@/public/img/tabs/Concept";
import GModern from "@/public/img/tabs/GModern";
import Creative from "@/public/img/tabs/Creative";
import Boom from "@/public/img/text/Boom";
import YourCustomers from "@/public/img/text/YourCustomers";
import Tab from "../molecule/Tab";
import Use from "../molecule/Use";
import { apps } from "./Design";
import DesignIllustrator from "@/public/img/text/DesignIllustrator";
import WeHelp from "../molecule/WeHelp";
import FeatureImg from "../molecule/FeatureImg";

const tabs = [
  {
    title: "Creative",
    text: "We think out of the box yet keep the beauty touch in each design...",
    img: <Creative />
  },

  {
    title: "Conceptual",
    text:
      "Design and graphics are meaningful; they are the easiest way to transform a concept, they should be clear and professional..",
    img: <Concept />
  },

  {
    title: "Modern",
    text:
      "We use the latest styles and technologies to build the design over the right principles..",
    img: <GModern />
  }
];

export default function GraphicDesign() {
  return (
    <>
      <Use apps={apps} />
      <div className="boom">
        <YourCustomers />
        <Boom />
      </div>

      <Tab tabs={tabs} title="Features" />
      <FeatureImg fTitle="Brainstorming" imgLink="GraphicDesignproject" />
      <WeHelp
        list={[
          "Logo Design",
          "Website",
          "Infographic",
          "Visiting Card",
          "Web Banners",
          "Flyer & Poster",
          "Stationary",
          "Catalog",
          "Broucher",
          "3d Modeling"
        ]}
        img={<DesignIllustrator />}
      />

      <style jsx>{`
        .boom {
          padding: 0rem 2rem;
          padding-top: 1rem;
          max-width: 30rem;
          margin: auto;
        }
      `}</style>
    </>
  );
}
