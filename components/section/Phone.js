import Three from "@/components/molecule/Three";
import { styles } from "@/public/js/styles";
import useOnScreen from "@/public/js/useOnScreen";
export default function Phone() {
  const [setPhoneRef, visiblePhone] = useOnScreen({ threshold: 0.2 });

  return (
    <>
      <div className="phoneSection" ref={setPhoneRef}>
        <div className="phoneTxt">Technology starts with us</div>
        <div className="phoneContainer">{visiblePhone && <Three />}</div>
      </div>
      <style jsx>{`
        .phoneSection {
          padding: 1rem 0rem;
          overflow: hidden;
        }

        .phoneTxt {
          font-size: 2rem;
          font-weight: bold;
          ${styles.brandGradient};
          text-align: center;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .phoneContainer {
          min-height: 42rem;
        }
      `}</style>
    </>
  );
}
