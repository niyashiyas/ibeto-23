import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Home1 from "@/components/Home";
import Getstarted from "@/components/Getstarted";
import Navbar from "@/components/Navbar";
import Aos from "aos";
import { useEffect } from "react";
import Roadmap from "@/components/Roadmap";
import Timeline from "@/components/Timeline";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {

    useEffect(() => {
      Aos.init({
        offset: 50,
      });
    }, []);
      
  return (
    <>
      <title>Ibeto</title>
      <Navbar />
      <div className="fixed">
        <Home1 />
      </div>
      <div id="start"  className="relative top-[85vh]">
        <Getstarted />
        <Roadmap />
        <Timeline />
        <Footer />
      </div>
    </>
  );
}

