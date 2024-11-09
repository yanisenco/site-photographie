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
      <div className="pt-20 w-11/12 sm:w-9/12 m-auto">{children}</div>
      <Footer />
    </>
  );
}
