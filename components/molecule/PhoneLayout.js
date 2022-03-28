import { styles } from "@/public/js/styles";
import FlatDarkLogo from "@/public/img/svg/FlatDarkLogo";

export default function PhoneLayout({ sectionTitle, items }) {
  return (
    <>
      <div className="phonesection">
        <div className="sectionTitle">{sectionTitle}</div>
        <div className="phone">
          <div className="cameraContainer"></div>

          <div className="phoneTopBar">
            <div>
              <FlatDarkLogo />
            </div>
          </div>

          <div className="statusBar">{items}</div>

          <div className="phoneBody"></div>
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
          padding-left: 2rem;
          font-size: calc(1.8rem + 0.5vw);
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
          display: flex;
          font-size: 1.2rem;
          font-weight: bold;
          color: ${styles.primaryColor};
          gap: 2rem;
          border: solid ${styles.primaryColor};
          border-width: 2px 0 2px 0;
          background: white;
          padding: 0.6rem 1rem;
          overflow: auto;
          height: 6rem;
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
