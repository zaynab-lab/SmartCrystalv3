import { styles } from "@/public/js/styles";
import Hexagon from "@/components/atom/Hexagon";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="hexContainer">
          <div className="hex"></div>
        </div>
        <Hexagon />
      </div>
      <style jsx>{`
        .header {
          padding-top: 4rem;
          min-height: 100vh;
        }
        .hexContainer {
          padding: 8%;
        }
        .hex {
          width: 28%;
          padding: 8% 0;
          ${styles.brandGradient};
          position: relative;
          margin-bottom: 3px;
          margin-right: 0px;
          display: inline-flex;
          position: relative;
          align-items: center;
          justify-content: center;
        }
        .hex:after,
        .hex:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0%;
          background: inherit;
          transform: rotate(60deg);
        }
        .hex:after {
          transform: rotate(-60deg);
        }
        .hex:nth-child(6n + 1) {
          margin-left: 14%;
        }
      `}</style>
    </>
  );
}
