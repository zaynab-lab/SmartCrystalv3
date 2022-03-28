import AI from "./AI";
import AppDev from "./AppDev";
import BManage from "./BManage";
import Business from "./Business";
import DataAna from "./DataAna";
import Design from "./Design";
import Development from "./Development";
import DigitalM from "./DigitalM";
import GraphicDesign from "./GraphicDesign";
import SysDev from "./SysDev";
import WebDev from "./WebDev";

export default function ServiceRouter({ service }) {
  return (
    <>
      <div className="servicesRouter">
        {service === "Development" && <Development />}
        {service === "Web Development" && <WebDev />}
        {service === "System Development" && <SysDev />}
        {service === "Application Development" && <AppDev />}
        {service === "Artificial Intelligence" && <AI />}
        {service === "Design" && <Design />}
        {service === "Graphic Design" && <GraphicDesign />}
        {service === "Digital Marketing" && <DigitalM />}
        {service === "Business" && <Business />}
        {service === "Business Management" && <BManage />}
        {service === "Data Analysis" && <DataAna />}
      </div>
      <style jsx>{`
        .servicesRouter {
          max-width: 70rem;
          margin: auto;
        }
      `}</style>
    </>
  );
}
