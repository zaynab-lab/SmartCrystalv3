import { styles } from "@/public/js/styles";
import LightSymbol from "@/public/img/svg/LightSymbol";
import useOnScreen from "@/public/js/useOnScreen";

export default function Technology() {
  const [setRef, visible] = useOnScreen({ threshold: 0 });

  return (
    <>
      <div className="technology" ref={setRef}>
        {visible && (
          <div className="techText">
            <div className="power">The power of technology starts</div>
            <div className="power">here with</div>
            <div className="smart">SMART CRYSTAL</div>{" "}
          </div>
        )}
        <div className="symbol">{visible && <LightSymbol />}</div>
      </div>
      <style jsx>{`
        .technology {
          padding: 2rem;
          ${styles.fullGradient};
          ${styles.flex};
          ${styles.flexBothcenter};
          flex-wrap: wrap;
          overflow: hidden;
        }
        .techText {
          flex: 1 1;
          white-space: nowrap;
          animation: fade 1s;
        }
        .power {
          color: white;
          text-align: center;
          font-weight: bold;
          font-size: 1.4rem;
        }
        .smart {
          color: white;
          font-weight: bold;
          letter-spacing: 2px;
          font-size: 1.8rem;
          text-align: center;
          padding-top: 1rem;
        }
        .symbol {
          flex: 1 1 16rem;
          max-width: 16rem;
          padding: 2rem;
        }

        @keyframes fade {
          0% {
            opacity: 0;
            transform: translateY(-100px);
          }

          100% {
            opacity: 1;
            transform: translateY(0px);
          }
        }
      `}</style>
    </>
  );
}
