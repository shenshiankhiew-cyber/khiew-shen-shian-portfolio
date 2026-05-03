/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Download, 
  ExternalLink, 
  CheckCircle2, 
  Zap, 
  Target, 
  MessageSquare, 
  TrendingDown, 
  TrendingUp, 
  Clock, 
  Database,
  BarChart3,
  Globe,
  Mail,
  Linkedin,
  ChevronDown
} from 'lucide-react';

const GreenText = ({ children }: { children: React.ReactNode }) => (
  <span className="text-brand">{children}</span>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="text-brand font-display font-bold tracking-widest text-xs uppercase mb-4"
  >
    {children}
  </motion.div>
);

const StatCard = ({ val, label, sub }: { val: string, label: string, sub: string }) => (
  <motion.div 
    whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
    className="premium-border bg-surface-lighter p-6 rounded-lg"
  >
    <div className="text-3xl font-display font-bold text-brand mb-1">{val}</div>
    <div className="text-white font-medium mb-1">{label}</div>
    <div className="text-xs text-gray-500 leading-tight">{sub}</div>
  </motion.div>
);

const CaseStudy = ({ title, before, after, situational, problem, insight, system, impact, id }: any) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="premium-border bg-surface-lighter/50 rounded-xl overflow-hidden mb-6" id={id}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/5 transition-colors"
      >
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 bg-brand/10 text-brand text-[10px] font-bold uppercase rounded-full">Case Study</span>
            <h3 className="text-2xl font-display font-bold">{title}</h3>
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="flex items-center gap-2">
              <TrendingDown className="w-4 h-4 text-red-400" />
              <span className="text-gray-400 text-sm">Before: {before}</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-brand" />
              <span className="text-brand text-sm font-bold">After: {after}</span>
            </div>
          </div>
        </div>
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-gray-500"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-white/5 overflow-hidden"
          >
            <div className="p-8 grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Situation</h4>
                  <p className="text-gray-300">{situational}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">The Real Problem</h4>
                  <p className="text-gray-300">{problem}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand uppercase tracking-wider mb-2">The Insight</h4>
                  <p className="text-white font-medium italic">"{insight}"</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">System Built</h4>
                  <div className="flex flex-wrap gap-2">
                    {system.map((item: string) => (
                      <span key={item} className="px-3 py-1 bg-white/5 premium-border rounded text-xs text-gray-300">{item}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">The Outcome</h4>
                  <p className="text-brand text-xl font-display font-medium leading-relaxed">{impact}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen selection:bg-brand selection:text-black">
      {/* SECTION 1: HERO */}
      <header className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <div className="premium-border inline-block px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest text-brand uppercase mb-8 bg-brand/5">
            OPEN TO SENIOR ROLES
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.95] tracking-tighter mb-8">
            I Don't <GreenText>Just</GreenText> Run Ads. <br />
            I <GreenText>Build Systems</GreenText> That Convert.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light mb-12 leading-relaxed">
            Senior Performance Marketing Specialist with a track record of fixing full-funnel conversion leaks — from ad signal to closed lead — at IQI Global.
          </p>

          <div className="flex flex-wrap gap-4 mb-20">
            <motion.a 
              href="#case-studies"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand text-black px-8 py-4 rounded font-bold flex items-center gap-2"
            >
              View My Work <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a 
              href="https://drive.google.com/file/d/1mtJ0PvjPUkvS4MFdd89D0rKNW-V2X00R/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
              className="px-8 py-4 premium-border rounded font-bold text-gray-400 flex items-center gap-2"
            >
              Download CV <Download className="w-4 h-4" />
            </motion.a>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            <StatCard 
              val="55%" 
              label="CAC Reduction" 
              sub="RM120 → RM53.74 · IQI Global Summit Campaign" 
            />
            <StatCard 
              val="+61%" 
              label="Lead Verification" 
              sub="28% → 45% · Recruitment Funnel" 
            />
            <StatCard 
              val="80%" 
              label="Efficiency Gain" 
              sub="3–6 hrs → ~1 hr/day Response Workload" 
            />
            <StatCard 
              val="103%" 
              label="Over Target" 
              sub="203 downloads · RM198 total spend" 
            />
          </motion.div>
        </motion.div>
        
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 blur-[120px] rounded-full -mr-64 -mt-64 pointer-events-none" />
      </header>

      <div className="section-divider" />

      {/* SECTION 2: WHO I AM */}
      <section className="py-24 px-6 max-w-7xl mx-auto" id="who-i-am">
        <SectionLabel>THE CANDIDATE</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-display font-bold max-w-3xl mb-16 leading-tight">
          I'm the marketer who <GreenText>asks why leads are leaking</GreenText> — not just how to get more.
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="premium-border w-10 h-10 rounded-full flex items-center justify-center mb-6">
              <Globe className="w-5 h-5 text-brand" />
            </div>
            <h3 className="text-xl font-bold">Background</h3>
            <p className="text-gray-400 leading-relaxed">
              Senior Performance Marketing Specialist at IQI Global. 3+ years building and optimizing full-funnel conversion systems across Meta, TikTok, Google, and WhatsApp automation.
            </p>
          </div>
          <div className="space-y-4">
            <div className="premium-border w-10 h-10 rounded-full flex items-center justify-center mb-6">
              <Database className="w-5 h-5 text-brand" />
            </div>
            <h3 className="text-xl font-bold">Approach</h3>
            <p className="text-gray-400 leading-relaxed">
              I connect ad strategy with automation, CRM hygiene, lead routing, and conversion tracking. I don't stop at the click — I follow the lead all the way to close.
            </p>
          </div>
          <div className="space-y-4">
            <div className="premium-border w-10 h-10 rounded-full flex items-center justify-center mb-6">
              <Zap className="w-5 h-5 text-brand" />
            </div>
            <h3 className="text-xl font-bold">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {['Meta Ads', 'TikTok Ads', 'Google Ads', 'GA4', 'GSC', 'Power BI', 'Tableau', 'HubSpot', 'Salesforce', 'Brevo', 'Semrush', 'WhatsApp API', 'Python basics'].map(tool => (
                <span key={tool} className="px-2 py-1 bg-white/5 premium-border rounded text-[10px] font-bold uppercase text-gray-500 whitespace-nowrap">{tool}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* SECTION 3: THE ORIGIN STORY */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-surface-lighter/30">
        <SectionLabel>WHERE IT STARTED</SectionLabel>
        <h2 className="text-5xl font-display font-bold mb-12">The <GreenText>Functional Illusion</GreenText>.</h2>
        
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <p className="text-xl text-gray-400 leading-relaxed font-light">
              When I stepped into my role as Senior Performance Marketing Specialist at IQI Global, the system looked functional on the surface — ads were running, leads were coming in, and teams were contributing content.
            </p>
            <p className="text-xl text-gray-400 leading-relaxed font-light">
              But when I looked deeper, the process was fragmented. Content was driven by intuition rather than data. Ads focused on branding instead of conversion. Most leads were unqualified, and follow-up depended entirely on manual effort from interns and telemarketers.
            </p>
          </div>
          <div className="border-l-4 border-brand pl-8 py-4">
            <blockquote className="text-3xl font-display font-medium leading-snug">
              "The verification rate was <GreenText>28%</GreenText> — meaning most leads we paid for were not genuinely interested."
            </blockquote>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE DIAGNOSIS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <SectionLabel>THE REAL PROBLEM</SectionLabel>
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="p-8 premium-border bg-surface-lighter rounded-xl">
            <Target className="w-10 h-10 text-brand mb-6" />
            <h3 className="text-xl font-bold mb-4">WRONG INTENT ATTRACTED</h3>
            <p className="text-gray-400">Ads were pulling in curious browsers, not people ready to commit to a commission-based real estate career.</p>
          </div>
          <div className="p-8 premium-border bg-surface-lighter rounded-xl">
            <MessageSquare className="w-10 h-10 text-brand mb-6" />
            <h3 className="text-xl font-bold mb-4">EXPECTATIONS NOT SHAPED</h3>
            <p className="text-gray-400">Nothing in the funnel explained what joining IQI Global actually meant — so leads dropped off after submission.</p>
          </div>
          <div className="p-8 premium-border bg-surface-lighter rounded-xl">
            <Clock className="w-10 h-10 text-brand mb-6" />
            <h3 className="text-xl font-bold mb-4">MANUAL SYSTEM, NO SCALE</h3>
            <p className="text-gray-400">Every lead required a human to follow up. No automation. No routing logic. Speed was the casualty.</p>
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-3xl md:text-6xl font-display font-medium tracking-tight">
            This wasn't an ads problem. <br />
            It was a <GreenText>conversion system</GreenText> problem — from input to outcome.
          </h3>
        </div>
      </section>

      <div className="section-divider" />

      {/* SECTION 5: THE MINDSET SHIFT */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <SectionLabel>THE SHIFT</SectionLabel>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="p-12 premium-border bg-white/5 rounded-2xl flex flex-col items-center justify-center text-center">
            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">OLD QUESTION</div>
            <div className="text-2xl font-light italic">"Which ad performs better?"</div>
          </div>
          <div className="p-12 border-2 border-brand bg-brand/5 rounded-2xl flex flex-col items-center justify-center text-center">
            <div className="text-xs font-bold text-brand uppercase tracking-widest mb-4">NEW QUESTION</div>
            <div className="text-3xl font-display font-bold">"Where are we losing people — and why?"</div>
          </div>
        </div>
        <div className="text-center text-gray-400 font-medium">
          Instead of optimizing isolated parts, I started mapping the entire system: 
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            {['Signal', 'Intent', 'Qualification', 'Response', 'Routing', 'Conversion'].map((step, i, arr) => (
              <React.Fragment key={step}>
                <span className="text-white font-bold">{step}</span>
                {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-brand" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* SECTION 6: HOW I FIX THE INPUT */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <SectionLabel>THE INPUT SYSTEM</SectionLabel>
        <h2 className="text-5xl font-display font-bold mb-8">Most teams jump to creative. <br /><GreenText>I start with demand.</GreenText></h2>
        
        <div className="max-w-3xl mb-16">
          <p className="text-xl text-gray-400 leading-relaxed">
            I use search data and behavioral signals to find what people are actually worried about before they enter real estate — income expectations, fear of commission-based roles, uncertainty about career switching. I map each signal to a human motivation and combine it with ad performance data, telemarketer feedback, and conversion patterns.
          </p>
        </div>

        <div className="premium-border bg-surface-lighter p-8 md:p-12 rounded-3xl mb-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="space-y-1">
              <div className="text-3xl font-display font-medium">Search Signal</div>
            </div>
            <div className="text-4xl font-light text-gray-700 md:-mt-2">+</div>
            <div className="space-y-1">
              <div className="text-3xl font-display font-medium">Fear/Desire Mapping</div>
            </div>
            <div className="text-4xl font-light text-gray-700 md:-mt-2">+</div>
            <div className="space-y-1">
              <div className="text-3xl font-display font-medium">Conversion Data</div>
            </div>
            <div className="text-4xl font-light text-brand md:-mt-2 px-4">=</div>
            <div className="text-4xl font-display font-bold text-brand">= Campaign Angle That Converts</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {['GA4', 'GSC', 'Semrush', 'Meta Ad Library', 'Telemarketer Feedback', 'Social Performance'].map(source => (
            <div key={source} className="flex items-center gap-2 px-4 py-2 premium-border rounded-full text-xs font-medium text-gray-400">
              <div className="w-1.5 h-1.5 rounded-full bg-brand" />
              {source}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: WHAT I BUILT */}
      <section className="py-24 px-6 max-w-7xl mx-auto" id="case-studies">
        <div className="mb-16">
          <SectionLabel>SUCCESS EVIDENCE</SectionLabel>
          <h2 className="text-5xl font-display font-bold">Flagship Projects</h2>
        </div>

        <CaseStudy 
          title="IQI Global — Recruitment Funnel System"
          before="VR 28%, Response 3-6hrs/day"
          after="VR 45%, Response ~1hr/day"
          situational="IQI Global needed more quality sign-ups from people who wanted to become real estate agents."
          problem="Leads came from Meta, TikTok, Google, and website forms, but verification was weak and response speed depended on human availability."
          insight="The real leakage happened after the lead submitted — not before."
          system={['Data-backed ad ideation', 'WhatsApp automation', 'Lead form filtering', 'Website chatbot', 'Performance-based lead routing', 'Missing lead tracker']}
          impact="VR 28% → 45% · Response workload cut ~75% · Overall conversion +16.89%"
        />

        <CaseStudy 
          title="IQI Global — International Summit Funnel"
          before="CAC RM120, Low transactions"
          after="CAC RM53.74, 93 leads"
          situational="Campaign needed to attract investors and business owners to a global real estate summit."
          problem="The ad wasn't the problem — the landing page failed to answer why join, who should join, and what value attendees get."
          insight="The landing page is the expectation-shaper. If it fails to answer 'What's in it for me', the ad money is wasted."
          system={['Audience journey review', 'Landing page revamp', 'EDM list cleaning', 'Retargeting pool', 'Reminder sequence']}
          impact="CAC RM120 → RM53.74 · 93 total leads generated"
        />

        <CaseStudy 
          title="IQI Global / Taco — Ebook Lead System"
          before="Target 100 downloads, paid-only"
          after="203 downloads, RM0.98 CPD"
          situational="Campaign launched to drive downloads for a real estate career guide ebook."
          problem="The target was 100 downloads with a heavy reliance on cold paid traffic which was driving costs up."
          insight="Strongest audience was the existing community, not cold traffic."
          system={['Paid ads', 'Social content', 'Writer articles', 'EDM', 'Community push', 'Cross-team collab']}
          impact="203 downloads (103% over target) · Total spend RM198.09 · CPD RM0.98"
        />

        <div className="mt-8 p-6 border-2 border-brand/20 bg-brand/5 rounded-xl border-dashed">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-brand" />
            <span className="text-brand font-bold text-lg">Benchmark: Industry avg CPD via paid SEA: RM5–15+. Achieved: RM0.98 — ~10x more efficient.</span>
          </div>
        </div>
      </section>

      {/* SECTION 8: HOW I THINK TODAY */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <SectionLabel>MY OPERATING PRINCIPLES</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-20 max-w-4xl mx-auto">
          I don't see ads as a function. <br /><GreenText>I see them as signals.</GreenText>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            "Attract the right intent, not just volume",
            "Shape expectations before the lead submits",
            "Respond fast, route smart, track everything"
          ].map((principle, i) => (
            <div key={i} className="p-10 premium-border rounded-2xl bg-surface-lighter flex flex-col items-center justify-center">
              <div className="text-brand mb-6">
                {i === 0 && <Target className="w-10 h-10" />}
                {i === 1 && <MessageSquare className="w-10 h-10" />}
                {i === 2 && <Zap className="w-10 h-10" />}
              </div>
              <p className="text-xl font-bold leading-tight">{principle}</p>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <h3 className="text-4xl md:text-7xl font-display font-medium tracking-tighter italic">
            "The biggest growth didn't come from better ads alone — it came from fixing <GreenText>both</GreenText> the input and the <GreenText>system</GreenText> that converts it."
          </h3>
        </div>
      </section>

      <div className="section-divider" />

      {/* SECTION 9: SKILLS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <SectionLabel>WHAT I BRING</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Performance Marketing",
              sub: "Meta, TikTok, Google, LinkedIn",
              icon: <BarChart3 className="w-6 h-6" />
            },
            {
              title: "Conversion System Design",
              sub: "WhatsApp automation, chatbot, routing",
              icon: <Zap className="w-6 h-6" />
            },
            {
              title: "Data & Insight",
              sub: "GA4, GSC, Power BI, Tableau, Semrush",
              icon: <Database className="w-6 h-6" />
            },
            {
              title: "Lifecycle & CRM",
              sub: "HubSpot, Salesforce, Brevo, EDM",
              icon: <Mail className="w-6 h-6" />
            }
          ].map((skill, i) => (
            <div key={i} className="p-8 premium-border bg-surface-lighter rounded-xl">
              <div className="text-brand mb-6">{skill.icon}</div>
              <h3 className="text-xl font-bold mb-2 leading-tight">{skill.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{skill.sub}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* SECTION 10: CTA */}
      <section className="py-32 px-6 max-w-4xl mx-auto text-center" id="contact">
        <SectionLabel>LET'S TALK</SectionLabel>
        <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tighter">
          Is Your Marketing Team Ready for a <GreenText>Systems Thinker</GreenText>?
        </h2>
        <p className="text-xl text-gray-400 mb-12 leading-relaxed">
          I'm currently exploring senior roles in performance marketing, growth, or marketing operations. If you're building a team that cares about full-funnel conversion — not just CPL — I'd love to have a conversation.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <motion.a 
            href="https://my.linkedin.com/in/shen-shian-khiew-8ba02520a"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand text-black px-12 py-5 rounded-full font-bold flex items-center gap-2 text-lg shadow-lg shadow-brand/20"
          >
            Connect on LinkedIn <Linkedin className="w-5 h-5" />
          </motion.a>
          <motion.a 
            href="https://drive.google.com/file/d/1mtJ0PvjPUkvS4MFdd89D0rKNW-V2X00R/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
            className="px-12 py-5 premium-border rounded-full font-bold text-gray-300 flex items-center gap-2 text-lg"
          >
            Download CV <Download className="w-5 h-5" />
          </motion.a>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-white/5 text-center text-gray-600 text-sm">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          <span>&copy; 2025 Khiew Shen Shian</span>
          <span className="hidden md:block">|</span>
          <span>Senior Performance Marketing Specialist</span>
          <span className="hidden md:block">|</span>
          <span className="text-brand/50">Available for Senior Roles</span>
        </div>
      </footer>
    </div>
  );
}
