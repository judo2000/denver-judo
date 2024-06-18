import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const location = window.location.pathname;
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  return (
    <>
      <div
        className={
          sidebarIsOpen
            ? "site-container active-cont d-flex flex-column"
            : "site-container d-flex flex-column"
        }
      >
        <ToastContainer position="top-center" limit={1} />

        <header>
          <Header
            sidebarIsOpen={sidebarIsOpen}
            setSideBarIsOpen={setSidebarIsOpen}
          />
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <h1>Footer</h1>
        </footer>
      </div>
    </>
  );
}

export default App;
