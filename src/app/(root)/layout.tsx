import Sidebar from "@/components/shared/Sidebar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="root">
      <Sidebar />
      
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
}
