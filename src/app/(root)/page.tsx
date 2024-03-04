import { UserButton } from "@clerk/nextjs";
import React from "react";

export default function Home() {
  return (
    <div>
      <p>home</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
