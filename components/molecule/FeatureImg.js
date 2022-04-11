import { styles } from "@/public/js/styles";

export default function FeatureImg({ fTitle, imgLink }) {
  return (
    <>
      <div className="featureContainer">
        <div className="ftitleContainer">
          <div className="ftitle">{fTitle}</div>
        </div>
        <div className="fImg">
          <img width="100%" src={`/img/png/features/${imgLink}.png`} alt="" />
        </div>
      </div>
      <style jsx>{`
        .featureContainer {
          max-width: 60rem;
          margin: auto;
        }

        .ftitleContainer {
          background: ${styles.borderGradient};
          padding-top: 0.15rem;
        }
        .ftitle {
          padding: 0.6rem 0.8rem;
          font-size: 1.3rem;
          font-weight: bold;
          background: white;
          color: ${styles.secondaryColor};
        }
        .fImg {
          overflow: hidden;
        }
      `}</style>
    </>
  );
}
