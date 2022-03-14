import { styles } from "@/public/js/styles";

export default function Header({ title }) {
  return (
    <>
      <div className="headerContainer">
        <div className="header">
          <div className="titleContainer">{title}</div>
          <div className="blendContainer">
            <img width="100%" alt="" src="/img/png/Blend.png" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .header {
          position: relative;
          padding-top: calc(4rem + 5vh);
          padding-bottom: 0rem;
          min-height: 70vh;
          font-weight: bold;
          max-width: 70rem;
          margin: auto;
          ${styles.flex};
          overflow: hidden;
        }
        .titleContainer {
          text-align: left;
          font-size: calc(1rem + 2vw + 1vh);
          padding: 2rem;
          ${styles.brandGradient};
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .blendContainer {
          position: absolute;
          z-index: -1;
          bottom: -10vw;
        }
      `}</style>
    </>
  );
}
