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
      <div className="max-w-7xl mx-auto px-6 lg:px-12 min-h-[70vh]">
        <Breadcrumb />
        {children}
      </div>
      <Footer />
    </>
  );
}
