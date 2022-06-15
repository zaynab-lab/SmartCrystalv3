import { styles } from "@/public/js/styles";
import { useEffect, useState } from "react";
import { CgCamera, CgEditContrast, CgWebsite } from "react-icons/cg";
import { FaFacebook, FaMobileAlt, FaNetworkWired } from "react-icons/fa";
import {
  MdBrandingWatermark,
  MdCamera,
  MdDesignServices,
  MdNetworkCheck,
  MdOutlineAnimation
} from "react-icons/md";
import TextBox from "../atom/TextBox";

const items = [
  {
    title: "Posts Design",
    icon: <MdDesignServices />,
    max: 60,
    value: 7,
    block: ["design", "marketing"],
    rate: { "8": 28, "12": 24, "61": 20 }
  },
  {
    title: "Animated Story",
    icon: <MdOutlineAnimation />,
    max: 30,
    value: 5,
    block: ["design", "marketing"],
    rate: { "8": 50, "12": 45, "60": 40 }
  },
  {
    title: "Website Page",
    icon: <CgWebsite />,
    max: 20,
    value: 2,
    block: ["design"],
    rate: { "8": 120, "12": 110, "30": 100 }
  },
  {
    title: "Photography",
    icon: <MdCamera />,
    max: 60,
    value: 2,
    block: ["design"],
    rate: { "8": 28, "12": 24, "60": 20 }
  },
  {
    title: "Branding System - lvl",
    icon: <MdBrandingWatermark />,
    max: 3,
    value: 0,
    block: ["design"],
    rate: { "1": 300, "2": 800, "3": 1200 }
  },
  {
    title: "Filming (hour)",
    icon: <CgCamera />,
    max: 4,
    value: 1,
    block: ["montage"],
    rate: { "1": 400, "2": 350, "5": 300 }
  },
  {
    title: "Landing Page",
    icon: <CgWebsite />,
    max: 8,
    value: 1,
    block: ["marketing"],
    rate: { "1": 280, "4": 240, "9": 220 }
  },
  {
    title: "SM Manag. /month",
    icon: <FaFacebook />,
    max: 12,
    value: 0,
    block: ["marketing"],
    rate: { "1": 360, "4": 280, "13": 220 }
  },

  {
    title: "Video Editing (min)",
    icon: <CgEditContrast />,
    max: 100,
    value: 1,
    block: ["montage"],
    rate: { "1": 40, "15": 20, "101": 10 }
  },
  {
    title: "WebApp",
    icon: <CgWebsite />,
    max: 20,
    value: 2,
    block: ["development"],
    rate: { "8": 220, "12": 200, "30": 180 }
  },
  {
    title: "UX/UI",

    icon: <MdDesignServices />,
    max: 20,
    value: 2,
    block: ["development"],
    rate: { "8": 120, "12": 110, "30": 100 }
  },

  {
    title: "System development",
    icon: <FaNetworkWired />,
    max: 20,
    value: 0,
    block: ["development"],
    rate: { "8": 220, "12": 200, "30": 180 }
  },
  {
    title: "Mobile App",
    icon: <FaMobileAlt />,
    max: 20,
    value: 0,
    block: ["development"],
    rate: { "8": 260, "12": 240, "30": 220 }
  }
];

const blockTitle = {
  design: "Graphic Design",
  marketing: "Marketing Campaign",
  montage: "Montage",
  development: "Developement"
};

export default function CostEstimatorBlock({ block }) {
  const [values, setValues] = useState([]);
  const [cost, setCost] = useState(2);

  useEffect(() => {
    setValues(
      items
        .filter((item) => item.block.includes(block))
        .map((item) => item.value)
    );
  }, [block]);

  useEffect(() => {
    const rates = items
      .filter((item) => item.block.includes(block))
      .map((item) => item.rate);

    const ratesIndx = rates.map((rate, k) => {
      const rateIndexes = Object.keys(rate);
      for (var indx in rateIndexes) {
        if (parseInt(rateIndexes[indx], 0) >= parseInt(values[k], 0)) {
          return rate[rateIndexes[indx]] * parseInt(values[k], 0);
        }
      }
      return null;
    });

    setCost(ratesIndx.reduce((a, b) => a + b, 0));
  }, [values, block]);

  return (
    <>
      <div className="block">
        <div className="blockTitle">{blockTitle[block]}</div>
        <TextBox
          text={
            <>
              {items
                .filter((item) => item.block.includes(block))
                .map((item, i) => (
                  <div key={i} className="costPart">
                    <div className="costHead">
                      <div className="costTitle">
                        <div className="costIcon">{item.icon}</div>
                        <div>{item.title}</div>
                      </div>
                      <input
                        type="number"
                        value={values[i]}
                        onChange={(e) =>
                          setValues(
                            values.map((value, j) =>
                              j === i ? e.target.value : value
                            )
                          )
                        }
                        className="numberInput"
                      />
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={item.max}
                      value={values[i]}
                      onChange={(e) =>
                        setValues(
                          values.map((value, j) =>
                            j === i ? e.target.value : value
                          )
                        )
                      }
                      className="rangeInput"
                    />
                  </div>
                ))}
              <div className="costRange">
                {cost}$ - {Math.round(cost + 0.2 * cost)}$
              </div>
              <div className="orderbtn">Order now</div>
            </>
          }
        />
      </div>
      <style jsx>{`
        .blockTitle {
          font-size: 2rem;
          padding: 1rem;
          font-weight: bold;
          ${styles.brandGradient};
          text-align: center;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .block {
          padding-top: 0.8rem;
        }
        .costPart {
          padding: 1rem;
        }

        .costHead {
          ${styles.flex};
          ${styles.justifyBetween};
          font-size: 1.4rem;
          padding-bottom: 0.5rem;
          color: ${styles.primaryColor};
        }
        .costTitle {
          ${styles.flex};
          gap: 0.3rem;
        }
        .costIcon {
          padding-top: 0.1rem;
          font-size: 1.6rem;
        }

        .numberInput {
          border: 2px solid ${styles.primaryColor};
          padding: 0.2rem 0.4rem;
          border-radius: 0.4rem;
          width: 4rem;
          font-weight: bold;
          font-size: 1.1rem;
        }

        .rangeContainer {
          position: relative;
          height: 1.4rem;
        }

        .rangeInput {
          cursor: pointer;
          width: 100%;
        }

        .rangePointer {
          position: absolute;
          bottom: 0;
          width: 100%;
          font-size: 0.3rem;
          ${styles.flex};
          ${styles.justifyBetween};
          padding: 0rem 0.5rem;
          color: #ccc;
        }

        .checkbox {
          cursor: pointer;
        }
        .costRange {
          text-align: center;
          font-weight: bold;
          font-size: 1.6rem;
          color: ${styles.primaryColor};
          padding: 0.6rem;
        }
        .orderbtn {
          background: ${styles.primaryColor};
          padding: 0.6rem 2rem;
          color: white;
          border-radius: 0.5rem;
          text-align: center;
          width: fit-content;
          margin: auto;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
