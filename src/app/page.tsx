"use client";
import { useState } from "react";
import { AdminDashboard } from "@/components/Dashboard/Admin";
import Guest from "@/Layout/Guest";
import Authenticated from "@/Layout/Authenticated";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  return (
    <div className="no-scrollbar">
      {isAuthenticated ? (
        <Authenticated>
          <AdminDashboard />
        </Authenticated>
      ) : (
        <Guest setIsAuthenticated={setIsAuthenticated} />
      )}
    </div>
  );
}
