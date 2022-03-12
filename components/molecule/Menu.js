import { styles } from "@/public/js/styles";
import X from "@/public/img/svg/X";
import Link from "next/link";
import {} from "react-icons/ai";
import { CgArrowRightO } from "react-icons/cg";

export const pageLists = [
  { title: "Home", name: "" },
  { title: "Services", name: "Services" },
  { title: "About", name: "About" },
  { title: "Contact us", name: "Contact" }
];

export default function Menu({ setMenu, menu, pageName }) {
  return (
    <>
      <div className={menu && "black"} onClick={() => setMenu(false)}></div>

      <div className={`menuContainer ${menu && "showMenu"}`}>
        <div className="X" onClick={() => setMenu(false)}>
          <X />
        </div>

        <div className="menuContent">
          {pageLists.map((page, i) => (
            <Link href={`/${page.name}`}>
              <div
                key={i}
                className={`pageName ${page.name === pageName && " active"}`}
                onClick={() => {
                  setMenu(false);
                }}
              >
                <CgArrowRightO />
                {page.title}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .menuContainer {
          max-width: 100vw;
          width: 0;
          overflow: hidden;
          min-height: 100vh;
          -webkit-transition: width 0.6s ease-in-out;
          -o-transition: width 0.6s ease-in-out;
          transition: width 0.6s ease-in-out;
          z-index: 100;
          position: fixed;
          top: 0;
          right: 0;
          background: white;
        }

        .black {
          width: 100vw;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          opacity: 20%;
          z-index: 100;
          background: black;
        }

        .showMenu {
          width: 20rem;
          border-left: 2px solid ${styles.primaryColor};
        }

        .X {
          width: 3rem;
          padding: 0rem 0.8rem;
          padding-top: 0.6rem;
          cursor: pointer;
        }

        .menuContent {
          font-size: 1.2rem;
          white-space: nowrap;
          padding: 2rem;
        }

        .pageName {
          padding: 0.2rem 2rem;
          cursor: pointer;
          font-size: 1.4rem;
          font-weight: bold;
          color: ${styles.secondaryColor};
          ${styles.flex}
          ${styles.flexAligncenter}
          gap:1rem;
        }
        .active {
          color: ${styles.darkgray};
        }
      `}</style>
    </>
  );
}
