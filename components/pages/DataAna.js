import BuildingStage from "@/public/img/text/BuildingStage";
import Use from "../molecule/Use";
import { apps } from "./Business";

export default function DataAna() {
  return (
    <>
      <Use apps={apps} />
      Data analysis
      <BuildingStage />
    </>
  );
}
