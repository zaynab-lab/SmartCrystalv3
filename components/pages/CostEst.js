import Calculator from "@/public/img/svg/Calculator";
import Nomatter from "@/public/img/text/Nomatter";
import Weoffer from "@/public/img/text/Weoffer";
import { styles } from "@/public/js/styles";
import { IoMdInformationCircleOutline } from "react-icons/io";
import TextBox from "../atom/TextBox";
import CostEstimatorTabs from "../section/CostEstimatorTabs";

// const ests = ["design", "marketing", "montage", "development"];
export default function CostEst() {
  return (
    <>
      <div className="informCnt">
        <div className="solution">
          <div>
            <Weoffer />
          </div>
        </div>

        <div className="calculator">
          <Calculator />
        </div>
        <div className="solutionCnt">
          <div className="solution">
            <div>
              <Nomatter />
            </div>
          </div>
        </div>
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
        .solutionCnt {
          padding: 1rem;
          padding-bottom: 0;
          max-width: 50rem;
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

        .informCnt {
          padding: 1rem;
          padding-top: 1rem;
          max-width: 60rem;
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
