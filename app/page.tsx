"use client";

import { useState } from "react";
import { ChevronRight, PhoneCall, MapPin, Play, Star } from "lucide-react";

const writtenTestimonials = [
  {
    name: "Channel Partner from Bengaluru",
    role: "Luxury Residential Project",
    quote:
      "We went from random walk-ins to predictable site visits every week. The AI-driven nurturing flows keep leads warm even when we’re busy on ground.",
    metric: "4.3x",
    metricLabel: "Increase in Qualified Site Visits",
  },
  {
    name: "Developer in Pune",
    role: "Mid-ticket Apartments",
    quote:
      "Earlier we were burning money on Meta & Google Ads with no tracking. Now every rupee is mapped to leads, calls and bookings.",
    metric: "62%",
    metricLabel: "Drop in Cost Per Lead",
  },
  {
    name: "Broker Network in NCR",
    role: "Channel Partner Network",
    quote:
      "Darvyn helped us set up a unified lead → nurture → call system so we’re no longer dependent on one-off campaigns.",
    metric: "3.1x",
    metricLabel: "Pipeline Growth in 90 Days",
  },
  {
    name: "CP from Mumbai",
    role: "Premium Sea-facing Inventory",
    quote:
      "The biggest shift was visibility. We finally saw which campaigns were actually printing revenue instead of just cheap leads.",
    metric: "2.7x",
    metricLabel: "Revenue vs Previous Agency",
  },
  {
    name: "Developer in Hyderabad",
    role: "High-rise Apartments",
    quote:
      "Their follow-up and nurture flows made our sales team’s job dramatically easier. Site visits became far more qualified.",
    metric: "48%",
    metricLabel: "Increase in Site Visit Show-ups",
  },
  {
    name: "Real Estate Agency in Gurgaon",
    role: "Multi-project Mandate",
    quote:
      "We plugged their lead → nurture → site visit system into multiple projects and saw consistent performance across all.",
    metric: "3x",
    metricLabel: "Overall Pipeline Growth",
  },
];

const videoTestimonials = [
  {
    name: "Video Testimonial #1",
    role: "Channel Partner • Bengaluru",
    highlight: "From random walk-ins to a predictable weekly visit pipeline.",
  },
  {
    name: "Video Testimonial #2",
    role: "Developer • Pune",
    highlight: "How we cut CPL while increasing qualified bookings.",
  },
  {
    name: "Video Testimonial #3",
    role: "Broker Network • NCR",
    highlight: "Centralised engine for multiple projects and teams.",
  },
];

const screenshots = [
  {
    title: "Meta Ads Dashboard",
    caption: "Optimized campaigns for CPs & Developers",
  },
  {
    title: "Lead Nurture Flows",
    caption: "AI follow-ups turning cold leads into site visits",
  },
  {
    title: "Site Visit Calendar",
    caption: "Centralized view of booked appointments",
  },
  {
    title: "Real-time Performance Board",
    caption: "See spend → leads → site visits → sales in one place",
  },
];

export default function HomePage() {
  const [_, setDummy] = useState(false); // just to avoid removing useState

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handlePrimaryCTA = () => {
    scrollTo("process"); // or your form section
  };

  return (
    <div className="relative min-h-screen bg-white">
      <main>
        {/* HERO – desktop 2-column, mobile stacked with video above CTA */}
        <section className="section-wrapper pt-8 pb-16 lg:pt-16 lg:pb-20">
          <div className="grid lg:grid-cols-[1.35fr,1fr] gap-10 items-center">
            {/* LEFT: Copy */}
            <div className="space-y-7">
              <span className="badge-pill">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                AI + Performance Marketing for Real Estate in India
              </span>

              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900">
                  We help{" "}
                  <span className="text-sky-600">CPs &amp; Developers</span>{" "}
                  build a predictable
                  <span className="block mt-1">
                    Lead → Nurture → Site Visit → Sales
                  </span>{" "}
                  engine using AI.
                </h1>

                <p className="text-sm md:text-base lg:text-lg text-slate-600 max-w-xl">
                  Plug in a done-with-you growth system that can add{" "}
                  <span className="font-semibold text-sky-700">
                    ₹5 Lakhs+ in revenue in 90 days
                  </span>{" "}
                  by turning ad spend into booked site visits instead of just
                  clicks and enquiries.
                </p>
              </div>

              {/* MOBILE VIDEO: directly under tagline, above CTA */}
              <div className="glass-panel p-4 flex flex-col gap-3 lg:hidden">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-700 flex items-center justify-center">
                  <button className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-black/40 backdrop-blur">
                    <div className="absolute inset-0 rounded-full bg-white/30 blur-2xl group-hover:bg-white/40 transition" />
                    <Play className="relative h-6 w-6 text-white" />
                  </button>
                  <div className="absolute bottom-3 left-3 rounded-full bg-black/70 px-3 py-1 text-[10px] text-slate-50">
                    Watch: 4-min breakdown of the Lead → Nurture → Site Visit
                    engine
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-sky-500">
                    Who this is for
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-700">
                    <span className="tag-chip w-full justify-center">
                      Channel Partners (CPs)
                    </span>
                    <span className="tag-chip w-full justify-center">
                      Builders & Developers
                    </span>
                    <span className="tag-chip w-full justify-center">
                      Real Estate Brokers
                    </span>
                    <span className="tag-chip w-full justify-center">
                      Real Estate Agencies
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA BUTTONS */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={handlePrimaryCTA}
                  className="btn-primary floating-btn group"
                >
                  <span className="relative z-10">Book My Growth Gameplan</span>
                  <ChevronRight className="ml-1.5 h-4 w-4 relative z-10" />
                  {/* metallic glare sweep */}
                  <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.8),transparent)] group-hover:translate-x-full transition-transform duration-700 ease-out" />
                  </span>
                </button>

                <button
                  onClick={() => scrollTo("process")}
                  className="btn-outline floating-btn group relative overflow-hidden"
                >
                  <span className="relative z-10">See How the System Works</span>
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.7),transparent)] group-hover:translate-x-full transition-transform duration-700 ease-out" />
                </button>
              </div>

              {/* TRUST STRIP */}
              <div className="flex flex-wrap items-center gap-3 text-[11px] md:text-xs text-slate-500">
                <div className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  100+ campaigns for builders, CPs & brokers
                </div>
                <span className="hidden sm:inline-block h-0.5 w-6 bg-slate-300 rounded-full" />
                <span>Meta & Google Ads • AI Drip Flows • Site Visit Engine</span>
              </div>

              {/* SOCIAL PROOF CARD */}
              <div className="glass-panel p-4 flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="h-8 w-8 rounded-full bg-sky-500 border border-white" />
                    <div className="h-8 w-8 rounded-full bg-indigo-500 border border-white" />
                    <div className="h-8 w-8 rounded-full bg-emerald-500 border border-white" />
                  </div>
                  <div className="text-xs">
                    <div className="flex items-center gap-0.5 text-amber-500">
                      <Star className="h-3.5 w-3.5 fill-amber-400" />
                      <Star className="h-3.5 w-3.5 fill-amber-400" />
                      <Star className="h-3.5 w-3.5 fill-amber-400" />
                      <Star className="h-3.5 w-3.5 fill-amber-400" />
                      <Star className="h-3.5 w-3.5 fill-amber-400" />
                      <span className="ml-1 text-[11px] font-medium text-slate-700">
                        5.0 rated partners
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-500 mt-1">
                      Trusted by CPs, Developers & Brokers across major Indian
                      metros.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 text-[10px] text-slate-600 ml-auto">
                  <span className="tag-chip">Real Estate Lead Gen</span>
                  <span className="tag-chip">AI Nurture Flows</span>
                  <span className="tag-chip">Performance Dashboards</span>
                </div>
              </div>
            </div>

            {/* RIGHT: VIDEO CARD (desktop-only) */}
            <div className="glass-panel p-4 lg:p-5 flex-col gap-4 hidden lg:flex">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-700 flex items-center justify-center">
                <button className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-black/40 backdrop-blur">
                  <div className="absolute inset-0 rounded-full bg-white/30 blur-2xl group-hover:bg-white/40 transition" />
                  <Play className="relative h-7 w-7 text-white" />
                </button>
                <div className="absolute bottom-3 left-3 rounded-full bg-black/70 px-3 py-1 text-[10px] text-slate-50">
                  Watch: 4-min breakdown of the Lead → Nurture → Site Visit
                  engine
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-sky-500">
                  Who this is for
                </p>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-700">
                  <span className="tag-chip w-full justify-center">
                    Channel Partners (CPs)
                  </span>
                  <span className="tag-chip w-full justify-center">
                    Builders & Developers
                  </span>
                  <span className="tag-chip w-full justify-center">
                    Real Estate Brokers
                  </span>
                  <span className="tag-chip w-full justify-center">
                    Real Estate Agencies
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-emerald-300/60 bg-emerald-50 px-3 py-3 text-[11px] text-emerald-800">
                <span className="font-semibold">Limited Free Slots:</span> We
                only onboard a small number of projects per month to keep
                performance high. Book your call to check availability for your
                project.
              </div>
            </div>
          </div>
        </section>

        {/* OFFER */}
        <section id="offer" className="section-wrapper pb-16">
          <div className="space-y-3">
            <p className="section-heading">Offer</p>
            <h2 className="section-title">
              The Darvyn Real Estate Growth System™
            </h2>
            <p className="section-subtitle">
              A done-with-you growth engine that combines{" "}
              <strong>Meta & Google Ads</strong>,{" "}
              <strong>AI-led nurturing flows</strong>, and{" "}
              <strong>conversion-optimized funnels</strong> to turn ad spends
              into booked site visits and closings.
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <div className="glass-panel p-5 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  AI-Backed Lead Engine
                </h3>
                <p className="mt-2 text-xs text-slate-600">
                  Full-funnel Meta & Google campaigns tailored to your inventory
                  and ticket size – optimized for lead quality, not just CPL.
                </p>
              </div>
              <ul className="mt-3 text-[11px] text-slate-600 space-y-1">
                <li>• Ad strategy for CPs & Developers</li>
                <li>• Audience segmentation & creatives</li>
                <li>• Retargeting journeys that follow up 24/7</li>
              </ul>
            </div>

            <div className="glass-panel p-5 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  Lead → Nurture → Site Visit Flows
                </h3>
                <p className="mt-2 text-xs text-slate-600">
                  AI-driven email, WhatsApp & SMS sequences that move leads from
                  enquiry to confirmed site visits.
                </p>
              </div>
              <ul className="mt-3 text-[11px] text-slate-600 space-y-1">
                <li>• Multi-step nurture flows</li>
                <li>• Auto-follow ups & reminders</li>
                <li>• Lead scoring to prioritise hot leads</li>
              </ul>
            </div>

            <div className="glass-panel p-5 flex flex-col justify-between border-sky-300 bg-sky-50">
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  Performance Dashboard & Gameplan
                </h3>
                <p className="mt-2 text-xs text-slate-600">
                  See where every rupee is going – from spend → leads → site
                  visits → bookings in one clear view.
                </p>
              </div>
              <ul className="mt-3 text-[11px] text-slate-600 space-y-1">
                <li>• Weekly performance reviews</li>
                <li>• Clear SOPs for your sales team</li>
                <li>• 90-day roadmap with targets & milestones</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section id="problem" className="section-wrapper pb-16">
          <div className="space-y-3">
            <p className="section-heading">Problem</p>
            <h2 className="section-title">
              Ads are running. Leads are coming.{" "}
              <span className="text-sky-600">Revenue isn&apos;t predictable.</span>
            </h2>
            <p className="section-subtitle">
              If you&apos;re a CP, developer or broker, you have probably faced
              at least one of these:
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <div className="glass-panel p-5 space-y-3">
              <h3 className="text-sm font-semibold text-slate-900">
                Common funnel roadblocks
              </h3>
              <ul className="text-xs text-slate-600 space-y-2">
                <li>
                  • Ad spends going up, but{" "}
                  <span className="font-medium text-sky-700">
                    site visits don&apos;t increase
                  </span>
                  .
                </li>
                <li>
                  • Plenty of enquiries,{" "}
                  <span className="font-medium text-sky-700">
                    very few show up on-site
                  </span>
                  .
                </li>
                <li>
                  • Leads get passed to sales,{" "}
                  <span className="font-medium text-sky-700">
                    no structured follow-up
                  </span>
                  .
                </li>
                <li>
                  • Different agencies for ads, landing pages, and CRM –{" "}
                  <span className="font-medium text-sky-700">
                    no single system owner
                  </span>
                  .
                </li>
              </ul>
            </div>

            <div className="glass-panel p-5 space-y-3 border-red-300 bg-red-50">
              <h3 className="text-sm font-semibold text-slate-900">
                The real cost (that doesn&apos;t show in dashboard)
              </h3>
              <ul className="text-xs text-slate-600 space-y-2">
                <li>• Sales team burning time on low-intent leads.</li>
                <li>• Missed follow-ups because no automations are in place.</li>
                <li>• Inventory stuck for months, delaying cash flow.</li>
                <li>
                  • Zero clarity on which campaigns are{" "}
                  <span className="font-medium text-sky-700">
                    actually printing revenue
                  </span>
                  .
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SOLUTION */}
        <section id="solution" className="section-wrapper pb-16">
          <div className="space-y-3">
            <p className="section-heading">Solution</p>
            <h2 className="section-title">
              One AI-powered engine connecting{" "}
              <span className="text-sky-600">ads → leads → nurture → visits.</span>
            </h2>
            <p className="section-subtitle">
              Instead of random campaigns and disconnected tools, we deploy a
              unified system that tracks each lead from first click till site
              visit and booking.
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-4 gap-4 text-xs text-slate-700">
            <div className="glass-panel p-4 flex flex-col gap-2">
              <span className="text-[11px] font-semibold text-sky-700">
                01 • ATTRACT
              </span>
              <p className="font-medium">High-intent ads</p>
              <p className="text-slate-600">
                Creative + copy tuned for CPs & developers to attract serious
                buyers, not just form fillers.
              </p>
            </div>
            <div className="glass-panel p-4 flex flex-col gap-2">
              <span className="text-[11px] font-semibold text-sky-700">
                02 • NURTURE
              </span>
              <p className="font-medium">AI follow-ups</p>
              <p className="text-slate-600">
                Automated sequences over WhatsApp, email & SMS warm up leads
                before your sales team calls.
              </p>
            </div>
            <div className="glass-panel p-4 flex flex-col gap-2">
              <span className="text-[11px] font-semibold text-sky-700">
                03 • CONVERT
              </span>
              <p className="font-medium">Site visit engine</p>
              <p className="text-slate-600">
                Smart reminders, time-slot nudges & objection handling to lock
                in confirmed site visits.
              </p>
            </div>
            <div className="glass-panel p-4 flex flex-col gap-2">
              <span className="text-[11px] font-semibold text-sky-700">
                04 • SCALE
              </span>
              <p className="font-medium">Performance loop</p>
              <p className="text-slate-600">
                Weekly optimisation on creatives, audiences & funnels to scale
                what&apos;s working.
              </p>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="section-wrapper pb-16">
          <div className="space-y-3">
            <p className="section-heading">Process</p>
            <h2 className="section-title">
              What happens in your first 90 days with Darvyn.
            </h2>
          </div>

          <div className="mt-8 grid md:grid-cols-[1.2fr,1fr] gap-6 items-start">
            <ol className="space-y-4 text-xs text-slate-700">
              <li className="glass-panel p-4 flex gap-3">
                <div className="mt-1 h-7 w-7 rounded-full bg-sky-100 flex items-center justify-center text-[11px] font-semibold text-sky-700">
                  01
                </div>
                <div>
                  <p className="font-medium text-sm text-slate-900">
                    Deep-dive growth & inventory audit
                  </p>
                  <p className="mt-1 text-slate-600">
                    We map your projects, ticket sizes, audiences and current
                    funnel to identify quick wins and leaks.
                  </p>
                </div>
              </li>
              <li className="glass-panel p-4 flex gap-3">
                <div className="mt-1 h-7 w-7 rounded-full bg-sky-100 flex items-center justify-center text-[11px] font-semibold text-sky-700">
                  02
                </div>
                <div>
                  <p className="font-medium text-sm text-slate-900">
                    Campaign & funnel rollout (Meta + Google)
                  </p>
                  <p className="mt-1 text-slate-600">
                    New campaigns go live with aligned landing pages, tracking
                    and lead routing into your CRM or sheet.
                  </p>
                </div>
              </li>
              <li className="glass-panel p-4 flex gap-3">
                <div className="mt-1 h-7 w-7 rounded-full bg-sky-100 flex items-center justify-center text-[11px] font-semibold text-sky-700">
                  03
                </div>
                <div>
                  <p className="font-medium text-sm text-slate-900">
                    AI nurture flows & site visit engine
                  </p>
                  <p className="mt-1 text-slate-600">
                    Automated journeys start warming leads, booking calls and
                    pushing site visits into your calendar.
                  </p>
                </div>
              </li>
              <li className="glass-panel p-4 flex gap-3">
                <div className="mt-1 h-7 w-7 rounded-full bg-sky-100 flex items-center justify-center text-[11px] font-semibold text-sky-700">
                  04
                </div>
                <div>
                  <p className="font-medium text-sm text-slate-900">
                    Weekly performance review & scale
                  </p>
                  <p className="mt-1 text-slate-600">
                    We review numbers with you, refine creatives and scale
                    campaigns that are producing revenue, not just leads.
                  </p>
                </div>
              </li>
            </ol>

            <div className="glass-panel p-5 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-500">
                What you leave the call with
              </p>
              <p className="text-sm md:text-base font-semibold text-slate-900">
                A 90-day real estate growth gameplan tailored to your project.
              </p>
              <ul className="text-xs text-slate-600 space-y-2">
                <li>• Ideal buyer personas & targeting angles.</li>
                <li>• Recommended Meta & Google campaign structure.</li>
                <li>• Nurture sequence outline (WhatsApp, Email, SMS).</li>
                <li>• Site visit and follow-up SOPs for your sales team.</li>
              </ul>
              <button
                onClick={handlePrimaryCTA}
                className="btn-primary floating-btn group w-full justify-center mt-2 relative overflow-hidden"
              >
                <span className="relative z-10">
                  Book My 90-Day Gameplan Call
                </span>
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.8),transparent)] group-hover:translate-x-full transition-transform duration-700 ease-out" />
              </button>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS – written + video */}
        <section id="testimonials" className="section-wrapper pb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="space-y-3">
              <p className="section-heading">Testimonials</p>
              <h2 className="section-title">
                Don&apos;t just take our word for it.
              </h2>
              <p className="section-subtitle">
                A snapshot of what happens when CPs & Developers plug into a
                structured growth engine instead of running isolated campaigns.
              </p>
            </div>
            <div className="text-xs text-slate-600">
              <p className="font-semibold text-slate-900">
                ★ ★ ★ ★ ★ Average satisfaction
              </p>
              <p className="mt-1 text-slate-500">
                Based on ongoing campaigns & internal NPS scores.
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-10">
            {/* WRITTEN TESTIMONIALS */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-500">
                Written results
              </p>
              <div className="mt-4 -mx-4 md:mx-0">
                <div className="scrollbar-hide flex gap-4 overflow-x-auto px-4 md:px-0 snap-x snap-mandatory">
                  {writtenTestimonials.map((t, idx) => (
                    <article
                      key={idx}
                      className="glass-panel min-w-[260px] max-w-xs md:max-w-sm snap-start p-4 flex flex-col justify-between"
                    >
                      <p className="text-xs text-slate-600 leading-relaxed">
                        “{t.quote}”
                      </p>
                      <div className="mt-4 flex items-center justify-between text-[11px] text-slate-600">
                        <div>
                          <p className="font-semibold text-slate-900">
                            {t.name}
                          </p>
                          <p className="text-slate-500">{t.role}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-semibold text-emerald-600">
                            {t.metric}
                          </p>
                          <p className="text-[10px] text-slate-500">
                            {t.metricLabel}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* VIDEO TESTIMONIALS */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-500">
                Video wins
              </p>
              <div className="mt-4 grid md:grid-cols-3 gap-4">
                {videoTestimonials.map((v, idx) => (
                  <div
                    key={idx}
                    className="glass-panel p-4 flex flex-col gap-3 bg-slate-50"
                  >
                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-900/90 flex items-center justify-center">
                      <button className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-white/15 backdrop-blur">
                        <div className="absolute inset-0 rounded-full bg-white/40 blur-xl group-hover:bg-white/50 transition" />
                        <Play className="relative h-6 w-6 text-white" />
                      </button>
                      <div className="absolute bottom-2 left-2 rounded-full bg-black/70 px-2.5 py-1 text-[10px] text-slate-50">
                        Tap to play testimonial
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-900">
                        {v.name}
                      </p>
                      <p className="text-[11px] text-slate-500">{v.role}</p>
                      <p className="mt-1 text-[11px] text-slate-600">
                        {v.highlight}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SCREENSHOTS */}
        <section id="screenshots" className="section-wrapper pb-16">
          <div className="space-y-3">
            <p className="section-heading">Screenshots</p>
            <h2 className="section-title">
              A peek into the actual systems running behind.
            </h2>
            <p className="section-subtitle">
              Replace these placeholders with real dashboards: ads manager, CRM
              views, lead flows & site visit calendars that you share on calls.
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {screenshots.map((shot, idx) => (
              <div
                key={idx}
                className="glass-panel p-4 flex flex-col gap-3 bg-slate-50"
              >
                <div className="aspect-video w-full rounded-2xl border border-slate-200 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_rgba(248,250,252,1))] flex items-center justify-center text-[11px] text-slate-700">
                  {shot.title} (Placeholder)
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-900">
                    {shot.title}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-600">
                    {shot.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TEAM */}
        <section id="team" className="section-wrapper pb-16">
          <div className="space-y-3">
            <p className="section-heading">Team</p>
            <h2 className="section-title">
              Practitioners, not &quot;just another agency&quot;.
            </h2>
            <p className="section-subtitle">
              Darvyn Digital specialises in{" "}
              <strong>real estate, local businesses & performance marketing</strong>.
              You work directly with people who live inside Meta, Google Ads,
              landing pages and dashboards every day.
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-[1.2fr,1fr] gap-6 items-start">
            <div className="glass-panel p-5 space-y-3">
              <p className="text-sm font-semibold text-slate-900">
                Your growth partners
              </p>
              <ul className="text-xs text-slate-600 space-y-2">
                <li>
                  • Performance marketers focused on ROAS & pipeline, not vanity
                  KPIs.
                </li>
                <li>
                  • Funnel & landing page specialists for Indian real estate
                  buyers.
                </li>
                <li>
                  • Data & analytics support – so decisions follow numbers, not
                  guesswork.
                </li>
                <li>
                  • Automation experts connecting ads, forms, CRMs & messaging
                  tools.
                </li>
              </ul>
            </div>

            <div className="glass-panel p-5 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-500">
                What we&apos;re good at
              </p>
              <ul className="text-xs text-slate-600 space-y-2">
                <li>• Real Estate Lead Gen</li>
                <li>• Performance Marketing for D2C & Local Businesses</li>
                <li>• Data Visualisation & Decision Dashboards</li>
                <li>• AI Automations for follow-ups & qualification</li>
              </ul>
            </div>
          </div>
        </section>

        {/* LOCATION / CONTACT */}
        <section
          id="location"
          className="section-wrapper pb-24 border-t border-slate-200 pt-12"
        >
          <div className="grid md:grid-cols-[1.1fr,1fr] gap-8">
            <div className="space-y-4">
              <p className="section-heading">Location</p>
              <h2 className="section-title">
                Based in Bengaluru. Working with projects across India.
              </h2>
              <p className="section-subtitle">
                Share your project details, ticket size and current funnel. We&apos;ll
                build a clear plan to turn ad spends into predictable site
                visits and bookings.
              </p>

              <div className="glass-panel p-4 flex flex-col gap-3 text-xs">
                <div className="flex items-start gap-2 text-slate-700">
                  <MapPin className="h-4 w-4 mt-0.5 text-sky-600" />
                  <div>
                    <p className="font-medium text-slate-900">Office</p>
                    <p className="text-slate-600">
                      7th Floor Kirloskar Tech Park, Godrej Woodsman Estate,
                      Hebbal Kempapura, Bengaluru, Karnataka 560024
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-slate-700">
                  <PhoneCall className="h-4 w-4 mt-0.5 text-sky-600" />
                  <div>
                    <p className="font-medium text-slate-900">Contact</p>
                    <p className="text-slate-600">+91-9008563598</p>
                    <p className="text-slate-600">Contact@darvyn.in</p>
                  </div>
                </div>
              </div>

              <button
                onClick={handlePrimaryCTA}
                className="btn-primary floating-btn group inline-flex justify-center mt-2 relative overflow-hidden"
              >
                <span className="relative z-10">Book Strategy Call</span>
                <ChevronRight className="ml-1.5 h-4 w-4 relative z-10" />
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.8),transparent)] group-hover:translate-x-full transition-transform duration-700 ease-out" />
              </button>
            </div>

            {/* CONTACT FORM */}
            <div className="glass-panel p-5 space-y-3">
              <p className="text-sm font-semibold text-slate-900">
                Tell us about your project
              </p>
              <p className="text-xs text-slate-600">
                Share basics and we&apos;ll get back with available slots for a
                30–45 minute assessment call.
              </p>
              <form className="mt-2 space-y-3 text-xs">
                <div>
                  <label className="block text-[11px] text-slate-600 mb-1">
                    Name*
                  </label>
                  <input
                    className="w-full rounded-xl bg-white border border-slate-300 px-3 py-2 text-xs outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-200"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-slate-600 mb-1">
                      Email*
                    </label>
                    <input
                      className="w-full rounded-xl bg-white border border-slate-300 px-3 py-2 text-xs outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-200"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-600 mb-1">
                      Phone*
                    </label>
                    <input
                      className="w-full rounded-xl bg-white border border-slate-300 px-3 py-2 text-xs outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-200"
                      placeholder="+91-XXXXX XXXXX"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] text-slate-600 mb-1">
                    Project / Location*
                  </label>
                  <input
                    className="w-full rounded-xl bg-white border border-slate-300 px-3 py-2 text-xs outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-200"
                    placeholder="E.g. 2/3 BHK project in Whitefield, Bengaluru"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-slate-600 mb-1">
                    Current monthly ad spend (approx.)
                  </label>
                  <input
                    className="w-full rounded-xl bg-white border border-slate-300 px-3 py-2 text-xs outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-200"
                    placeholder="E.g. ₹1,50,000 / month"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-slate-600 mb-1">
                    What&apos;s not working right now?
                  </label>
                  <textarea
                    className="w-full rounded-xl bg-white border border-slate-300 px-3 py-2 text-xs outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-200 min-h-[90px]"
                    placeholder="Share where you are stuck with leads, site visits or sales..."
                  />
                </div>
                <button
                  type="button"
                  className="btn-primary floating-btn group w-full justify-center mt-2 relative overflow-hidden"
                >
                  <span className="relative z-10">Submit & Request Call</span>
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.8),transparent)] group-hover:translate-x-full transition-transform duration-700 ease-out" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Sticky bottom CTA for mobile */}
      <div className="fixed bottom-3 left-0 right-0 md:hidden z-40 px-4">
        <div className="glass-panel px-3 py-2 flex items-center justify-between">
          <div className="text-[10px] text-slate-600">
            <p className="font-semibold text-slate-900">
              Build your Lead → Site Visit engine
            </p>
            <p className="text-slate-500">
              Limited onboarding slots available this month.
            </p>
          </div>
          <button
            onClick={handlePrimaryCTA}
            className="btn-primary floating-btn group text-[11px] px-3 py-2 relative overflow-hidden"
          >
            <span className="relative z-10">Book Call</span>
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.8),transparent)] group-hover:translate-x-full transition-transform duration-700 ease-out" />
          </button>
        </div>
      </div>
    </div>
  );
}
