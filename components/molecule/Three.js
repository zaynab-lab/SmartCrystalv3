import { CgMenu } from "react-icons/cg";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdHomeRepairService } from "react-icons/md";
import { styles } from "@/public/js/styles";
import Button from "@/components/atom/Button";
import FlatDarkLogo from "@/public/img/svg/FlatDarkLogo";
import { useState } from "react";
import ServicesHive from "@/components/molecule/ServicesHive";
import Telegram from "@/public/img/social/Telegram";

const bar = [
  { name: "Services", icon: <MdHomeRepairService /> },
  { name: "About", icon: <IoMdInformationCircleOutline /> },
  { name: "Social Media", icon: <CgMenu /> }
];

export default function Three() {
  const [page, setPage] = useState("Services");

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

          <div className="statusBar">{page}</div>

          <div className="phoneBody">
            {page === "Services" && <ServicesHive />}

            {page === "Social Media" && (
              <div className="btnContainer">
                <a href="https://t.me/SmartCrystal">
                  <Button logo={<Telegram />} content="Telegram" />
                </a>
              </div>
            )}
          </div>

          <div className="menuBar">
            {bar.map((item, k) => (
              <div
                key={k}
                className={`menuItem ${item.name === page && "activePage"}`}
                onClick={() => setPage(item.name)}
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .phonesection {
          width: 100vw;
          overflow: hidden;
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
          gap: min(3vw, 0.6rem);
          border: solid ${styles.primaryColor};
          border-width: 2px 0 2px 0;
          background: white;
          padding: 0.6rem 1rem;
          overflow: auto;
        }

        .phoneBody {
          background: white;
          flex: 1 1;
          padding: 1rem;
        }

        .btnContainer {
          height: 100%;
          ${styles.flexBothcenter}
        }

        .menuBar {
          width: 100%;
          height: 3.6rem;
          background: white;
          border-radius: 0rem 0rem 2.5rem 2.5rem;
          font-size: 2rem;
          ${styles.flex};
          ${styles.flexAligncenter};
          ${styles.justifyBetween};
          border-top: 2px solid ${styles.primaryColor};
        }

        .menuItem {
          width: 100%;
          height: 100%;
          line-height: 0;
          padding: 1rem;
          color: #444;
          ${styles.flex};
          ${styles.flexBothcenter};
          cursor: pointer;
        }
        .activePage {
          color: ${styles.primaryColor};
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
