import Link from "next/link";
import { styles } from "@/public/js/styles";

import { FaFileInvoiceDollar } from "react-icons/fa";

export default function () {
  return (
    <>
      <Link href="/Contract">
        <div className="project">
          <FaFileInvoiceDollar /> Project Cost Estimation
        </div>
      </Link>
      <style jsx>{`
        .project {
          width: fit-content;
          margin: auto;
          border: 2px solid ${styles.primaryColor};
          color: ${styles.primaryColor};
          padding: 0.6rem 1rem;
          border-radius: 0.3rem;
          display: flex;
          gap: 1rem;
          cursor: pointer;
          margin-bottom: 2rem;
          margin-top: 1rem;
        }
      `}</style>
    </>
  );
}
