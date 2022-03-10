import DarkModeLogo from "@/public/img/svg/DarkModeLogo";
import SMELogo from "@/public/img/svg/SMELogo";
import { styles } from "@/public/js/styles";
import Secret from "@/public/img/text/Secret";
import Button from "@/components/atom/Button";
import WhatsApp from "@/public/img/social/WhatsApp";
import Telegram from "@/public/img/social/Telegram";

export default function HomeIntro() {
  return (
    <>
      <div className="introContainer">
        <div className="introContent">
          <div className="heighlight">
            <div className="logoSymbol">
              <DarkModeLogo />
            </div>
            <div className="smelogo">
              <SMELogo />
            </div>
          </div>
          <div className="secretContainer">
            <div className="secret">
              <Secret />
            </div>
            <div className="btnContainer">
              <Button
                logo={<Telegram />}
                content={
                  <div>
                    <div>Join our</div>
                    <div>Community</div>
                  </div>
                }
              />
              <Button
                logo={<WhatsApp />}
                content={
                  <div>
                    <div>Contact us</div>
                    <div className="btnDescr">To talk business</div>
                  </div>
                }
              />
              <div className="blendContainer">
                <div className="blend">
                  <img width="100%" alt="" src="/img/png/Blend.png" />
                </div>

                <div className="blendM">
                  <img width="100%" alt="" src="/img/png/Blend.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .introContainer {
          max-width: 100vw;
          border-bottom: 1px solid lightgray;
          padding-top: 4rem;
          min-height: 100vh;
          overflow: hidden;
          ${styles.flex};
          ${styles.flexJustifycenter};
          position: relative;
        }
        .introContent {
          width: 100%;
          max-width: 70rem;
          padding: 2rem 3rem;
          padding-bottom: 0;
        }
        .heighlight {
          ${styles.flex};
          ${styles.flexAligncenter};
          ${styles.justifyBetween};
          gap: 1rem;
        }
        .logoSymbol {
          width: 9rem;
          height: 9rem;
        }

        .smelogo {
          width: 100%;
          max-width: 9rem;
        }

        .secret {
          padding: 1rem 0rem;
          max-width: 35rem;
          min-height: 35vh;
          ${styles.flex};
          ${styles.flexBothcenter};
          margin: auto;
        }
        .title {
          color: ${styles.primaryColor};
          font-weight: bold;
          font-size: clamp(1.8rem, 1rem + 1vw, 5rem);
        }
        .strong {
          padding-top: 2rem;
          color: ${styles.primaryColor};
          font-size: clamp(2.4rem, 2rem + 1vw, 9rem);
        }
        .btnContainer {
          padding: 2rem 0rem;
          max-width: 35rem;
          ${styles.flex};
          margin: auto;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .btnDescr {
          font-size: 0.8rem;
        }
        .blendContainer {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: -1;
        }
        .blend {
          position: absolute;
          bottom: -20rem;
          max-width: 60rem;
          left: 0vw;
        }
        .blendM {
          position: absolute;
          bottom: -6vh;
          left: -16vw;
          width: 130vw;
          max-width: 100vh;
          transform: rotate(-6deg);
          display: none;
        }
        @media only screen and (max-width: 600px) {
          .heighlight {
            display: none;
          }
          .blend {
            display: none;
          }
          .blendM {
            display: block;
          }
        }
      `}</style>
    </>
  );
}
