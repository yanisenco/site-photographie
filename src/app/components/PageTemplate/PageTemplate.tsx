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
      <div className=" w-9/12 m-auto">{children}</div>
      <Footer />
    </>
  );
}
