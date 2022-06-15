import CostEstimatorBlock from "../molecule/CostEstimatorBlock";

const ests = ["design", "marketing", "montage", "development"];
export default function CostEst() {
  return (
    <>
      {ests.map((est, i) => (
        <div key={i}>
          <CostEstimatorBlock block={est} />
        </div>
      ))}
    </>
  );
}
