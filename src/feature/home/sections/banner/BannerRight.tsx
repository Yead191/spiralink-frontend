"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function BannerRight() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };
  return (
    <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-6 lg:p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Tell us what you need.</h2>
        <h2 className="text-3xl font-bold text-gray-400">
          We&apos;ll build it.
        </h2>
      </div>

      <form className="space-y-6">
        {/* Section 1: About you */}
        <div className="space-y-4">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleAccordion(1)}
          >
            <h3 className="text-[#A78BFA] font-medium">1. About you</h3>
            {/* <ChevronDown className="w-4 h-4 text-gray-500" /> */}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs text-gray-400 ml-1">First name*</label>
              <input
                type="text"
                placeholder="John"
                className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#A78BFA] transition-colors"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-gray-400 ml-1">Last name*</label>
              <input
                type="text"
                placeholder="Smith"
                className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#A78BFA] transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs text-gray-400 ml-1">Work email*</label>
            <input
              type="email"
              placeholder="john.smith@example.com"
              className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#A78BFA] transition-colors"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-gray-400 ml-1">
              Phone number <span className="text-gray-600">(optional)</span>
            </label>
            <input
              type="tel"
              placeholder="Only if email doesn't reach you"
              className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#A78BFA] transition-colors"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-gray-400 ml-1">Company name*</label>
            <input
              type="text"
              placeholder="ABC Company"
              className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#A78BFA] transition-colors"
            />
          </div>
        </div>

        {/* Section 2: Your operation */}
        <div className="space-y-4 pt-4 border-t border-white/5">
          <div className="flex items-center justify-between">
            <h3 className="text-[#A78BFA] font-medium">2. Your operation</h3>
          </div>

          <div className="space-y-1">
            <label className="text-xs text-gray-400 ml-1">
              What&apos;s currently breaking with your phone support?
            </label>
            <div className="relative">
              <select className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#A78BFA] transition-colors appearance-none text-gray-300">
                <option>Volume overwhelming our team</option>
                <option>High operational costs</option>
                <option>Poor customer experience</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs text-gray-400 ml-1">
              What do customers mostly call about?
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className="bg-[#7c3aed] text-white px-3 py-1.5 rounded-full text-xs font-medium"
              >
                Password resets
              </button>
              <button
                type="button"
                className="bg-[#111] border border-white/10 text-gray-300 px-3 py-1.5 rounded-full text-xs font-medium hover:bg-white/5"
              >
                Delivery tracking
              </button>
              <button
                type="button"
                className="bg-[#111] border border-white/10 text-gray-300 px-3 py-1.5 rounded-full text-xs font-medium hover:bg-white/5"
              >
                Billing questions
              </button>
            </div>
          </div>

          <div className="space-y-1">
            <textarea
              placeholder="Use your own words. Be specific. This helps us build something that actually works."
              rows={3}
              className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#A78BFA] transition-colors resize-none"
            ></textarea>
          </div>

          <div className="space-y-1">
            <label className="text-xs text-gray-400 ml-1">
              What platform does your team use?
            </label>
            <div className="relative">
              <select className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#A78BFA] transition-colors appearance-none text-gray-300">
                <option>Zendesk</option>
                <option>Salesforce</option>
                <option>HubSpot</option>
                <option>Intercom</option>
                <option>Other</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs text-gray-400 ml-1">
              How many inbound calls per month?
            </label>
            <div className="relative">
              <select className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#A78BFA] transition-colors appearance-none text-gray-300">
                <option>Under 1,000</option>
                <option>1,000 - 5,000</option>
                <option>5,000 - 10,000</option>
                <option>10,000+</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Section 3: Demo Preferences */}
        <div className="space-y-4 pt-4 border-t border-white/5">
          <h3 className="text-[#A78BFA] font-medium">3. Demo Preferences</h3>
          <div className="space-y-1">
            <label className="text-xs text-gray-400 ml-1">
              What language should the AI speak?
            </label>
            <div className="relative">
              <select className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#A78BFA] transition-colors appearance-none text-gray-300">
                <option>Dutch (Netherlands)</option>
                <option>English (US)</option>
                <option>English (UK)</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-xs text-gray-400 ml-1">
              Preferred accent?
            </label>
            <div className="relative">
              <select className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#A78BFA] transition-colors appearance-none text-gray-300">
                <option>Dutch: Standard/Neutral</option>
                <option>Standard</option>
                <option>Friendly</option>
                <option>Professional</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Section 4: Decision Context */}
        <div className="space-y-4 pt-4 border-t border-white/5">
          <h3 className="text-[#A78BFA] font-medium">4. Decision Context</h3>
          <div className="space-y-1">
            <label className="text-xs text-gray-400 ml-1">
              Who needs to see this working before you can move forward?
            </label>
            <div className="relative">
              <select className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#A78BFA] transition-colors appearance-none text-gray-300">
                <option>Just me (I decide)</option>
                <option>My manager/boss</option>
                <option>The board/CEO</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
            <p className="text-[10px] text-[#A78BFA] cursor-pointer hover:underline mt-1 ml-1">
              Helps us know the timeline
            </p>
          </div>
        </div>

        {/* Section 5: Additional Context */}
        <div className="space-y-4 pt-4 border-t border-white/5">
          <h3 className="text-[#A78BFA] font-medium">5. Additional Context</h3>
          <div className="space-y-1">
            <label className="text-xs text-gray-400 ml-1">
              What&apos;s currently breaking with your phone support?
            </label>
            <div className="relative">
              <select className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#A78BFA] transition-colors appearance-none text-gray-300">
                <option>Volume overwhelming our team</option>
                <option>High costs</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs text-gray-400 ml-1">
              What do customers mostly call about?
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className="bg-[#7c3aed] text-white px-3 py-1.5 rounded-full text-xs font-medium"
              >
                Specific workflows
              </button>
              <button
                type="button"
                className="bg-[#111] border border-white/10 text-gray-300 px-3 py-1.5 rounded-full text-xs font-medium hover:bg-white/5"
              >
                Compliance requirements
              </button>
              <button
                type="button"
                className="bg-[#111] border border-white/10 text-gray-300 px-3 py-1.5 rounded-full text-xs font-medium hover:bg-white/5"
              >
                Integration details
              </button>
            </div>
          </div>

          <div className="space-y-1">
            <textarea
              placeholder="The more context, the better we can build. But skip this if you prefer"
              rows={3}
              className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#A78BFA] transition-colors resize-none"
            ></textarea>
          </div>
        </div>

        {/* Section 6: Source */}
        <div className="space-y-4 pt-4 border-t border-white/5">
          <h3 className="text-[#A78BFA] font-medium">6. Source</h3>
          <div className="space-y-1">
            <label className="text-xs text-gray-400 ml-1">
              How did you find us?
            </label>
            <div className="relative">
              <select className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#A78BFA] transition-colors appearance-none text-gray-300">
                <option>LinkedIn</option>
                <option>Google Search</option>
                <option>Referral</option>
                <option>Other</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="pt-6">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] hover:opacity-90 text-white font-semibold py-4 rounded-full transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)]"
          >
            Request Free Demo
          </button>
          <p className="text-center text-xs text-gray-500 mt-3">
            Prefer to email first?{" "}
            <a
              href="mailto:hello@spiralink.com"
              className="text-white hover:underline"
            >
              hello@spiralink.com
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
