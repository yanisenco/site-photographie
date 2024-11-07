"use client";
import { useEffect, useState } from "react";
import ContactBlock from "../components/ContactBlock/ContactBlock";
import PageLink from "../components/PageLink/PageLink";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import WelcomeInsert from "../components/WelcomeInsert/WelcomeInsert";
import CommentCarrousel from "../components/CommentCarrousel/CommentCarrousel";
import photo1 from "./image/girly.jpg";
import photo2 from "./image/paysage.jpg";
import AboutUsSection from "../components/AboutUsSection/AboutUsSection";

export default function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <PageTemplate>
      <div className="grid grid-rows-[20px_1fr_20px]  min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <WelcomeInsert />
          <SectionTitle idSection={"services"} title={"Services"} />
          <PageLink
            photo={photo1}
            title={"Portrait studio"}
            color={"bg-[#1e3d59]"}
          />
          <PageLink
            photo={photo2}
            title={"Portrait extérieur"}
            color={"bg-[#ff6e40]"}
          />
          <PageLink
            photo={photo2}
            title={"Portrait extérieur"}
            color={"bg-[#ffc13b]"}
          />
          <SectionTitle idSection={"temoignages"} title={"Témoignages"} />
          <CommentCarrousel />
          <SectionTitle
            idSection={"a-propos-de-nous"}
            title={"À propos de nous"}
          />
          <AboutUsSection />

          {/* <AppleEffect /> */}

          <ContactBlock />
        </main>
      </div>
    </PageTemplate>
  );
}
