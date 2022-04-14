import { styles } from "@/public/js/styles";
import { useState } from "react";

export default function Tab({ tabs }) {
  const [Tab, setTab] = useState(0);

  return (
    <>
      <div className="tabComponent">
        <div className="features">Features</div>
        <div className="tablet">
          <div className="tabletMarg">
            <div className="tabsContainer">
              <div className="tabs">
                {tabs.map((tab, i) => (
                  <div
                    className={`tab tab${i} ${Tab === i && `active${i}`}`}
                    key={i}
                    onClick={() => {
                      setTab(i);
                    }}
                  >
                    {tab.title}
                  </div>
                ))}
              </div>
            </div>
            <div className="tabContent">
              <div className="tabImg">{tabs[Tab].img}</div>
              <div className="tabText">
                <div className={`tabTitle tab${Tab}`}>{tabs[Tab].title}</div>
                <div>{tabs[Tab].text}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .tabComponent {
          padding: 1rem;
          max-width: 38rem;
          margin: auto;
        }
        .features {
          font-size: 2rem;
          padding-bottom: 2rem;
          font-weight: bold;
          ${styles.brandGradient};
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .tabsContainer {
          background: ${styles.borderGradient};
          padding: 0.1rem;
          border-radius: 2rem;
          max-width: 26rem;
          margin: auto;
        }
        .tabs {
          ${styles.flex};
          ${styles.justifyBetween};
          background: white;
          border-radius: 2rem;
          padding: 0.2rem;
          font-weight: bold;
        }
        .tab {
          border-radius: 2rem;
          cursor: pointer;
          padding: 0.4rem 0.8rem;
        }
        .tab0 {
          color: ${styles.secondaryColor};
        }
        .tab1 {
          color: #b471f5;
        }
        .tab2 {
          color: ${styles.primaryColor};
        }
        .active0 {
          background: ${styles.secondaryColor};
          color: white;
        }
        .active1 {
          background: #b471f5;
          color: white;
        }
        .active2 {
          background: ${styles.primaryColor};
          color: white;
        }
        .tabContent {
          padding-top: 2rem;
          ${styles.flex};
          ${styles.justifyBetween};
          flex-wrap: wrap;
          gap: 0rem 3rem;
        }
        .tabTitle {
          font-weight: bold;
          font-size: 1.6rem;
          padding: 1rem 0rem;
        }
        .tabImg {
          max-width: 16rem;
          margin: auto;
        }
        .tabText {
          flex: 1 1 12rem;
          text-align: justify;
          text-justify: inter-character;
          padding-right: 1rem;
        }
      `}</style>
    </>
  );
}
