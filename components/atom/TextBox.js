import { styles } from "@/public/js/styles";

export default function TextBox({ text }) {
  return (
    <>
      <div className="textbox">
        <div className="textboxContent">{text}</div>
      </div>
      <style jsx>{`
        .textbox {
          ${styles.borderGradient};
          padding: 0.2rem;
          border-radius: 1rem;
        }
        .textboxContent {
          background: white;
          padding: 1rem;
          text-align: justify;
          text-justify: inter-character;
          border-radius: 0.75rem;
          color: #444;
        }
      `}</style>
    </>
  );
}
