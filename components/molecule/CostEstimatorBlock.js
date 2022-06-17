import { styles } from "@/public/js/styles";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { CgCamera, CgEditContrast, CgWebsite } from "react-icons/cg";
import {
  FaDownload,
  FaFacebook,
  FaMobileAlt,
  FaNetworkWired
} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import {
  MdBrandingWatermark,
  MdCamera,
  MdDesignServices,
  MdOutlineAnimation
} from "react-icons/md";
import ReactToPrint from "react-to-print";
import TextBox from "../atom/TextBox";

const items = [
  {
    title: "Post Design",
    icon: <MdDesignServices />,
    max: 100,
    value: 7,
    block: ["design", "marketing"],
    rate: { "8": 28, "12": 24, "30": 20, "101": 15 }
  },
  {
    title: "Animated Story",
    icon: <MdOutlineAnimation />,
    max: 40,
    value: 1,
    block: ["design", "marketing"],
    rate: { "8": 50, "12": 45, "60": 40 }
  },
  {
    title: "Website Page",
    icon: <CgWebsite />,
    max: 20,
    value: 0,
    block: ["design"],
    rate: { "8": 120, "12": 110, "30": 100 }
  },
  {
    title: "Photography",
    icon: <MdCamera />,
    max: 60,
    value: 2,
    block: ["montage"],
    rate: { "5": 36, "11": 26, "20": 18, "60": 15 }
  },
  {
    title: "Branding System",
    icon: <MdBrandingWatermark />,
    max: 3,
    value: 0,
    block: ["design"],
    types: ["No Need", "Small Business", "Medium Business", "Pro"],
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
    rate: { "1": 240, "4": 220, "9": 200 }
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
    rate: { "5": 40, "15": 30, "30": 20, "101": 10 }
  },
  {
    title: "WebApp Page",
    icon: <CgWebsite />,
    max: 30,
    value: 2,
    block: ["development"],
    rate: { "8": 220, "12": 240, "20": 260, "31": 280 }
  },
  {
    title: "UX/UI",
    icon: <MdDesignServices />,
    max: 30,
    value: 2,
    block: ["development"],
    rate: { "8": 120, "12": 110, "31": 100 }
  },

  {
    title: "System development",
    icon: <FaNetworkWired />,
    max: 30,
    value: 0,
    block: ["development"],
    rate: { "8": 220, "12": 240, "20": 260, "31": 280 }
  },
  {
    title: "Mobile App",
    icon: <FaMobileAlt />,
    max: 20,
    value: 0,
    block: ["development"],
    rate: { "8": 260, "12": 280, "20": 300, "31": 320 }
  }
];

const blockTitle = {
  design: "Graphic Design",
  marketing: "Marketing Campaign",
  montage: "Montage",
  development: "Developement"
};

const currancy = {
  USD: { flag: "USD 🇺🇸", rate: 1, syb: "$" },
  AED: { flag: "AED 🇦🇪", rate: 3.67, syb: "AED" },
  OMR: { flag: "OMR 🇴🇲", rate: 0.3, syb: "OMR" }
};

const culist = ["USD", "AED", "OMR"];

export default function CostEstimatorBlock({ block }) {
  const [values, setValues] = useState([]);
  const [cost, setCost] = useState(2);
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const router = useRouter();
  const [currentCurrancy, setCurrentCurrancy] = useState("AED");
  const [culistDisplay, setCulistDisplay] = useState(false);
  const componentRef = useRef();

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
      <div className="block" ref={componentRef}>
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
                      {!item.types && (
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
                      )}
                    </div>
                    {!item.types ? (
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
                    ) : (
                      <div className="radiogroup">
                        {item.types.map((itype, h) => (
                          <div key={h} className="itype">
                            <input
                              type="radio"
                              id={itype}
                              name="type"
                              defaultChecked={h === 0}
                              value={h}
                              onChange={(e) =>
                                setValues(
                                  values.map((value, j) =>
                                    j === i ? e.target.value : value
                                  )
                                )
                              }
                            />
                            <label htmlFor={itype}>{itype}</label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              <div className="currancyCnt">
                <div
                  className="currancy"
                  onClick={() => setCulistDisplay((display) => !display)}
                >
                  <div className="down">
                    <IoIosArrowDown />
                  </div>
                  {currancy[currentCurrancy].flag}
                </div>
                <div className="culist">
                  {culist.map((cu) => (
                    <div
                      key={cu}
                      onClick={() => {
                        setCurrentCurrancy(cu);
                        setCulistDisplay(false);
                      }}
                    >
                      {currancy[cu].flag}
                    </div>
                  ))}
                </div>
              </div>
              <div className="costRange">
                {Math.round(cost * currancy[currentCurrancy].rate)}
                <span className="syb">
                  {currancy[currentCurrancy].syb}
                </span> -{" "}
                {Math.round(
                  (cost + 0.2 * cost) * currancy[currentCurrancy].rate
                )}
                <span className="syb">{currancy[currentCurrancy].syb}</span>
              </div>
              <div className="line"></div>
              <div className="inputCnt">
                <input
                  className="input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                />
                <input
                  className="input"
                  value={number}
                  type="number"
                  onChange={(e) => setNumber(e.target.value)}
                  placeholder="Phone Number 971 XXX XXX"
                />
              </div>
              {name && number && (
                <ReactToPrint
                  trigger={() => (
                    <div className="downloadbtn">
                      <FaDownload /> download as pdf then send
                    </div>
                  )}
                  content={() => componentRef.current}
                />
              )}
              <div
                onClick={() => {
                  name && number
                    ? router.push(
                        "https://wa.me/+96170097533?text=attach the pdf"
                      )
                    : alert(
                        "please fill the form then download the pdf to send"
                      );
                }}
                className="orderbtn"
              >
                Send now
              </div>
            </>
          }
        />
      </div>
      <style jsx>{`
        .blockTitle {
          font-size: 1.8rem;
          padding: 0.6rem;
          font-weight: bold;
          ${styles.brandGradient};
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .block {
        }
        .costPart {
          padding: 1rem;
        }

        .costHead {
          ${styles.flex};
          ${styles.justifyBetween};
          font-size: 1.3rem;
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
        .radiogroup {
          ${styles.flex};
          flex-wrap: wrap;
          white-space: nowrap;
          gap: 0.2rem 1rem;
        }

        .itype {
          ${styles.flex};
          ${styles.flexAligncenter};
          gap: 0.3rem;
          flex: 1 1 20%;
        }

        .checkbox {
          cursor: pointer;
        }
        .costRange {
          text-align: center;
          font-weight: bold;
          font-size: 1.6rem;
          color: ${styles.primaryColor};
          padding: 0.6rem 0rem;
          padding-bottom: 1.6rem;
        }
        .currancyCnt {
          position: relative;
        }
        .currancy {
          padding: 0.2rem 1rem;
          direction: rtl;
          cursor: pointer;
          ${styles.flex};
          ${styles.flexAligncenter}
          gap:.2rem
        }
        .culist {
          border: 1px solid gray;
          padding: 0.2rem;
          background: white;
          z-index: 2;
          position: absolute;
          right: 1.4rem;
          padding: 0.4rem;
          border-radius: 0.4rem;
          cursor: pointer;
          display: ${culistDisplay ? "block" : "none"};
        }
        .down {
          padding-top: 0.4rem;
        }
        .syb {
          font-size: 70%;
          padding-left: 0.2rem;
        }
        .line {
          height: 0.2rem;
          background: ${styles.borderGradient};
          border-radius: 50%;
          position: relative;
        }
        .line:before {
          content: "Info";
          position: absolute;
          top: -1.2rem;
          color: ${styles.primaryColor};
        }
        .inputCnt {
          ${styles.flex};
          flex-wrap: wrap;
          gap: 0.6rem;
          padding: 1rem;
        }
        .input {
          width: 100%;
          flex: 1 1 100%;
          padding: 0.3rem 1rem;
          border: 1px solid #999;
          border-radius: 0.3rem;
        }
        .downloadbtn {
          color: ${styles.primaryColor};
          padding-bottom: 0.6rem;
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
          font-weight: bold;
        }
      `}</style>
    </>
  );
}
