import { styles } from "@/public/js/styles";

export default function Box({ title, content, borderColor }) {
  return (
    <>
      <div className="box">
        <span className="boxTitle">{title}</span>
        <div className="boxBorder">
          <div className="boxContent">{content}</div>
        </div>
      </div>
      <style jsx>{`
        .box {
          position: relative;
          padding-top: 1rem;
        }
        .boxTitle {
          position: absolute;
          top: 0;
          left: 0.8rem;
          background: white;
          font-size: 1.2rem;
          font-weight: bold;
        }
        .boxBorder {
          background: ${borderColor || styles.borderGradient};
          padding: 0.08rem;
          border-radius: 0.4rem;
        }

        .boxContent {
          border-radius: 0.3rem;
          padding-top: 0.4rem;
          background: white;
        }
      `}</style>
    </>
  );
}
