import { styles } from "@/public/js/styles";
import { IoMdInformationCircleOutline } from "react-icons/io";
import TextBox from "../atom/TextBox";
import CostEstimatorTabs from "../section/CostEstimatorTabs";

// const ests = ["design", "marketing", "montage", "development"];
export default function CostEst() {
  return (
    <>
      <div className="informCnt">
        <div className="costTitle">Cost Estimator</div>
        <TextBox
          text={
            <>
              <div className="inform">
                <div className="infcircle">
                  <IoMdInformationCircleOutline />
                </div>
                <div> Calculate the cost of any service you need.</div>
              </div>
              <div className="steps">
                <li>The 1st step is to select your plan</li>
                <li>The 2nd step is to download pdf</li>
                <li>The 3rd step is to send the pdf</li>
              </div>
            </>
          }
        />
      </div>
      <CostEstimatorTabs />
      <style jsx>{`
        .costTitle {
          font-size: 2rem;
          padding: 1rem;
          font-weight: bold;
          ${styles.brandGradient};
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .informCnt {
          padding: 1rem;
          padding-top: 1rem;
          max-width: 40rem;
          margin: auto;
        }

        .inform {
          ${styles.flex};
          ${styles.flexAligncenter};
          color: ${styles.secondaryColor};
          gap: 0.3rem;
          padding: 0.4rem 0.2rem;
          font-size: 1rem;
          font-weight: bold;
        }

        .infcircle {
          font-size: 1.4rem;
          padding-top: 0.2rem;
        }
        .steps {
          color: ${styles.primaryColor};
          padding: 0rem 1rem;
          padding-bottom: 0.4rem 0.2rem;
          font-size: 1rem;
        }
      `}</style>
    </>
  );
}
