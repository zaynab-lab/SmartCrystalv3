import DarkModeLogo from "@/public/img/svg/DarkModeLogo";
import SMELogo from "@/public/img/svg/SMELogo";
import { styles } from "@/public/js/styles";
import Secret from "@/public/img/text/Secret";
import Button from "@/components/atom/Button";
import WhatsApp from "@/public/img/social/WhatsApp";
import Telegram from "@/public/img/social/Telegram";
import Blend from "@/public/img/svg/Blend";

export default function HomeHeader() {
  return (
    <>
      <div className="homeHeaderContainer">
        <div className="homeHeaderContent">
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
              <a href="https://telegram.me/SmartCrystal">
                <Button
                  logo={<Telegram />}
                  content={
                    <div>
                      <div>Join our</div>
                      <div>Community</div>
                    </div>
                  }
                />
              </a>
              <a href="https://wa.me/+96170097533">
                <Button
                  logo={<WhatsApp />}
                  content={
                    <div>
                      <div>Contact us</div>
                      <div className="btnDescr">To talk business</div>
                    </div>
                  }
                />
              </a>
              <div className="blendContainer">
                <div className="bblend">
                  <Blend />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .homeHeaderContainer {
          max-width: 100vw;
          border-bottom: 1px solid lightgray;
          padding-top: 4rem;
          overflow: hidden;
          ${styles.flex};
          ${styles.flexJustifycenter};
          position: relative;
        }
        .homeHeaderContent {
          width: 100%;
          max-width: 70rem;
          padding: 1rem 2rem;
          padding-bottom: 0;
        }
        .heighlight {
          ${styles.flex};
          ${styles.flexAligncenter};
          ${styles.justifyBetween};
          gap: 1rem;
          border-radius: 1rem 20rem 1rem 20rem;
        }
        .logoSymbol {
          width: 8.6rem;
          height: 8.6rem;
          padding: 0.3rem;
          border-radius: 50%;
          background: ${styles.brandGradient};
        }

        .smelogo {
          width: 100%;
          max-width: 9rem;
        }

        .secret {
          padding: 2rem 0rem;
          max-width: 35rem;
          min-height: 20vh;
          ${styles.flex};
          ${styles.flexBothcenter};
          margin: auto;
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
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: -1;
        }

        .bblend {
          position: absolute;
          top: 0;
          left: 0;
          width: 100vw;
          opacity: 0.8;
        }
        @media only screen and (max-width: 600px) {
          .heighlight {
            display: none;
          }
          .bblend {
            width: 130vw;
            left: -5rem;
          }
        }
      `}</style>
    </>
  );
}
