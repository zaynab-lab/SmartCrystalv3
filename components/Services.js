import { styles } from "../public/js/styles";
import {
  FaCamera,
  FaCode,
  FaDrawPolygon,
  FaMobile,
  FaUniversity
} from "react-icons/fa";
import { BiNetworkChart } from "react-icons/bi";
import { GiMonoWheelRobot } from "react-icons/gi";

export const services = [
  { name: "Web development", icon: <FaCode /> },
  { name: "Native apps", icon: <FaMobile /> },
  { name: "Dapps", icon: <BiNetworkChart /> },
  { name: "Machine Learning", icon: <GiMonoWheelRobot /> },
  { name: "Graphic Design", icon: <FaDrawPolygon /> },
  { name: "Photography", icon: <FaCamera /> },
  { name: "Content Writing", icon: <FaUniversity /> }
];

export default function Services() {
  return (
    <>
      <div className="servicesContainer">
        <div className="servicesContent">
          <div className="servicesTitle">Explore Our Services</div>
          <div className="servicesCardList">
            {services.map((service, i) => (
              <div key={i} className="servicesCard">
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .servicesContainer {
          background: #f6f6f6;
        }
        .servicesContent {
          padding: 1rem;
        }
        .servicesTitle {
          font-size: calc(0.8rem + 2vw);
          padding: 1vw;
          color: ${styles.primaryColor};
        }
        .servicesCardList {
          ${styles.flexBothcenter}
          flex-wrap: wrap;
          padding: 1rem 0rem;
          gap: 1.6rem 1.2rem;
        }
        .servicesCard {
          flex: 0 1 100%;
          max-width: 18rem;
          border-radius: 0.3rem;
          background: white;
          padding: 1rem;
          text-align: center;
          cursor: pointer;
          ${styles.boxshadow}
        }
        .servicesCard:hover {
          -webkit-box-shadow: 0 0px 10px 1px grey;
          box-shadow: 0 0px 10px 1px grey;
        }
      `}</style>
    </>
  );
}

function ServiceCard({ service }) {
  return (
    <>
      <div className="serviceLogo">{service.logo}</div>
      <div>{service.name}</div>
      <div className="serviceDescription">
        Lorem ipsum dolor sit amet, con sectetur adi piscing elit, Lorem ipsum
        dolor sit amet
      </div>
      <style jsx>{`
        .serviceLogo {
          padding: 0.6rem;
          font-size: 2.6rem;
          color: gray;
        }
        .serviceDescription {
          padding: 1rem 0rem;
          font-size: 1rem;
          color: gray;
        }
      `}</style>
    </>
  );
}
