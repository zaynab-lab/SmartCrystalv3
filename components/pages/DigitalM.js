import WeLove from "@/public/img/text/WeLove";
import Engage from "@/public/img/text/Engage";
import WeHelp from "@/components/molecule/WeHelp";
import Tree from "@/public/img/text/Tree";
import Use from "../molecule/Use";
import { apps } from "./Business";

export default function DigitalM() {
  return (
    <>
      <div className="digitalContainer">
        <Use apps={apps} />
        <div className="digitalImages">
          <WeLove />
          <div className="engage">
            <Engage />
          </div>
        </div>
      </div>
      <WeHelp
        list={[
          "Digital Marketing Consultancy",

          "Digital Marketing Campiagn",

          "Digital Marketing Optimization",
          "Content Generation",
          "Digital Marketing Strategies",
          "Engagement, Monitoring & Reporting",
          "Email Marketing",
          "Content & Video Marketing",
          "Market Research"
        ]}
        img={<Tree />}
      />

      <style jsx>{`
        .digitalContainer {
          padding: 2rem;
        }
        .digitalImages {
          max-width: 30rem;
          margin: auto;
        }
        .engage {
          padding-top: 2rem;
          max-width: 20rem;
          margin: auto;
        }
      `}</style>
    </>
  );
}
