export default function Layout({ children }) {
  return (
    <>
      <>{children}</>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          text-decoration: unset;
          outline: none;
          -webkit-tap-highlight-color: transparent;
          font-family: Inter;
          font-weight: 400;
          -ms-scroll-chaining: none;
          overscroll-behavior: contain;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        *::-webkit-scrollbar {
          display: none;
        }

        body {
          font-size: 1.6rem;
          margin: 0;
          font-family: "Roboto";
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          transition: all 0.5s ease-out;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}
