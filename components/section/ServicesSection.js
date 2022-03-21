import { styles } from "@/public/js/styles";
import useOnScreen from "@/public/js/useOnScreen";
import ServicesHive from "../molecule/ServicesHive";
import Blend from "@/public/img/svg/Blend";

export default function ServicesSection() {
  const [setServicesRef, servicesVisible] = useOnScreen({ threshold: 0.2 });

  return (
    <>
      <div className="servicesSection" ref={setServicesRef}>
        <div className="servicesContent">
          <div className="servicesText">
            {servicesVisible && (
              <>
                <div className="servicesTitle">Services</div>
                <div className="servicesDescription">
                  The best digital solutions for you and for your business, are
                  ready to be implemented with our experts.
                </div>
              </>
            )}
          </div>
          <div className="sHive">
            <ServicesHive />
          </div>
          <div className="servicesBlend">
            <Blend />
          </div>
        </div>
      </div>
      <style jsx>{`
        .servicesSection {
          position: relative;
          background: #f4f9ff;
          overflow: hidden;
        }
        .servicesContent {
          max-width: 70rem;
          margin: auto;
          padding: 2rem 1rem;
          ${styles.flex};
          ${styles.flexAligncenter};
          flex-wrap: wrap;
        }
        .servicesText {
          flex: 1 1 15rem;
          padding-bottom: 2rem;
          padding-left: calc(4vw + 0.6rem);
          min-height: 10rem;
        }

        .servicesTitle {
          font-size: clamp(1rem, 4vw + 0.6rem, 4rem);
          font-weight: bold;
          ${styles.brandGradient};
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: fade 1.2s;
        }
        .servicesDescription {
          animation: fade 1.5s;
          padding: 1rem 0;
          font-size: 1.2rem;
          color: ${styles.primaryColor};
        }
        .sHive {
          flex: 1 1 17rem;
          z-index: 1;
        }
        .servicesBlend {
          position: absolute;
          right: -40%;
          bottom: 0;
          width: calc(40vw + 40vh);
          opacity: 60%;
        }

        @-webkit-keyframes fade {
          0% {
            opacity: 0;
            -webkit-transform: translateY(-100px);
            transform: translateY(-100px);
          }
          100% {
            opacity: 1;
            -webkit-transform: translateY(0px);
            transform: translateY(0px);
          }
        }
        @keyframes fade {
          0% {
            opacity: 0;
            -webkit-transform: translateY(-100px);
            transform: translateY(-100px);
          }
          100% {
            opacity: 1;
            -webkit-transform: translateY(0px);
            transform: translateY(0px);
          }
        }
      `}</style>
    </>
  );
}
