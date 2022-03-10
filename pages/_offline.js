import { FaWifi } from "react-icons/fa";

export default function () {
  return (
    <>
      <div className="offline">
        <div className="icon">
          <FaWifi />
        </div>
        <div>You are offline...</div>
      </div>
      <style jsx>{`
        .offline {
          padding: 6rem 2rem;
          text-align: center;
          height: 100vh;
          font-size: 2.6rem;
        }
        .icon {
          font-size: 5rem;
        }
      `}</style>
    </>
  );
}
