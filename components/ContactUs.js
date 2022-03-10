import LogoWhite from "../public/img/LogoWhite";
import { styles } from "../public/js/styles";

export default function ContactUs() {
  return (
    <>
      <div className="networkContainer">
        <div className="networkContainer">
          <div className="networkContainerItem">
            <LogoWhite />
          </div>
          <div className="networkContainerItem"></div>
        </div>
      </div>

      <style jsx>{`
        .networkContainer {
          background: #03131a;
          color: white;
          z-index: 0;
          padding: 1rem;
        }

        .networkContainer {
          padding-left: 6vw;
          ${styles.flexAligncenter}
        }
        .networkContainerItem {
          flex: 1 1 50%;
        }
      `}</style>
    </>
  );
}
