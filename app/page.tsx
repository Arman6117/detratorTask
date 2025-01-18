
import HomePageSection from "@/components/home-page-section";
import MessageBox from "@/components/message-box";
import Navbar from "@/components/navbar";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Navbar />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <HomePageSection />
        <MessageBox />
      </Box>
    </>
  );
}
