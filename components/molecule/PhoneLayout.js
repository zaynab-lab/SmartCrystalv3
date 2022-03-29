import { styles } from "@/public/js/styles";
import FlatDarkLogo from "@/public/img/svg/FlatDarkLogo";
import SubServicesHive from "./SubServicesHive";

export default function PhoneLayout({
  sectionTitle,
  statusbarItems,
  phoneItems
}) {
  return (
    <>
      <div className="phonesection">
        <div className="phone">
          <div className="cameraContainer"></div>
          <div className="phoneTopBar">
            <div>
              <FlatDarkLogo />
            </div>
          </div>
          <div className="statusBar">
            <div className="subTitle">Technologies & apps</div>

            {statusbarItems.map((item, i) => (
              <div key={i} className="item">
                {item}
              </div>
            ))}
          </div>
          <div className="phoneBody">
            <div className="subTitle">Sub Services</div>
            {<SubServicesHive subService={phoneItems} />}
          </div>
        </div>
      </div>

      <style jsx>{`
        .phonesection {
          width: 100vw;
          max-width: 70rem;
          overflow: hidden;
          position: relative;
          padding-top: 2rem;
        }
        .sectionTitle {
          padding-left: 1.8rem;
          font-size: calc(1.6rem + 0.5vw);
          font-weight: bold;
          ${styles.brandGradient};
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .phone {
          background: white;
          max-width: 20rem;
          height: 38rem;
          margin: 5vh auto;
          border-radius: 3rem;
          ${styles.flex};
          ${styles.flexColumn};
          transition: all ease 1s;
          transform-style: preserve-3d;
          position: relative;
          z-index: 0;
          border: 8px solid ${styles.primaryColor};
          overflow: hidden;
        }

        .cameraContainer {
          width: 10rem;
          height: 1.2rem;
          margin: auto;
          border-radius: 0 0 3rem 3rem;
          background: ${styles.primaryColor};
        }

        .phoneTopBar {
          width: 100%;
          color: ${styles.primaryColor};
          background: white;
          font-size: 1.2rem;
          border-radius: 2rem 2rem 0 0;
          ${styles.flexAligncenter}
          ${styles.justifyBetween};
          padding: 1rem 2rem;
        }

        .statusBar {
          ${styles.flex};
          ${styles.flexAligncenter};
          color: ${styles.primaryColor};
          gap: 1.6rem;
          border: solid ${styles.primaryColor};
          border-width: 2px 0 2px 0;
          background: white;
          padding: 0.6rem 1rem;
          overflow: auto;
          height: 6rem;
        }
        .item {
          min-width: 4rem;
        }

        .phoneBody {
          background: white;
          flex: 1 1;
          padding: 1rem;
          overflow-y: auto;
          border-radius: 0rem 0rem 2.5rem 2.5rem;
        }

        .btnContainer {
          height: 100%;
          ${styles.flexBothcenter}
        }
        .subTitle {
          padding-bottom: 0.6rem;
          font-size: 1.2rem;
          ${styles.brandGradient};
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @media only screen and (min-width: 600px) {
          .phone:not(:hover) {
            transform: perspective(80rem) rotateX(60deg) rotateY(5deg)
              rotateZ(-50deg);
          }

          .phone:not(:hover) > .phoneTopBar {
            transform: translateX(1rem) translateZ(1rem);
            border: 2px solid ${styles.primaryColor};
          }

          .phone:not(:hover) > .statusBar {
            transform: translateX(2rem) translateZ(2rem);
            border: 2px solid ${styles.primaryColor};
          }

          .phone:not(:hover) > .phoneBody {
            transform: translateX(1.5rem) translateZ(1.5rem);
            border: 2px solid ${styles.primaryColor};
          }

          .phone:not(:hover) > .phoneBody > .btnContainer {
            transform: translateX(5rem) translateZ(5rem) translateY(2rem);
          }

          .phone:not(:hover) > .menuBar {
            transform: translateX(1rem) translateZ(1rem);
            border: 2px solid ${styles.primaryColor};
          }

          .menuItem:not(:hover) {
            height: 100%;
            background: white;
            border-radius: 0rem 0rem 2.5rem 2.5rem;
          }
        }
      `}</style>
    </>
  );
}
