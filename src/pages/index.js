// src/pages/index.js
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar.jsx";
import MainLayout from "../layouts/MainLayout.js";
import HeroDecor from "../components/HeroDecor.jsx";
import AbstractShapes from "../components/AbstractShapes.jsx";
import StatsSection from "../components/StatsSection.jsx";
import Footer from "../components/Footer.jsx";
import TestimonialsSection from "../components/TestimonialsSection.jsx";


export default function Home() {
  const featureRefs = useRef([]);

  useEffect(() => {
    // Staggered fade-in for feature cards
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = `fadeInUp 0.7s ease forwards ${index * 0.15}s`;
          }
        });
      },
      { threshold: 0.2 }
    );

    featureRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      featureRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      <Head>
        <title>MyPayLite — Premium Retail Fintech</title>
        <meta
          name="description"
          content="MyPayLite — retailer fintech platform for AEPS, DMT, bill payments and recharges."
        />
      </Head>

      <Navbar />

      <MainLayout>
        {/* HERO SECTION */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-50 to-indigo-50"></div>

          <HeroDecor />
          <AbstractShapes />

          <div className="relative max-w-6xl mx-auto px-6 py-28 lg:py-36">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="max-w-2xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
                  Built for retailers. Designed for growth.
                </h1>

                <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                  Offer AEPS, DMT, recharges and bill payments — easily onboard retailers,
                  scale transactions, and grow revenue.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg shadow-lg hover:scale-105 transition-transform animate-floaty-slow"
                    href="#"
                  >
                    Get started
                  </a>

                  <a
                    className="inline-flex items-center px-8 py-3 border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-50 transition animate-floaty-slow"
                    href="#"
                  >
                    Contact sales
                  </a>
                </div>

                {/* Trusted logos */}
                <div className="mt-10">
                  <p className="text-slate-500 font-medium mb-4">
                    Trusted by leading brands
                  </p>
                  <div className="flex flex-wrap items-center gap-8">
                    <Image src="/images/paytm-icon.svg" alt="Paytm" width={100} height={32} />
                    <Image src="/images/google.svg" alt="Google" width={100} height={32} />
                    <Image src="/images/phonepe-icon.svg" alt="PhonePe" width={100} height={32} />
                  </div>
                </div>
              </div>

              {/* Right Side Card */}
              <div className="relative">
                <div className="rounded-3xl bg-white shadow-2xl p-6 border border-slate-100 hover:scale-[1.02] transition-transform">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-500">Retailer Tiers</div>
                      <div className="mt-1 font-semibold text-slate-900">Gold Partners</div>
                    </div>
                    <div className="text-2xl font-bold text-indigo-600">₹1.2L+</div>
                  </div>

                  <div className="mt-4">
                    <div className="text-sm text-slate-500">Monthly transactions</div>

                    <div className="mt-3 grid grid-cols-3 gap-3">
                      <div className="p-3 bg-slate-50 rounded">
                        <div className="text-xs text-slate-500">AEPS</div>
                        <div className="font-medium">45k</div>
                      </div>
                      <div className="p-3 bg-slate-50 rounded">
                        <div className="text-xs text-slate-500">DMT</div>
                        <div className="font-medium">32k</div>
                      </div>
                      <div className="p-3 bg-slate-50 rounded">
                        <div className="text-xs text-slate-500">Recharges</div>
                        <div className="font-medium">88k</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 text-sm text-slate-500">
                    Start earning today — simple onboarding & minimal charges.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <StatsSection />

        {/* STEP 4 — GLASSMORPHIC FEATURES SECTION */}
        <section className="relative max-w-6xl mx-auto px-6 py-20">
          <h3 className="text-3xl font-bold text-slate-900 text-center">
            What We Offer
          </h3>

          <p className="text-slate-500 text-center mt-2">
            Seamless digital financial services for every retailer
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* FEATURE CARDS */}
            {[
              {
                title: "AEPS",
                desc: "Aadhaar-based cash withdrawal & balance check.",
                icon: "💳",
              },
              {
                title: "DMT",
                desc: "Fast & secure money transfer to any bank.",
                icon: "⚡",
              },
              {
                title: "Recharges",
                desc: "Mobile & DTH recharges with instant success.",
                icon: "📱",
              },
              {
                title: "Bill Payments",
                desc: "BBPS bill payments across all categories.",
                icon: "🧾",
              },
            ].map((item, index) => (
              <div
                key={index}
                ref={(el) => (featureRefs.current[index] = el)}
                className="
                  backdrop-blur-xl bg-white/20 
                  border border-white/30 
                  shadow-xl rounded-2xl p-6 
                  hover:scale-105 transition-all duration-300
                  hover:bg-white/30 cursor-pointer opacity-0
                "
              >
                <div className="text-4xl">{item.icon}</div>

                <h4 className="mt-4 text-xl font-semibold text-slate-900">
                  {item.title}
                </h4>

                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <TestimonialsSection />
        <Footer />
      </MainLayout>
    </>
  );
}
