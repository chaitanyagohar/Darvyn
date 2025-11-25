"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronRight, PhoneCall, MapPin, Play, Star } from "lucide-react";

// ---------- DATA ----------

// VIDEO TESTIMONIALS – use real video files from /public
const videoTestimonials = [
  {
    name: "Sanju Sharma, Aaranyas, Kumar Infratech",
    role: "Luxury villa project in Almora, Uttarakhand",
    highlight:
      "We achieved a lead qualification rate of 90–95% for our luxury villa project.",
    src: "/sanju.mp4",
  },
  {
    name: "Vinay, Vagmine Water Homes Private Limited",
    role: "Ultra Luxury Villas in Bangalore",
    highlight:
      "Cost per lead dropped and lead quality has never been this better for us.",
    src: "/vagamine.mp4",
  },
  {
    name: "Jalaj Kedia, Apni Properties",
    role: "Premium townships & projects",
    highlight:
      "The quality and quantity of leads were so good that I couldn’t handle all of them at once.",
    src: "/jalaj.mp4",
  },
];

// BIG WRITTEN TESTIMONIAL SLIDER – central quote
const writtenHighlightTestimonials = [
  {
    quote:
      "Cost per lead dropped and the follow ups were handled without my team chasing every single enquiry manually.",
    name: "NARINDER MUTNEJA",
    company: "PapaToxy Consultants LLP",
  },
  {
    quote:
      "We finally have a predictable system to generate site visits instead of random spikes from campaigns.",
    name: "SANJU SHARMA",
    company: "Kumar Infratech",
  },
  {
    quote:
      "The visibility we got on ad spends vs actual revenue made it easy to scale what works and cut the rest.",
    name: "JALAJ KEDIA",
    company: "Apni Properties",
  },
  {
    quote:
      "Their drip flows and automations made our sales team’s life much easier – more qualified conversations, less chaos.",
    name: "CP PARTNER",
    company: "Multiple Projects",
  },
];

// RECENT SCREENSHOTS FROM AD ACCOUNTS – images from /public
const adScreenshots = [
  {
    brand: "PAPATOXY CONSULTANTS LLP",
    project: "Yamuna Expressway Campaign",
    imageSrc: "/ss1.jpeg",
    meta: {
      leads: 88,
      cpl: "₹71.35",
      spend: "₹6,278.56",
    },
  },
  {
    brand: "PULKIT GUPTA ESTATES",
    project: "Sobha Noida Sec-1 Campaign",
    imageSrc: "/ss2.jpeg",
    meta: {
      leads: 148,
      cpl: "₹193.87",
      spend: "₹28,692.08",
    },
  },
  {
    brand: "APNI PROPERTIES",
    project: "Emaar Serenity Hills Gurgaon",
    imageSrc: "/ss3.jpeg",
    meta: {
      leads: 20,
      cpl: "₹184.89",
      spend: "₹3,697.87",
    },
  },
  {
    brand: "PROPPHASE REALTORS",
    project: "Ajmera Marina, Bangalore",
    imageSrc: "/ss4.jpeg",
    meta: {
      leads: 47,
      cpl: "₹353.74",
      spend: "₹16,625.58",
    },
  },
  {
    brand: "KUMAR INFRATECH",
    project: "The Aaranyas, Almora, Uttrakhand",
    imageSrc: "/ss5.jpeg",
    meta: {
      leads: 106,
      cpl: "₹76.33",
      spend: "₹8,090.76",
    },
  },
  {
    brand: "APNI PROPERTIES",
    project: "Grace Resilvia, Gurgaon",
    imageSrc: "/ss6.jpeg",
    meta: {
      leads: 71,
      cpl: "₹138.96",
      spend: "₹9,866.28",
    },
  },
  {
    brand: "Vagamine Water Homes",
    project: "Vagamine Redwood Campaign",
    imageSrc: "/ss8.jpeg",
    meta: {
      leads: 59,
      cpl: "₹75.84",
      spend: "₹4,473.60",
    },
  },
  {
    brand: "Vagamine Water Homes",
    project: "Vagamine Leaf Lake Campaign",
    imageSrc: "/ss9.jpeg",
    meta: {
      leads: 400,
      cpl: "₹33.60",
      spend: "₹13,440.54",
    },
  },
];

// DRIP FLOW AUTOMATIONS – images from /public
const dripFlows = [
  {
    label: "COLD TO QUALIFIED LEAD JOURNEY",
    title: "90-Day Nurture Flow",
    imageSrc: "/drip1.jpeg",
  },
  {
    label: "INSTANT RESPONSE & RE-ENGAGEMENT",
    title: "WhatsApp Follow-Up Flow",
    imageSrc: "/drip2.jpeg",
  },
  {
    label: "OLD LEAD REVIVAL AUTOMATION",
    title: "Retargeting & Revival Flow",
    imageSrc: "/drip3.jpeg",
  },
  {
    label: "AUTO-REMINDERS & NO-SHOW REDUCER",
    title: "Booking Confirmation Flow",
    imageSrc: "/drip4.jpeg",
  },
];

export default function HomePage() {
  const [activeWrittenIndex, setActiveWrittenIndex] = useState(0);
  const [activeAdIndex, setActiveAdIndex] = useState(0);
  const [activeFlowIndex, setActiveFlowIndex] = useState(0);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handlePrimaryCTA = () => {
    scrollTo("process");
  };

  const activeWritten = writtenHighlightTestimonials[activeWrittenIndex];

  // Auto-rotate written highlight
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWrittenIndex((prev) =>
        prev === writtenHighlightTestimonials.length - 1 ? 0 : prev + 1
      );
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  // Auto slider: ad screenshots (mobile)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAdIndex((prev) =>
        prev === adScreenshots.length - 1 ? 0 : prev + 1
      );
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Auto slider: drip flows (mobile)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFlowIndex((prev) =>
        prev === dripFlows.length - 1 ? 0 : prev + 1
      );
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-[16px] md:text-[18px] font-medium text-slate-900">
      <main className="text-base md:text-lg leading-relaxed text-slate-900 font-medium">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50 to-white">
          <div className="pointer-events-none absolute -top-32 -left-24 h-72 w-72 rounded-full bg-sky-300/35 blur-3xl animate-pulse" />
          <div className="pointer-events-none absolute -bottom-40 right-[-6rem] h-80 w-80 rounded-full bg-indigo-300/25 blur-3xl animate-pulse" />
          <div className="pointer-events-none absolute top-1/3 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-white/70 blur-3xl" />

          <div className="section-wrapper max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 relative pt-12 pb-16 lg:pt-18 lg:pb-24">
            <div className="grid lg:grid-cols-[1.4fr,1fr] gap-10 items-center">
              {/* LEFT: Copy */}
              <div className="space-y-8">
                <span className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/80 px-4 py-1.5 text-sm font-bold text-sky-700 shadow-sm shadow-sky-100">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  AI + Performance Marketing for Real Estate in India
                </span>

                <div className="space-y-5">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] font-black tracking-tight text-slate-950 leading-[1.1]">
                    We help{" "}
                    <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">
                      CPs &amp; Developers
                    </span>{" "}
                    build a predictable
                    <span className="block mt-2 text-slate-900">
                      Lead → Nurture → Site Visit → Sales
                    </span>{" "}
                    engine using AI.
                  </h1>

                  <p className="text-lg md:text-xl lg:text-2xl text-slate-800 font-medium leading-relaxed max-w-xl">
                    Plug in a done-with-you growth system that can add{" "}
                    <span className="font-bold text-sky-700 bg-sky-50 px-1 rounded">
                      ₹5 Lakhs+ in revenue in 90 days
                    </span>{" "}
                    by turning ad spend into booked site visits instead of just
                    clicks and enquiries.
                  </p>
                </div>

                {/* MOBILE VIDEO */}
                <div className="glass-panel lg:hidden border-sky-100/70 bg-white/90 shadow-lg shadow-sky-100/60 p-5 flex flex-col gap-4">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-sky-100 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-700 flex items-center justify-center">
                    <button className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-black/40 backdrop-blur">
                      <div className="absolute inset-0 rounded-full bg-white/40 blur-2xl group-hover:bg-white/60 transition" />
                      <Play className="relative h-7 w-7 text-white" />
                    </button>
                    <div className="absolute bottom-3 left-3 rounded-full bg-black/75 px-3 py-1.5 text-xs font-bold text-slate-50">
                      Watch: 4-min breakdown of the Lead → Nurture → Site Visit
                      engine
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-sky-600">
                      Who this is for
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-sm text-slate-900 font-bold">
                      <span className="tag-chip w-full justify-center bg-sky-50 border-sky-100 py-2">
                        Channel Partners (CPs)
                      </span>
                      <span className="tag-chip w-full justify-center bg-sky-50 border-sky-100 py-2">
                        Builders &amp; Developers
                      </span>
                      <span className="tag-chip w-full justify-center bg-sky-50 border-sky-100 py-2">
                        Real Estate Brokers
                      </span>
                      <span className="tag-chip w-full justify-center bg-sky-50 border-sky-100 py-2">
                        Real Estate Agencies
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA BUTTONS */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full pt-2">
                  <button
                    onClick={handlePrimaryCTA}
                    className="relative btn-primary floating-btn group w-full sm:w-auto overflow-hidden bg-gradient-to-r from-sky-500 via-sky-600 to-blue-700 text-white shadow-2xl shadow-sky-300/60 
                    text-lg md:text-xl font-extrabold uppercase tracking-wider px-8 md:px-12 py-5 md:py-6 rounded-2xl"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Book My Growth Gameplan
                      <ChevronRight className="h-7 w-7 stroke-[3px]" />
                    </span>
                    <span className="pointer-events-none absolute inset-0">
                      <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.8),transparent)] group-hover:translate-x-full transition-transform duration-700 ease-out" />
                    </span>
                  </button>

                  <button
                    onClick={() => scrollTo("process")}
                    className="relative btn-outline floating-btn group w-full sm:w-auto overflow-hidden border-2 border-sky-200 text-slate-900 bg-white/90 shadow-md shadow-sky-100/70 
                    text-lg md:text-xl font-bold px-8 md:px-10 py-4 md:py-5 rounded-2xl"
                  >
                    <span className="relative z-10">
                      See How the System Works
                    </span>
                    <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.7),transparent)] group-hover:translate-x-full transition-transform duration-700 ease-out" />
                  </button>
                </div>

                {/* TRUST STRIP */}
                <div className="flex flex-wrap items-center gap-3 text-sm md:text-base text-slate-800 font-bold">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    100+ campaigns for builders, CPs &amp; brokers
                  </div>
                  <span className="hidden sm:inline-block h-1 w-1 bg-slate-400 rounded-full" />
                  <span>
                    Meta &amp; Google Ads • AI Drip Flows • Site Visit Engine
                  </span>
                </div>

                {/* SOCIAL PROOF CARD */}
                <div className="glass-panel border-sky-100 bg-white/95 shadow-xl shadow-sky-100/80 p-5 flex flex-wrap gap-4 items-center">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      <div className="h-10 w-10 rounded-full bg-sky-500 border-2 border-white shadow-sm shadow-sky-300" />
                      <div className="h-10 w-10 rounded-full bg-indigo-500 border-2 border-white shadow-sm shadow-indigo-300" />
                      <div className="h-10 w-10 rounded-full bg-emerald-500 border-2 border-white shadow-sm shadow-emerald-300" />
                    </div>
                    <div className="text-sm">
                      <div className="flex items-center gap-1 text-amber-500">
                        <Star className="h-4 w-4 fill-amber-400" />
                        <Star className="h-4 w-4 fill-amber-400" />
                        <Star className="h-4 w-4 fill-amber-400" />
                        <Star className="h-4 w-4 fill-amber-400" />
                        <Star className="h-4 w-4 fill-amber-400" />
                        <span className="ml-1 text-xs font-bold text-slate-900 uppercase tracking-wide">
                          5.0 rated partners
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-slate-600 mt-1">
                        Trusted by CPs, Developers &amp; Brokers across major
                        Indian metros.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 text-xs font-bold text-slate-800 ml-auto">
                    <span className="tag-chip bg-sky-50 border-sky-100 px-3 py-1.5">
                      Real Estate Lead Gen
                    </span>
                    <span className="tag-chip bg-sky-50 border-sky-100 px-3 py-1.5">
                      AI Nurture Flows
                    </span>
                    <span className="tag-chip bg-sky-50 border-sky-100 px-3 py-1.5">
                      Performance Dashboards
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT: VIDEO CARD (desktop only) */}
              <div className="glass-panel hidden lg:flex flex-col gap-6 p-6 border-sky-100 bg-white/95 shadow-2xl shadow-sky-100/80">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-sky-100 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-700 flex items-center justify-center hover:scale-[1.02] transition-transform duration-500">
                  <button className="group relative flex h-20 w-20 items-center justify-center rounded-full bg-black/40 backdrop-blur">
                    <div className="absolute inset-0 rounded-full bg-white/40 blur-2xl group-hover:bg-white/60 transition" />
                    <Play className="relative h-8 w-8 text-white" />
                  </button>
                  <div className="absolute bottom-4 left-4 rounded-full bg-black/75 px-4 py-1.5 text-xs font-bold text-slate-50">
                    Watch: 4-min breakdown of the Lead → Nurture → Site Visit
                    engine
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-sky-600">
                    Who this is for
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-sm text-slate-900 font-bold">
                    <span className="tag-chip w-full justify-center bg-sky-50 border-sky-100 py-2.5">
                      Channel Partners (CPs)
                    </span>
                    <span className="tag-chip w-full justify-center bg-sky-50 border-sky-100 py-2.5">
                      Builders &amp; Developers
                    </span>
                    <span className="tag-chip w-full justify-center bg-sky-50 border-sky-100 py-2.5">
                      Real Estate Brokers
                    </span>
                    <span className="tag-chip w-full justify-center bg-sky-50 border-sky-100 py-2.5">
                      Real Estate Agencies
                    </span>
                  </div>
                </div>

                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-4 text-sm text-emerald-900 shadow-sm shadow-emerald-100 font-medium leading-relaxed">
                  <span className="font-bold text-emerald-700 block mb-1">
                    Limited Free Slots:
                  </span>
                  We only onboard a small number of projects per month to keep
                  performance high. Book your call to check availability for
                  your project.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OFFER */}
        <section
          id="offer"
          className="section-wrapper max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-20 pt-8"
        >
          <div className="space-y-4">
            <p className="text-sm font-bold uppercase tracking-widest text-sky-600">
              Offer
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              The Jade_leads Real Estate Growth System™
            </h2>
            <p className="text-xl md:text-2xl text-slate-800 font-medium leading-relaxed max-w-4xl">
              A done-with-you growth engine that combines{" "}
              <strong className="text-slate-950 font-bold bg-yellow-50">
                Meta &amp; Google Ads
              </strong>
              ,{" "}
              <strong className="text-slate-950 font-bold bg-yellow-50">
                AI-led nurturing flows
              </strong>
              , and{" "}
              <strong className="text-slate-950 font-bold bg-yellow-50">
                conversion-optimized funnels
              </strong>{" "}
              to turn ad spends into booked site visits and closings.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="glass-panel p-6 flex flex-col justify-between bg-white border-slate-200 hover:shadow-xl transition duration-300">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  AI-Backed Lead Engine
                </h3>
                <p className="mt-3 text-base font-medium text-slate-700 leading-relaxed">
                  Full-funnel Meta &amp; Google campaigns tailored to your
                  inventory and ticket size – optimized for lead quality, not
                  just CPL.
                </p>
              </div>
              <ul className="mt-6 text-[15px] font-bold text-slate-900 space-y-2">
                <li>• Ad strategy for CPs &amp; Developers</li>
                <li>• Audience segmentation &amp; creatives</li>
                <li>• Retargeting journeys that follow up 24/7</li>
              </ul>
            </div>

            <div className="glass-panel p-6 flex flex-col justify-between bg-white border-slate-200 hover:shadow-xl transition duration-300">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Lead → Nurture → Site Visit Flows
                </h3>
                <p className="mt-3 text-base font-medium text-slate-700 leading-relaxed">
                  AI-driven email, WhatsApp &amp; SMS sequences that move leads
                  from enquiry to confirmed site visits.
                </p>
              </div>
              <ul className="mt-6 text-[15px] font-bold text-slate-900 space-y-2">
                <li>• Multi-step nurture flows</li>
                <li>• Auto-follow ups &amp; reminders</li>
                <li>• Lead scoring to prioritise hot leads</li>
              </ul>
            </div>

            <div className="glass-panel p-6 flex flex-col justify-between border-2 border-sky-200 bg-sky-50/50 hover:shadow-xl transition duration-300">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Performance Dashboard &amp; Gameplan
                </h3>
                <p className="mt-3 text-base font-medium text-slate-700 leading-relaxed">
                  See where every rupee is going – from spend → leads → site
                  visits → bookings in one clear view.
                </p>
              </div>
              <ul className="mt-6 text-[15px] font-bold text-slate-900 space-y-2">
                <li>• Weekly performance reviews</li>
                <li>• Clear SOPs for your sales team</li>
                <li>• 90-day roadmap with targets &amp; milestones</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROBLEM - DARK THEME & FIXED SIDE PADDING */}
 <section
      id="problem"
      className="section-wrapper max-w-6xl xl:max-w-7xl mx-auto px-6 md:px-8 lg:px-12 pb-20"
    >
      <div className="space-y-4">
        <p className="text-sm font-bold uppercase tracking-widest text-sky-600">
          Problem
        </p>
        <h2 className="text-3xl md:text-5xl font-black text-slate-800">
          Ads are running. Leads are coming.{" "}
          <span className="text-sky-600 block md:inline">
            Revenue isn&apos;t predictable.
          </span>
        </h2>
        <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
          If you&apos;re a CP, developer or broker, you&apos;ve probably felt at
          least one of these in the last few months:
        </p>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl p-8 space-y-5 bg-[#0f1720] border border-slate-800">
          <h3 className="text-xl font-bold text-white border-b pb-3 border-slate-800">
            Common funnel roadblocks
          </h3>
          <ul className="text-[16px] md:text-lg text-slate-200 space-y-4 font-medium">
            <li>
              • Lots of leads coming in, but{" "}
              <span className="font-bold text-white/90 bg-red-800/40 px-1">
                most of them are fake or have no real intent
              </span>
              .
            </li>
            <li>
              • Enquiries keep increasing,{" "}
              <span className="font-bold text-white/90 bg-red-800/40 px-1">
                very few actually show up on site
              </span>
              .
            </li>
            <li>
              • Leads get passed to sales, but{" "}
              <span className="font-bold text-white/90 bg-red-800/40 px-1">
                there is no structured follow-up system
              </span>
              .
            </li>
            <li>
              • Different agencies for ads, landing pages &amp; CRM –{" "}
              <span className="font-bold text-white/90 bg-red-800/40 px-1">
                there is no single owner of the full funnel
              </span>
              .
            </li>
          </ul>
        </div>

        <div className="rounded-2xl p-8 space-y-5 bg-[#0f1720] border border-rose-800">
          <h3 className="text-xl font-bold text-rose-200 border-b pb-3 border-rose-800">
            The real cost (that doesn&apos;t show in dashboard)
          </h3>
          <ul className="text-[16px] md:text-lg text-rose-200/90 space-y-4 font-medium">
            <li>
              • Sales team burning time on low-intent, confused enquiries.
            </li>
            <li>
              • Missed follow-ups because no automations or nurture journeys
              exist.
            </li>
            <li>
              • Inventory stuck for months, delaying cash flow and new
              launches.
            </li>
            <li>
              • Zero clarity on which campaigns are{" "}
              <span className="font-bold underline decoration-rose-600">
                truly printing revenue vs just generating noise
              </span>
              .
            </li>
          </ul>
        </div>
      </div>
    </section>

        {/* SOLUTION - DARK THEME & FIXED SIDE PADDING */}
        <section id="solution" className="bg-[#141414] text-slate-50">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 py-12">
            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-widest text-sky-600">
                Solution
              </p>
              <h2 className="text-3xl md:text-5xl font-black text-slate-50 leading-tight">
                One AI-powered engine connecting{" "}
                <span className="text-sky-600 block md:inline">
                  ads → leads → nurture → visits.
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed">
                Instead of random campaigns and disconnected tools, we deploy a
                unified system that tracks each lead from first click till site
                visit and booking.
              </p>
            </div>

            <div className="mt-8 grid md:grid-cols-4 gap-6 text-base">
              <div className="rounded-2xl bg-slate-800 border border-slate-700 p-4 md:p-6 lg:p-8 hover:border-sky-400 transition-colors duration-300">
                <span className="text-xs font-black tracking-widest text-sky-600">
                  01 • ATTRACT
                </span>
                <p className="text-lg font-bold text-slate-50 mt-2">High-intent ads</p>
                <p className="mt-2 text-slate-300 leading-relaxed">
                  Creative + copy tuned for CPs &amp; developers to attract
                  serious buyers, not just form fillers.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-800 border border-slate-700 p-4 md:p-6 lg:p-8 hover:border-sky-400 transition-colors duration-300">
                <span className="text-xs font-black tracking-widest text-sky-600">
                  02 • NURTURE
                </span>
                <p className="text-lg font-bold text-slate-50 mt-2">AI follow-ups</p>
                <p className="mt-2 text-slate-300 leading-relaxed">
                  Automated sequences over WhatsApp, email &amp; SMS warm up leads
                  before your sales team calls.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-800 border border-slate-700 p-4 md:p-6 lg:p-8 hover:border-sky-400 transition-colors duration-300">
                <span className="text-xs font-black tracking-widest text-sky-600">
                  03 • CONVERT
                </span>
                <p className="text-lg font-bold text-slate-50 mt-2">Site visit engine</p>
                <p className="mt-2 text-slate-300 leading-relaxed">
                  Smart reminders, time-slot nudges &amp; objection handling to
                  lock in confirmed site visits.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-800 border border-slate-700 p-4 md:p-6 lg:p-8 hover:border-sky-400 transition-colors duration-300">
                <span className="text-xs font-black tracking-widest text-sky-600">
                  04 • SCALE
                </span>
                <p className="text-lg font-bold text-slate-50 mt-2">Performance loop</p>
                <p className="mt-2 text-slate-300 leading-relaxed">
                  Weekly optimisation on creatives, audiences &amp; funnels to
                  scale what&apos;s working.
                </p>
              </div>
            </div>

            {/* BIG CTA after solution */}
            <div className="mt-12 flex justify-center">
              <button
                onClick={handlePrimaryCTA}
                className="relative btn-primary floating-btn group overflow-hidden bg-gradient-to-r from-sky-500 via-sky-600 to-blue-700 text-white shadow-2xl shadow-sky-300/60 
                text-xl md:text-2xl font-black uppercase tracking-wide px-10 md:px-14 py-6 md:py-7 rounded-2xl"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Deploy This Engine Now
                  <ChevronRight className="h-8 w-8 stroke-[4px]" />
                </span>
                <span className="pointer-events-none absolute inset-0">
                  <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.8),transparent)] group-hover:translate-x-full transition-transform duration-700 ease-out" />
                </span>
              </button>
            </div>
          </div>
        </section>

       {/* PROCESS - DARK THEME & FIXED SIDE PADDING */}
        <section id="process" className="bg-[#141414] text-slate-50">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 py-12">
            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-widest text-sky-600">
                Process
              </p>
              <h2 className="text-3xl md:text-5xl font-black text-slate-50">
                What happens in your first 90 days with Jade_leads.
              </h2>
            </div>

            <div className="mt-8 grid md:grid-cols-[1.3fr,1fr] gap-8 items-start">
              <ol className="space-y-5">
                <li className="rounded-2xl bg-[#1b1b1b] border border-slate-700 p-4 md:p-6 lg:p-8 flex gap-4">
                  <div className="mt-1 h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center text-sm font-bold text-sky-700 shrink-0">
                    01
                  </div>
                  <div>
                    <p className="font-bold text-lg text-slate-50">Deep-dive growth &amp; inventory audit</p>
                    <p className="mt-2 text-slate-300 font-medium leading-relaxed">
                      We map your projects, ticket sizes, current funnel and sales
                      reality to identify quick wins, leaks and realistic revenue
                      targets.
                    </p>
                  </div>
                </li>

                <li className="rounded-2xl bg-[#1b1b1b] border border-slate-700 p-4 md:p-6 lg:p-8 flex gap-4">
                  <div className="mt-1 h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center text-sm font-bold text-sky-700 shrink-0">
                    02
                  </div>
                  <div>
                    <p className="font-bold text-lg text-slate-50">AI Ideal Customer Persona &amp; Creative Scripting</p>
                    <p className="mt-2 text-slate-300 font-medium leading-relaxed">
                      We build AI-assisted customer personas and human-plus-AI ad
                      scripting so your creatives stand out in the feed and never
                      go unnoticed by the right buyers.
                    </p>
                  </div>
                </li>

                <li className="rounded-2xl bg-[#1b1b1b] border border-slate-700 p-4 md:p-6 lg:p-8 flex gap-4">
                  <div className="mt-1 h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center text-sm font-bold text-sky-700 shrink-0">
                    03
                  </div>
                  <div>
                    <p className="font-bold text-lg text-slate-50">Campaign &amp; funnel rollout</p>
                    <p className="mt-2 text-slate-300 font-medium leading-relaxed">
                      AI-powered Meta &amp; Google campaigns go live with aligned
                      landing pages, tracking and routing – reaching ideal buyers,
                      warming them up and pushing site-visit-ready leads into your
                      calendar.
                    </p>
                  </div>
                </li>

                <li className="rounded-2xl bg-[#1b1b1b] border border-slate-700 p-4 md:p-6 lg:p-8 flex gap-4">
                  <div className="mt-1 h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center text-sm font-bold text-sky-700 shrink-0">
                    04
                  </div>
                  <div>
                    <p className="font-bold text-lg text-slate-50">AI nurture flows &amp; site visit engine</p>
                    <p className="mt-2 text-slate-300 font-medium leading-relaxed">
                      Our AI chatbot and integrated CRM start conversing with
                      leads, understanding intent and nudging them to book calls
                      and confirmed site visits – without your team chasing every
                      enquiry manually.
                    </p>
                  </div>
                </li>

                <li className="rounded-2xl bg-[#1b1b1b] border border-slate-700 p-4 md:p-6 lg:p-8 flex gap-4">
                  <div className="mt-1 h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center text-sm font-bold text-sky-700 shrink-0">
                    05
                  </div>
                  <div>
                    <p className="font-bold text-lg text-slate-50">AI-powered regular follow-up</p>
                    <p className="mt-2 text-slate-300 font-medium leading-relaxed">
                      The system keeps reminding and re-engaging prospects with WhatsApp, email and SMS drip sequences – building bond with
                      your brand and pushing them to either book a call or a site
                      visit.
                    </p>
                  </div>
                </li>

                <li className="rounded-2xl bg-[#1b1b1b] border border-slate-700 p-4 md:p-6 lg:p-8 flex gap-4">
                  <div className="mt-1 h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center text-sm font-bold text-sky-700 shrink-0">
                    06
                  </div>
                  <div>
                    <p className="font-bold text-lg text-slate-50">Weekly performance review &amp; scale</p>
                    <p className="mt-2 text-slate-300 font-medium leading-relaxed">
                      Every week we review numbers with you, refine creatives, fix
                      leaks and scale the campaigns that are actually printing
                      revenue – not just delivering clicks or cheap leads.
                    </p>
                  </div>
                </li>
              </ol>

              <div className="sticky top-10">
                <div className="rounded-2xl bg-[#1b1b1b] border border-slate-700 p-6 md:p-8 lg:p-10 shadow-2xl">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-sky-600 mb-2">
                      What you leave the call with
                    </p>
                    <p className="text-2xl font-black text-slate-50 leading-tight">
                      A 90-day real estate growth gameplan tailored to your project.
                    </p>
                  </div>
                  <ul className="text-slate-200 mt-6 space-y-3 font-bold">
                    <li className="flex items-center gap-2"><span className="text-sky-500 text-xl">•</span> Ideal buyer personas &amp; targeting angles.</li>
                    <li className="flex items-center gap-2"><span className="text-sky-500 text-xl">•</span> Recommended Meta &amp; Google campaign structure.</li>
                    <li className="flex items-center gap-2"><span className="text-sky-500 text-xl">•</span> Nurture sequence outline (WhatsApp, Email, SMS).</li>
                    <li className="flex items-center gap-2"><span className="text-sky-500 text-xl">•</span> Site visit and follow-up SOPs for your sales team.</li>
                  </ul>

                  <button
                    onClick={handlePrimaryCTA}
                    className="btn-primary floating-btn group w-full justify-center mt-6 relative overflow-hidden 
                    text-lg md:text-xl font-extrabold uppercase tracking-wide py-3 md:py-4 shadow-xl rounded-xl"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Book My 90-Day Gameplan Call
                    </span>
                    <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.8),transparent)] group-hover:translate-x-full transition-transform duration-700 ease-out" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLIENT STORIES (VIDEOS) */}
       <section id="client-stories" className="w-full bg-[#141414] text-slate-50">
  <div className="section-wrapper max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-20">

    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
      <div className="space-y-4">
        <p className="text-sm font-bold uppercase tracking-widest text-sky-600">
          Client Stories
        </p>
        <h2 className="text-3xl md:text-5xl font-black text-slate-50">
          Video testimonials from real operators.
        </h2>
        <p className="text-xl text-slate-300 font-medium leading-relaxed max-w-2xl">
          Hear directly from founders and teams who plugged our system in
          and scaled faster with less chaos.
        </p>
      </div>

      <div className="flex items-center justify-start md:justify-end">
        <button
          onClick={handlePrimaryCTA}
          className="btn-primary floating-btn group relative overflow-hidden 
          text-lg font-bold px-10 py-5 rounded-xl shadow-lg 
          bg-gradient-to-r from-sky-500 via-sky-600 to-blue-700 text-white"
        >
          <span className="relative z-10">Book Your Growth Call</span>
          <span className="pointer-events-none absolute inset-0 -translate-x-full 
          bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.9),transparent)] 
          group-hover:translate-x-full transition-transform duration-700 ease-out" />
        </button>
      </div>
    </div>

    <div className="mt-10 grid md:grid-cols-3 gap-8">
      {videoTestimonials.map((v, idx) => (
        <article
          key={idx}
          className="rounded-2xl p-5 flex flex-col gap-4 bg-[#1b1b1b] border border-slate-700"
        >
          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black shadow-inner">
            <video
              className="h-full w-full object-fit"
              controls
              preload="metadata"
            >
              <source src={v.src} type="video/mp4" />
            </video>
          </div>

          <div>
            <p className="text-sm font-bold text-slate-100">{v.name}</p>
            <p className="text-xs font-semibold text-slate-300 uppercase tracking-wide mt-1">
              {v.role}
            </p>
            <p className="mt-3 text-sm italic font-medium text-cyan-400 border-l-2 border-sky-400 pl-3">
              “{v.highlight}”
            </p>
          </div>
        </article>
      ))}
    </div>

  </div>
</section>

        {/* WRITTEN HIGHLIGHT TESTIMONIAL */}
        <section
          id="written-testimonials"
          className="section-wrapper max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-20"
        >
          <div className="space-y-4">
            <p className="text-sm font-bold uppercase tracking-widest text-sky-600">
              Written Testimonials
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              What our clients say in writing.
            </h2>
          </div>

          <div className="mt-10">
            <div className="glass-panel relative px-6 md:px-16 py-12 md:py-20 bg-slate-950 text-slate-50 border-slate-800 shadow-2xl">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <div className="text-5xl md:text-6xl text-sky-500 font-serif">
                  “
                </div>
                <p className="text-2xl md:text-3xl leading-relaxed text-slate-600 font-bold">
                  {activeWritten.quote}
                </p>
                <div className="space-y-2">
                  <p className="text-sm md:text-base font-extrabold tracking-[0.2em] uppercase text-sky-400">
                    {activeWritten.name}
                  </p>
                  <p className="text-xs md:text-sm font-bold text-emerald-400">
                    {activeWritten.company}
                  </p>
                </div>
              </div>

              <div className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-3">
                {writtenHighlightTestimonials.map((_, i) => {
                  const active = i === activeWrittenIndex;
                  return (
                    <button
                      key={i}
                      onClick={() => setActiveWrittenIndex(i)}
                      className={`h-4 w-2 rounded-full transition-all duration-300 ${
                        active
                          ? "bg-sky-400 h-8"
                          : "bg-slate-700/50 hover:bg-slate-500"
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>

      
        {/* RECENT SCREENSHOTS FROM AD ACCOUNTS */}
        <section
          id="screenshots-ads"
          className="section-wrapper max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-20"
        >
          <div className="space-y-4">
            <p className="text-sm font-bold uppercase tracking-widest text-sky-600">
              Google Ad Account Spent
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              Recent Screenshots from Ad Accounts.
            </h2>
            <p className="text-xl text-slate-800 font-medium leading-relaxed max-w-3xl">
              Real ad spends, performance dashboards and written reviews from
              clients using our AI-powered lead and sales systems.
            </p>
          </div>

          {/* Mobile auto slider */}
          <div className="mt-8 md:hidden relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${activeAdIndex * 100}%)`,
              }}
            >
              {adScreenshots.map((shot, idx) => (
                <article
                  key={idx}
                  className="min-w-full glass-panel p-5 flex flex-col gap-4 bg-white border-slate-200 shadow-lg"
                >
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-sky-600">
                      {shot.brand}
                    </p>
                    <p className="mt-2 text-lg font-bold text-slate-900">
                      {shot.project}
                    </p>
                  </div>
                  <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 bg-black">
                    <Image
                      src={shot.imageSrc}
                      alt={shot.project}
                      width={480}
                      height={260}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-500 pt-2 font-mono font-bold">
                    <div className="space-x-4">
                      <span>
                        Leads:{" "}
                        <span className="font-black text-slate-900">
                          {shot.meta.leads}
                        </span>
                      </span>
                      <span>
                        CPL:{" "}
                        <span className="font-black text-slate-900">
                          {shot.meta.cpl}
                        </span>
                      </span>
                      <span>
                        Spend:{" "}
                        <span className="font-black text-slate-900">
                          {shot.meta.spend}
                        </span>
                      </span>
                    </div>
                    <span className="flex items-center gap-1 text-[10px] text-emerald-600 uppercase font-bold">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Verified client
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-4 flex justify-center gap-2">
              {adScreenshots.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveAdIndex(i)}
                  className={`h-2 w-2 rounded-full ${
                    i === activeAdIndex
                      ? "bg-sky-400"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop grid */}
          <div className="mt-10 hidden md:grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {adScreenshots.map((shot, idx) => (
              <article
                key={idx}
                className="glass-panel p-6 flex flex-col gap-4 bg-white border-slate-200 hover:border-sky-300 shadow-lg transition duration-300"
              >
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-sky-600">
                    {shot.brand}
                  </p>
                  <p className="mt-2 text-xl font-bold text-slate-900">
                    {shot.project}
                  </p>
                </div>
                <div className="relative w-full rounded-xl overflow-hidden border border-slate-200 bg-black">
                  <Image
                    src={shot.imageSrc}
                    alt={shot.project}
                    width={480}
                    height={260}
                    className="w-full h-auto object-cover opacity-95 hover:opacity-100 transition"
                  />
                </div>
                <div className="flex items-center justify-between text-sm text-slate-500 pt-2 font-mono font-bold">
                  <div className="space-x-4">
                    <span>
                      Leads:{" "}
                      <span className="font-black text-slate-900">
                        {shot.meta.leads}
                      </span>
                    </span>
                    <span>
                      CPL:{" "}
                      <span className="font-black text-slate-900">
                        {shot.meta.cpl}
                      </span>
                    </span>
                    <span>
                      Spend:{" "}
                      <span className="font-black text-slate-900">
                        {shot.meta.spend}
                      </span>
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-[10px] text-emerald-600 uppercase font-bold">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Verified client
                  </span>
                </div>
              </article>
            ))}

            <div className="glass-panel p-8 flex flex-col items-start justify-center gap-6 bg-slate-950 text-slate-600 border-slate-800">
              <div className="space-y-2">
                <p className="text-sm font-bold text-sky-400 uppercase tracking-widest">
                  See More
                </p>
                <p className="text-2xl font-bold leading-tight">
                  View more ad accounts, spends &amp; dashboards.
                </p>
              </div>
              <button className="btn-outline text-lg font-bold border-2 border-sky-500 text-sky-300 hover:bg-sky-500/10 px-8 py-4 rounded-xl">
                Explore →
              </button>
            </div>
          </div>
        </section>

        {/* DRIP FLOW AUTOMATIONS – WhatsApp only */}
        <section
          id="drip-flows"
          className="section-wrapper max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-20"
        >
          <div className="space-y-4">
            <p className="text-sm font-bold uppercase tracking-widest text-sky-600">
              WhatsApp Automations
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              Screenshots from WhatsApp Automation.
            </h2>
            <p className="text-xl text-slate-800 font-medium leading-relaxed max-w-3xl">
              Actual WhatsApp automation flows used to nurture, follow up and
              close leads — from cold enquiry to booked site visit and revived
              old leads, running 24/7 without your team manually chasing every
              prospect.
            </p>
          </div>

          {/* Mobile auto slider */}
          <div className="mt-8 md:hidden relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${activeFlowIndex * 100}%)`,
              }}
            >
              {dripFlows.map((flow, idx) => (
                <article
                  key={idx}
                  className="min-w-full glass-panel p-5 flex flex-col gap-4 bg-slate-950 text-slate-900 border-slate-800"
                >
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-400">
                    {flow.label}
                  </p>
                  <p className="text-lg font-bold text-white">{flow.title}</p>
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-slate-700 bg-black">
                    <Image
                      src={flow.imageSrc}
                      alt={flow.title}
                      width={480}
                      height={260}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <p className="text-xs text-slate-400 font-mono">
                    WhatsApp Automation · Live Workflow
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-4 flex justify-center gap-2">
              {dripFlows.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveFlowIndex(i)}
                  className={`h-2 w-2 rounded-full ${
                    i === activeFlowIndex
                      ? "bg-emerald-400"
                      : "bg-slate-400/50 hover:bg-slate-500"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop grid */}
          <div className="mt-10 hidden md:grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {dripFlows.map((flow, idx) => (
              <article
                key={idx}
                className="glass-panel p-5 flex flex-col gap-4 bg-slate-950 text-slate-900 border-slate-800 hover:border-emerald-500/30 transition duration-300"
              >
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-emerald-400">
                  {flow.label}
                </p>
                <p className="text-lg font-bold text-white">{flow.title}</p>
                <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-slate-700 bg-black">
                  <Image
                    src={flow.imageSrc}
                    alt={flow.title}
                    width={480}
                    height={260}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-xs text-slate-400 font-mono">
                  WhatsApp Automation · Live Workflow
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ABOUT – founder story */}
        <section
          id="about"
          className="section-wrapper max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-20 pt-8"
        >
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-bold uppercase tracking-widest text-sky-600">
              About Darshaan Jade
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              The founder who refused to accept mediocrity.
            </h2>
            <p className="text-xl text-slate-800 font-medium leading-relaxed">
              Darshaan Jade is a serial entrepreneur with over{" "}
              <span className="font-bold text-sky-700 bg-sky-50 px-1">
                8+ years across Digital Marketing, UX Design &amp; Sales
              </span>{" "}
              — working with builders, channel partners and realtors across
              India, managing over{" "}
              <span className="font-bold text-slate-900 bg-yellow-100 px-1">
                ₹2 Cr in ad spends
              </span>{" "}
              and{" "}
              <span className="font-bold text-slate-900 bg-emerald-100 px-1">
                ₹10 Cr+ in revenue.
              </span>
            </p>
          </div>

          <div className="mt-14 space-y-16">
            {/* BLOCK 1 */}
            <div className="flex flex-col md:flex-row md:items-center gap-10">
              <div className="md:flex-1 space-y-6 text-lg text-slate-800">
                <p className="text-2xl font-bold text-slate-900">
                  Seeing patterns most agencies ignored.
                </p>
                <p className="font-medium leading-relaxed">
                  Working closely with real estate teams across India, Darshaan
                  saw the same pattern repeat:
                </p>
                <ul className="list-disc pl-6 space-y-2 font-bold text-slate-700">
                  <li>Shallow, copy-paste campaigns.</li>
                  <li>Zero qualification or nurturing.</li>
                  <li>
                    “Bulk leads” sold as success while 80% of demand leaked out.
                  </li>
                </ul>
                <p className="font-medium leading-relaxed">
                  Agencies were setting dangerously low benchmarks, convincing
                  realtors that{" "}
                  <span className="font-bold text-red-600 bg-red-50 px-1">
                    200 useless leads
                  </span>{" "}
                  was “good marketing”. Darshaan knew this was broken — so he
                  built something better.
                </p>
              </div>

              <div className="md:flex-1">
                <div className="relative mx-auto max-w-sm md:max-w-md">
                  <div className="absolute inset-0 rounded-[2rem] bg-sky-200/40 blur-2xl -z-10" />
                  <div className="overflow-hidden rounded-2xl border-2 border-slate-200 shadow-2xl shadow-sky-100">
                    <Image
                      src="/darshan1.jpeg"
                      alt="Darshaan Jade travelling for client work"
                      width={480}
                      height={560}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* BLOCK 2 */}
            <div className="flex flex-col md:flex-row-reverse md:items-center gap-10">
              <div className="md:flex-1 space-y-6 text-lg text-slate-800">
                <p className="text-2xl font-bold text-slate-900">
                  Not another “lead generator”. A full-stack revenue system.
                </p>
                <p className="font-medium leading-relaxed">
                  Instead of chasing vanity metrics, Darshaan designed a model
                  where:
                </p>
                <ul className="list-disc pl-6 space-y-2 font-bold text-slate-700">
                  <li>Every step is intentional and mapped to revenue.</li>
                  <li>Every touchpoint is engineered for qualification.</li>
                  <li>No serious lead slips through the cracks.</li>
                </ul>
                <p className="font-medium leading-relaxed">
                  Real estate projects stop depending on luck and “the next big
                  campaign” — and start compounding month after month through a
                  predictable system.
                </p>
              </div>

              <div className="md:flex-1">
                <div className="relative mx-auto max-w-xs md:max-w-sm md:translate-y-6">
                  <div className="absolute -top-6 -left-8 h-24 w-24 rounded-full bg-sky-100" />
                  <div className="absolute -bottom-8 -right-6 h-32 w-32 rounded-full bg-sky-200/60" />
                  <div className="overflow-hidden rounded-2xl border-2 border-slate-200 shadow-2xl shadow-sky-100">
                    <Image
                      src="/darshan2.jpeg"
                      alt="Darshaan Jade outdoor portrait"
                      width={480}
                      height={560}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* BLOCK 3 */}
            <div className="flex flex-col md:flex-row md:items-center gap-10">
              <div className="md:flex-1 space-y-6 text-lg text-slate-800">
                <p className="text-2xl font-bold text-slate-900">
                  Making builders and realtors unstoppable.
                </p>
                <p className="font-medium leading-relaxed">
                  Darshaan doesn’t compete with agencies —{" "}
                  <span className="font-bold text-sky-700 bg-sky-50 px-1">
                    he outstructures them.
                  </span>
                </p>
                <ul className="list-disc pl-6 space-y-2 font-bold text-slate-700">
                  <li>
                    Not just ads —{" "}
                    <span className="text-slate-900">
                      sniper-level demand generation.
                    </span>
                  </li>
                  <li>
                    Not just “leads” —{" "}
                    <span className="text-slate-900">
                      Qualified Buyers who show up.
                    </span>
                  </li>
                  <li>
                    No hacks, no fluff — just systems that turn ad spends into
                    site visits and bookings.
                  </li>
                </ul>
                <p className="font-medium leading-relaxed">
                  If you&apos;re tired of excuses, bad leads and money-burning
                  campaigns, Jade_leads Digital / Jadeleads is where that cycle
                  ends.
                </p>

                <div className="pt-6">
                  <button
                    onClick={handlePrimaryCTA}
                    className="relative btn-primary floating-btn group overflow-hidden bg-gradient-to-r from-sky-500 via-sky-600 to-blue-700 text-white shadow-xl shadow-sky-300/60 
                    text-lg md:text-xl font-extrabold uppercase tracking-wide px-10 md:px-12 py-5 md:py-6 rounded-2xl w-full sm:w-auto"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Work with the Founder
                      <ChevronRight className="h-6 w-6 stroke-[3px]" />
                    </span>
                    <span className="pointer-events-none absolute inset-0">
                      <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.8),transparent)] group-hover:translate-x-full transition-transform duration-700 ease-out" />
                    </span>
                  </button>
                </div>
              </div>

              {/* (Optional image for 3rd block stays commented out) */}
            </div>
          </div>
        </section>

        {/* LOCATION / CONTACT */}
        <section
          id="location"
          className="section-wrapper max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-24 border-t border-slate-200 pt-16 relative"
        >
          <div className="pointer-events-none absolute -top-24 right-0 h-52 w-52 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 left-0 h-64 w-64 rounded-full bg-blue-100/40 blur-3xl" />

          <div className="relative grid md:grid-cols-[1.1fr,1fr] gap-12 items-start">
            <div className="space-y-8">
              <p className="text-sm font-bold uppercase tracking-widest text-sky-600">
                Location
              </p>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                Based in Bengaluru. <br />
                Working with projects across India.
              </h2>
              <p className="text-xl text-slate-800 font-medium leading-relaxed">
                Share your project details, ticket size and current funnel.
                We’ll build a clear plan to turn ad spends into predictable site
                visits and bookings.
              </p>

              <div className="glass-panel bg-white/95 border-sky-200 shadow-lg shadow-sky-100/60 p-8 text-base space-y-6">
                <div className="flex items-start gap-4 text-slate-800">
                  <MapPin className="h-6 w-6 text-sky-600 mt-1 shrink-0" />
                  <div>
                    <p className="font-bold text-lg text-slate-900 mb-1">
                      Office
                    </p>
                    <p className="text-slate-700 leading-snug font-medium">
                      7th Floor Kirloskar Tech Park,
                      <br />
                      Godrej Woodsman Estate, Hebbal Kempapura,
                      <br />
                      Bengaluru, Karnataka 560024
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-slate-800">
                  <PhoneCall className="h-6 w-6 text-sky-600 mt-1 shrink-0" />
                  <div>
                    <p className="font-bold text-lg text-slate-900 mb-1">
                      Contact
                    </p>
                    <p className="text-slate-900 font-bold">+91-9008563598</p>
                    <p className="text-slate-700 font-medium">
                      contact@darvyn.in
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={handlePrimaryCTA}
                className="btn-primary floating-btn group inline-flex justify-center mt-2 relative overflow-hidden 
                text-lg md:text-xl font-bold px-10 md:px-12 py-5 md:py-6 rounded-2xl shadow-lg"
              >
                <span className="relative z-10">Book Strategy Call</span>
                <ChevronRight className="ml-2 h-6 w-6 relative z-10 stroke-[3px]" />
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.8),transparent)] group-hover:translate-x-full transition-transform duration-700 ease-out" />
              </button>
            </div>

            <div className="glass-panel border-sky-200 bg-white/90 shadow-xl shadow-sky-100/70 p-6 rounded-3xl w-full h-full min-h-[400px]">
              <div className="w-full h-full rounded-2xl overflow-hidden border border-sky-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.205348895005!2d77.59370467507842!3d13.028727513221284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16dbc39d8c6f%3A0xfd5cbc8bf4097755!2sKirloskar%20Tech%20Park!5e0!3m2!1sen!2sin!4v1708066000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  className="brightness-95 hover:brightness-100 transition h-full"
                />
              </div>

              <p className="text-xs font-bold text-slate-500 mt-4 text-center tracking-wide">
                Our office at Kirloskar Tech Park, Bengaluru
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Sticky bottom CTA for mobile */}
      <div className="fixed bottom-4 left-0 right-0 md:hidden z-50 px-4">
        <div className="glass-panel px-4 py-4 flex items-center justify-between bg-slate-950 text-cyan-500 border-slate-800 shadow-2xl">
          <div className="text-xs">
            <p className="font-extrabold text-cyan-600 text-sm">
              Build your Lead → Site Visit engine
            </p>
            <p className="text-slate-400 font-medium">
              Limited onboarding slots available this month.
            </p>
          </div>
          <button
            onClick={handlePrimaryCTA}
            className="btn-primary floating-btn group text-sm font-extrabold uppercase px-6 py-3 relative overflow-hidden bg-sky-400 text-slate-950 rounded-xl"
          >
            <span className="relative z-10">Book Call</span>
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.8),transparent)] group-hover:translate-x-full transition-transform duration-700 ease-out" />
          </button>
        </div>
      </div>
    </div>
  );
}
