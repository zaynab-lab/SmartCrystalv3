import { useState } from "react";
import TopBar from "@/components/molecule/TopBar";
import Menu from "@/components/molecule/Menu";
import { styles } from "@/public/js/styles";
import Header from "@/components/section/Header";

export default function Services() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="page">
        <div className="pageContent">
          <TopBar setMenu={setMenu} name="Services" />
          <Header />
        </div>
        <div>
          <Menu setMenu={setMenu} menu={menu} name="Services" />
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
