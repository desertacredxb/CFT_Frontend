import { publicPageMetadata } from "../data/publicPageMetadata";
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
import TestimonialCarousel from "../components/TestimonialCarousel";
import Trusted from "../components/Trusted";
import WhyChoose from "../components/WhyChooseUs";
import WhyTrade from "../components/WhyTrade";

export const Landing = () => {
  return (
    <div>
      <Helmet>
        <title>{publicPageMetadata[""].title}</title>

        <meta name="title" content={publicPageMetadata[""].title} />

        <meta
          name="description"
          content={publicPageMetadata[""].description}
        />

        <meta
          name="keywords"
          content="online trading platform, online trading, zero commission trading platform, high leverage trading, trading platform for beginners, forex trading platform, Master Trader"
        />

        <link
          rel="canonical"
          href="https://www.mastertrader.co.in/"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={publicPageMetadata[""].title}
        />
        <meta
          property="og:description"
          content={publicPageMetadata[""].description}
        />
        <meta
          property="og:url"
          content="https://www.mastertrader.co.in/"
        />
        <meta
          property="og:site_name"
          content="Master Trader"
        />
        <meta
          property="og:image"
          content="https://www.mastertrader.co.in/MT-logo.png"
        />
        <meta
          property="og:image:alt"
          content={publicPageMetadata[""].title}
        />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={publicPageMetadata[""].title}
        />
        <meta
          name="twitter:description"
          content={publicPageMetadata[""].description}
        />
        <meta
          name="twitter:image"
          content="https://www.mastertrader.co.in/MT-logo.png"
        />
      </Helmet>


      <Navbar />
      <HeroSection />
      <WhyChoose />
      <Carousel />
      <WhyTrade />

      <Trusted />
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
