import { useState } from "react";
import Menu from "./molecule/Menu";
import TopBar from "./molecule/TopBar";

export default function PageLayout({ children, pageName }) {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="page">
        <TopBar setMenu={setMenu} pageName={pageName} />
        {children}
      </div>

      <div>
        <Menu setMenu={setMenu} menu={menu} pageName={pageName} />
      </div>
    </>
  );
}
