"use client";
import React from "react";
import { Header } from "@/components/Header";
import { ChildrenProps } from "../../utilities/types";
import { Sidebar } from "@/components/Sidebar";

const Authenticated: React.FC<ChildrenProps> = (props) => {
  const { children } = props;
  return (
    <div>
      <Header />
      <div className="flex min-h-screen">
        <aside className="aside sidebar w-[15%] max-md:hidden bg-white block px-5 pt-28">
          <Sidebar />
        </aside>
        <main className="main layout w-full max-sm:px-3 px-8 pt-28">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Authenticated;
