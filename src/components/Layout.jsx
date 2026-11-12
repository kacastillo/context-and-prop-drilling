import { Outlet } from "react-router";

import Header from "./Header.jsx";

function Layout() {
  return (
    <div className="app">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
