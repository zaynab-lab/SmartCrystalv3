export default function Button() {
  return (
    <>
      <div className="btn">Join Us Now</div>

      <style jsx>{`
        .btn {
          font-size: 1.2rem;
          border: 3px solid white;
          background: #008cc1;
          color: white;
          border-radius: 0.6rem;
          display: inline;
          padding: 0.6rem 1rem;
          cursor: pointer;
        }
        .btn:hover {
          background: #219cd1;
        }
      `}</style>
    </>
  );
}
