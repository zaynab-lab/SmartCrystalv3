import PageLayout from "@/components/PageLayout";
import Header from "@/components/section/Header";
import Thank from "@/components/section/Thank";
import { styles } from "@/public/js/styles";
import GeneralContract from "@/components/molecule/GeneralContract";

export default function Contract() {
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
            <select className="typeSelect">
              <option>General Contract</option>
              <option disabled>On Going Offer</option>
              <option disabled>Development Contract</option>
              <option disabled>Marketing Contract</option>
            </select>
          </div>

          <GeneralContract />
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
