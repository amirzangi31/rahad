import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  
  return (
    <div className=" mx-auto h-screen overflow-x-hidden">
      <main className="md:w-[calc(100%-260px)] md:mr-auto px-1">
        <Header />
        <div className="content  " style={{ direction: "ltr" }}>
          <div className="px-3"  style={{ direction: "rtl" }}>
            
            {children}
            </div>
        </div>
      </main>
      <Sidebar />
    </div>
  );
};

export default Layout;
