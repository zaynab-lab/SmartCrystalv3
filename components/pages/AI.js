import Robot from "@/public/img/text/Robot";
import WeHelp from "../molecule/WeHelp";

export default function AI() {
  return (
    <>
      <div className="sysIllustrator">
        <Robot />
      </div>
      <WeHelp
        list={[
          "Recommandation System",
          "Object Detection",
          "Process Automation",
          "Data collection"
        ]}
      />

      <style jsx>{`
        .sysIllustrator {
          padding: 0rem 2rem;
          padding-top: 1rem;
          max-width: 40rem;
          margin: auto;
        }
      `}</style>
    </>
  );
}
