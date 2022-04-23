import Box from "@/components/atom/Box";
import FlatDarkLogo from "@/public/img/svg/FlatDarkLogo";
import { styles } from "@/public/js/styles";
import { invInf, lines, techs, terms } from "@/public/js/contractData";
import { FaFilePdf } from "react-icons/fa";
import ReactToPrint from "react-to-print";
import { useEffect, useRef, useState } from "react";

export default function DevContract() {
  const componentRef = useRef();
  const [minTime, setMinTime] = useState(0);
  const [maxTime, setMaxTime] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [state, setDefaultState] = useState({ lines, techs });
  const [hourRate, setHourRate] = useState(20);

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
    let averageMin = state.lines
      .filter((line) => line.status === "average")
      .map((line) => line.min)
      .concat(
        state.techs
          .filter((tech) => tech.status === "average")
          .map((tech) => tech.min * pageCount)
      );
    let averageMax = state.lines
      .filter((line) => line.status === "average")
      .map((line) => line.max)
      .concat(
        state.techs
          .filter((tech) => tech.status === "average")
          .map((tech) => tech.max * pageCount)
      );

    let minValues = state.lines
      .filter((line) => line.status === "min")
      .map((line) => line.min);
    let maxValues = state.lines
      .filter((line) => line.status === "max")
      .map((line) => line.max);
    let average = minValues.concat(maxValues);

    setMinTime(average.concat(averageMin).reduce((a, b) => a + b, 0));
    setMaxTime(average.concat(averageMax).reduce((a, b) => a + b, 0));
  }, [state, pageCount]);

  return (
    <>
      <div className="contractContainer" ref={componentRef}>
        <div className="contractHeaderContainer">
          <div className="contractHeader">
            <div>Development Contract</div>
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
            <Item key={i} item={line} type="select" i={i} setState={setState} />
          ))}
        />
        <div className="pageCount">
          <div>* Total number of pages</div>
          <input
            className="pageInput"
            value={pageCount}
            onChange={(e) =>
              e.target.value > 0 &&
              e.target.value < 41 &&
              setPageCount(e.target.value)
            }
            type="number"
            min={1}
            max={42}
          />
        </div>
        <Box
          title="Technologies"
          content={techs.map((tech, i) => (
            <Item
              key={i}
              item={tech}
              type="checkbox"
              i={i}
              setState={setState}
            />
          ))}
        />
        <Box
          title="Terms & Conditions"
          content={terms.map((term, i) => (
            <Item item={term} i={i} key={i} />
          ))}
        />
        <Box
          colored={true}
          content={
            <div>
              <div className="estimator">
                Estimated Time (f):{" "}
                {minTime + maxTime > 0
                  ? minTime +
                    " " +
                    (minTime !== maxTime ? ` - ${maxTime} ` : "")
                  : " ______ "}
                hours *{" "}
                <input
                  className="pageInput"
                  value={hourRate}
                  type="number"
                  min={12}
                  max={60}
                  onChange={(e) =>
                    e.target.value > 11 &&
                    e.target.value < 61 &&
                    setHourRate(e.target.value)
                  }
                />{" "}
                $/hour
              </div>
              <div className="estimator">
                Estimated cost:{" "}
                {minTime + maxTime > 0
                  ? minTime * hourRate +
                    " " +
                    (minTime !== maxTime ? ` - ${maxTime * hourRate} ` : "")
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

        <Box
          title="Extra Terms, Conditions & Project Phases"
          content={<div className="extraTerms"></div>}
        />
        <div className="signature">
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
          font-weight: bold;
        }
        .infoInput {
          flex: 1 1;
          border: 1px solid #bbb;
          border-radius: 0.3rem;
          font-size: 1rem;
          width: 8rem;
          padding-left: 0.3rem;
        }
        .infoLable {
          white-space: nowrap;
          color: ${styles.primaryColor};
        }
        .detail {
          font-size: 0.8rem;
          color: #777;
        }
        .pageCount {
          ${styles.flex};
          gap: 1rem;
        }
        .pageInput {
          border: 1px solid ${styles.secondaryColor};
          border-radius: 0.3rem;
          padding-left: 0.3rem;
          width: 2rem;
        }

        .extraTerms {
          min-height: 18rem;
        }
        .estimator {
          ${styles.flex};
          gap: 1rem;
          color: ${styles.primaryColor};
          ${styles.flex};
          ${styles.flexAligncenter};
          gap: 0.3rem;
          padding: 0.3rem 1rem;
          white-space: nowrap;
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
          font-size: 0.9rem;
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
const rangeValue = { 0: "", 1: "min", 2: "average", 3: "max", 4: "max" };
const Item = ({ item, i, type, setState }) => {
  return (
    <>
      <div className="Box-item">
        {type === "select" && <span>{i + 1}-</span>}{" "}
        <span className="Box-details">
          <span className="label">{item.label}</span>
          {type === "select" && (
            <div className="rangeContainer">
              {" "}
              {/* <select
                className="select"
                onChange={(e) => setState(i, "lines", e.target.value)}
              >
                <option value="">select</option>
                <option value="min">min</option>
                <option value="average">average</option>
                <option value="max">max</option>
              </select> */}
              <input
                type="range"
                min={0}
                max={4}
                defaultValue={0}
                className="rangeInput"
                onChange={(e) =>
                  setState(i, "lines", rangeValue[e.target.value])
                }
              />
              <div className="rangePointer">
                <div>|</div>
                <div>|</div>
                <div>|</div>
                <div>|</div>
                <div>|</div>
              </div>
            </div>
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
          ${styles.justifyBetween};
          ${styles.flexAligncenter}
        }
        .rangeContainer {
          position: relative;
          height: 1.4rem;
        }

        .rangeInput {
          cursor: pointer;
          width: 4rem;
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
      `}</style>
    </>
  );
};
