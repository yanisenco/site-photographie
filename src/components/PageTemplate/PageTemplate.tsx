import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import { ReactNode } from "react";

interface PageTemplateProps {
  children: ReactNode;
}

export default function PageTemplate({ children }: PageTemplateProps) {
  return (
    <>
      <Header />
      <div className="w-11/12 sm:w-9/12 m-auto min-h-[80vh]">
      <Breadcrumb />
      {children}
      </div>
      <Footer />
    </>
  );
}
