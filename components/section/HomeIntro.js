import DarkLogoSymbol from "@/public/img/svg/DarkLogoSymbol";
import SMELogo from "@/public/img/svg/SMELogo";
import { styles } from "@/public/js/styles";
import Secret from "@/public/img/text/Secret";

export default function HomeIntro() {
  return (
    <>
      <div className="introContainer">
        <div className="introContent">
          <div className="heighlight">
            <div className="logoSymbol">
              <DarkLogoSymbol />
            </div>
            <div className="smelogo">
              <SMELogo />
            </div>
          </div>
          {/* <div className="title">
            <div>Get the Secret of Powerfull Businesses</div>
            <div>with our</div>
            <div className="strong">Digital Services</div>
          </div> */}
          <div className="secret">
            <Secret />
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
        .logoSymbol {
          max-width: 6.2rem;
        }

        .smelogo {
          width: 100%;
          max-width: 10rem;
        }
        .secret {
          padding: 3rem 8rem;
        }
        .title {
          color: ${styles.primaryColor};
          font-weight: bold;
          font-size: clamp(1.8rem, 1rem + 1vw, 5rem);
        }
        .strong {
          padding-top: 2rem;
          color: ${styles.primaryColor};
          font-size: clamp(2.4rem, 2rem + 1vw, 10rem);
        }
        @media only screen and (max-width: 600px) {
          .heighlight {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
