import Hexagon from "@/public/img/svg/Hexagon";
import Web from "@/public/img/svg/Web";
import System from "@/public/img/svg/System";
import Application from "@/public/img/svg/Application";
import Artificial from "@/public/img/svg/Artificial";
import Graphic from "@/public/img/svg/Graphic";
import Business from "@/public/img/svg/Business";
import Marketing from "@/public/img/svg/Marketing";
import Data from "@/public/img/svg/Data";
import { styles } from "@/public/js/styles";
import Link from "next/link";

const services = [
  { name: "Web Development", icon: <Web />, link: "/Web Development" },
  { name: "System Development", icon: <System />, link: "/System Development" },
  {
    name: "Application Development",
    icon: <Application />,
    link: "/Application Development"
  },
  {
    name: "Artificial Intelligence",
    icon: <Artificial />,
    link: "Artificial Intelligence"
  },
  { name: "Graphic Design", icon: <Graphic />, link: "Graphic Design" },
  { name: "Digital Marketing", icon: <Marketing />, link: "Digital Marketing" },
  {
    name: "Business Management",
    icon: <Business />,
    link: "Business Management"
  },
  { name: "Data Analysis", icon: <Data />, link: "Data Analysis" }
];

export default function ServicesHive({ items }) {
  return (
    <>
      <div className="services">
        {services
          .filter((service) => (items ? items.includes(service.name) : " "))
          .map((service, i) => (
            <Link key={i} href={service.link}>
              <div className="serviceContainer">
                <div className="hexa">
                  <Hexagon />
                </div>
                <div className="serviceContent">
                  <div className="serviceIcon">{service.icon}</div>
                  <div className="serviceName">{service.name}</div>
                </div>
              </div>
            </Link>
          ))}
      </div>
      <style jsx>{`
        .services {
          ${styles.flex};
          flex-wrap: wrap;
          ${styles.flexJustifycenter};
          gap: 0.5rem;
          flex: 1 1;
        }
        .serviceContainer {
          position: relative;
          width: 5.2rem;
          height: 8rem;
          ${styles.flex};
          ${styles.flexBothcenter};
          cursor: pointer;
        }
        .serviceContainer:hover > .serviceContent {
          color: ${styles.primaryColor};
          font-weight: bold;
        }
        .hexa {
          position: absolute;
          top: 0;
          z-index: 0;
        }
        .serviceContent {
          position: absolute;
          z-index: 1;
          ${styles.flex};
          ${styles.flexColumn};
          ${styles.flexBothcenter};
          gap: 0.4rem;
          padding: 0.2rem;
        }
        .serviceIcon {
          width: 1.8rem;
        }

        .serviceName {
          text-align: center;
          font-size: 0.6rem;
          padding: 0 0.1rem;
        }
      `}</style>
    </>
  );
}
