import DataDriven from "@/public/img/text/DataDriven";
import PowerfulSystem from "@/public/img/text/PowerfulSystem";
import Use from "../molecule/Use";
import WeHelp from "../molecule/WeHelp";
import { apps } from "./Business";

export default function DataAna() {
  return (
    <>
      <Use apps={apps} />
      <div className="sysIllustrator">
        <PowerfulSystem />
        <DataDriven />
      </div>
      <WeHelp
        list={[
          "Analysing social media ads",
          "Visualizing data",
          "Reporting KPI's"
        ]}
      />

      <style jsx>{`
        .sysIllustrator {
          padding: 0rem 2rem;
          padding-top: 1rem;
          max-width: 40rem;
          margin: auto;
        }
      `}</style>
    </>
  );
}
