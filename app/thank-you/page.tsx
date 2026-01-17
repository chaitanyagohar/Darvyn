"use client";

import { useEffect } from "react";
import Link from "next/link";
import { CheckCircle, Calendar, ArrowLeft, Mail } from "lucide-react";

export default function ThankYouPage() {
  
  // --- CONVERSION TRACKING LOGIC ---
  useEffect(() => {
    // 1. Fire Meta Pixel 'Lead' Event
    // @ts-ignore
    if (typeof window !== "undefined" && window.fbq) {
      // @ts-ignore
      window.fbq("track", "Lead");
      // @ts-ignore
      window.fbq("track", "Schedule"); // Optional: Tracks as a "Schedule" event too
    }

    // 2. Fire Google Tag Manager Event
    // @ts-ignore
    if (typeof window !== "undefined" && window.dataLayer) {
      // @ts-ignore
      window.dataLayer.push({
        event: "meeting_scheduled", // Use this Trigger Name in GTM
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
        
        {/* Top Banner */}
        <div className="bg-emerald-50 p-8 text-center border-b border-emerald-100">
          <div className="mx-auto h-20 w-20 bg-emerald-100 rounded-full flex items-center justify-center mb-4 shadow-sm">
            <CheckCircle className="h-10 w-10 text-emerald-600" />
          </div>
          <h1 className="text-3xl font-black text-slate-900">
            Meeting Confirmed!
          </h1>
          <p className="text-emerald-700 font-bold mt-2 text-lg">
            You're all set for the growth gameplan.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-8 space-y-8">
          
          <div className="space-y-4">
            <p className="text-slate-600 text-center font-medium leading-relaxed">
              We have sent a calendar invitation to your email. Please check your inbox (and spam folder) to confirm the details.
            </p>
          </div>

          {/* Next Steps Box */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
            <p className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-2">
              What happens next?
            </p>
            
            <div className="flex gap-4">
              <div className="h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-sky-600" />
              </div>
              <div>
                <p className="font-bold text-slate-900">Check Your Email</p>
                <p className="text-sm text-slate-500">A confirmation link has been sent.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                <Calendar className="h-5 w-5 text-indigo-600" />
              </div>
              <div>
                <p className="font-bold text-slate-900">Prepare Questions</p>
                <p className="text-sm text-slate-500">Write down your current project challenges.</p>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <Link 
            href="/"
            className="group w-full flex items-center justify-center gap-2 bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-all"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            Return to Homepage
          </Link>

        </div>
      </div>
    </div>
  );
}