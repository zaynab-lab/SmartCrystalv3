import { useState } from "react";
import { styles } from "@/public/js/styles";
import TopBar from "@/components/molecule/TopBar";
import Menu from "@/components/molecule/Menu";
import Header from "@/components/section/Header";
import Technology from "@/components/section/Technology";
import Phone from "@/components/section/Phone";
import Footer from "@/components/section/Footer";

export default function IndexPage() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="page">
        <div className="pageContent">
          <TopBar setMenu={setMenu} name="" />
          <Header />
          <Technology />
          <Phone />
          <Footer />
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
