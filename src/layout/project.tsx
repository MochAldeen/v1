"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function Project() {
  return (
    <section id="project">
      <HeroParallax products={products} />
    </section>
  )
  
}
export const products = [
 {
    title: "Porto",
    link: "https://mochalden-v1.vercel.app/eng",
    thumbnail: "/images/ilustrasi.png",
  },
  {
    title: "React Cek Khodam",
    link: "https://laroseflorist.netlify.app",Add commentMore actions
    thumbnail: "/images/ilustrasi.png",
  },
];
