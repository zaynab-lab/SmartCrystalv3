import Hexagon from "@/public/img/svg/Hexagon";
import { styles } from "@/public/js/styles";

export default function SubServicesHive({ subService }) {
  return (
    <>
      <div className="subService">
        {subService.map((service, i) => (
          <div key={i} className="serviceContainer">
            <div className="hexa">
              <Hexagon />
            </div>
            <div className="serviceContent">
              <div className="serviceName">{service}</div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .subService {
          ${styles.flex};
          flex-wrap: wrap;
          ${styles.flexJustifycenter};
          gap: 0.8rem;
          flex: 1 1;
        }

        .serviceContainer {
          position: relative;
          width: 6rem;
          height: 9rem;
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

        .serviceName {
          text-align: center;
          font-size: 1rem;
          padding: 0 0.1rem;
        }
      `}</style>
    </>
  );
}
