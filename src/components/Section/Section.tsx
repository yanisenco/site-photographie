import React, { ReactNode } from "react";
import "./section.css";

interface SectionProps {
  children: ReactNode;
}

export default function Section({ children }: SectionProps) {
  return <section className="element">{children}</section>;
}
