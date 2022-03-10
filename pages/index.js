import { useState } from "react";
import TopBar from "../components/TopBar";
import Menu from "../components/Menu";
import { styles } from "../public/js/styles";
import Introduction from "../components/Introduction";
import Heighlight from "../components/Heighlight";
import Services from "../components/Services";
import NetworkMap from "../components/NetworkMap";
import Process from "../components/Process";
import ContactUs from "../components/ContactUs";
import Button from "../components/Button";

export default function IndexPage() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="page">
        <div className="pageContent">
          <TopBar setMenu={setMenu} />
          <Introduction />
          <Heighlight />
          <Services />
          <NetworkMap />
          <Process />
          <div className="btnContainer">
            <Button />
          </div>
          <ContactUs />
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
