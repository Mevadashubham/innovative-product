import React from "react";
import { UserNavbar } from "./UserNavbar";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <>
      <UserNavbar />
      <main
        className="app-main"
        style={{
          margin: 0,
          padding: 0,
          minHeight: "100vh",
          paddingTop: "55px",
        }}
      >
        <Outlet />
      </main>
    </>
  );
};

export default PublicLayout;
