import Hamburger from "@/public/img/svg/Hamburger";
import Logo from "@/public/img/svg/FlatDarkLogo";
import { styles } from "@/public/js/styles";
import { pageLists } from "./Menu";
import Link from "next/link";

export default function TopBar({ setMenu, name }) {
  return (
    <>
      <div className="topBarContainer">
        <div className="topBar">
          <div className="Logo">
            <Logo />
          </div>
          <div className="menuFlatBar">
            {pageLists.map((page, i) => (
              <Link href={`/${page.name}`}>
                <div
                  key={i}
                  className={`pageName ${
                    page.name === name ? " active" : " dactive"
                  }`}
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  {page.title}
                </div>
              </Link>
            ))}
          </div>
          <div className="menuBar" onClick={() => setMenu(true)}>
            <Hamburger />
          </div>
        </div>
      </div>
      <style jsx>{`
        .topBarContainer {
          background: white;
          width: 100%;
          position: fixed;
          top: 0;
          padding: 0.2rem 1rem;
          padding-top: 1rem;
          z-index: 10;
          ${styles.flex};
          ${styles.flexJustifycenter}
        }
        .topBar {
          width: 100%;
          ${styles.flex};
          ${styles.flexAligncenter};
          ${styles.justifyBetween};
          gap: 1rem;
          max-width: 60rem;
        }
        .menuFlatBar {
          ${styles.flex};
          ${styles.flexAligncenter};
          gap: 1.2rem;
          font-weight: bold;
          font-size: 1.2rem;
        }

        .menuBar {
          padding: 0.3rem;
          width: 2.5rem;
          cursor: pointer;
          display: none;
        }
        @media only screen and (max-width: 600px) {
          .menuBar {
            display: block;
          }
          .menuFlatBar {
            display: none;
          }
        }

        .Logo {
          width: 70%;
          max-width: 12rem;
        }
        .pageName {
          font-size: 1.4rem;
          color: ${styles.secondaryColor};
          ${styles.flex};
          ${styles.flexAligncenter};
          gap: 1rem;
        }

        .active {
          color: ${styles.darkgray};
        }
        .dactive {
          cursor: pointer;
        }
      `}</style>
    </>
  );
}