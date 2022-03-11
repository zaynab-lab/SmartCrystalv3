import { styles } from "@/public/js/styles";
import LightSymbol from "@/public/img/svg/LightSymbol";
import useOnScreen from "@/public/js/useOnScreen";

export default function Technology() {
  const [setRef, visible] = useOnScreen({ threshold: 0.2 });

  return (
    <>
      <div className="technology" ref={setRef}>
        <div className="technologyContent">
          {visible && (
            <div className="techText">
              <div className="power">The power of technology starts</div>
              <div className="power">here with</div>
              <div className="smart">SMART CRYSTAL</div>{" "}
            </div>
          )}

          <div className="symbol">{visible && <LightSymbol />}</div>
        </div>
      </div>
      <style jsx>{`
        .technology {
          ${styles.fullGradient};
          overflow: hidden;
          min-height: 22rem;
        }
        .technologyContent {
          padding: 1rem;
          ${styles.flex};
          ${styles.flexBothcenter};
          flex-wrap: wrap;
          gap: 1rem 12vw;
          max-width: 70rem;
          margin: auto;
        }
        .techText {
          white-space: nowrap;
          animation: fade 1.5s;
        }
        .power {
          color: white;
          text-align: center;
          font-size: clamp(1.4rem, 5vw, 2rem);
        }
        .smart {
          color: white;
          font-weight: bold;
          letter-spacing: 2px;
          font-size: clamp(1.8rem, 6vw, 2.8rem);
          text-align: center;
          padding-top: 1rem;
        }
        .symbol {
          flex: 1 1 16rem;
          max-width: 16rem;
          padding: 1rem;
          height: 20rem;
        }

        @-webkit-keyframes fade {
          0% {
            opacity: 0;
            -webkit-transform: translateY(-100px);
            transform: translateY(-100px);
          }
          100% {
            opacity: 1;
            -webkit-transform: translateY(0px);
            transform: translateY(0px);
          }
        }
        @keyframes fade {
          0% {
            opacity: 0;
            -webkit-transform: translateY(-100px);
            transform: translateY(-100px);
          }
          100% {
            opacity: 1;
            -webkit-transform: translateY(0px);
            transform: translateY(0px);
          }
        }
      `}</style>
    </>
  );
}
