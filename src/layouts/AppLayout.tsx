import type { ReactNode } from "react";
import Topbar from "../components/Topbar";

type props = {
  children: ReactNode;
};

export default function AppLayout({ children }: props) {
  return (
    <>
      <Topbar />
      {children}
    </>
  );
}
