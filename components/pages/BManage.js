import Grow from "@/public/img/text/Grow";
import Serve from "@/public/img/text/Serve";
import FeatureImg from "../molecule/FeatureImg";
import WeHelp from "@/components/molecule/WeHelp";
import Plot from "@/public/img/text/Plot";

export default function BManage() {
  return (
    <>
      <div className="rocket">
        <Grow />
      </div>
      <FeatureImg fTitle="The best" imgLink="BusinessmanOffice" />

      <div className="serve">
        <Serve />
      </div>
      <WeHelp
        list={[
          "Brand System Guideline",
          "SWOT Analysis",
          "Community Management",
          "Content Generation",
          "Supporting Ad Strategies & Execution",
          "Market Research",
          "Business Plan",
          "Business Model"
        ]}
        img={<Plot />}
      />

      <style jsx>{`
        .rocket {
          padding: 0rem 2rem;
          padding-top: 1rem;
          max-width: 40rem;
          margin: auto;
        }
        .serve {
          padding: 0rem 2rem;
          padding-top: 1rem;
          max-width: 50rem;
          margin: auto;
        }
      `}</style>
    </>
  );
}
