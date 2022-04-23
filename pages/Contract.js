import PageLayout from "@/components/PageLayout";
import Header from "@/components/section/Header";
import Thank from "@/components/section/Thank";
import { styles } from "@/public/js/styles";
import DevContract from "@/components/molecule/DevContract";
import { useState } from "react";

export default function Contract() {
  const [contractType, setContractType] = useState("o1");
  return (
    <>
      <PageLayout>
        <Header
          title={"Investment Contract"}
          titleDes="This page is to estimate your project's costs"
        />
        <Thank
          text={
            <div>
              <div>Your ideas are our values</div>
              <div>You should talk to our expert to get the help</div>
            </div>
          }
        />
        <div className="contractContainer">
          <div className="contractType">
            <div> Contract type:</div>
            <select
              className="typeSelect"
              onChange={(e) => setContractType(e.target.value)}
            >
              <option value="o1">Development Contract</option>
              <option value="o2">On going offer</option>
              <option value="o3">Marketing Contract</option>
              <option value="o4">Design Contract</option>
              <option value="o5">Montage Contract</option>
            </select>
          </div>

          {contractType === "o1" && <DevContract />}
        </div>
      </PageLayout>
      <style jsx>{`
        .contractContainer {
          width: 100%;
          max-width: 70rem;
          padding: 1rem;
          margin: auto;
        }
        .contractType {
          ${styles.flex};
          ${styles.justifyBetween};
          ${styles.flexAligncenter};
          padding: 1rem 0rem;
        }
        .typeSelect {
          border-radius: 0.3rem;
          background: white;
          padding: 0.2rem 0.3rem;
          width: 8.4rem;
        }
      `}</style>
    </>
  );
}
