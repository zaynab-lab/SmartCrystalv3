import { useState } from "react";
import TopBar from "@/components/molecule/TopBar";
import Menu from "@/components/molecule/Menu";
import HomeIntro from "@/components/section/HomeIntro";
import Technology from "@/components/section/Technology";
import { styles } from "@/public/js/styles";

export default function IndexPage() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="page">
        <div className="pageContent">
          <TopBar setMenu={setMenu} name="" />
          <HomeIntro />
          <Technology />
        </div>
        <div>
          <Menu setMenu={setMenu} menu={menu} name="" />
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
