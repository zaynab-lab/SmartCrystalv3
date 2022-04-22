import Box from "@/components/atom/Box";
import FlatDarkLogo from "@/public/img/svg/FlatDarkLogo";
import { styles } from "@/public/js/styles";
import { invInf, lines, techs, terms } from "@/public/js/contractData";
import { FaFilePdf } from "react-icons/fa";
import ReactToPrint from "react-to-print";
import { useEffect, useRef, useState } from "react";

export default function GeneralContract() {
  const componentRef = useRef();
  const [minTime, setMinTime] = useState(0);
  const [maxTime, setMaxTime] = useState(0);
  const [state, setDefaultState] = useState({ lines, techs });

  const setState = (id, field, status) => {
    if (field === "lines") {
      let newLines = state.lines.map((line, i) =>
        id === i ? { ...line, status: status } : line
      );
      setDefaultState({ techs: state.techs, lines: newLines });
    } else {
      setDefaultState({
        techs: state.techs.map((tech, i) =>
          id === i
            ? { ...tech, status: tech.status === "average" ? "" : "average" }
            : tech
        ),
        lines: state.lines
      });
    }
  };
  useEffect(() => {
    let newAverage = state.lines
      .filter((line) => line.status === "average")
      .concat(state.techs.filter((tech) => tech.status === "average"));
    let minValue = state.lines
      .filter((line) => line.status === "min")
      .map((line) => line.min);
    let maxValue = state.lines
      .filter((line) => line.status === "max")
      .map((line) => line.max);
    let min = newAverage.map((line) => line.min);
    let max = newAverage.map((line) => line.max);
    let newMinValue = minValue.concat(maxValue).concat(min);
    let newMaxValue = minValue.concat(maxValue).concat(max);
    newMinValue[0] && setMinTime(newMinValue.reduce((a, b) => a + b));
    newMaxValue[0] && setMaxTime(newMaxValue.reduce((a, b) => a + b));
  }, [state]);

  return (
    <>
      <div className="contractContainer" ref={componentRef}>
        <div className="contractHeaderContainer">
          <div className="contractHeader">
            <div>General Contract</div>
            <div className="symbol">
              <FlatDarkLogo fill={"white"} />
            </div>
          </div>
        </div>
        <Box
          borderColor={"white"}
          content={
            <div className="inputList">
              {invInf.map((item, i) => (
                <div
                  key={i}
                  className="inputContainer"
                  style={{ flex: `1 1 ${item.flex}` }}
                >
                  <div className={`infoLable ${item.detail && "detail"}`}>
                    {item.label}
                  </div>
                  <input className="infoInput" />
                </div>
              ))}
            </div>
          }
        />
        <Box
          title="Solutions"
          content={lines.map((line, i) => (
            <Item item={line} type="select" i={i} setState={setState} />
          ))}
        />
        <Box
          title="Technologies"
          content={techs.map((tech, i) => (
            <Item item={tech} type="checkbox" i={i} setState={setState} />
          ))}
        />
        <Box
          title="Terms & Conditions"
          content={terms.map((term, i) => (
            <Item item={term} i={i} />
          ))}
        />
        <Box
          title="Extra Terms, Conditions & Requirements"
          content={<div className="extraTerms"></div>}
        />
        <Box
          colored={true}
          content={
            <div>
              <div className="estimator">
                Estimated Time (f):{" "}
                {minTime + maxTime > 0
                  ? minTime + " " + (minTime !== maxTime && ` - ${maxTime} `)
                  : " ______ "}
                hours * 12 $/hour
              </div>
              <div className="estimator">
                Estimated cost:{" "}
                {minTime + maxTime > 0
                  ? minTime * 12 +
                    " " +
                    (minTime !== maxTime && ` - ${maxTime * 12} `)
                  : " ______ "}
                ${" "}
              </div>
              <div className="estimator">Discount: ~{" ___ "}% </div>
              <div className="estimator">Total Payment: {" ______ "}$ </div>
            </div>
          }
        />
        <div className="signature">
          <div>Deliverying Date: ____________________</div>
          <div>Contract Date: _______________________</div>
          <div>Smart Crystal Signature: ______________</div>
          <div>Investor Signature: ___________________</div>
        </div>
      </div>

      <ReactToPrint
        trigger={() => (
          <div className="pdfBtn">
            <FaFilePdf />
            Download the contract
          </div>
        )}
        content={() => componentRef.current}
      />
      {minTime + maxTime > 0 && (
        <div className="timeEstimation">
          Estimated time with complexity factor: {minTime}
          {minTime !== maxTime && ` - ${maxTime}`} hours
        </div>
      )}

      <style jsx>{`
        .contractContainer {
          ${styles.flex};
          ${styles.flexColumn};
          gap: 1rem;
          padding: 1rem 0rem;
        }
        .contractHeader {
          padding: 0.6rem 1rem;
          ${styles.flex};
          ${styles.justifyBetween};
          ${styles.flexAligncenter};
          color: ${styles.primaryColor};
          font-size: 1.8rem;
          background: white;
          border: solid ${styles.primaryColor};
          border-width: 1px 0px;
        }
        .symbol {
          max-width: 10rem;
          height: 3rem;
        }

        .inputList {
          ${styles.flex};
          ${styles.flexAligncenter};
          flex-wrap: wrap;
          padding-bottom: 1rem;
        }
        .inputContainer {
          flex: 1 1;
          ${styles.flex};
          ${styles.flexAligncenter};
          padding: 0.2rem 0.6rem;
          gap: 0.6rem;
        }
        .infoInput {
          flex: 1 1;
          border: 1px solid #bbb;
          border-radius: 0.3rem;
          font-size: 1rem;
          width: 8rem;
        }
        .infoLable {
          white-space: nowrap;
          color: ${styles.primaryColor};
        }
        .detail {
          font-size: 0.8rem;
          color: #555;
        }
        .extraTerms {
          min-height: 18rem;
        }
        .estimator {
          color: ${styles.primaryColor};
          ${styles.flex};
          ${styles.flexAligncenter};
          gap: 0.3rem;
          padding: 0.3rem 1rem;
        }

        .rate {
          max-width: 2rem;
          border-radius: 0.2rem;
          border: 1px solid #444;
          padding: 0rem 0.2rem;
        }
        .signature {
          padding: 1rem;
          ${styles.flex};
          ${styles.justifyBetween};
          flex-wrap: wrap;
          gap: 1.2rem;
        }
        .signature div {
          white-space: nowrap;
        }
        .pdfBtn {
          width: fit-content;
          margin: auto;
          background: ${styles.primaryColor};
          color: white;
          padding: 0.6rem 1rem;
          border-radius: 0.3rem;
          display: flex;
          gap: 1rem;
          cursor: pointer;
          margin-bottom: 2rem;
          margin-top: 1rem;
        }
        .timeEstimation {
          background: white;
          color: ${styles.secondaryColor};
          border-top: 1px solid ${styles.secondaryColor};
          padding: 0.6rem;
          text-align: center;
          position: fixed;
          z-index: 20;
          bottom: 0;
          left: 0;
          width: 100%;
          font-size: 0.8rem;
          font-weight: bold;
        }

        @media all {
          .page-break {
            display: none;
          }
        }

        @media print {
          html,
          body {
            height: initial !important;
            overflow: initial !important;
            -webkit-print-color-adjust: exact;
          }
        }

        @media print {
          .page-break {
            margin-top: 1rem;
            display: block;
            page-break-before: auto;
          }
        }

        @page {
          size: auto;
          margin: 20mm;
        }
      `}</style>
    </>
  );
}

const Item = ({ item, i, type, setState }) => {
  return (
    <>
      <div className="Box-item">
        {type === "select" && <span>{i + 1}-</span>}{" "}
        <span className="Box-details">
          <span className="label">{item.label}</span>
          {type === "select" && (
            <select
              className="select"
              onChange={(e) => setState(i, "lines", e.target.value)}
            >
              <option value="">select</option>
              <option value="min">min</option>
              <option value="average">average</option>
              <option value="max">max</option>
            </select>
          )}

          {type === "checkbox" && (
            <input
              className="checkbox"
              type="checkBox"
              onChange={() => setState(i, "techs", "average")}
            />
          )}
        </span>
      </div>

      <style jsx>{`
        .label {
          padding: 0 0.8rem;
        }

        .Box-item {
          ${styles.flex};
          padding: 0.5rem;
          border-bottom: 1px solid #eee;
        }

        .Box-item:last-child {
          border: none;
        }

        .Box-details {
          -webkit-box-flex: 1;
          -ms-flex: 1 1 100%;
          flex: 1 1 100%;
          ${styles.flex};
          ${styles.justifyBetween}
        }

        .select {
          background: white;
          padding: 0.1rem;
          border-radius: 0.2rem;
          border: 1px solid #aaa;
          cursor: pointer;
        }
        .checkbox {
          cursor: pointer;
        }
      `}</style>
    </>
  );
};
