import { styles } from "@/public/js/styles";
import Blend from "@/public/img/svg/Blend";

export default function Header({ title, titleDes }) {
  return (
    <>
      <div className="headerContainer">
        <div className="header">
          <div className="titleContainer">
            <div className="title">{title}</div>
            <div className="titleDes">{titleDes}</div>
          </div>
          <div className="blendContainer">
            <Blend />
          </div>
        </div>
      </div>
      <style jsx>{`
        .header {
          position: relative;
          padding-top: calc(3rem + 5vh);
          padding-bottom: 0rem;
          min-height: 18rem;
          max-width: 70rem;
          margin: auto;
          ${styles.flex};
          overflow: hidden;
        }
        .titleContainer {
          text-align: left;
          padding: 0 calc(1rem + 2vw + 1vh);
        }
        .title {
          font-weight: bold;
          font-size: calc(1rem + 2vw + 1vh);
          ${styles.brandGradient};
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .titleDes {
          color: ${styles.darkgray};
          font-size: 1rem;
          padding-top: 0.8rem;
          width: 18rem;
        }

        .blendContainer {
          position: absolute;
          z-index: -1;
          width: 100vw;
          top: 10rem;
          right: 0;
        }
      `}</style>
    </>
  );
}
