import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Bar from "../Bar/Bar";

const Layout = ({ children }) => {
  return (
    <>
      <Bar />
      <Suspense fallback={null}>
        {children}
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;