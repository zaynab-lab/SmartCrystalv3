import SMELogo from "@/public/img/svg/SMELogo";
import { styles } from "@/public/js/styles";

export default function Introduction() {
  return (
    <>
      <div className="introContainer">
        <div className="introContent">
          <div className="heighlight">
            <div>Symbol</div>
            <div className="smelogo">
              <SMELogo />
            </div>
          </div>
          <div className="textTitle">
            <div className="title">
              <div>Get the Secret of Powerfull Businesses</div>
              <div>with our</div>
              <div>Digital Services</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .introContainer {
          width: 100vw;
          border-bottom: 1px solid lightgray;
          padding-top: 4rem;
          padding-bottom: 2rem;
          min-height: 100vh;
          background: #f6f6f6;
          overflow: hidden;
          ${styles.flex};
          ${styles.flexJustifycenter}
        }
        .introContent {
          width: 100%;
          max-width: 60rem;
          padding: 2rem;
        }
        .heighlight {
          ${styles.flex};
          ${styles.flexAligncenter};
          ${styles.justifyBetween};
          gap: 1rem;
        }
        .smelogo {
          width: 100%;
          max-width: 10rem;
        }
        @media only screen and (max-width: 600px) {
          .heighlight {
            display: none;
          }
        }

        .textTitle {
          padding: 6rem 3rem;
          padding-bottom: 3rem;
        }

        .title {
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
