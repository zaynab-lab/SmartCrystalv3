import Devices from "@/public/img/tabs/Devices";
import Modern from "@/public/img/tabs/Modern";
import Scalable from "@/public/img/tabs/Scalable";
import Tab from "../molecule/Tab";
import SystemDeveloper from "@/public/img/text/SystemDeveloper";
import PowerfulSystem from "@/public/img/text/PowerfulSystem";

const tabs = [
  {
    title: "Scalable",
    text:
      "Each System dosen't grow means that the creation of the system was wrong, that means each system should be scalable and growable; that is what we build for our customers..",
    img: <Scalable />
  },
  {
    title: "Multi-platform",
    text:
      "We care about building a low size high efficiency applications, that can be used on every platform..",
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
      <div className="sysIllustrator">
        <PowerfulSystem />
        <SystemDeveloper />
      </div>
      <Tab tabs={tabs} title="Features" />

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
