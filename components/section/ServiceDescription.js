import { styles } from "@/public/js/styles";

export default function ServiceDescription({ text, title, img }) {
  return (
    <>
      <div className="serviceDescriptionContainer">
        <div className="dtitle">{title}</div>
        <div className="subServicesContainer">
          <div className="servicesDescriptionText">{text}</div>

          <div className="serviceDescription">
            <img src={`/img/png/${img}.png`} alt="" width="100%" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .serviceDescriptionContainer {
          padding: 2rem;
        }

        .dtitle {
          font-size: calc(1.8rem + 0.5vw);
          padding: 1rem;
          padding-left: 0;
          font-weight: bold;
          ${styles.brandGradient};
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subServicesContainer {
          ${styles.flex};
          ${styles.flexAligncenter};
          gap: 2rem 3rem;
          flex-wrap: wrap;
        }

        .servicesDescriptionText {
          font-size: calc(1rem + 0.2vw);
          flex: 1 1 12rem;
          text-align: justify;
          text-justify: inter-word;
          color: ${styles.secondaryColor};
        }

        .serviceDescription {
          flex: 1 1 14rem;
        }
      `}</style>
    </>
  );
}
