import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";

export default function Home() {
  return (
   <div className="flex flex-col">
    {/* header */}
    <Header />
    <Hero />
    {/* hero section */}
   </div>
  );
}
