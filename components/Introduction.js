import { styles } from "../public/js/styles";
import Three from "./Three";

export default function Introduction() {
  return (
    <>
      <div className="introductionContainer">
        <div className="introContentContainer">
          <div className="textTitle">
            <div className="title">We build you the best digital assets</div>
            {/* <div className="titleDescription">
              we are here to build you the best newest trending technology
            </div> */}
          </div>
          <div>
            <Three />
          </div>
        </div>
      </div>
      <style jsx>{`
        .introductionContainer {
          width: 100vw;
          border-bottom: 1px solid lightgray;
          padding-bottom: 2rem;
          background: #f6f6f6;
          overflow: hidden;
        }
        .textTitle {
          padding: 6rem 3rem;
          padding-bottom: 3rem;
        }
        .title {
          text-align: center;
          color: ${styles.primaryColor};
          font-size: clamp(2.4rem, 1rem + 1vw, 5rem);
        }
        .titleDescription {
          color: white;
          font-size: calc(0.8rem + 1vw);
          padding-top: 4vh;
        }
      `}</style>
    </>
  );
}
