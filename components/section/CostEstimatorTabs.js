import { styles } from "@/public/js/styles";
import { useState } from "react";
import CostEstimatorBlock from "@/components/molecule/CostEstimatorBlock";

const tabs = [
  { title: "Graphic Design" },
  { title: "Marketing Campaign" },
  { title: "Montage" },
  { title: "Developement" }
];

export default function CostEstimatorTabs() {
  const [tabNumber, setTabNumber] = useState(0);

  return (
    <>
      <div className="tabComponent">
        <div className="tabsContainer">
          <div className="tabs">
            {tabs?.map((tab, i) => (
              <div
                className={`tab ${tabNumber === i && `active`}`}
                key={i}
                onClick={() => {
                  setTabNumber(i);
                }}
              >
                {tab.title}
              </div>
            ))}
          </div>
        </div>
        {tabNumber === 0 && <CostEstimatorBlock block={"design"} />}
        {tabNumber === 1 && <CostEstimatorBlock block={"marketing"} />}
        {tabNumber === 2 && <CostEstimatorBlock block={"montage"} />}
        {tabNumber === 3 && <CostEstimatorBlock block={"development"} />}
      </div>
      <style jsx>{`
        .tabComponent {
          padding: 1rem;
          max-width: 60rem;
          margin: auto;
        }

        .tabsContainer {
          padding: 0.1rem 0.5rem;
          max-width: 50rem;
          margin: auto;
        }

        .tabs {
          ${styles.flex};
          ${styles.flexJustifycenter};
          background: white;
          border-radius: 2rem;
          padding: 0.2rem;
          gap: 0.4rem;
          font-weight: bold;
          white-space: nowrap;
          flex-wrap: wrap;
          -webkit-flex-wrap: wrap;
        }

        .tab {
          ${styles.flex};
          ${styles.flexJustifycenter};
          ${styles.flexAligncenter};
          flex: 1 1;
          border-radius: 2rem;
          cursor: pointer;
          padding: 0.4rem 0.8rem;
          text-align: center;
          color: #999;
          border: 2px solid #999;
        }

        .active {
          color: ${styles.primaryColor};
          border: 2px solid ${styles.primaryColor};
        }
      `}</style>
    </>
  );
}
