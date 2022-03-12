import "@fontsource/nunito";

export default function Layout({ children }) {
  return (
    <>
      {children}

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          text-decoration: unset;
          outline: none;
          -webkit-tap-highlight-color: transparent;
          font-family: nunito;
          font-weight: regular;
          -ms-scroll-chaining: none;
          overscroll-behavior: contain;
          scroll-behavior: smooth;
          -ms-overflow-style: none;
          scrollbar-width: none;
          color: #444;
        }

        *::-webkit-scrollbar {
          display: none;
        }

        body {
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          transition: all 0.5s ease-out;
        }
      `}</style>
    </>
  );
}
