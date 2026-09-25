import React from 'react';

/*
 * Flat hero illustrations in the homepage style (Main.dc.html, viewBox 0 0 560 330):
 * tint #fdf1e9 backdrop, ink #14213d + accent #e26a2c shapes, one skin tone
 * (#d9a07a, shade #c98d68), no gradients, no photos, no emoji.
 */
const INK = '#14213d';
const INK2 = '#2a3a5c';
const ACC = '#e26a2c';
const ACC_D = '#c2521a';
const TINT = '#fdf1e9';
const FLOOR = '#f3e2d4';
const STONE = '#c9c5bd';
const STONE_D = '#a8a39a';
const SKIN = '#d9a07a';
const SKIN_D = '#c98d68';
const RULE = '#e7e2d9';
const NEUTRAL = '#f3f1ed';
const FONT = 'Google Sans, system-ui, sans-serif';

const Frame = ({ id, label, floor = true, children }) => (
  <svg viewBox="0 0 560 330" role="img" aria-label={label} className="lb-illo">
    <defs>
      <clipPath id={`lbclip-${id}`}><rect x="0" y="0" width="560" height="330" rx="24" /></clipPath>
    </defs>
    <g clipPath={`url(#lbclip-${id})`}>
      <rect x="0" y="0" width="560" height="330" fill={TINT} />
      {floor && <rect x="0" y="282" width="560" height="48" fill={FLOOR} />}
      {children}
    </g>
  </svg>
);

/* Person at a laptop asking ChatGPT (the homepage illustration). */
export const AskAi = ({ query = 'best [your business] in Bangkok?' }) => (
  <Frame id="ask-ai" label="Illustration: a person at a laptop asking ChatGPT for a recommendation">
    <rect x="196" y="38" width="320" height="206" rx="14" fill={INK} />
    <rect x="208" y="50" width="296" height="182" rx="7" fill="#ffffff" />
    <circle cx="228" cy="70" r="8" fill={INK} />
    <path d="M224.5 70h7M228 66.5v7" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />
    <text x="244" y="75" fontFamily={FONT} fontSize="13" fontWeight="600" fill={INK}>ChatGPT</text>
    <text x="356" y="126" textAnchor="middle" fontFamily={FONT} fontSize="16" fontWeight="500" fill={INK}>What can I help with?</text>
    <rect x="226" y="158" width="260" height="42" rx="21" fill={NEUTRAL} stroke={RULE} />
    <text x="244" y="184" fontFamily={FONT} fontSize="12.5" fill={INK}>{query}</text>
    <rect x="436" y="171" width="2" height="16" fill={ACC} />
    <circle cx="467" cy="179" r="13" fill={INK} />
    <path d="M467 185v-11M462 178.5l5-5 5 5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M176 244H536L556 262H156Z" fill={STONE} />
    <rect x="156" y="262" width="400" height="7" rx="3" fill={STONE_D} />
    <path d="M14 330C14 262 52 214 118 214C184 214 226 258 234 330Z" fill={ACC} />
    <path d="M186 238C220 246 262 250 300 250" stroke={ACC_D} strokeWidth="30" strokeLinecap="round" fill="none" />
    <ellipse cx="310" cy="250" rx="17" ry="11" fill={SKIN} />
    <rect x="100" y="176" width="36" height="40" rx="12" fill={SKIN_D} />
    <circle cx="118" cy="146" r="46" fill={INK} />
    <ellipse cx="163" cy="152" rx="8" ry="12" fill={SKIN} />
    <path d="M84 110C98 92 138 88 156 108" stroke={INK2} strokeWidth="6" strokeLinecap="round" fill="none" />
  </Frame>
);

/* Article sheet, a navy back card and a magnifier: guides and insights. */
export const Article = () => (
  <Frame id="article" label="Illustration: an article with a chart, under a magnifying glass">
    <rect x="352" y="62" width="150" height="190" rx="14" fill={INK} />
    <rect x="372" y="86" width="84" height="9" rx="4.5" fill="#ffffff" />
    <rect x="372" y="104" width="58" height="9" rx="4.5" fill="#ffffff" />
    <rect x="372" y="130" width="108" height="6" rx="3" fill={INK2} />
    <rect x="372" y="144" width="96" height="6" rx="3" fill={INK2} />
    <rect x="372" y="158" width="104" height="6" rx="3" fill={INK2} />
    <rect x="96" y="36" width="280" height="240" rx="16" fill="#ffffff" stroke={RULE} strokeWidth="1.5" />
    <rect x="122" y="60" width="54" height="16" rx="8" fill={TINT} stroke="#f0c9ae" />
    <rect x="122" y="88" width="190" height="13" rx="6.5" fill={INK} />
    <rect x="122" y="108" width="140" height="13" rx="6.5" fill={INK} />
    <rect x="122" y="134" width="228" height="74" rx="10" fill={INK} />
    <rect x="146" y="176" width="22" height="20" rx="4" fill="#3a4d75" />
    <rect x="180" y="164" width="22" height="32" rx="4" fill="#3a4d75" />
    <rect x="214" y="170" width="22" height="26" rx="4" fill="#3a4d75" />
    <rect x="248" y="156" width="22" height="40" rx="4" fill="#3a4d75" />
    <rect x="282" y="146" width="22" height="50" rx="4" fill={ACC} />
    <rect x="122" y="222" width="228" height="7" rx="3.5" fill={STONE} />
    <rect x="122" y="238" width="200" height="7" rx="3.5" fill={STONE} />
    <rect x="122" y="254" width="150" height="7" rx="3.5" fill={STONE} />
    <path d="M437 250L478 291" stroke={INK} strokeWidth="16" strokeLinecap="round" />
    <circle cx="412" cy="224" r="38" fill="#ffffff" stroke={ACC} strokeWidth="11" />
    <rect x="392" y="214" width="40" height="7" rx="3.5" fill={INK} />
    <rect x="392" y="228" width="28" height="7" rx="3.5" fill={STONE} />
  </Frame>
);

const Emblem = ({ type }) => {
  const w = { stroke: '#ffffff', strokeWidth: 4, strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' };
  switch (type) {
    case 'dental':
      return <path d="M176 127c-6 0-9 5-8 11 1 6 3 9 4 15 1 5 6 5 7 0l2-7 2 7c1 5 6 5 7 0 1-6 3-9 4-15 1-6-2-11-8-11-3 0-4 2-5 2s-2-2-5-2z" fill="#ffffff" />;
    case 'wellness':
      return <><path d="M172 154c0-17 10-27 27-27 0 17-10 27-27 27z" fill="#ffffff" /><path d="M175 151l14-14" stroke={ACC} strokeWidth="2.5" strokeLinecap="round" /></>;
    case 'fertility':
      return <path d="M185 155L171.5 141.5A8 8 0 0 1 185 131A8 8 0 0 1 198.5 141.5Z" fill="#ffffff" />;
    case 'beauty':
      return <path d="M185 123l4.5 12.5L202 140l-12.5 4.5L185 157l-4.5-12.5L168 140l12.5-4.5z" fill="#ffffff" />;
    case 'physiotherapy':
      return <><circle cx="189" cy="126" r="4.5" fill="#ffffff" /><path d="M187 133l-4 11 8 5M183 144l-8 8M191 149l2 8M184 137l10 3M184 137l-8 4" {...w} strokeWidth="3.5" /></>;
    default:
      return <path d="M185 127v26M172 140h26" {...w} strokeWidth="7" />;
  }
};

/* Clinic storefront with an emblem, and a phone asking an AI for a clinic. */
export const Clinic = ({ type }) => (
  <Frame id={`clinic-${type || 'any'}`} label="Illustration: a clinic, and a phone asking an AI assistant for the best clinic nearby">
    <rect x="70" y="100" width="230" height="182" fill="#ffffff" />
    <rect x="58" y="84" width="254" height="28" rx="7" fill={INK} />
    <circle cx="185" cy="140" r="27" fill={ACC} />
    <Emblem type={type} />
    <rect x="92" y="188" width="46" height="38" rx="6" fill={FLOOR} stroke={RULE} />
    <rect x="232" y="188" width="46" height="38" rx="6" fill={FLOOR} stroke={RULE} />
    <rect x="160" y="206" width="50" height="76" rx="7" fill={INK} />
    <circle cx="200" cy="246" r="3" fill={ACC} />
    <path d="M318 76c0-12 9-21 21-21s21 9 21 21c0 16-21 34-21 34s-21-18-21-34z" fill={ACC} />
    <circle cx="339" cy="76" r="8" fill="#ffffff" />
    <rect x="360" y="44" width="150" height="252" rx="24" fill={INK} />
    <rect x="370" y="58" width="130" height="224" rx="15" fill="#ffffff" />
    <rect x="410" y="64" width="50" height="6" rx="3" fill={INK} />
    <rect x="386" y="84" width="104" height="30" rx="15" fill={NEUTRAL} stroke={RULE} />
    <text x="398" y="103" fontFamily={FONT} fontSize="10.5" fill={INK}>best clinic near me?</text>
    <rect x="382" y="126" width="106" height="92" rx="11" fill={TINT} stroke="#f0c9ae" />
    <circle cx="398" cy="145" r="7" fill={ACC} />
    <rect x="412" y="141" width="60" height="8" rx="4" fill={INK} />
    <rect x="394" y="162" width="82" height="6" rx="3" fill={STONE} />
    <rect x="394" y="176" width="70" height="6" rx="3" fill={STONE} />
    <rect x="394" y="196" width="46" height="12" rx="6" fill={INK} />
    <rect x="382" y="230" width="106" height="8" rx="4" fill={NEUTRAL} />
    <rect x="382" y="246" width="84" height="8" rx="4" fill={NEUTRAL} />
  </Frame>
);

/* Two people talking over a laptop: the team. */
export const Team = () => (
  <Frame id="team" label="Illustration: two people talking over a laptop">
    <rect x="44" y="38" width="170" height="60" rx="18" fill="#ffffff" stroke={RULE} strokeWidth="1.5" />
    <rect x="64" y="58" width="110" height="8" rx="4" fill={INK} />
    <rect x="64" y="74" width="76" height="8" rx="4" fill={STONE} />
    <path d="M150 98l14 16 4-16z" fill="#ffffff" />
    <rect x="344" y="30" width="176" height="60" rx="18" fill={INK} />
    <rect x="364" y="50" width="112" height="8" rx="4" fill="#ffffff" />
    <rect x="364" y="66" width="80" height="8" rx="4" fill={ACC} />
    <path d="M394 90l-10 16-6-16z" fill={INK} />
    <path d="M86 282C86 222 118 196 162 196C206 196 238 222 238 282Z" fill={ACC} />
    <rect x="150" y="170" width="26" height="34" rx="11" fill={SKIN_D} />
    <circle cx="163" cy="146" r="34" fill={SKIN} />
    <path d="M129 150A34 34 0 0 1 197 150C190 134 172 128 150 132C140 134 133 140 129 150Z" fill={INK} />
    <path d="M322 282C322 222 354 196 398 196C442 196 474 222 474 282Z" fill={INK} />
    <rect x="385" y="170" width="26" height="34" rx="11" fill={SKIN_D} />
    <circle cx="398" cy="146" r="34" fill={SKIN} />
    <path d="M364 144A34 34 0 0 1 432 144C424 132 404 126 384 130C376 132 369 137 364 144Z" fill={INK2} />
    <rect x="236" y="196" width="88" height="62" rx="8" fill={INK} />
    <circle cx="280" cy="227" r="7" fill={ACC} />
    <rect x="40" y="258" width="480" height="14" rx="7" fill={STONE} />
  </Frame>
);

/* Expo booth feeding leads into a form. */
export const Expo = () => (
  <Frame id="expo" label="Illustration: an expo booth with visitors becoming qualified leads">
    <rect x="46" y="54" width="288" height="200" rx="12" fill="#ffffff" stroke={RULE} strokeWidth="1.5" />
    <rect x="46" y="54" width="288" height="46" rx="12" fill={INK} />
    <rect x="46" y="84" width="288" height="16" fill={INK} />
    <rect x="70" y="70" width="96" height="12" rx="6" fill="#ffffff" />
    <rect x="178" y="70" width="40" height="12" rx="6" fill={ACC} />
    <rect x="130" y="118" width="120" height="66" rx="8" fill={INK} />
    <rect x="148" y="160" width="14" height="14" rx="3" fill="#3a4d75" />
    <rect x="170" y="150" width="14" height="24" rx="3" fill="#3a4d75" />
    <rect x="192" y="142" width="14" height="32" rx="3" fill="#3a4d75" />
    <rect x="214" y="132" width="14" height="42" rx="3" fill={ACC} />
    <rect x="86" y="200" width="208" height="14" rx="6" fill={INK} />
    <rect x="98" y="212" width="184" height="70" rx="6" fill={ACC} />
    <circle cx="398" cy="70" r="14" fill={SKIN} /><path d="M376 116c0-20 10-30 22-30s22 10 22 30z" fill={INK} />
    <circle cx="452" cy="62" r="14" fill={SKIN} /><path d="M430 108c0-20 10-30 22-30s22 10 22 30z" fill={ACC} />
    <circle cx="506" cy="70" r="14" fill={SKIN} /><path d="M484 116c0-20 10-30 22-30s22 10 22 30z" fill={INK2} />
    <path d="M452 126v26M440 142l12 12 12-12" stroke={INK} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <rect x="384" y="166" width="136" height="116" rx="14" fill="#ffffff" stroke={RULE} strokeWidth="1.5" />
    {[190, 220, 250].map((y) => (
      <g key={y}>
        <circle cx="406" cy={y} r="9" fill={TINT} stroke="#f0c9ae" />
        <path d={`M401.5 ${y}l3.5 3.5 6-7`} stroke={ACC} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <rect x="424" y={y - 4} width="78" height="8" rx="4" fill={y === 190 ? INK : STONE} />
      </g>
    ))}
  </Frame>
);

/* Three stacked package cards, the front one ticked. */
export const Packages = () => (
  <Frame id="packages" label="Illustration: three package cards with ticked deliverables">
    <rect x="96" y="78" width="170" height="196" rx="16" fill="#ffffff" stroke={RULE} strokeWidth="1.5" />
    <rect x="118" y="100" width="70" height="10" rx="5" fill={STONE} />
    <rect x="118" y="124" width="120" height="7" rx="3.5" fill={NEUTRAL} />
    <rect x="118" y="140" width="100" height="7" rx="3.5" fill={NEUTRAL} />
    <rect x="180" y="58" width="180" height="216" rx="16" fill="#ffffff" stroke={RULE} strokeWidth="1.5" />
    <rect x="202" y="80" width="80" height="10" rx="5" fill={INK2} />
    <rect x="202" y="104" width="130" height="7" rx="3.5" fill={NEUTRAL} />
    <rect x="202" y="120" width="110" height="7" rx="3.5" fill={NEUTRAL} />
    <rect x="274" y="36" width="200" height="246" rx="18" fill="#ffffff" stroke={RULE} strokeWidth="1.5" />
    <rect x="274" y="36" width="200" height="62" rx="18" fill={INK} />
    <rect x="274" y="80" width="200" height="18" fill={INK} />
    <rect x="296" y="56" width="96" height="11" rx="5.5" fill="#ffffff" />
    <rect x="296" y="74" width="60" height="9" rx="4.5" fill={ACC} />
    {[124, 158, 192].map((y, i) => (
      <g key={y}>
        <path d={`M298 ${y}l6 6 11-12`} stroke={ACC} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <rect x="326" y={y - 4} width={[120, 100, 112][i]} height="9" rx="4.5" fill={INK} />
      </g>
    ))}
    <rect x="296" y="228" width="156" height="34" rx="17" fill={ACC} />
  </Frame>
);

/* A policy sheet behind a navy shield with an orange lock. */
export const Privacy = () => (
  <Frame id="privacy" label="Illustration: a policy document protected by a shield and lock">
    <rect x="118" y="40" width="210" height="244" rx="16" fill="#ffffff" stroke={RULE} strokeWidth="1.5" />
    <rect x="142" y="66" width="120" height="12" rx="6" fill={INK} />
    {[98, 114, 130, 154, 170, 186, 210, 226].map((y, i) => (
      <rect key={y} x="142" y={y} width={[160, 140, 150, 160, 120, 150, 140, 100][i]} height="7" rx="3.5" fill={STONE} />
    ))}
    <path d="M378 96L446 120V174C446 222 416 254 378 270C340 254 310 222 310 174V120Z" fill={INK} />
    <path d="M364 172v-12a14 14 0 0 1 28 0v12" stroke={ACC} strokeWidth="7" strokeLinecap="round" fill="none" />
    <rect x="352" y="170" width="52" height="42" rx="8" fill={ACC} />
    <circle cx="378" cy="188" r="5" fill="#ffffff" />
    <rect x="376" y="190" width="4" height="12" rx="2" fill="#ffffff" />
  </Frame>
);

/* A folded map with a dashed route and a pin: page not found. */
export const Lost = () => (
  <Frame id="lost" label="Illustration: a folded map with a dashed route and a question-mark pin">
    <path d="M78 76L200 56L320 76L442 56V262L320 282L200 262L78 282Z" fill="#ffffff" stroke={RULE} strokeWidth="1.5" />
    <path d="M200 56V262M320 76V282" stroke={RULE} strokeWidth="1.5" />
    <path d="M200 56L320 76V282L200 262Z" fill={NEUTRAL} />
    <path d="M108 250C150 214 186 238 226 200S300 150 350 160" stroke={ACC} strokeWidth="5" strokeLinecap="round" strokeDasharray="2 12" fill="none" />
    <circle cx="108" cy="250" r="8" fill={INK} />
    <path d="M386 142c-22-22-40-42-40-64a40 40 0 0 1 80 0c0 22-18 42-40 64z" fill={INK} />
    <text x="386" y="92" textAnchor="middle" fontFamily={FONT} fontSize="40" fontWeight="700" fill="#ffffff">?</text>
    <ellipse cx="386" cy="150" rx="16" ry="5" fill={STONE} />
  </Frame>
);

const map = { AskAi, Article, Clinic, Team, Expo, Packages, Privacy, Lost };

/** <Illustration name="Clinic" type="dental" /> */
const Illustration = ({ name, ...props }) => {
  const C = map[name] || AskAi;
  return <C {...props} />;
};

export default Illustration;
