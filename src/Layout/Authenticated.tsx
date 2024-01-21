"use client";
import React from "react";
import { Header } from "@/components/Header";
import { ChildrenProps } from "../../utilities/types";
import { Sidebar } from "@/components/Sidebar";
import {Facebook, Instagram, Linkedin, Twitter, Youtube} from "react-feather";
import Link from "next/link";

const Authenticated: React.FC<ChildrenProps> = (props) => {
  const { children } = props;
    const [showMobileSidebar, setShowMobileSidebar] = React.useState(false);
    return (
    <div>
      <Header setShowMobileSidebar={setShowMobileSidebar} showMobileSidebar={showMobileSidebar} />
      <div className="flex min-h-screen">
          <aside className="aside w-[15%] max-lg:hidden bg-white block px-5 pt-28">
              <Sidebar/>
              <div className={"absolute text-xs bottom-16 space-y-4"}>
                  <p>Designed and developed by <a className={"text-green-700"}
                                                  href="https://linkedin.com/in/hossanadev">Hossanadev</a> ©
                      2024</p>
                  <div className="flex justify-start items-center mb-5 space-x-3">
                      <Link href={"https://www.linkedin.com/in/hossanadev"}><Linkedin size={16}
                                                                                      color={"#0077b5"}/></Link>
                      <Link href={"https://www.facebook.com/hossanadev"}><Facebook size={16} color={"#316ff6"}/></Link>
                      <Link href={"https://twitter.com/hossanadev"}><Twitter size={16} color={"#1da1f2"}/></Link>
                      <Link href={"https://www.youtube.com/@hossanadev"}><Youtube size={16} color={"#ff0000"}/></Link>
                      <Link href={"https://www.instagram.com/hossanadev"}><Instagram size={16}
                                                                                     color={"#e4405f"}/></Link>
                  </div>
              </div>
          </aside>
          {/*  Mobile Sidebar */}
          <aside
              className={`mobile-aside relative ${showMobileSidebar ? "translate-x-0" : "translate-x-[-100%]"} max-sm:w-[55%] w-[35%] lg:hidden bg-white block px-5 pt-28`}>
              <Sidebar/>

              <div className={"absolute text-xs bottom-24 space-y-4"}>
                  <p>Designed and developed by <a className={"text-green-700"}
                                                  href="https://linkedin.com/in/hossanadev">Hossanadev</a> ©
                      2024</p>
                  <div className="flex justify-start items-center mb-5 space-x-3">
                      <Link href={"https://www.linkedin.com/in/hossanadev"}><Linkedin size={16}
                                                                                      color={"#0077b5"}/></Link>
                      <Link href={"https://www.facebook.com/hossanadev"}><Facebook size={16} color={"#316ff6"}/></Link>
                      <Link href={"https://twitter.com/hossanadev"}><Twitter size={16} color={"#1da1f2"}/></Link>
                      <Link href={"https://www.youtube.com/@hossanadev"}><Youtube size={16} color={"#ff0000"}/></Link>
                      <Link href={"https://www.instagram.com/hossanadev"}><Instagram size={16} color={"#e4405f"}/></Link>
                  </div>
              </div>
          </aside>
          <main className="main layout w-full max-sm:px-3 px-8 pt-28">
              {children}
          </main>
      </div>
    </div>
    );
};

export default Authenticated;
