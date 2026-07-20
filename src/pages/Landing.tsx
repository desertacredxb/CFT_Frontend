import { Helmet } from "react-helmet-async";
import ComparisonSection from "../components/Comparision";
import DabbaMarkets from "../components/DabbaMarkets";
import DownloadSection from "../components/DownloadSection";
import FAQ from "../components/Faq";
import Footer from "../components/Footer";
import HeroSection from "../components/Hero";
import HowItWorks from "../components/HowITWork";
import Carousel from "../components/ImageCarousel";
import Navbar from "../components/Nav";
// import Popup from "../components/PopUp";
// import RegulatoryDisclaimer from "../components/RegulatoryDisclaimer";
import ScrollingIcons from "../components/ScrollingIcons";
import StatsSection from "../components/Stats";
import TestimonialCarousel from "../components/TestimonialCarousel";
import Trusted from "../components/Trusted";
import WhyChoose from "../components/WhyChooseUs";
import WhyTrade from "../components/WhyTrade";

export const Landing = () => {
  return (
    <div>
      <Helmet>
        <title>Master Trader – Online Trading Platform</title>

        <meta name="title" content="Master Trader – Online Trading Platform" />

        <meta
          name="description"
          content="Trade Forex, Crypto, NSE, MCX & more on Master Trader, India's trusted online trading platform. Zero commission, 500x leverage, fast withdrawals. Start now."
        />

        <meta
          name="keywords"
          content="online trading platform, online trading, zero commission trading platform, high leverage trading, trading platform for beginners, forex trading platform, Master Trader"
        />

        <link rel="canonical" href="https://www.mastertrader.co.in/" />
      </Helmet>

      
      <Navbar />
      <HeroSection />
      <WhyChoose />
      <Carousel />
      <WhyTrade />

      <Trusted />
      <StatsSection />
      <HowItWorks />
      <ComparisonSection />

      <DownloadSection />
      <DabbaMarkets />
      <TestimonialCarousel />
      <ScrollingIcons />
      <FAQ />
      <Footer />
      {/* <RegulatoryDisclaimer /> */}
      {/* <Popup /> */}
    </div>
  );
};
