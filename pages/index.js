import { useState } from "react";
import TopBar from "@/components/molecule/TopBar";
import Menu from "../components/molecule/Menu";
import { styles } from "@/public/js/styles";
import Intro from "@/components/section/Intro";

export default function IndexPage() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="page">
        <div className="pageContent">
          <TopBar setMenu={setMenu} />
          <Intro />
        </div>
        <div>
          <Menu setMenu={setMenu} menu={menu} />
        </div>
      </div>
      <style jsx>{`
        .page {
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
          ${styles.flexAligncenter}
        }
        .pageContent {
          overflow: auto;
        }
        .btnContainer {
          padding: 1rem;
          ${styles.flexBothcenter}
        }
      `}</style>
    </>
  );
}
