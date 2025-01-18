
import HomePageSection from "@/components/home-page-section";
import Navbar from "@/components/navbar";
import { Container } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
  <>
   <Navbar/>
   <div className="flex justify-center items-center w-full h-full mt-2 md:p-0 p-3">

   <HomePageSection/>
   </div>
  </>
  );
}
