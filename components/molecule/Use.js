import { styles } from "@/public/js/styles";

export default function Use({ apps }) {
  return (
    <>
      <div className="appsContainer">
        <div className="appsTitle">We use latest Technologies</div>
        <div className="appsicon">
          {apps.map((app, j) => (
            <div key={j} className="appicon">
              {app}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .appsContainer {
          max-width: 40rem;
          padding: 1rem;
          margin: auto;
        }
        .appsTitle {
          font-size: 1.4rem;
          font-weight: bold;
          ${styles.brandGradient};
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .appsicon {
          ${styles.flex};
          overflow: auto;
          gap: 2rem;
          padding: 0.2rem 0.6rem;
        }

        .appicon {
          min-width: 3rem;
        }
      `}</style>
    </>
  );
}
