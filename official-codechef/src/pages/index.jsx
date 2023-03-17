import MenuBar from "../components/Home/MenuBar";
import LeadershipTeam from "@/data/leadershipTeam";
import { Poppins } from "next/font/google";
import Depart_Lead from "../components/Home/Depart_Lead"
import ContactUs from "../components/Home/ContactUs";
import Events from "@/components/Home/Events";
import HeroSection from "@/components/Home/HeroSection";

const inter = Poppins({ subsets: ["latin"],
weight: '400' });

export default function Home() {
  return (
    <main className={inter.className}>
      {/* <h1 className={inter.className}>Home Page</h1> */}
      <HeroSection/>
      <Depart_Lead/>
      <Events/>
      <ContactUs/>
      
    </main>
  );
}
