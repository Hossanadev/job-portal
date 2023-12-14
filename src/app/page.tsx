"use client";
import HomePage from "@/pages/Home/Index";
import Authenticated from "@/pages/Layout/Authenticated";
import Guest from "@/pages/Layout/Guest";
import { useState } from "react";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  return (
    <div className="">
      {isAuthenticated ? (
        <Authenticated>
          <HomePage />
        </Authenticated>
      ) : (
        <Guest setIsAuthenticated={setIsAuthenticated} />
      )}
    </div>
  );
}
