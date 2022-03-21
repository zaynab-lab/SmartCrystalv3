import { styles } from "@/public/js/styles";

export default function Simplebtn({ content, link, margin }) {
  return (
    <>
      <a href={link}>
        <div className="sbtnContainer">
          <div className="sbtn">{content}</div>
        </div>
      </a>
      <style jsx>{`
        .sbtnContainer {
          padding: 1rem;
        }
        .sbtn {
          ${margin && "margin: auto;"};
          width: -webkit-fit-content;
          width: -moz-fit-content;
          width: fit-content;
          font-weight: bold;
          padding: 0.4rem 1rem;
          border-radius: 10rem;
          background: ${styles.secondaryColor};
          color: white;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
