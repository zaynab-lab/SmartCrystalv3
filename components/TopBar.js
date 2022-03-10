import Hamburger from "../public/img/Hamburger";
import Logo from "../public/img/Logo";
import { styles } from "../public/js/styles";

export default function TopBar({ setMenu }) {
  return (
    <>
      <div className="topBar">
        <div className="Logo">
          <Logo />
        </div>
        <div className="menuBar" onClick={() => setMenu(true)}>
          <Hamburger />
        </div>
      </div>
      <style jsx>{`
        .topBar {
          background: white;
          width: 100%;
          position: fixed;
          top: 0;
          font-size: 2rem;
          padding: 0.1rem 0.8rem;
          border-bottom: 2px solid ${styles.primaryColor};
          ${styles.flexAligncenter};
          ${styles.justifyBetween};
          z-index: 10;
        }
        .menuBar {
          padding: 0.3rem;
          width: 2.5rem;
          cursor: pointer;
        }
        .Logo {
          width: 70%;
          max-width: 11.5rem;
        }
      `}</style>
    </>
  );
}
