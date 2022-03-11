import { styles } from "@/public/js/styles";

export default function Hexagon() {
  return (
    <>
      <div className="hexagon">
        <div className="hexbody">Hello smart</div>
      </div>

      <style jsx>{`
        .hexagon {
          position: relative;
          padding: 0.2rem;
          ${styles.borderGradient};
          border-radius: 0.6rem;
          width: 5.4rem;
          height: 5.4rem;
          box-sizing: border-box;
        }
        .hexagon:before {
          content: "";
          position: absolute;
          border-radius: 1rem;
          top: -25px;
          left: 0;
          width: 0;
          height: 0;
          border-left: 2.7rem solid transparent;
          border-right: 2.7rem solid transparent;
          border-bottom: 30px solid ${styles.secondaryColor};
        }
        .hexagon:after {
          content: "";
          position: absolute;
          border-radius: 1rem;
          bottom: -25px;
          left: 0;
          width: 0;
          height: 0;
          border-left: 2.7rem solid transparent;
          border-right: 2.7rem solid transparent;
          border-top: 30px solid dodgerblue;
        }
        .hexbody {
          position: relative;
          padding: 1rem;
          background-color: white;
          border-radius: 0.6rem;
          width: 5rem;
          height: 5rem;
          box-sizing: border-box;
          z-index: 2;
        }

        .hexbody:before {
          content: "";
          position: absolute;
          border-radius: 1rem;
          top: -25px;
          left: 0;
          width: 0;
          height: 0;
          border-left: 2.5rem solid transparent;
          border-right: 2.5rem solid transparent;
          border-bottom: 30px solid white;
        }

        .hexbody:after {
          content: "";
          position: absolute;
          border-radius: 1rem;
          bottom: -25px;
          left: 0;
          width: 0;
          height: 0;
          border-left: 2.5rem solid transparent;
          border-right: 2.5rem solid transparent;
          border-top: 30px solid white;
        }
      `}</style>
    </>
  );
}
