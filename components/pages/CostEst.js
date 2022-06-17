import Calculator from "@/public/img/svg/Calculator";
import Grow from "@/public/img/text/Grow";
import Nomatter from "@/public/img/text/Nomatter";
import Weoffer from "@/public/img/text/Weoffer";
import { styles } from "@/public/js/styles";
import { IoMdInformationCircleOutline } from "react-icons/io";
import CostEstimatorTabs from "../section/CostEstimatorTabs";

// const ests = ["design", "marketing", "montage", "development"];
export default function CostEst() {
  return (
    <>
      <div className="costEstimatorPage">
        <div className="rocket">
          <Grow />
        </div>
        <div className="informCnt">
          <div className="costTitle">Cost Estimator</div>

          <div className="informationCnt">
            <div className="inform">
              <div className="infcircle">
                <IoMdInformationCircleOutline />
              </div>
              <div>Calculate the cost of any service you need.</div>
            </div>

            <div className="steps">
              <li>1st step is to select your plan</li>
              <li>2nd step is to download pdf</li>
              <li>3rd step is to send the pdf</li>
            </div>
          </div>
        </div>
        <CostEstimatorTabs />
        <div className="solutionCnt">
          <div className="calculator">
            <Calculator />
          </div>
          <div className="solution">
            <div>
              <Nomatter />
            </div>

            <div>
              <Weoffer />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .costEstimatorPage {
        }
        .rocket {
          max-width: 40rem;
          margin: auto;
          padding: 1rem;
          padding-bottom: 0rem;
        }

        .costTitle {
          font-size: 1.6rem;
          padding: 0.6rem;
          font-weight: bold;
          ${styles.brandGradient};
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .informCnt {
          padding: 0.6rem;
          max-width: 40rem;
          margin: auto;
        }
        .informationCnt {
          border: 1.5px solid #555;
          border-radius: 0.6rem;
          padding: 0.6rem;
        }

        .inform {
          ${styles.flex};
          ${styles.flexAligncenter};
          color: ${styles.secondaryColor};
          gap: 0.3rem;
          padding: 0.4rem 0.2rem;
          padding-top: 0;
          font-size: 1rem;
          font-weight: bold;
        }

        .infcircle {
          font-size: 1.4rem;
          padding-top: 0.2rem;
        }
        .steps {
          color: #222;
          padding: 0rem 1rem;
          padding-bottom: 0.4rem 0.2rem;
          font-size: 1rem;
        }

        .solutionCnt {
          padding: 1rem;
          padding-bottom: 0;
          max-width: 60rem;
          margin: auto;
          ${styles.flex};
          ${styles.flexAligncenter};
          ${styles.justifyBetween};
          flex-wrap: wrap;
        }

        .solution {
          max-width: 20rem;
          margin: auto;
          padding: 1rem;
          flex: 1 1 13rem;
        }

        .calculator {
          max-width: 15rem;
          margin: auto;
          flex: 1 1 15rem;
        }
      `}</style>
    </>
  );
}
