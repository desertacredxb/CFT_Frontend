import React, { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { articleHref, loadInsights, type Insight } from "../data/publicInsights";
import "../pages/HomeInsights.css";
import axios from "axios";


const baseURL = import.meta.env.VITE_API_BASE_URL;

type Offer = {
  _id: string;
  title: string;
  subtitle?: string;
  bannerImage?: string;
  ctaLabel?: string;
  ctaLink?: string;
  startDate?: string;
  endDate?: string;
  isActive: boolean;
};

const HeroSection: React.FC = () => {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [latest, setLatest] = useState<Insight | null>(null);
  useEffect(() => {
    const controller = new AbortController();
    loadInsights(controller.signal).then(posts => setLatest(posts[0] ?? null)).catch(() => {});
    return () => controller.abort();
  }, []);

  useEffect(() => {
    const fetchOffer = async () => {
      try {
        const res = await axios.get<Offer[]>(`${baseURL}/api/offer/view`);
        if (res.data && res.data.length > 0) {
          setOffers(res.data);
        }
      } catch (err) {
        console.error("Failed to fetch offers", err);
      }
    };

    fetchOffer();
  }, []);

  useEffect(() => {
    if (offers.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % offers.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [offers]);

  return (
    <section className="mt-intro" aria-labelledby="market-heading">
      <div className="mt-intro-inner">
        <div className="mt-intro-grid">
          <div className="mt-intro-copy">
            <h1 id="market-heading">Futures, options <span>&amp; commodities.</span></h1>
            <p>Your Master Trader dashboard, NSE and MCX market guides, and the latest articles from our Insights desk.</p>
            <div className="mt-intro-actions">
              <a href="https://v2.mastertrader.co.in/client/">Client login <ArrowUpRight size={18} /></a>
              <a href="/blogs">Explore insights <ArrowRight size={17} /></a>
            </div>
          </div>
          <a className="mt-feature" href={latest ? articleHref(latest) : "/knowledge/future-options"}>
            {latest?.coverImage && <img key={latest.coverImage} src={latest.coverImage} alt="" onError={event => { event.currentTarget.hidden = true; }} />}
            <div className="mt-feature-body">
              <div className="mt-feature-meta">{latest ? "Latest insight" : "Market guide"}
                {latest && Number.isFinite(Date.parse(latest.datePublished)) && <time dateTime={latest.datePublished}>
                  {new Date(latest.datePublished).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "Asia/Kolkata" })}
                </time>}
              </div>
              <h2>{latest?.title || "Understanding futures and options"}</h2>
              <span className="mt-read">Read {latest ? "article" : "guide"} <ArrowRight size={17} /></span>
            </div>
          </a>
        </div>
        <nav className="mt-guide-row" aria-label="Market guides">
          <span>Market guides</span>
          <a href="/markets/nse-f-o">NSE futures &amp; options <ArrowUpRight size={16} /></a>
          <a href="/markets/mcx">MCX commodities <ArrowUpRight size={16} /></a>
          <a href="/knowledge/margin-trading">Understanding margin <ArrowUpRight size={16} /></a>
        </nav>
        {offers.length > 0 && (
          <div className=" backdrop-blur-md bg-transparent border border-white/30 rounded-2xl shadow-2xl overflow-hidden w-full max-w-sm animate-fade-in transition-all duration-500">
            <img
              src={offers[currentIndex].bannerImage}
              alt={offers[currentIndex].title}
              className="w-full object-cover max-h-64 rounded-t-2xl"
            />
            <div className="p-5 text-center text-white">
              <h3 className="text-lg font-bold">
                {offers[currentIndex].title}
              </h3>
              {offers[currentIndex].subtitle && (
                <p className="text-sm text-gray-100/80 mt-1">
                  {offers[currentIndex].subtitle}
                </p>
              )}
              {offers[currentIndex].ctaLabel &&
                offers[currentIndex].ctaLink && (
                  <a
                    href={offers[currentIndex].ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 px-4 py-2 bg-[var(--primary-color)] text-black rounded-full font-medium hover:bg-white hover:text-black transition"
                  >
                    {offers[currentIndex].ctaLabel}
                  </a>
                )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
