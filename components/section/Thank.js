import { styles } from "@/public/js/styles";

export default function Thank({ text }) {
  return (
    <>
      <div className="thankSection">
        <div className="thank">{text}</div>
      </div>
      <style jsx>{`
        .thankSection {
          ${styles.brandGradient};
        }
        .thank {
          padding: 1rem;
          color: white;
          max-width: 70rem;
          margin: auto;
          font-size: calc(1rem + 0.3vw);
        }
      `}</style>
    </>
  );
}
