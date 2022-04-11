import { styles } from "@/public/js/styles";

export default function WeHelp({ list, img }) {
  return (
    <>
      <div className="helpContainer">
        <div className="helpTitle">We help you</div>
        <div className="helpContent">
          <ul className="helpList">
            {list?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <div className="helpImg">{img}</div>
        </div>
      </div>
      <style jsx>{`
        .helpContainer {
          padding: 2rem;
        }

        .helpTitle {
          font-size: 2rem;
          font-weight: bold;
          ${styles.brandGradient};
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .helpContent {
          ${styles.flex};
          flex-wrap: wrap;
          gap: 1rem;
          padding: 0rem 1rem;
        }
        .helpList {
          padding-top: 1rem;
        }

        .helpImg {
          max-width: 15rem;
          margin: auto;
        }
      `}</style>
    </>
  );
}
