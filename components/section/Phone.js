import Three from "@/components/molecule/Three";
import { styles } from "@/public/js/styles";

export default function Phone() {
  return (
    <>
      <div className="phoneSection">
        <div className="phoneTxt">Technology starts with us</div>
        <div className="phoneContainer">
          <Three />
        </div>
      </div>
      <style jsx>{`
        .phoneSection {
          padding: 1rem 0rem;
          overflow: hidden;
        }

        .phoneTxt {
          font-size: 2rem;
          font-weight: bold;
          ${styles.brandGradient};
          text-align: center;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .phoneContainer {
          min-height: 42rem;
        }
      `}</style>
    </>
  );
}
