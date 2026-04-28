/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Target, 
  Repeat, 
  Users, 
  Database, 
  Activity, 
  MessageSquare, 
  MousePointer2,
  Lock,
  MessageCircle,
  Plus,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

// --- Building Blocks ---

const Section = ({ 
  children, 
  className = "", 
  id = "",
  paddingY = "py-32" 
}: { 
  children: React.ReactNode; 
  className?: string; 
  id?: string;
  paddingY?: string;
}) => (
  <section id={id} className={`${paddingY} px-6 md:px-12 lg:px-24 overflow-hidden border-b border-brand-border ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block py-1 px-3 mb-8 text-[10px] uppercase tracking-[0.25em] font-black border border-brand-border text-brand-mute">
    {children}
  </span>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-brand-mute block mb-4">
    {children}
  </span>
);

const BigHeadline = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h2 className={`text-6xl md:text-8xl font-display font-extrabold tracking-tight leading-[0.85] uppercase mb-12 ${className}`}>
    {children}
  </h2>
);

const SmallHeading = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h3 className={`text-xs uppercase font-bold tracking-[0.25em] mb-12 flex items-center gap-4 ${className}`}>
    <span className="w-8 h-[1px] bg-brand-border"></span>
    {children}
  </h3>
);

// --- Diagrams ---

const FunnelDiagram = ({ points }: { points: string[] }) => (
  <div className="w-full max-w-sm mx-auto flex flex-col gap-[1px] bg-brand-border border border-brand-border">
    {points.map((point, i) => (
      <div 
        key={i} 
        className="h-24 bg-brand-bg flex items-center justify-between px-8 relative group"
        style={{ width: `${100 - (i * 10)}%`, margin: '0 auto' }}
      >
        <span className="text-[10px] uppercase font-bold tracking-widest text-brand-mute">{point}</span>
        {point.toLowerCase().includes('leak') || point.toLowerCase().includes('delay') ? (
          <motion.div 
            animate={{ x: [0, 5], opacity: [1, 0.5, 1] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex items-center gap-2 text-red-500"
          >
            <AlertCircle size={12} />
            <span className="text-[8px] font-black italic">LEAK</span>
          </motion.div>
        ) : <CheckCircle2 size={12} className="opacity-20" />}
      </div>
    ))}
  </div>
);

const FlowDiagram = ({ steps }: { steps: string[] }) => (
  <div className="flex flex-wrap items-center justify-center gap-4 md:gap-2">
    {steps.map((step, i) => (
      <React.Fragment key={i}>
        <div className="border border-brand-border px-4 py-2 bg-brand-dim text-[10px] uppercase font-bold tracking-widest whitespace-nowrap">
          {step}
        </div>
        {i < steps.length - 1 && (
          <div className="w-6 h-[1px] bg-brand-border hidden md:block"></div>
        )}
      </React.Fragment>
    ))}
  </div>
);

// --- Sections ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 border-b border-brand-border bg-brand-bg/90 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex justify-between items-end">
      <div className="font-display font-bold text-xs uppercase tracking-[0.3em]">KHIEW SHEN SHIAN</div>
      <div className="hidden lg:flex gap-12 text-[10px] uppercase tracking-widest font-bold text-brand-mute">
        <a href="#system" className="hover:text-brand-ink transition-colors">The System</a>
        <a href="#proof" className="hover:text-brand-ink transition-colors">Proof</a>
        <a href="#thinking" className="hover:text-brand-ink transition-colors">Philosophy</a>
      </div>
      <a 
        href="#contact" 
        className="text-[10px] uppercase tracking-widest font-bold border border-brand-ink px-6 py-2.5 hover:bg-brand-ink hover:text-brand-bg transition-all"
      >
        Contact
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <Section className="pt-56">
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div className="order-2 lg:order-1">
        <Badge>Khiew Shen Shian — Growth Operator</Badge>
        <h1 className="text-7xl md:text-[84px] font-display font-extrabold tracking-tight leading-[0.85] uppercase mb-12">
          I Fix Broken <br />Conversion <br />Systems
        </h1>
        <p className="text-xl text-brand-mute max-w-lg mb-16 font-medium leading-relaxed">
          Most teams optimise ads. I fix what happens after the lead — where conversion is actually won or lost.
        </p>
        
        <div className="grid grid-cols-3 gap-8 py-12 border-t border-brand-border mb-4">
          {[
            { val: "+16.89%", lab: "Conversion" },
            { val: "28% → 45%", lab: "Verify Rate" },
            { val: "-70%", lab: "Response" }
          ].map((m, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="text-xl md:text-2xl font-mono font-bold text-brand-accent">{m.val}</span>
              <span className="text-[9px] uppercase tracking-widest text-brand-mute font-bold">{m.lab}</span>
            </div>
          ))}
        </div>
        <p className="text-[10px] uppercase tracking-[0.2em] font-mono text-brand-mute/60 mb-12">Most teams don’t measure this. I build systems that do.</p>

        <a href="#proof" className="inline-block bg-brand-ink text-brand-bg px-12 py-4 font-black uppercase text-[11px] tracking-[0.2em] hover:opacity-90 transition-opacity">
          See Case Studies
        </a>
      </div>

      <div className="order-1 lg:order-2 flex justify-center">
        <div className="relative w-full max-w-md aspect-[4/5] bg-brand-dim border border-brand-border overflow-hidden group">
          <img 
            src="/src/assets/images/shenshiankhiew.jpeg" 
            alt="Khiew Shen Shian" 
            className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 to-transparent opacity-60"></div>
          <div className="absolute bottom-8 left-8 text-[10px] font-mono uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
            KHIEWSHENSHIAN
          </div>
        </div>
      </div>
    </div>
  </Section>
);

const Introduction = () => (
  <Section className="bg-brand-dim/30">
    <div className="grid lg:grid-cols-2 gap-24">
      <SectionLabel>Process Override</SectionLabel>
      <div className="space-y-12">
        <p className="text-3xl md:text-4xl font-display font-medium tracking-tight leading-tight">
          Most marketing teams optimise what’s visible. <br />
          I focus on what actually drives revenue — the system after the lead.
        </p>
        <p className="text-lg text-brand-mute font-medium leading-relaxed max-w-xl">
          Conversion doesn’t fail at ads. It fails in response speed, qualification, and handover.
        </p>
        <p className="text-lg text-brand-ink font-bold uppercase tracking-widest text-sm">
          That’s where I work.
        </p>
      </div>
    </div>
  </Section>
);

const Problem = () => (
  <Section id="problem">
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div>
        <SectionLabel>The Diagnostic</SectionLabel>
        <BigHeadline>Marketing Fails <br />After the Lead</BigHeadline>
        <p className="text-xl text-brand-mute mb-12 font-medium">Buying traffic is easy. Converting it is where systems break.</p>
        <div className="space-y-4">
          {['Slow Follow-up Protocols', 'Friction-Heavy Qualification', 'Disconnected Sales Handover'].map((item, i) => (
            <div key={i} className="flex items-center gap-6 py-6 border-b border-brand-border group">
               <span className="text-xs font-mono text-brand-mute opacity-40 group-hover:text-brand-problem transition-colors">0{i+1}</span>
               <span className="text-sm font-black uppercase tracking-widest">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-brand-dim p-12 border border-brand-border relative">
         <div className="absolute top-4 right-4 text-[8px] font-mono text-brand-problem uppercase">System_Leaking</div>
         <FunnelDiagram points={['100% Traffic', 'Capture Delay', 'Weak Qualify', 'Failed Handover', 'Lost Revenue']} />
      </div>
    </div>
  </Section>
);

const System = () => (
  <Section id="system" className="text-center">
    <SectionLabel>The Architecture</SectionLabel>
    <BigHeadline className="mb-24 px-4">A System, Not Campaigns</BigHeadline>
    <div className="p-16 border border-brand-border bg-brand-dim mb-12 overflow-x-auto">
       <FlowDiagram steps={['Ads', 'Intent', 'Follow-up', 'Qualify', 'Allocate', 'Convert', 'Loop']} />
    </div>
    <p className="text-brand-mute text-xs uppercase font-bold tracking-[0.3em]">
      Every stage is engineered. Most teams leave this to chance.
    </p>
  </Section>
);

// --- Visualization Components for Case Studies ---

const CaseDiagram = ({ before, after }: { before: string[], after: string[] }) => (
  <div className="space-y-16 py-8">
    <div className="space-y-6 opacity-60">
      <div className="flex items-center gap-3">
        <span className="text-[9px] uppercase font-black py-1 px-3 border border-brand-border text-brand-problem">Linear / Weak System</span>
        <div className="h-[1px] flex-grow bg-brand-border/20"></div>
      </div>
      <div className="flex items-center justify-between px-2">
        {before.map((s, i) => (
          <React.Fragment key={i}>
            <div className="text-[9px] font-bold uppercase tracking-tighter text-brand-problem">{s}</div>
            {i < before.length - 1 && <div className="h-[1px] w-4 bg-brand-border/20"></div>}
          </React.Fragment>
        ))}
      </div>
    </div>

    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <span className="text-[9px] uppercase font-black bg-brand-accent/10 border border-brand-accent py-1 px-3 text-brand-accent">Engineered System</span>
        <div className="h-[1px] flex-grow bg-brand-accent/40"></div>
      </div>
      <div className="flex items-center justify-between px-2">
        {after.map((s, i) => (
          <React.Fragment key={i}>
            <div className="text-[9px] font-black uppercase tracking-tighter text-brand-ink">{s}</div>
            {i < after.length - 1 && <div className="h-[1px] w-4 bg-brand-accent"></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
);

const CaseStudies = () => {
  const studies = [
    {
      title: "Fixing a Broken Conversion System",
      situation: "Low conversion (~28%). Focus was CPL only. Passive follow-up caused lead decay.",
      insight: "Conversion fails in the gap after capture. A 4-hour delay makes leads cold.",
      decision: "Automated WhatsApp logic. Redesigned sequence. Forced ownership protocols.",
      impact: "+16.89% Conversion | 45% VR",
      before: ['Ads', 'Leads', 'Delay', 'Manual', 'No Owner', 'Lost'],
      after: ['Ads', 'Instant', 'WhatsApp', 'Qualify', 'Owner', 'Conversion'],
      subtext: "Systemic repair of the post-capture void."
    },
    {
      title: "You Don’t Have an Ad Problem. You Have an Intent Problem.",
      situation: "High volume, low quality. Campaigns mixed audiences with mismatched intent triggers.",
      insight: "Efficiency requires matching awareness depth with trust-building sequences.",
      decision: "Segmented by intent. Sequenced: Discovery → USP → Proof.",
      impact: "High-intent lead quality at scale.",
      before: ['Ads', 'Random', 'Mixed', 'Generic', 'Low Intent', 'Fail'],
      after: ['Ads', 'Segment', 'Cold/Warm', 'Sequence', 'High Intent', 'Scale'],
      subtext: "Journeys designed for conversion, not clicks."
    },
    {
      title: "Most Marketers Cannot See This.",
      situation: "Blind optimization. Marketing focused on leads while sales data lived in a silo.",
      insight: "Algorithms cannot solve for revenue if they are blind to the actual sale.",
      decision: "Built feedback loops from CRM to Ads. Fed outcome data back to the machine.",
      impact: "Full-loop growth visibility.",
      before: ['Ads', 'Leads', 'No Track', 'Sales', 'Unknown'],
      after: ['Ads', 'Leads', 'CRM', 'Sale', 'Loop'],
      subtext: "The primary strategic signal for scale."
    }
  ];

  return (
    <Section id="proof" className="bg-brand-bg">
      <div className="mb-24">
        <SectionLabel>Strategic Proof</SectionLabel>
        <BigHeadline>Growth <br />Case Studies</BigHeadline>
      </div>

      <div className="space-y-32">
        {studies.map((study, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start"
          >
            <div className="space-y-12 order-2 lg:order-1">
              <div className="border border-brand-border p-12 bg-brand-dim/30">
                 <div className="flex justify-between items-center mb-12">
                   <h3 className="text-xl font-bold uppercase tracking-tight">{study.title}</h3>
                   <span className="text-[10px] font-mono opacity-30">CASE_0{i + 1}</span>
                 </div>
                 <div className="space-y-10">
                   {[
                     { l: 'Situation', v: study.situation },
                     { l: 'Insight', v: study.insight },
                     { l: 'Decision', v: study.decision }
                   ].map((d, index) => (
                     <div key={index}>
                       <span className="text-[9px] uppercase font-black tracking-widest text-brand-mute block mb-2">{d.l}</span>
                       <p className="text-sm font-medium leading-relaxed opacity-90">{d.v}</p>
                     </div>
                   ))}
                 </div>
              </div>
              <div className="p-10 border border-brand-accent bg-brand-dim group">
                  <span className="text-[9px] uppercase font-black tracking-widest text-brand-mute block mb-4 group-hover:text-brand-accent transition-colors">Impact Signal</span>
                  <p className="text-3xl font-display font-black text-brand-accent leading-none uppercase">{study.impact}</p>
                  <p className="mt-6 text-[10px] uppercase font-bold tracking-widest text-brand-mute">{study.subtext}</p>
              </div>
            </div>

            <div className="border border-brand-border p-8 bg-brand-bg relative min-h-[400px] flex flex-col justify-center order-1 lg:order-2">
              <div className="absolute top-4 right-4 flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></div>
                 <span className="text-[8px] font-black uppercase text-brand-accent tracking-widest">System Engineered</span>
              </div>
              <CaseDiagram before={study.before} after={study.after} />
              {i === 2 && (
                <div className="absolute inset-x-0 bottom-12 flex justify-center pointer-events-none">
                  <div className="w-1/2 h-12 border-b-2 border-l-2 border-r-2 border-brand-accent/20 rounded-b-2xl flex items-end justify-center pb-2">
                    <span className="text-[8px] font-black text-brand-accent uppercase tracking-[0.3em]">Feedback Loop</span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

const SystemsBuilt = () => (
  <Section>
    <SmallHeading>Engineering Library</SmallHeading>
    <p className="text-xs uppercase font-mono text-brand-mute mb-12 tracking-widest pl-12 border-l border-brand-border ml-4">
      These are not tools. These are systems that changed conversion outcomes.
    </p>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-brand-border border border-brand-border">
      {[
        "Lead Qualification System",
        "WhatsApp Automation Flow",
        "Funnel Messaging System",
        "Closed-loop Attribution Model",
        "Lead Allocation System"
      ].map((s, i) => (
        <div key={i} className="p-12 bg-black hover:bg-brand-dim transition-colors group h-48 flex items-center">
           <div className="flex gap-6 items-center">
              <span className="text-xs font-mono opacity-20 group-hover:opacity-100 transition-opacity">0{i+1}</span>
              <span className="text-sm font-black uppercase tracking-[0.2em] leading-snug">{s}</span>
           </div>
        </div>
      ))}
    </div>
  </Section>
);

const Thinking = () => (
  <Section id="thinking">
    <div className="grid lg:grid-cols-2 gap-24">
      <div>
        <SectionLabel>Core Logic</SectionLabel>
        <BigHeadline>Operational <br />Truths</BigHeadline>
      </div>
      <div className="space-y-16 py-12">
        {[
          "Ads don’t drive growth. Systems do.",
          "Lead volume without conversion = wasted spend.",
          "Speed of response is a revenue lever.",
          "Marketing and sales must operate as one system."
        ].map((s, i) => (
          <div key={i} className="border-l-2 border-brand-border pl-8 py-4 group hover:border-brand-accent transition-colors">
            <p className="text-2xl md:text-3xl font-display font-medium tracking-tight leading-tight uppercase group-hover:text-brand-accent transition-colors">
              “{s}”
            </p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

const Diagnostic = () => (
  <Section className="bg-brand-dim/20">
    <div className="max-w-3xl">
      <SectionLabel>Audit</SectionLabel>
      <BigHeadline className="mb-24">Most Teams Don’t Have <br />Answers to These</BigHeadline>
      <div className="space-y-8">
        {[
          "Do you know which campaigns generate actual conversions?",
          "How fast do you respond to leads?",
          "What defines a qualified lead?",
          "Is your follow-up structured or manual?",
          "How does sales feedback reach marketing?",
          "Where do leads drop off?",
          "Who owns the lead after it’s generated?"
        ].map((q, i) => (
           <div key={i} className="flex gap-6 items-start">
             <div className="w-1 h-1 bg-brand-accent mt-2 rounded-full"></div>
             <p className="text-base font-bold uppercase tracking-tight opacity-70 hover:opacity-100 transition-opacity">{q}</p>
           </div>
        ))}
      </div>
      <p className="mt-24 text-brand-mute font-mono text-xs uppercase tracking-widest">
        If these are unclear, the issue isn’t performance — it’s system design.
      </p>
    </div>
  </Section>
);

const CTA = () => (
  <Section id="contact" className="py-48 text-center" paddingY="py-48">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-display font-black uppercase mb-8 px-4">
        If your funnel is leaking, it’s not a traffic problem.
      </h2>
      <h3 className="text-4xl md:text-5xl font-display font-black uppercase mb-24 px-4 text-brand-accent">
        It’s a system problem. <br /> I fix that.
      </h3>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
        <a href="mailto:contact@example.com" className="w-full sm:w-auto px-16 py-6 bg-brand-ink text-brand-bg font-black uppercase text-[11px] tracking-[0.3em] hover:opacity-90 transition-opacity">
          Fix My System
        </a>
      </div>
    </div>
  </Section>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg selection:bg-brand-accent selection:text-brand-bg">
      <Navbar />
      <Hero />
      <Introduction />
      <Problem />
      <System />
      <CaseStudies />
      <SystemsBuilt />
      <Thinking />
      <Diagnostic />
      <CTA />
      
      {/* Texture Layer */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-[100] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>
    </div>
  );
}
