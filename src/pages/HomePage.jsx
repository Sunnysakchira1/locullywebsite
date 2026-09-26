import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import Footer from '@/components/Footer';
import {
  Page, Section, SectionHeader, Button, Cta, ServiceCard, Figure, FAQ, Tick,
} from '@/brand/components';
import LeadForm from '@/brand/LeadForm';
import { ASK_CHATGPT_ILLO } from '@/data/homeSvgs';
import '@/brand/pages/home.css';

/* Homepage — ported from the signed-off mockup (homepage-redesign-2026-09/artboards, v24).
   Copy is claims-checked and approved: change it only through ai-claims-guard-cft. */

const URL = 'https://www.locully.org/';
const TITLE = 'Locully | SEO, GEO & Performance Marketing Agency in Bangkok';
const DESCRIPTION = 'Locully is an SEO and GEO agency in Bangkok, Thailand. We help your business get found on Google, ChatGPT and AI Overviews, and turn that into customers.';
const ORG_ID = 'https://www.locully.org/#organization';


const logos = [
  { src: '/images/home/logos/gfc.jpg', alt: 'Genesis Fertility Center' },
  { src: '/images/home/logos/cosmo.jpg', alt: 'The Cosmo Clinic' },
  { src: '/images/home/logos/achyut.jpg', alt: 'Achyut Bhavan' },
  { src: '/images/home/logos/valuation.jpg', alt: 'Valuation Master Class' },
  { src: '/images/home/logos/investors.jpg', alt: 'Investors Clinic' },
  { src: '/images/home/logos/akira.jpg', alt: 'Akira Pattaya' },
  { src: '/images/home/logos/eataly.jpg', alt: 'Eataly Soi 8' },
  { src: '/images/home/logos/amorretto.jpg', alt: 'Amorretto Cafe & Bistro' },
];

const reviews = [
  {
    src: '/images/home/reviews/review-vincent-d.png',
    alt: 'Five-star review from Vincent D, Managing Director of a beauty clinic in Bangkok: “We started working with Locully around five months ago for SEO services, and the results have been outstanding. Since then, we’ve seen a significant increase in inquiries — messages, emails, form submissions, and phone calls. Their team has done an excellent job, and we plan to continue partnering with them as we further strengthen our rankings.”',
  },
  {
    src: '/images/home/reviews/review-phakjira.png',
    alt: 'Five-star review from Phakjira, owner of an Indian restaurant in Bangkok and Pattaya: “Working with Locully has been a game changer for our restaurant. Their strategies helped us increase our visibility, attract more customers, and build a strong online presence. We’ve seen a noticeable growth since partnering with them. Their team is professional, creative, and helpful. We highly recommend their services to anyone looking to grow their brand.”',
  },
  {
    src: '/images/home/reviews/review-ireen.png',
    alt: 'Review from Ireen, restaurant owner: “Local SEO transformed our restaurant. We ranked for ‘Italian Restaurant Pattaya’. Footfall increased dramatically, people started talking about us more, we started filling out. Couldn’t recommend Sunny and his team any higher!”',
  },
];

const offer = [
  { t: 'A live GEO dashboard', d: 'Your own login. Which prompts name you, which name a competitor, tracked over time — not a screenshot in a PDF.' },
  { t: 'Monthly citation placements', d: 'Mentions earned on the third-party sites the models already quote in your category. Delivered as live URLs you can click.' },
  { t: 'Technical SEO and schema', d: 'Crawler access, site speed, structure, internal links and structured data that helps Google understand your business.' },
  { t: 'Content written to be quoted', d: 'Pages that answer the buying questions directly, in the format a model can lift. Written in English and Thai where it matters.' },
  { t: 'Site architecture and internal linking', d: 'A structure that shows Google and AI engines what you do, and which page answers which question.' },
  { t: 'A monthly enquiry report', d: 'Calls, forms and bookings, and what each one cost. Plain English, no vanity charts.' },
  {
    t: 'Direct access to Sunny',
    d: 'The person who builds your strategy is the person who answers your messages. No account manager layer.',
    link: { to: '/about', label: 'About Locully' },
  },
];

const faqs = [
  {
    q: 'What does AI search work actually involve?',
    a: 'The same technical and content work a good SEO agency does, plus a second job: making sure AI assistants can read your site, trust your business, and quote you when someone asks them for a recommendation. In practice that means crawler access, structured data, quotable pages and mentions on the third-party sources the models already cite.',
  },
  {
    q: 'What is generative engine optimisation (GEO)?',
    a: 'GEO — also called answer engine optimisation — is optimising to be named inside an AI answer rather than ranked in a list of links. Google still matters and we still do classic SEO. GEO is the layer on top, and it is still early days for it in Bangkok.',
  },
  {
    q: 'How long before we see enquiries?',
    a: 'Month one is measurement, so nothing moves in it. In our AI search work so far, citations have usually started to move in months two to four — some take longer. Google rankings usually take three to six months for a competitive Bangkok term. Ads usually start bringing enquiries in the first month once tracking is live.',
  },
  {
    q: 'Can you guarantee ChatGPT will recommend my business?',
    a: 'No, and be careful with anyone who says otherwise. The models pick their own sources and change them without warning. What we can do is measure where you stand today, fix what stops you being quotable, earn the mentions that make you citable, and show you the movement every month.',
  },
  {
    q: 'How much does Locully cost?',
    a: 'It depends on scope, and we quote after the free call. Bangkok SEO retainers vary widely, so compare what is actually delivered each month, not just the fee.',
  },
  {
    q: 'Do you work with businesses outside Thailand?',
    a: 'Yes. Most clients are Bangkok-based, and we run work in Singapore too. Measurement is set up per market, because AI answers and search results differ by country.',
  },
  {
    q: 'Who owns the accounts and the data?',
    a: 'You do, from day one. Ad accounts, analytics, Search Console and Google Business Profile are all in your name, and your dashboard data is yours to export. If we stop working together you keep every one of them.',
  },
  {
    q: 'What do I get in the free GEO audit?',
    a: "Send us your website. Within five working days you get a report: we run your customers' real buying questions through ChatGPT, Perplexity and Google AI and show you where you appear, who gets named instead of you, and what we would fix first. It is yours to keep, whether or not you hire us.",
  },
];

const schemaWebsite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.locully.org/#website',
  url: URL,
  name: 'Locully',
  description: DESCRIPTION,
  inLanguage: 'en',
  publisher: { '@id': ORG_ID },
};

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${URL}#faq`,
  url: URL,
  isPartOf: { '@id': 'https://www.locully.org/#website' },
  about: { '@id': ORG_ID },
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

/** Vertical VSL: one click layer toggles play/pause; once started it stops 64px
    above the bottom so the native controls stay reachable. Orange progress bar on top. */
const Vsl = () => {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const [progress, setProgress] = useState(0);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused || v.ended) {
      const p = v.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    } else {
      v.pause();
    }
  };

  return (
    <div className="lbh-vwrap">
      <video
        ref={ref}
        className="lbh-video"
        controls
        playsInline
        preload="none"
        poster="https://jyzmhv9lp5ywshyh.public.blob.vercel-storage.com/media/locully-vsl-poster-1080-vXkZAWH3jcLea8c0YXXro1ZejIz2xs.jpg"
        src="https://jyzmhv9lp5ywshyh.public.blob.vercel-storage.com/media/locully-vsl-1080-JfHqvpdJjfI7fQEBvBAMN3gukroLqj.mp4"
        aria-label="Locully video: how we get Bangkok businesses found on Google and named by ChatGPT"
        onPlay={() => { setPlaying(true); setStarted(true); }}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onTimeUpdate={(e) => {
          const v = e.currentTarget;
          if (v.duration) setProgress(v.currentTime / v.duration);
        }}
      />
      <div className="lbh-vprog" aria-hidden="true">
        <div className="lbh-vprog-f" style={{ width: `${(progress * 100).toFixed(2)}%` }} />
      </div>
      <button
        type="button"
        className={`lbh-vplay${started ? ' started' : ''}${playing ? ' playing' : ''}`}
        aria-label={playing ? 'Pause the Locully video' : 'Play the Locully video, 2 minutes 23 seconds'}
        onClick={toggle}
      >
        <span className="lbh-vplay-c" aria-hidden="true">
          <svg viewBox="0 0 26 30" fill="none"><path d="M25 15L1 29.3V0.7L25 15Z" fill="#ffffff" /></svg>
        </span>
        <span className="lbh-vplay-l" aria-hidden="true">Watch · 2:23</span>
      </button>
    </div>
  );
};

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={URL} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <script type="application/ld+json">{JSON.stringify(schemaWebsite)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFaq)}</script>
      </Helmet>

      <Page className="lbh-page">
        {/* 1 · Above the fold: text + CTA left, vertical VSL right */}
        <header id="top" className="lbh-hero">
          <div className="lb-w lbh-hero-grid">
            <div className="lbh-hero-text">
              <h1 className="lb-h1">Get found wherever your customers search.</h1>
              <p className="lb-lede">
                Locully is a Bangkok-based SEO and AI Search agency helping businesses turn visibility across Google and AI platforms into customers and revenue.
              </p>
              <Cta
                className="lbh-hero-cta"
                note="We run your customers' real questions through ChatGPT, Perplexity and Google AI, then show you who gets named instead of you. Free, and yours to keep."
              />
            </div>
            <div className="lbh-hero-media">
              <Vsl />
            </div>
          </div>
        </header>

        {/* Social proof: client logo marquee */}
        <section className="lbh-logos" aria-labelledby="lbh-logos-label">
          <div className="lb-w lbh-logos-head">
            <p id="lbh-logos-label" className="lbh-logos-label">Some of the businesses we've worked with</p>
          </div>
          {/* Focusable so keyboard users can pause the scroll (focus-within pauses it). */}
          <div className="lbh-marq" tabIndex={0} role="region" aria-label="Client logos (scrolling; focus or hover to pause)">
            <ul className="lbh-marq-track">
              {logos.map((l) => (
                <li className="lbh-logo" key={l.src}><img src={l.src} alt={l.alt} width="178" height="89" /></li>
              ))}
              {logos.map((l) => (
                <li className="lbh-logo" key={`${l.src}-dup`} aria-hidden="true"><img src={l.src} alt="" width="178" height="89" /></li>
              ))}
            </ul>
          </div>
          <div className="lb-w">
            <div className="lbh-trust">
              <span><b>Founded</b> 2020 · <b>Rebranded</b> 2025</span>
              <span><b>Bangkok</b> · Thailand and Singapore</span>
            </div>
          </div>
        </section>

        {/* 2 · What we do */}
        <Section alt id="services">
          <SectionHeader
            eyebrow="What we do"
            title="SEO, GEO and ads. All three end in enquiries."
            lede="Traffic is easy to report. We report calls, forms and bookings, and what each one cost."
          />
          <div className="lb-g3">
            <ServiceCard icon="search" title="SEO">
              <p>Technical fixes, content, authority and strategy to help you rank for the searches that drive customers.</p>
              <p className="lbh-card-link"><Button variant="text" to="/seo/">Explore SEO</Button></p>
            </ServiceCard>
            <ServiceCard icon="chart" title="AI search (GEO)">
              <p>Generative engine optimisation — the work that makes you easier to name when someone asks ChatGPT, Perplexity, Gemini or Google AI Overviews for the best in your category. Measured monthly, not guessed at.</p>
              <p className="lbh-card-link"><Button variant="text" to="/geo/">Explore AI search</Button></p>
            </ServiceCard>
            <ServiceCard icon="target" title="Google Ads & Meta Ads">
              <p>Search, Performance Max and paid social, run for cost per customer rather than cost per click. Useful while SEO builds, and worth keeping once it has.</p>
              <p className="lbh-card-link"><Button variant="text" to="/performance-marketing/">Explore performance marketing</Button></p>
            </ServiceCard>
          </div>
        </Section>

        {/* 2b · Pull marketing */}
        <Section>
          <SectionHeader className="lbh-sh-30" eyebrow="Pull marketing" title="Stop chasing people who aren't looking." />
          <div className="lbh-pull-copy">
            <p>Most marketing starts with an audience and pushes a message at them. We prefer to start with demand.</p>
            <p>Someone needs a dentist. A hotel. A property. A supplier. They search Google, ask an AI or respond to an ad at the moment the need exists.</p>
            <p className="lbh-em">We make sure our clients are there when that happens.</p>
          </div>
          <div className="lbh-pull-flow" role="img" aria-label="Need, then search or ask, then discover, then trust, then enquire">
            {['Need', 'Search / Ask', 'Discover', 'Trust', 'Enquire'].map((step, i, all) => (
              <React.Fragment key={step}>
                <span className={`lbh-pf${i === all.length - 1 ? ' last' : ''}`}>{step}</span>
                {i < all.length - 1 && (
                  <span className="lbh-pf-arrow" aria-hidden="true">
                    <span className="lbh-pf-arrow-d">→</span><span className="lbh-pf-arrow-m">↓</span>
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
          <p className="lbh-pull-close">That is why SEO, AI search and ads sit in one team: they are three ways of being there when the need shows up.</p>
        </Section>

        {/* 3 · Why this matters now */}
        <Section alt>
          <SectionHeader
            eyebrow="Why this matters now"
            title="Your customers don't search in one place anymore."
          />
          <div className="lbh-problem">
            <div>
              <p>Some Google it. Some check Maps. Some ask ChatGPT, Gemini or Perplexity.</p>
              <p>The channel changes. The intent doesn't: they need something, they're looking for the right business, and somebody gets chosen.</p>
              <p className="lbh-em">Locully's job is to make sure you're visible at those moments of demand.</p>
              <p className="lbh-problem-link">
                <Button variant="text" cta>See who ChatGPT names instead of you</Button>
              </p>
            </div>
            <div>
              <svg
                className="lbh-illo"
                viewBox="0 0 560 330"
                role="img"
                aria-label="Illustration: a person at a laptop asking ChatGPT for the best business in Bangkok"
                dangerouslySetInnerHTML={{ __html: ASK_CHATGPT_ILLO }}
              />
            </div>
          </div>
        </Section>

        {/* 4 · Who it's for */}
        <Section tight>
          <SectionHeader className="lbh-sh-44" eyebrow="Who it's for" title="Who Locully works with." lede="Here is the honest line." />
          <div className="lb-g2">
            <div className="lb-fit yes">
              <h3 className="lb-h3">A good fit if</h3>
              <ul className="lb-list">
                <li>Your customers already search for what you sell: clinics, hospitality, property, professional services and more</li>
                <li>You can name what one new customer is worth to you</li>
                <li>You want enquiries, and you are willing to be measured on them</li>
                <li>Someone on your side can approve content and give us account access</li>
                <li>You're prepared to give SEO and AI search enough time to compound, typically six months or more</li>
              </ul>
            </div>
            <div className="lb-fit no">
              <h3 className="lb-h3">Not a fit if</h3>
              <ul className="lb-list dash">
                <li>You want guaranteed rankings or a guaranteed ChatGPT mention. Nobody can sell you that honestly</li>
                <li>You need enquiries this week. That is an ads problem, and we will say so</li>
                <li>You want a full rebrand, a new website build or social media managed day to day</li>
                <li>You want to direct the strategy yourself and have us execute tickets</li>
                <li>Marketing spend is under ฿30,000 a month</li>
              </ul>
            </div>
          </div>
          <p className="lbh-more"><Button variant="text" to="/industries/">See the industries we work with</Button></p>
        </Section>

        {/* 5 · How it works */}
        <Section alt id="how">
          <SectionHeader
            className="lbh-sh-24"
            eyebrow="How it works"
            title="How Locully turns search visibility into customers"
            lede="Four steps, whether the work is SEO, AI search or ads. You see step one free, before you pay a baht."
          />

          <div className="lb-stage lbh-stage">
            <div>
              <div className="lb-num">01</div>
              <h3 className="lb-h3-stage">Measure</h3>
              <p className="lbh-lead">We find out where you stand before we build anything.</p>
              <ul className="lbh-bl">
                <li>We agree the real buying questions your customers ask</li>
                <li>We check where you rank on Google, and whether ChatGPT, Perplexity and Google AI name you</li>
                <li>We check your tracking, so every enquiry can be counted</li>
                <li>You see where you appear, where you don't, and who wins instead</li>
              </ul>
            </div>
            <Figure
              dark
              crop
              src="/images/home/evidence/prompt-tracker.jpg"
              alt="Prompt tracker showing eleven buying prompts with run history and visibility percentages"
              imgProps={{ width: 1362, height: 1464 }}
              caption={<>A real tracker from a Bangkok clinic. Eleven buying prompts, fourteen runs each. <b>Three are tagged LOST</b> — we show those too, because a number you cannot lose is not a measurement.</>}
            />
          </div>

          <div className="lb-stage lbh-stage">
            <div>
              <div className="lb-num">02</div>
              <h3 className="lb-h3-stage">Fix</h3>
              <p className="lbh-lead">The unglamorous part, and often where the first movement comes from.</p>
              <ul className="lbh-bl">
                <li>Technical and indexation issues</li>
                <li>Site architecture and internal linking</li>
                <li>Content gaps across your buying queries</li>
              </ul>
            </div>
            <div className="lbh-fixcard">
              <div className="lbh-fixcard-t">What gets fixed first</div>
              <ul className="lbh-bl">
                <li>Pages search and AI engines can't retrieve or understand</li>
                <li>Missing or incorrect structured data</li>
                <li>Weak entity signals, so Google and AI aren't sure who you are</li>
                <li>Blocked crawlers and indexation errors</li>
              </ul>
            </div>
          </div>

          <div className="lb-stage lbh-stage">
            <div>
              <div className="lb-num">03</div>
              <h3 className="lb-h3-stage">Place</h3>
              <p className="lbh-lead">AI models quote sources they already trust.</p>
              <ul className="lbh-bl">
                <li>We find the directories, roundups, review sites and press your customers and AI engines trust</li>
                <li>We earn you a place in them: links for Google, mentions for AI</li>
                <li>Every placement comes back to you as a live URL</li>
              </ul>
            </div>
            <Figure
              src="/images/home/evidence/ai-cited-domains.jpg"
              alt="Table of every domain cited by AI in a category, with the client and a competitor tagged"
              imgProps={{ width: 1708, height: 976 }}
              caption={<>Every site the AI cited in one category, ranked. <b>This is the list we earn you a place on</b> — named domains, not a promise.</>}
            />
          </div>

          <div className="lb-stage lbh-stage">
            <div>
              <div className="lb-num">04</div>
              <h3 className="lb-h3-stage">Report</h3>
              <p className="lbh-lead">One number we report on: enquiries.</p>
              <ul className="lbh-bl">
                <li>A live dashboard you can log into any time</li>
                <li>A monthly report in plain English</li>
                <li>Enquiries, and what each one cost</li>
                <li>What we did, and what we do next</li>
              </ul>
            </div>
            <Figure
              src="/images/home/evidence/ai-visibility-dashboard.jpg"
              alt="GEO dashboard showing mention rate, average rank, citations and competitor share of voice"
              imgProps={{ width: 2472, height: 1160 }}
              caption={<>A client view from a GEO tracker, November 2025. <b>This clinic took 25% of competitor mentions</b> — the highest of every hospital and clinic tracked.</>}
            />
          </div>
          <div className="lbh-how-links">
            <Button variant="text" to="/seo/">See how SEO works</Button>
            <Button variant="text" to="/geo/">See how GEO works</Button>
          </div>
        </Section>

        {/* 6b · Testimonials */}
        <Section>
          <SectionHeader className="lbh-sh-44" eyebrow="In their words" title="What our clients say." lede="Three clients, in their own words." />
          <div className="lbh-reviews">
            {reviews.map((r) => (
              <figure className="lbh-rv" key={r.src}>
                <img src={r.src} alt={r.alt} width="1200" height="840" loading="lazy" />
              </figure>
            ))}
          </div>
        </Section>

        {/* 7 · Offer stack */}
        <Section alt>
          <SectionHeader
            className="lbh-sh-46"
            eyebrow="What you get"
            title="What's in every SEO and AI search retainer."
            lede="No tiers of access, no add-ons we spring on you in month three."
          />
          <div className="lbh-stack-wrap">
            <div className="lb-stack">
              {offer.map((o) => (
                <div className="lb-si" key={o.t}>
                  <Tick />
                  <div>
                    <div className="lb-si-t">{o.t}</div>
                    <div className="lb-si-d">
                      {o.d}
                      {o.link && <> <Button variant="text" to={o.link.to} className="lbh-si-link sm">{o.link.label}</Button></>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Cta center />
          </div>
        </Section>

        {/* 10 · FAQ */}
        <Section id="faq">
          <SectionHeader className="lbh-sh-40" eyebrow="FAQ" title="Questions businesses ask us." />
          <FAQ qAs="h3" items={faqs} />
        </Section>

        {/* 11 · Lead form */}
        <LeadForm
          alt={false}
          eyebrow="AI audit"
          title="Find out if ChatGPT already recommends you."
          lede="Send us your website. Within five working days we send you a report on where you appear in Google and AI answers, who gets named instead of you, and what we would fix first. Free, and yours to keep."
          subject="New AI Visibility Check Request — Locully homepage"
          idPrefix="home"
          footer={<p className="lbh-more"><Button variant="text" to="/audit/">See what the AI audit covers</Button></p>}
        />

        <Footer />
      </Page>
    </>
  );
}
