import Build from "../public/img/Build";
import Deliver from "../public/img/Deliver";
import Deal from "../public/img/Deal";
import Meeting from "../public/img/Meeting";
import { styles } from "../public/js/styles";

const process = [
  { name: "Talk about solutions", logo: <Meeting /> },
  { name: "Make a Deal", logo: <Deal /> },
  { name: "Building your assets", logo: <Build /> },
  { name: "Delivering with Happiness", logo: <Deliver /> }
];

export default function Process() {
  return (
    <>
      <div className="processContainer">
        <div className="content">
          <div className="processTitle">The Process</div>
          <div className="processCardList">
            {process.map((p, i) => (
              <div key={i} className="processCard">
                <div className="processNumber">{i + 1}</div>
                <div className="cardContent">
                  <div className="processlogo">{p.logo}</div>
                  <div>{p.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .processContainer {
          background: white;
        }

        .content {
          padding: 1rem;
        }

        .processTitle {
          font-size: calc(0.8rem + 2vw);
          padding: 1vw;
          color: ${styles.primaryColor};
        }

        .processCardList {
          ${styles.flexBothcenter}
          flex-wrap: wrap;
          padding: 1rem 0rem;
          gap: 1.6rem 1.2rem;
        }

        .processCard {
          flex: 0 1 100%;
          max-width: 10rem;
          border-radius: 0.3rem;
          background: white;
          padding: 1.2rem 1.6rem;
          padding-bottom: 0rem;
          height: 15rem;
          text-align: center;
          cursor: pointer;
          font-size: 1rem;
          color: ${styles.primaryColor};
          ${styles.boxshadow};
          ${styles.flexAligncenter};
          ${styles.flexColumn}
          gap: 1.2rem;
        }
        .processNumber {
          width: 2.6rem;
          height: 2.6rem;
          border: 1px dashed ${styles.primaryColor};
          border-radius: 50%;
          color: ${styles.primaryColor};
          ${styles.flexBothcenter}
        }

        .cardContent {
          display: flex;
          ${styles.flexColumn};
          gap: 1rem;
        }
        .processlogo {
          max-width: 100%;
        }
      `}</style>
    </>
  );
}
