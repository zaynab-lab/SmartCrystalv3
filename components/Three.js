import { CgMenu } from "react-icons/cg";
import { IoIosIceCream } from "react-icons/io";
import { GiCrystalGrowth } from "react-icons/gi";
import { MdIceSkating, MdOndemandVideo } from "react-icons/md";
import { BiHomeCircle, BiMessageRounded } from "react-icons/bi";
import { styles } from "../public/js/styles";
import Button from "./Button";
import { services } from "./Services";
import Link from "next/link";

const statuses = [
  { name: "ice cream", icon: <IoIosIceCream /> },
  { name: "crystal", icon: <GiCrystalGrowth /> },
  { name: "game", icon: <MdIceSkating /> }
];
const bar = [
  { name: "Home", icon: <BiHomeCircle /> },
  { name: "Video", icon: <MdOndemandVideo /> },
  { name: "Menu", icon: <CgMenu /> }
];

export default function Three() {
  return (
    <>
      <div className="app">
        <div className="topBar">
          <div>LOGO</div>
          <div className="send">
            <BiMessageRounded />
          </div>
        </div>
        <div className="statusBar">
          {services?.map((status, i) => (
            <div key={i} className="statusContainer">
              <div className="statusCircle">{status.icon}</div>
              <div>{status.name}</div>
            </div>
          ))}
        </div>
        <div className="appBody">
          <div className="btnContainer">
            <Link href="https://t.me/SmartCrystal">
              <Button />
            </Link>
          </div>
        </div>
        <div className="menuBar">
          {bar.map((item, k) => (
            <div key={k} className="menuItem">
              {item.icon}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        * {
          -ms-scroll-chaining: chained;
          overscroll-behavior: auto;
        }
        .app {
          background: white;
          width: min(80vw, 40rem);
          height: min(90vh, 50rem);
          margin: 5vh auto;
          border-radius: 1rem;
          display: flex;
          ${styles.flexColumn};
          transition: all ease 1s;
          transform-style: preserve-3d;
          position: relative;
          z-index: 0;
        }
        .app:hover {
          transform: perspective(50rem) rotateX(30deg) rotateY(20deg)
            rotateZ(-25deg);
          border: 2px solid ${styles.primaryColor};
        }
        .topBar {
          width: 100%;
          color: ${styles.primaryColor};
          background: white;
          border: 2px solid ${styles.primaryColor};
          font-size: 1.2rem;
          border-radius: 1rem 1rem 0rem 0rem;
          ${styles.flexAligncenter}
          ${styles.justifyBetween};
          padding: 1rem 2rem;
        }
        .app:hover > .topBar {
          transform: translateX(3rem) translateZ(3rem);
        }
        .statusBar {
          display: flex;
          gap: min(3vw, 0.6rem);
          padding: 1rem 2rem;
          border: 2px solid gray;
          overflow: auto;
        }
        .app:hover > .statusBar {
          transform: translateX(2.5rem) translateZ(2.5rem);
        }
        .statusContainer {
          font-size: 0.9rem;
          ${styles.flexAligncenter};
          ${styles.flexColumn};
          border-radius: 1rem;
          gap: min(3vw, 0.6rem);
          color: ${styles.primaryColor};
          text-align: center;
        }
        .statusBar:hover > .statusContainer div {
          padding: 0rem 1rem;
        }
        .statusCircle {
          color: white;
          width: min(20vw, 4rem);
          height: min(20vw, 4rem);
          font-size: min(20vw, 4rem);
          background: gray;
          border-radius: 50%;
          ${styles.flexBothcenter}
          overflow:hidden;
          padding: 1rem;
        }

        .appBody {
          background: white;
          border: 2px solid gray;
          flex: 1 1;
        }
        .app:hover > .appBody {
          transform: translateX(2rem) translateZ(2rem);
        }
        .btnContainer {
          height: 100%;
          ${styles.flexBothcenter}
        }

        .menuBar {
          width: 100%;
          height: 3rem;
          background: gray;
          border-radius: 0rem 0rem 1rem 1rem;
          font-size: 2rem;
          ${styles.flexAligncenter};
          ${styles.justifyBetween};
          border: 2px solid ${styles.primaryColor};
        }
        .app:hover > .menuBar {
          transform: translateX(1rem) translateZ(1rem);
        }

        .menuItem {
          width: 100%;
          height: 100%;
          line-height: 0;
          flex: 1 1;
          padding: 1rem;
          color: white;
          ${styles.flexBothcenter}
        }
        .menuItem:hover {
          height: 100%;
          color: ${styles.primaryColor};
          background: white;
          border-radius: 0rem 0rem 1rem 1rem;
        }
        .send {
          font-size: 1.4rem;
        }
      `}</style>
    </>
  );
}
