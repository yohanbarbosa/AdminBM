import type { ReactNode } from "react";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";

type props = {
  children: ReactNode;
};

export default function AppLayout({ children }: props) {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Topbar />
        <div className="flex flex-1 min-h-0">
          <Sidebar />
          <main className=" flex-1 overflow-auto p-6">{children}</main>
        </div>
      </div>
    </>
  );
}
