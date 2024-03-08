import TopBar from "@/components/shared/TopBar";
import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="flex flex-col w-full gap-20">
      <TopBar />
      <section className="h-[280px] flex flex-col bg-gray-100 rounded">
        <Outlet />
      </section>
    </div>
  );
};

export default RootLayout;
