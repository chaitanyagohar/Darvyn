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
    name: "Narinder Mutneja, PapaToxy Consultants LLP",
    role: "Residential & commercial projects in Noida",
    highlight:
      "Cost per lead dropped and lead quality has never been this better for us.",
    src: "/narinder.mp4",
    poster: "/thumbnails/narinder.jpg",
  },
  {
    name: "Jalaj Kedia, Apni Properties",
    role: "Premium townships & projects",
    highlight:
      "The quality and quantity of leads were so good that I couldn’t handle all of them at once.",
    src: "/jalaj.mp4",
    poster: "/thumbnails/jalaj.jpg",
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

  // Auto-rotate written highlight (desktop/overall)
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
    <div className="relative min-h-screen bg-white text-[15px] md:text-[16px] text-slate-900">
      <main className="text-[15px] md:text-[16px] leading-[1.8] text-slate-800">
        {/* HERO – redesigned / high-contrast / animated */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50 to-white">
          {/* Soft glow blobs to highlight hero (no extra content) */}
          <div className="pointer-events-none absolute -top-32 -left-24 h-72 w-72 rounded-full bg-sky-300/35 blur-3xl animate-pulse" />
          <div className="pointer-events-none absolute -bottom-40 right-[-6rem] h-80 w-80 rounded-full bg-indigo-300/25 blur-3xl animate-pulse" />
          <div className="pointer-events-none absolute top-1/3 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-white/70 blur-3xl" />

          <div className="section-wrapper max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 relative pt-12 pb-16 lg:pt-18 lg:pb-24">
            <div className="grid lg:grid-cols-[1.4fr,1fr] gap-10 items-center">
              {/* LEFT: Copy */}
              <div className="space-y-8">
                <span className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/80 px-4 py-1 text-[12px] font-semibold text-sky-700 shadow-sm shadow-sky-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  AI + Performance Marketing for Real Estate in India
                </span>

                <div className="space-y-4">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.4rem] font-extrabold tracking-tight text-slate-950">
                    We help{" "}
                    <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">
                      CPs & Developers
                    </span>{" "}
                    build a predictable
                    <span className="block mt-1 text-slate-900">
                      Lead → Nurture → Site Visit → Sales
                    </span>{" "}
                    engine using AI.
                  </h1>

                  <p className="text-[14px] md:text-[16px] lg:text-[17px] text-slate-800 font-medium max-w-xl">
                    Plug in a done-with-you growth system that can add{" "}
                    <span className="font-semibold text-sky-700">
                      ₹5 Lakhs+ in revenue in 90 days
                    </span>{" "}
                    by turning ad spend into booked site visits instead of just
                    clicks and enquiries.
                  </p>
                </div>

                {/* MOBILE VIDEO directly under tagline, above CTA */}
                <div className="glass-panel lg:hidden border-sky-100/70 bg-white/90 shadow-lg shadow-sky-100/60 p-4 flex flex-col gap-3">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-sky-100 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-700 flex items-center justify-center">
                    <button className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-black/40 backdrop-blur">
                      <div className="absolute inset-0 rounded-full bg-white/40 blur-2xl group-hover:bg-white/60 transition" />
                      <Play className="relative h-6 w-6 text-white" />
                    </button>
                    <div className="absolute bottom-3 left-3 rounded-full bg-black/75 px-3 py-1 text-[11px] font-medium text-slate-50">
                      Watch: 4-min breakdown of the Lead → Nurture → Site Visit
                      engine
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-sky-600">
                      Who this is for
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-[12px] text-slate-800 font-medium">
                      <span className="tag-chip w-full justify-center bg-sky-50 border-sky-100">
                        Channel Partners (CPs)
                      </span>
                      <span className="tag-chip w-full justify-center bg-sky-50 border-sky-100">
                        Builders & Developers
                      </span>
                      <span className="tag-chip w-full justify-center bg-sky-50 border-sky-100">
                        Real Estate Brokers
                      </span>
                      <span className="tag-chip w-full justify-center bg-sky-50 border-sky-100">
                        Real Estate Agencies
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA BUTTONS - UPDATED TO BE MASSIVE */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                  <button
                    onClick={handlePrimaryCTA}
                    className="relative btn-primary floating-btn group w-full sm:w-auto overflow-hidden bg-gradient-to-r from-sky-500 via-sky-600 to-blue-700 text-white shadow-2xl shadow-sky-300/60 
                    text-lg md:text-xl font-bold uppercase tracking-wide px-8 md:px-10 py-5 md:py-6 rounded-xl"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Book My Growth Gameplan
                      <ChevronRight className="h-6 w-6 stroke-[3px]" />
                    </span>
                    {/* metallic glare sweep */}
                    <span className="pointer-events-none absolute inset-0">
                      <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.8),transparent)] group-hover:translate-x-full transition-transform duration-700 ease-out" />
                    </span>
                  </button>

                  <button
                    onClick={() => scrollTo("process")}
                    className="relative btn-outline floating-btn group w-full sm:w-auto overflow-hidden border-sky-200 text-slate-900 bg-white/90 shadow-md shadow-sky-100/70 
                    text-base md:text-lg font-semibold px-6 md:px-8 py-4 md:py-5 rounded-xl"
                  >
                    <span className="relative z-10">
                      See How the System Works
                    </span>
                    <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.7),transparent)] group-hover:translate-x-full transition-transform duration-700 ease-out" />
                  </button>
                </div>

                {/* TRUST STRIP */}
                <div className="flex flex-wrap items-center gap-3 text-[12px] md:text-[13px] text-slate-700 font-medium">
                  <div className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    100+ campaigns for builders, CPs & brokers
                  </div>
                  <span className="hidden sm:inline-block h-0.5 w-6 bg-slate-300 rounded-full" />
                  <span>
                    Meta & Google Ads • AI Drip Flows • Site Visit Engine
                  </span>
                </div>

                {/* SOCIAL PROOF CARD */}
                <div className="glass-panel border-sky-100 bg-white/95 shadow-xl shadow-sky-100/80 p-4 flex flex-wrap gap-4 items-center">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="h-8 w-8 rounded-full bg-sky-500 border border-white shadow-sm shadow-sky-300" />
                      <div className="h-8 w-8 rounded-full bg-indigo-500 border border-white shadow-sm shadow-indigo-300" />
                      <div className="h-8 w-8 rounded-full bg-emerald-500 border border-white shadow-sm shadow-emerald-300" />
                    </div>
                    <div className="text-[12px]">
                      <div className="flex items-center gap-0.5 text-amber-500">
                        <Star className="h-3.5 w-3.5 fill-amber-400" />
                        <Star className="h-3.5 w-3.5 fill-amber-400" />
                        <Star className="h-3.5 w-3.5 fill-amber-400" />
                        <Star className="h-3.5 w-3.5 fill-amber-400" />
                        <Star className="h-3.5 w-3.5 fill-amber-400" />
                        <span className="ml-1 text-[11px] font-semibold text-slate-800">
                          5.0 rated partners
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-700 mt-1">
                        Trusted by CPs, Developers & Brokers across major Indian
                        metros.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 text-[11px] font-medium text-slate-800 ml-auto">
                    <span className="tag-chip bg-sky-50 border-sky-100">
                      Real Estate Lead Gen
                    </span>
                    <span className="tag-chip bg-sky-50 border-sky-100">
                      AI Nurture Flows
                    </span>
                    <span className="tag-chip bg-sky-50 border-sky-100">
                      Performance Dashboards
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT: VIDEO CARD (desktop only) */}
              <div className="glass-panel hidden lg:flex flex-col gap-4 p-5 border-sky-100 bg-white/95 shadow-2xl shadow-sky-100/80">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-sky-100 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-700 flex items-center justify-center hover:scale-[1.02] transition-transform duration-500">
                  <button className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-black/40 backdrop-blur">
                    <div className="absolute inset-0 rounded-full bg-white/40 blur-2xl group-hover:bg-white/60 transition" />
                    <Play className="relative h-7 w-7 text-white" />
                  </button>
                  <div className="absolute bottom-3 left-3 rounded-full bg-black/75 px-3 py-1 text-[11px] text-slate-50">
                    Watch: 4-min breakdown of the Lead → Nurture → Site Visit
                    engine
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-sky-600">
                    Who this is for
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-[12px] text-slate-800 font-medium">
                    <span className="tag-chip w-full justify-center bg-sky-50 border-sky-100">
                      Channel Partners (CPs)
                    </span>
                    <span className="tag-chip w-full justify-center bg-sky-50 border-sky-100">
                      Builders & Developers
                    </span>
                    <span className="tag-chip w-full justify-center bg-sky-50 border-sky-100">
                      Real Estate Brokers
                    </span>
                    <span className="tag-chip w-full justify-center bg-sky-50 border-sky-100">
                      Real Estate Agencies
                    </span>
                  </div>
                </div>

                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-3 py-3 text-[12px] text-emerald-800 shadow-sm shadow-emerald-100 font-medium">
                  <span className="font-semibold">Limited Free Slots:</span> We
                  only onboard a small number of projects per month to keep
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
          className="section-wrapper max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-16 pt-2"
        >
          <div className="space-y-3">
            <p className="section-heading">Offer</p>
            <h2 className="section-title">
              The Jade_leads Real Estate Growth System™
            </h2>
            <p className="section-subtitle text-[15px] md:text-[16px] text-slate-800 font-medium">
              A done-with-you growth engine that combines{" "}
              <strong>Meta & Google Ads</strong>,{" "}
              <strong>AI-led nurturing flows</strong>, and{" "}
              <strong>conversion-optimized funnels</strong> to turn ad spends
              into booked site visits and closings.
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <div className="glass-panel p-5 flex flex-col justify-between bg-white border-slate-200">
              <div>
                <h3 className="text-sm md:text-[15px] font-semibold text-slate-900">
                  AI-Backed Lead Engine
                </h3>
                <p className="mt-2 text-[13px] md:text-[14px] text-slate-800">
                  Full-funnel Meta & Google campaigns tailored to your inventory
                  and ticket size – optimized for lead quality, not just CPL.
                </p>
              </div>
              <ul className="mt-3 text-[12px] text-slate-800 space-y-1 font-medium">
                <li>• Ad strategy for CPs & Developers</li>
                <li>• Audience segmentation & creatives</li>
                <li>• Retargeting journeys that follow up 24/7</li>
              </ul>
            </div>

            <div className="glass-panel p-5 flex flex-col justify-between bg-white border-slate-200">
              <div>
                <h3 className="text-sm md:text-[15px] font-semibold text-slate-900">
                  Lead → Nurture → Site Visit Flows
                </h3>
                <p className="mt-2 text-[13px] md:text-[14px] text-slate-800">
                  AI-driven email, WhatsApp & SMS sequences that move leads from
                  enquiry to confirmed site visits.
                </p>
              </div>
              <ul className="mt-3 text-[12px] text-slate-800 space-y-1 font-medium">
                <li>• Multi-step nurture flows</li>
                <li>• Auto-follow ups & reminders</li>
                <li>• Lead scoring to prioritise hot leads</li>
              </ul>
            </div>

            <div className="glass-panel p-5 flex flex-col justify-between border-sky-300 bg-sky-50">
              <div>
                <h3 className="text-sm md:text-[15px] font-semibold text-slate-900">
                  Performance Dashboard & Gameplan
                </h3>
                <p className="mt-2 text-[13px] md:text-[14px] text-slate-800">
                  See where every rupee is going – from spend → leads → site
                  visits → bookings in one clear view.
                </p>
              </div>
              <ul className="mt-3 text-[12px] text-slate-800 space-y-1 font-medium">
                <li>• Weekly performance reviews</li>
                <li>• Clear SOPs for your sales team</li>
                <li>• 90-day roadmap with targets & milestones</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section
          id="problem"
          className="section-wrapper max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-16"
        >
          <div className="space-y-3">
            <p className="section-heading">Problem</p>
            <h2 className="section-title">
              Ads are running. Leads are coming.{" "}
              <span className="text-sky-600">Revenue isn't predictable.</span>
            </h2>
            <p className="section-subtitle text-[15px] md:text-[16px] text-slate-800 font-medium">
              If you're a CP, developer or broker, you've probably felt at least
              one of these in the last few months:
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <div className="glass-panel p-5 space-y-3 bg-white border-slate-200">
              <h3 className="text-sm md:text-[15px] font-semibold text-slate-900">
                Common funnel roadblocks
              </h3>
              <ul className="text-[13px] text-slate-800 space-y-2">
                <li>
                  • Lots of leads coming in, but{" "}
                  <span className="font-semibold text-sky-700">
                    most of them are fake or have no real intent
                  </span>
                  .
                </li>
                <li>
                  • Enquiries keep increasing,{" "}
                  <span className="font-semibold text-sky-700">
                    very few actually show up on site
                  </span>
                  .
                </li>
                <li>
                  • Leads get passed to sales, but{" "}
                  <span className="font-semibold text-sky-700">
                    there is no structured follow-up system
                  </span>
                  .
                </li>
                <li>
                  • Different agencies for ads, landing pages & CRM –{" "}
                  <span className="font-semibold text-sky-700">
                    there is no single owner of the full funnel
                  </span>
                  .
                </li>
              </ul>
            </div>

            <div className="glass-panel p-5 space-y-3 border-red-300 bg-red-50">
              <h3 className="text-sm md:text-[15px] font-semibold text-slate-900">
                The real cost (that doesn't show in dashboard)
              </h3>
              <ul className="text-[13px] text-slate-800 space-y-2">
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
                  <span className="font-semibold text-sky-700">
                    truly printing revenue vs just generating noise
                  </span>
                  .
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SOLUTION */}
        <section
          id="solution"
          className="section-wrapper max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-16"
        >
          <div className="space-y-3">
            <p className="section-heading">Solution</p>
            <h2 className="section-title">
              One AI-powered engine connecting{" "}
              <span className="text-sky-600">
                ads → leads → nurture → visits.
              </span>
            </h2>
            <p className="section-subtitle text-[15px] md:text-[16px] text-slate-800 font-medium">
              Instead of random campaigns and disconnected tools, we deploy a
              unified system that tracks each lead from first click till site
              visit and booking.
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-4 gap-4 text-[13px] text-slate-800">
            <div className="glass-panel p-4 flex flex-col gap-2 bg-white border-slate-200">
              <span className="text-[11px] font-semibold text-sky-700">
                01 • ATTRACT
              </span>
              <p className="font-semibold">High-intent ads</p>
              <p>
                Creative + copy tuned for CPs & developers to attract serious
                buyers, not just form fillers.
              </p>
            </div>
            <div className="glass-panel p-4 flex flex-col gap-2 bg-white border-slate-200">
              <span className="text-[11px] font-semibold text-sky-700">
                02 • NURTURE
              </span>
              <p className="font-semibold">AI follow-ups</p>
              <p>
                Automated sequences over WhatsApp, email & SMS warm up leads
                before your sales team calls.
              </p>
            </div>
            <div className="glass-panel p-4 flex flex-col gap-2 bg-white border-slate-200">
              <span className="text-[11px] font-semibold text-sky-700">
                03 • CONVERT
              </span>
              <p className="font-semibold">Site visit engine</p>
              <p>
                Smart reminders, time-slot nudges & objection handling to lock
                in confirmed site visits.
              </p>
            </div>
            <div className="glass-panel p-4 flex flex-col gap-2 bg-white border-slate-200">
              <span className="text-[11px] font-semibold text-sky-700">
                04 • SCALE
              </span>
              <p className="font-semibold">Performance loop</p>
              <p>
                Weekly optimisation on creatives, audiences & funnels to scale
                what's working.
              </p>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section
          id="process"
          className="section-wrapper max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-16"
        >
          <div className="space-y-3">
            <p className="section-heading">Process</p>
            <h2 className="section-title">
              What happens in your first 90 days with Jade_leads.
            </h2>
          </div>

          <div className="mt-8 grid md:grid-cols-[1.2fr,1fr] gap-6 items-start">
            <ol className="space-y-4 text-[13px] text-slate-800">
              {/* 01 */}
              <li className="glass-panel p-4 flex gap-3 bg-white border-slate-200">
                <div className="mt-1 h-7 w-7 rounded-full bg-sky-100 flex items-center justify-center text-[11px] font-semibold text-sky-700">
                  01
                </div>
                <div>
                  <p className="font-semibold text-sm md:text-[15px] text-slate-900">
                    Deep-dive growth & inventory audit
                  </p>
                  <p className="mt-1">
                    We map your projects, ticket sizes, current funnel and sales
                    reality to identify quick wins, leaks and realistic revenue
                    targets.
                  </p>
                </div>
              </li>

              {/* 02 */}
              <li className="glass-panel p-4 flex gap-3 bg-white border-slate-200">
                <div className="mt-1 h-7 w-7 rounded-full bg-sky-100 flex items-center justify-center text-[11px] font-semibold text-sky-700">
                  02
                </div>
                <div>
                  <p className="font-semibold text-sm md:text-[15px] text-slate-900">
                    AI Ideal Customer Persona & Creative Scripting
                  </p>
                  <p className="mt-1">
                    We build AI-assisted customer personas and human-plus-AI ad
                    scripting so your creatives stand out in the feed and never
                    go unnoticed by the right buyers.
                  </p>
                </div>
              </li>

              {/* 03 */}
              <li className="glass-panel p-4 flex gap-3 bg-white border-slate-200">
                <div className="mt-1 h-7 w-7 rounded-full bg-sky-100 flex items-center justify-center text-[11px] font-semibold text-sky-700">
                  03
                </div>
                <div>
                  <p className="font-semibold text-sm md:text-[15px] text-slate-900">
                    Campaign & funnel rollout
                  </p>
                  <p className="mt-1">
                    AI-powered Meta & Google campaigns go live with aligned
                    landing pages, tracking and routing – reaching ideal buyers,
                    warming them up and pushing site-visit-ready leads into your
                    calendar.
                  </p>
                </div>
              </li>

              {/* 04 */}
              <li className="glass-panel p-4 flex gap-3 bg-white border-slate-200">
                <div className="mt-1 h-7 w-7 rounded-full bg-sky-100 flex items-center justify-center text-[11px] font-semibold text-sky-700">
                  04
                </div>
                <div>
                  <p className="font-semibold text-sm md:text-[15px] text-slate-900">
                    AI nurture flows & site visit engine
                  </p>
                  <p className="mt-1">
                    Our AI chatbot and integrated CRM start conversing with
                    leads, understanding intent and nudging them to book calls
                    and confirmed site visits – without your team chasing every
                    enquiry manually.
                  </p>
                </div>
              </li>

              {/* 05 */}
              <li className="glass-panel p-4 flex gap-3 bg-white border-slate-200">
                <div className="mt-1 h-7 w-7 rounded-full bg-sky-100 flex items-center justify-center text-[11px] font-semibold text-sky-700">
                  05
                </div>
                <div>
                  <p className="font-semibold text-sm md:text-[15px] text-slate-900">
                    AI-powered regular follow-up
                  </p>
                  <p className="mt-1">
                    The system keeps reminding and re-engaging prospects with
                    WhatsApp, email and SMS drip sequences – building bond with
                    your brand and pushing them to either book a call or a site
                    visit.
                  </p>
                </div>
              </li>

              {/* 06 */}
              <li className="glass-panel p-4 flex gap-3 bg-white border-slate-200">
                <div className="mt-1 h-7 w-7 rounded-full bg-sky-100 flex items-center justify-center text-[11px] font-semibold text-sky-700">
                  06
                </div>
                <div>
                  <p className="font-semibold text-sm md:text-[15px] text-slate-900">
                    Weekly performance review & scale
                  </p>
                  <p className="mt-1">
                    Every week we review numbers with you, refine creatives, fix
                    leaks and scale the campaigns that are actually printing
                    revenue – not just delivering clicks or cheap leads.
                  </p>
                </div>
              </li>
            </ol>

            <div className="glass-panel p-6 md:p-8 space-y-6 bg-white border-slate-200 sticky top-10">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-500">
                What you leave the call with
              </p>
              <p className="text-lg md:text-xl font-bold text-slate-900">
                A 90-day real estate growth gameplan tailored to your project.
              </p>
              <ul className="text-[14px] md:text-[15px] text-slate-800 space-y-3 font-medium">
                <li>• Ideal buyer personas & targeting angles.</li>
                <li>• Recommended Meta & Google campaign structure.</li>
                <li>• Nurture sequence outline (WhatsApp, Email, SMS).</li>
                <li>• Site visit and follow-up SOPs for your sales team.</li>
              </ul>

              {/* UPDATED BIG CTA BUTTON */}
              <button
                onClick={handlePrimaryCTA}
                className="btn-primary floating-btn group w-full justify-center mt-2 relative overflow-hidden 
                text-lg md:text-xl font-bold uppercase tracking-wide py-5 md:py-6 shadow-xl rounded-xl"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book My 90-Day Gameplan Call
                </span>
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.8),transparent)] group-hover:translate-x-full transition-transform duration-700 ease-out" />
              </button>
            </div>
          </div>
        </section>

        {/* CLIENT STORIES (VIDEOS) */}
        <section
          id="client-stories"
          className="section-wrapper max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-16"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="space-y-3">
              <p className="section-heading">Client Stories</p>
              <h2 className="section-title">
                Video testimonials from real operators.
              </h2>
              <p className="section-subtitle text-[15px] md:text-[16px] text-slate-800 font-medium">
                Hear directly from founders and teams who plugged our system in
                and scaled faster with less chaos.
              </p>
            </div>
            <div className="flex items-center justify-start md:justify-end">
              {/* UPDATED CTA BUTTON */}
              <button
                onClick={handlePrimaryCTA}
                className="btn-primary floating-btn group relative overflow-hidden 
                text-base md:text-lg font-bold px-8 md:px-10 py-4 md:py-5 rounded-xl shadow-lg"
              >
                <span className="relative z-10">Book Your Growth Call</span>
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.9),transparent)] group-hover:translate-x-full transition-transform duration-700 ease-out" />
              </button>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {videoTestimonials.map((v, idx) => (
              <article
                key={idx}
                className="glass-panel p-4 flex flex-col gap-3 bg-slate-50 border-slate-200"
              >
                <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-slate-200 bg-black">
                  <video
                    className="h-full w-full object-fit"
                    controls
                    preload="metadata"
                    poster={v.poster}
                  >
                    <source src={v.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div>
                  <p className="text-xs md:text-[13px] font-semibold text-slate-900">
                    {v.name}
                  </p>
                  <p className="text-[11px] md:text-[12px] text-slate-600">
                    {v.role}
                  </p>
                  <p className="mt-1 text-[11px] md:text-[12px] text-slate-700">
                    “{v.highlight}”
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* WRITTEN HIGHLIGHT TESTIMONIAL */}
        <section
          id="written-testimonials"
          className="section-wrapper max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-16"
        >
          <div className="space-y-3">
            <p className="section-heading">Written Testimonials</p>
            <h2 className="section-title">What our clients say in writing.</h2>
          </div>

          <div className="mt-8">
            <div className="glass-panel relative px-6 md:px-12 py-10 md:py-14 bg-slate-950 text-slate-50 border-slate-800">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <div className="text-3xl md:text-4xl text-sky-400">“</div>
                <p className="text-2xl md:text-lg leading-relaxed text-cyan-700 font-bold">
                  {activeWritten.quote}
                </p>
                <div className="space-y-1">
                  <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-sky-400">
                    {activeWritten.name}
                  </p>
                  <p className="text-[11px] md:text-xs text-green-500">
                    {activeWritten.company}
                  </p>
                </div>
              </div>

              {/* vertical dots selector on right */}
              <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                {writtenHighlightTestimonials.map((_, i) => {
                  const active = i === activeWrittenIndex;
                  return (
                    <button
                      key={i}
                      onClick={() => setActiveWrittenIndex(i)}
                      className={`h-3 w-1.5 rounded-full transition-all ${
                        active
                          ? "bg-sky-400"
                          : "bg-slate-500/40 hover:bg-slate-300/70"
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
          className="section-wrapper max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-16"
        >
          <div className="space-y-3">
            <p className="section-heading">Written Reviews</p>
            <h2 className="section-title">
              Recent Screenshots from Ad Accounts.
            </h2>
            <p className="section-subtitle text-[15px] md:text-[16px] text-slate-800 font-medium">
              Real ad spends, performance dashboards and written reviews from
              clients using our AI-powered lead and sales systems.
            </p>
          </div>

          {/* Mobile auto slider */}
          <div className="mt-6 md:hidden relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${activeAdIndex * 100}%)`,
              }}
            >
              {adScreenshots.map((shot, idx) => (
                <article
                  key={idx}
                  className="min-w-full glass-panel p-4 flex flex-col gap-3 bg-slate-950 text-slate-50 border-slate-800"
                >
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-400">
                      {shot.brand}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-50">
                      {shot.project}
                    </p>
                  </div>
                  <div className="relative w-full rounded-2xl overflow-hidden border border-slate-700 bg-black">
                    <Image
                      src={shot.imageSrc}
                      alt={shot.project}
                      width={480}
                      height={260}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-black pt-1">
                    <div className="space-x-3">
                      <span>
                        Leads:{" "}
                        <span className="font-semibold">
                          {shot.meta.leads}
                        </span>
                      </span>
                      <span>
                        CPL:{" "}
                        <span className="font-semibold">{shot.meta.cpl}</span>
                      </span>
                      <span>
                        Spend:{" "}
                        <span className="font-semibold">{shot.meta.spend}</span>
                      </span>
                    </div>
                    <span className="flex items-center gap-1 text-[10px] text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Verified client
                    </span>
                  </div>
                </article>
              ))}
            </div>

            {/* slider dots */}
            <div className="mt-3 flex justify-center gap-2">
              {adScreenshots.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveAdIndex(i)}
                  className={`h-1.5 w-1.5 rounded-full ${
                    i === activeAdIndex
                      ? "bg-sky-400"
                      : "bg-slate-400/50 hover:bg-slate-500"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop grid */}
          <div className="mt-8 hidden md:grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {adScreenshots.map((shot, idx) => (
              <article
                key={idx}
                className="glass-panel p-4 flex flex-col gap-3 bg-slate-950 text-slate-50 border-slate-800"
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-400">
                    {shot.brand}
                  </p>
                  <p className="mt-1 text-[16px] text-sm font-bold text-slate-800">
                    {shot.project}
                  </p>
                </div>
                <div className="relative w-full rounded-2xl overflow-hidden border border-slate-700 bg-black">
                  <Image
                    src={shot.imageSrc}
                    alt={shot.project}
                    width={480}
                    height={260}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="flex items-center justify-between text-[13px] text-black pt-1">
                  <div className="space-x-3">
                    <span>
                      Leads:{" "}
                      <span className="font-semibold">{shot.meta.leads}</span>
                    </span>
                    <span>
                      CPL:{" "}
                      <span className="font-semibold">{shot.meta.cpl}</span>
                    </span>
                    <span>
                      Spend:{" "}
                      <span className="font-semibold">{shot.meta.spend}</span>
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-[10px] text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Verified client
                  </span>
                </div>
              </article>
            ))}

            <div className="glass-panel p-6 flex flex-col items-start justify-between bg-slate-950 text-slate-50 border-slate-800">
              <div className="space-y-3">
                <p className="text-xs font-semibold text-sky-400">See More</p>
                <p className="text-sm font-semibold">
                  View more ad accounts, spends & dashboards.
                </p>
              </div>
              {/* UPDATED SMALLER CTA */}
              <button className="mt-4 btn-outline text-base md:text-lg border-sky-500 text-sky-300 hover:bg-sky-500/10 px-6 md:px-8 py-3 md:py-4 rounded-lg">
                Explore →
              </button>
            </div>
          </div>
        </section>

        {/* DRIP FLOW AUTOMATIONS – WhatsApp only */}
        <section
          id="drip-flows"
          className="section-wrapper max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-16"
        >
          <div className="space-y-3">
            <p className="section-heading">WhatsApp Automations</p>
            <h2 className="section-title">
              Screenshots from WhatsApp Automation .
            </h2>
            <p className="section-subtitle text-[15px] md:text-[16px] text-slate-800 font-medium">
              Actual WhatsApp automation flows used to nurture, follow up and
              close leads — from cold enquiry to booked site visit and revived
              old leads, running 24/7 without your team manually chasing every
              prospect.
            </p>
          </div>

          {/* Mobile auto slider */}
          <div className="mt-6 md:hidden relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${activeFlowIndex * 100}%)`,
              }}
            >
              {dripFlows.map((flow, idx) => (
                <article
                  key={idx}
                  className="min-w-full glass-panel p-4 flex flex-col gap-3 bg-slate-950 text-slate-900 border-slate-800"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-400">
                    {flow.label}
                  </p>
                  <p className="text-sm font-semibold">{flow.title}</p>
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-700 bg-black">
                    <Image
                      src={flow.imageSrc}
                      alt={flow.title}
                      width={480}
                      height={260}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <p className="text-[11px] text-slate-200">
                    WhatsApp Automation · Live Workflow
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-3 flex justify-center gap-2">
              {dripFlows.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveFlowIndex(i)}
                  className={`h-1.5 w-1.5 rounded-full ${
                    i === activeFlowIndex
                      ? "bg-emerald-400"
                      : "bg-slate-400/50 hover:bg-slate-500"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop grid */}
          <div className="mt-8 hidden md:grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {dripFlows.map((flow, idx) => (
              <article
                key={idx}
                className="glass-panel p-4 flex flex-col gap-3 bg-slate-950 text-slate-900 border-slate-800"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-400">
                  {flow.label}
                </p>
                <p className="text-sm font-semibold">{flow.title}</p>
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-700 bg-black">
                  <Image
                    src={flow.imageSrc}
                    alt={flow.title}
                    width={480}
                    height={260}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-[13px] text-black">
                  WhatsApp Automation · Live Workflow
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ABOUT – founder story with alternating text + image blocks */}
        <section
          id="about"
          className="section-wrapper max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-20 pt-4"
        >
          {/* Top intro */}
          <div className="max-w-3xl space-y-3">
            <p className="section-heading">About Darshaan Jade</p>
            <h2 className="section-title">
              The founder who refused to accept mediocrity.
            </h2>
            <p className="section-subtitle text-[15px] md:text-[16px] text-slate-800 font-medium">
              Darshaan Jade is a serial entrepreneur with over{" "}
              <span className="font-semibold text-sky-700">
                8+ years across Digital Marketing, UX Design & Sales
              </span>{" "}
              — working with builders, channel partners and realtors across
              India, managing over{" "}
              <span className="font-semibold">₹2 Cr in ad spends</span> and{" "}
              <span className="font-semibold">₹10 Cr+ in revenue.</span>
            </p>
          </div>

          <div className="mt-10 space-y-10">
            {/* BLOCK 1 – Origin + plane image */}
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
              {/* Text first on mobile & desktop */}
              <div className="md:flex-1 space-y-4 text-[13px] md:text-[15px] text-slate-800">
                <p className="font-semibold text-slate-900">
                  Seeing patterns most agencies ignored.
                </p>
                <p>
                  Working closely with real estate teams across India, Darshaan
                  saw the same pattern repeat:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Shallow, copy-paste campaigns.</li>
                  <li>Zero qualification or nurturing.</li>
                  <li>
                    “Bulk leads” sold as success while 80% of demand leaked out.
                  </li>
                </ul>
                <p>
                  Agencies were setting dangerously low benchmarks, convincing
                  realtors that{" "}
                  <span className="font-semibold">200 useless leads</span> was
                  “good marketing”. Darshaan knew this was broken — so he built
                  something better.
                </p>
              </div>

              {/* Image */}
              <div className="md:flex-1">
                <div className="relative mx-auto max-w-sm md:max-w-sm">
                  <div className="absolute inset-0 rounded-[2rem] bg-sky-200/40 blur-2xl -z-10" />
                  <div className="overflow-hidden rounded-[2px] border border-slate-200 shadow-lg shadow-sky-100">
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

            {/* BLOCK 2 – Broken funnels + outdoor image */}
            <div className="flex flex-col md:flex-row-reverse md:items-center gap-6 md:gap-10">
              {/* Text */}
              <div className="md:flex-1 space-y-4 text-[13px] md:text-[15px] text-slate-800">
                <p className="font-semibold text-slate-900">
                  Not another “lead generator”. A full-stack revenue system.
                </p>
                <p>
                  Instead of chasing vanity metrics, Darshaan designed a model
                  where:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Every step is intentional and mapped to revenue.</li>
                  <li>Every touchpoint is engineered for qualification.</li>
                  <li>No serious lead slips through the cracks.</li>
                </ul>
                <p>
                  Real estate projects stop depending on luck and “the next big
                  campaign” — and start compounding month after month through a
                  predictable system.
                </p>
              </div>

              {/* Image */}
              <div className="md:flex-1">
                <div className="relative mx-auto max-w-xs md:max-w-sm md:translate-y-3">
                  <div className="absolute -top-4 -left-6 h-16 w-16 rounded-full bg-sky-100" />
                  <div className="absolute -bottom-6 -right-4 h-24 w-24 rounded-full bg-sky-200/60" />
                  <div className="overflow-hidden rounded-[3px] border border-slate-200 shadow-lg shadow-sky-100">
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

            {/* BLOCK 3 – Mission + phone image */}
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
              {/* Text */}
              <div className="md:flex-1 space-y-4 text-[13px] md:text-[15px] text-slate-800">
                <p className="font-semibold text-slate-900">
                  Making builders and realtors unstoppable.
                </p>
                <p>
                  Darshaan doesn’t compete with agencies —{" "}
                  <span className="font-semibold text-sky-700">
                    he outstructures them.
                  </span>
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Not just ads —{" "}
                    <span className="font-semibold">
                      sniper-level demand generation.
                    </span>
                  </li>
                  <li>
                    Not just “leads” —{" "}
                    <span className="font-semibold">
                      Qualified Buyers who show up.
                    </span>
                  </li>
                  <li>
                    No hacks, no fluff — just systems that turn ad spends into
                    site visits and bookings.
                  </li>
                </ul>
                <p>
                  If you're tired of excuses, bad leads and money-burning
                  campaigns, Jade_leads Digital / Jadeleads is where that cycle
                  ends.
                </p>
              </div>

              {/* Image (intentionally commented out by you) */}
              {/* <div className="md:flex-1">
                <div className="relative mx-auto max-w-xs md:max-w-sm">
                  <div className="absolute inset-x-6 -bottom-4 h-16 rounded-full bg-sky-100/80 blur-xl -z-10" />
                  <div className="overflow-hidden rounded-[2rem] border border-slate-200 shadow-lg shadow-sky-100">
                    <Image
                      src="/darshan3.jpeg"
                      alt="Darshaan Jade on a client call"
                      width={480}
                      height={560}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/* LOCATION / CONTACT — redesigned without form */}
        <section
          id="location"
          className="section-wrapper max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-24 border-t border-slate-200 pt-12 relative"
        >
          {/* soft visual highlight */}
          <div className="pointer-events-none absolute -top-24 right-0 h-52 w-52 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 left-0 h-64 w-64 rounded-full bg-blue-100/40 blur-3xl" />

          <div className="relative grid md:grid-cols-[1.1fr,1fr] gap-10 items-start">
            {/* LEFT CONTENT */}
            <div className="space-y-6">
              <p className="section-heading">Location</p>
              <h2 className="section-title">
                Based in Bengaluru. Working with projects across India.
              </h2>
              <p className="section-subtitle text-[15px] md:text-[16px] text-slate-800 font-medium">
                Share your project details, ticket size and current funnel. We’ll
                build a clear plan to turn ad spends into predictable site
                visits and bookings.
              </p>

              {/* Address & Contact Box */}
              <div className="glass-panel bg-white/95 border-sky-200 shadow-lg shadow-sky-100/60 p-5 text-[13px] space-y-4">
                <div className="flex items-start gap-3 text-slate-800">
                  <MapPin className="h-5 w-5 text-sky-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">Office</p>
                    <p className="text-slate-700 leading-snug">
                      7th Floor Kirloskar Tech Park,
                      <br />
                      Godrej Woodsman Estate, Hebbal Kempapura,
                      <br />
                      Bengaluru, Karnataka 560024
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-800">
                  <PhoneCall className="h-5 w-5 text-sky-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">Contact</p>
                    <p className="text-slate-700">+91-9008563598</p>
                    <p className="text-slate-800">contact@darvyn.in</p>
                  </div>
                </div>
              </div>

              {/* UPDATED CTA - LARGER */}
              <button
                onClick={handlePrimaryCTA}
                className="btn-primary floating-btn group inline-flex justify-center mt-2 relative overflow-hidden 
                text-base md:text-lg font-bold px-8 md:px-10 py-4 md:py-5 rounded-xl shadow-lg"
              >
                <span className="relative z-10">Book Strategy Call</span>
                <ChevronRight className="ml-1.5 h-4 w-4 relative z-10 stroke-[3px]" />
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.8),transparent)] group-hover:translate-x-full transition-transform duration-700 ease-out" />
              </button>
            </div>

            {/* RIGHT SIDE — MAP CARD */}
            <div className="glass-panel border-sky-200 bg-white/90 shadow-xl shadow-sky-100/70 p-5 rounded-2xl w-full">
              <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-sky-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.205348895005!2d77.59370467507842!3d13.028727513221284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16dbc39d8c6f%3A0xfd5cbc8bf4097755!2sKirloskar%20Tech%20Park!5e0!3m2!1sen!2sin!4v1708066000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  className="brightness-95 hover:brightness-100 transition"
                />
              </div>

              <p className="text-[11px] text-slate-500 mt-3 text-center">
                Our office at Kirloskar Tech Park, Bengaluru
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Sticky bottom CTA for mobile */}
      <div className="fixed bottom-3 left-0 right-0 md:hidden z-40 px-4">
        <div className="glass-panel px-3 py-3 flex items-center justify-between bg-slate-950 text-cyan-500 border-slate-800">
          <div className="text-[11px]">
            <p className="font-semibold">
              Build your Lead → Site Visit engine
            </p>
            <p className="text-slate-300">
              Limited onboarding slots available this month.
            </p>
          </div>
          {/* UPDATED MOBILE STICKY CTA */}
          <button
            onClick={handlePrimaryCTA}
            className="btn-primary floating-btn group text-sm font-bold px-6 py-3 relative overflow-hidden bg-sky-400 text-slate-950 rounded-lg"
          >
            <span className="relative z-10">Book Call</span>
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.8),transparent)] group-hover:translate-x-full transition-transform duration-700 ease-out" />
          </button>
        </div>
      </div>
    </div>
  );
}