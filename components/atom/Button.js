import { styles } from "@/public/js/styles";

export default function Button({ content, logo }) {
  return (
    <>
      <div className="btn">
        <div className="btnLogo">{logo}</div>
        <div>{content}</div>
      </div>
      <style jsx>{`
        .btn {
          padding: 0.6rem 1.3rem;
          border: 3px solid ${styles.primaryColor};
          border-radius: 20rem;
          ${styles.flex};
          ${styles.flexAligncenter};
          gap: 1.6rem;
          font-size: 1.2rem;
          font-weight: bold;
          min-width: 15rem;
          max-width: 15rem;
          background: white;
          cursor: pointer;
        }
        .btnLogo {
          min-width: 3.2rem;
          width: 3.2rem;
          ${styles.flex};
        }
      `}</style>
    </>
  );
}
