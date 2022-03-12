import { styles } from "@/public/js/styles";

export default function Madeit() {
  return (
    <>
      <div className="madeSection">
        <div className="made">
          <div>You made it</div>
          <div>You entered the power of our process</div>
        </div>
      </div>
      <style jsx>{`
        .madeSection {
          ${styles.brandGradient};
        }
        .made {
          padding: 1rem;
          max-width: 70rem;
          margin: auto;
        }
        .made div {
          color: white;
          font-size: calc(1rem + 1vw);
        }
      `}</style>
    </>
  );
}
