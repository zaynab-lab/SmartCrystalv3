import SMELogo from "../public/img/SMELogo";
import { styles } from "../public/js/styles";

export default function Heighlight() {
  return (
    <>
      <div className="heighlight">
        <div className="heighlightText">
          Build your powerful technology based business{" "}
          <div className="strong">with smart crystal</div>
        </div>
        <div className="smelogo">
          <SMELogo />
        </div>
      </div>
      <style jsx>{`
        .heighlight {
          background: white;
          padding: 2vw 0.6rem;
          font-size: calc(0.8rem + 2vw);
          text-align: center;
          color: ${styles.primaryColor};
          ${styles.flexAligncenter}
          flex-wrap:wrap;
        }
        .heighlightText {
          flex: 1 1;
        }
        .strong {
          font-weight: 600;
        }

        .smelogo {
          width: 100%;
          margin: auto;
          padding: 0.2rem 2rem;
          flex: 1 1 100%;
          max-width: 16rem;
        }
      `}</style>
    </>
  );
}
