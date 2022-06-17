import Three from "@/components/molecule/Three";
import { styles } from "@/public/js/styles";
import useOnScreen from "@/public/js/useOnScreen";

export default function Phone() {
  const [setRefp, visible] = useOnScreen({ threshold: 0.2 });

  return (
    <>
      <div className="phoneSection" ref={setRefp}>
        <div className="phoneTxtCnt">
          {visible && <div className="phoneTxt">Technology starts with us</div>}{" "}
        </div>
        <div className="phoneContainer">
          <Three />
        </div>
      </div>
      <style jsx>{`
        .phoneSection {
          padding: 1rem 0rem;
          overflow: hidden;
        }
        .phoneTxtCnt {
          min-height: 5rem;
          overflow: hidden;
        }
        .phoneTxt {
          font-size: 2rem;
          padding: 1rem;
          font-weight: bold;
          ${styles.brandGradient};
          text-align: center;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          white-space: nowrap;
          animation: fadeleft 1.5s;
        }
        .phoneContainer {
          min-height: 42rem;
        }

        @-webkit-keyframes fadeleft {
          0% {
            opacity: 0;
            -webkit-transform: translateX(-200px);
            transform: translateX(-200px);
          }

          100% {
            opacity: 1;
            -webkit-transform: translateX(0px);
            transform: translateX(0px);
          }
        }

        @keyframes fadeleft {
          0% {
            opacity: 0;
            -webkit-transform: translateX(-200px);
            transform: translateX(-200px);
          }

          100% {
            opacity: 1;
            -webkit-transform: translateX(0px);
            transform: translateX(0px);
          }
        }
      `}</style>
    </>
  );
}
