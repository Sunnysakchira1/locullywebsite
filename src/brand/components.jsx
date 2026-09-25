import React from 'react';
import { Link } from 'react-router-dom';

/* Brand v2 building blocks. Styles live in src/brand/brand.css (scoped under .lb). */

export const CTA_LABEL = 'Get my free AI visibility check';

const cx = (...c) => c.filter(Boolean).join(' ');

/** Scroll to the page's lead form (#book, else legacy #contact); otherwise go to the homepage form. */
export const goToLeadForm = (e) => {
  if (typeof document === 'undefined') return;
  const target = document.getElementById('book') || document.getElementById('contact');
  if (e) e.preventDefault();
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    window.location.href = '/#contact';
  }
};

/** Page wrapper: brand scope + fixed-nav spacer. */
export const Page = ({ children, className }) => (
  <div className={cx('lb lb-page', className)}>
    <div className="lb-nav-spacer" />
    {children}
  </div>
);

/**
 * Button. variant: primary (default) | outline | text.
 * Pass `to` for a router link, `href` for an anchor, or neither for a <button>.
 * `cta` makes it the site-wide lead-form CTA (label + #book anchor).
 */
export const Button = ({ variant = 'primary', size, block, to, href, cta, children, className, onClick, ...rest }) => {
  const cls = cx(
    variant === 'outline' ? 'lb-btn-o' : variant === 'text' ? 'lb-tlink' : 'lb-btn',
    size === 'sm' && 'sm',
    block && 'block',
    className,
  );
  const content = (
    <>
      {cta && !children ? CTA_LABEL : children}
      {variant === 'text' && <span aria-hidden="true">→</span>}
    </>
  );
  if (cta) {
    return (
      <a href="#book" className={cls} onClick={(e) => { if (onClick) onClick(e); goToLeadForm(e); }} {...rest}>
        {content}
      </a>
    );
  }
  if (to) return <Link to={to} className={cls} onClick={onClick} {...rest}>{content}</Link>;
  if (href) return <a href={href} className={cls} onClick={onClick} {...rest}>{content}</a>;
  return <button type="button" className={cls} onClick={onClick} {...rest}>{content}</button>;
};

/** Primary CTA with the optional muted note underneath. */
export const Cta = ({ note, center, className, children }) => (
  <div className={cx(center ? 'lb-ctarow' : 'lb-hero-cta', className)}>
    <Button cta>{children}</Button>
    {note && <p className="lb-cta-note">{note}</p>}
  </div>
);

/** Full-width band. alt = warm off-white, tight = 64px, narrow = 860px column. */
export const Section = ({ alt, tight, narrow, id, className, children, as: Tag = 'section', ...rest }) => (
  <Tag id={id} className={cx('lb-sec', alt && 'alt', tight && 'tight', className)} {...rest}>
    <div className={narrow ? 'lb-wn' : 'lb-w'}>{children}</div>
  </Tag>
);

/** Centred eyebrow + keyword H2 + one lede line. */
export const SectionHeader = ({ eyebrow, title, lede, left, className, style, as: H = 'h2' }) => (
  <div className={cx('lb-shead', left && 'left', className)} style={style}>
    {eyebrow && <span className="lb-eyebrow">{eyebrow}</span>}
    {title && <H className="lb-h2">{title}</H>}
    {lede && <p className="lb-lede">{lede}</p>}
  </div>
);

/** Breadcrumb trail. items: [{ label, to? }] — last item is the current page. */
export const Breadcrumb = ({ items }) => (
  <nav aria-label="Breadcrumb" className="lb-crumbs">
    <div className="lb-w">
      <ol>
        {items.map((it, i) => (
          <li key={i}>
            {it.to && i < items.length - 1
              ? <Link to={it.to}>{it.label}</Link>
              : <span aria-current={i === items.length - 1 ? 'page' : undefined}>{it.label}</span>}
          </li>
        ))}
      </ol>
    </div>
  </nav>
);

/** Sub-page hero: left-aligned eyebrow, H1, lede, CTA. No section header. */
export const PageHero = ({ eyebrow, meta, title, lede, children, aside, as: Tag = 'header' }) => (
  <Tag className="lb-hero">
    <div className={cx('lb-w', aside && 'lb-split')}>
      <div style={{ maxWidth: aside ? undefined : 860 }}>
        {meta}
        {eyebrow && <span className="lb-eyebrow">{eyebrow}</span>}
        <h1 className="lb-h1">{title}</h1>
        {lede && <p className="lb-lede">{lede}</p>}
        {children}
      </div>
      {aside && <div>{aside}</div>}
    </div>
  </Tag>
);

/** Two-colour 54px line icons (accent + ink). */
export const Icon = ({ name, className = 'lb-ic' }) => {
  const A = '#e26a2c';
  const I = '#14213d';
  const p = { stroke: A, strokeWidth: 2.5, strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' };
  const q = { ...p, stroke: I };
  const shapes = {
    search: <><circle cx="17" cy="17" r="12" {...p} /><path d="M26 26L36 36" {...q} /></>,
    chart: <><path d="M6 30V13M14 30V6M22 30V17M30 30V10" {...p} /><path d="M4 36H36" {...q} /></>,
    target: <><circle cx="20" cy="20" r="15" {...q} /><circle cx="20" cy="20" r="7.5" {...p} /><circle cx="20" cy="20" r="2" fill={A} /></>,
    doc: <><path d="M9 4h15l7 7v25H9z" {...q} /><path d="M15 18h11M15 24h11M15 30h7" {...p} /></>,
    link: <><path d="M17 23l6-6" {...p} /><path d="M14 20l-4 4a5.5 5.5 0 0 0 7.8 7.8l4-4M26 20l4-4a5.5 5.5 0 0 0-7.8-7.8l-4 4" {...q} /></>,
    chat: <><path d="M5 8h30v20H17l-8 7v-7H5z" {...q} /><path d="M12 16h16M12 21h10" {...p} /></>,
    code: <><path d="M14 12L6 20l8 8M26 12l8 8-8 8" {...q} /><path d="M22 8l-4 24" {...p} /></>,
    pin: <><path d="M20 36s11-10.5 11-19a11 11 0 0 0-22 0c0 8.5 11 19 11 19z" {...q} /><circle cx="20" cy="17" r="4" {...p} /></>,
    users: <><circle cx="15" cy="13" r="6" {...q} /><path d="M4 34c0-6 5-10 11-10s11 4 11 10" {...q} /><path d="M27 8a5 5 0 0 1 0 10M30 24c4 1.5 6 5 6 10" {...p} /></>,
    shield: <><path d="M20 4l13 5v10c0 8-5.5 14-13 17C12.5 33 7 27 7 19V9z" {...q} /><path d="M14 20l4.5 4.5L27 16" {...p} /></>,
    spark: <><path d="M20 5l3.5 10.5L34 19l-10.5 3.5L20 33l-3.5-10.5L6 19l10.5-3.5z" {...q} /><path d="M32 4v6M29 7h6" {...p} /></>,
    layers: <><path d="M20 5L35 13 20 21 5 13z" {...q} /><path d="M5 20l15 8 15-8M5 27l15 8 15-8" {...p} /></>,
    globe: <><circle cx="20" cy="20" r="15" {...q} /><path d="M5 20h30M20 5c5 5 5 25 0 30M20 5c-5 5-5 25 0 30" {...p} /></>,
    trend: <><path d="M5 30l10-10 7 6L35 11" {...p} /><path d="M26 11h9v9" {...q} /></>,
    bot: <><rect x="7" y="12" width="26" height="20" rx="5" {...q} /><path d="M20 5v7M15 21v2M25 21v2M15 27h10" {...p} /></>,
    calendar: <><rect x="5" y="8" width="30" height="27" rx="4" {...q} /><path d="M5 16h30M13 4v8M27 4v8" {...p} /></>,
    mail: <><rect x="5" y="9" width="30" height="22" rx="4" {...q} /><path d="M6 11l14 11 14-11" {...p} /></>,
    tick: <><circle cx="20" cy="20" r="15" {...q} /><path d="M13 20.5l5 5L28 15" {...p} /></>,
  };
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      {shapes[name] || shapes.spark}
    </svg>
  );
};

export const Tick = () => (
  <svg className="lb-tick" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M4 10.5L8 14.5L16 5.5" stroke="#e26a2c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** White card with rule border. */
export const Card = ({ small, className, children, as: Tag = 'div', ...rest }) => (
  <Tag className={cx('lb-card', small && 'sm', className)} {...rest}>{children}</Tag>
);

/** Service card: icon + card title + body. */
export const ServiceCard = ({ icon, title, children, headingAs: H = 'h3', small, className }) => (
  <Card small={small} className={className}>
    {icon && <Icon name={icon} />}
    <H className={small ? 'lb-h3' : 'lb-h3-card'}>{title}</H>
    {typeof children === 'string' ? <p>{children}</p> : children}
  </Card>
);

/** Bordered figure with caption. */
export const Figure = ({ src, alt, caption, crop, dark, className, children, imgProps }) => (
  <figure className={cx('lb-fig', crop && 'crop', dark && 'dark', className)}>
    <div className="lb-frame">
      {children || <img src={src} alt={alt} loading="lazy" {...imgProps} />}
    </div>
    {caption && <figcaption>{caption}</figcaption>}
  </figure>
);

/** Navy results panel. stats: [{ n, l }]. */
export const ProofPanel = ({ label, big, sub, stats, children, className }) => (
  <div className={cx('lb-proof', className)}>
    {label && <div className="lb-proof-lab">{label}</div>}
    {big && <div className="lb-proof-big">{big}</div>}
    {sub && <p className="lb-proof-sub">{sub}</p>}
    {children && <div className="lb-proof-body">{children}</div>}
    {stats && stats.length > 0 && (
      <div className="lb-proof-row">
        {stats.map((s, i) => (
          <div key={i}>
            <div className="lb-proof-n">{s.n}</div>
            <div className="lb-proof-l">{s.l}</div>
          </div>
        ))}
      </div>
    )}
  </div>
);

/** Light stat row. stats: [{ n, l }] */
export const StatRow = ({ stats, className, style }) => (
  <div className={cx('lb-stats', className)} style={style}>
    {stats.map((s, i) => (
      <div className="lb-stat" key={i}>
        <span className="lb-stat-n">{s.n}</span>
        <span className="lb-stat-l">{s.l}</span>
      </div>
    ))}
  </div>
);

/** <details> FAQ. items: [{ q, a }]. First item open. qAs: element for the question text. */
export const FAQ = ({ items, qAs: Q = 'span', className }) => (
  <div className={cx('lb-faq', className)}>
    {items.map((it, i) => (
      <details className="lb-qa" key={i} open={i === 0}>
        <summary>
          <Q className="lb-qa-q">{it.q}</Q>
          <span className="lb-pm" aria-hidden="true" />
        </summary>
        <div className="lb-qa-a">{typeof it.a === 'string' ? <p>{it.a}</p> : it.a}</div>
      </details>
    ))}
  </div>
);

/** Bulleted list. variant: dot (default) | dash */
export const List = ({ items, dash, large, className }) => (
  <ul className={cx('lb-list', dash && 'dash', large && 'lg', className)}>
    {items.map((it, i) => <li key={i}>{it}</li>)}
  </ul>
);

/** Numbered process stage. */
export const Stage = ({ n, title, children, figure, headingAs: H = 'h3' }) => (
  <div className={cx('lb-stage', !figure && 'text-only')}>
    {figure ? (
      <>
        <div>
          <div className="lb-num">{n}</div>
          <H className="lb-h3-stage">{title}</H>
          {typeof children === 'string' ? <p>{children}</p> : children}
        </div>
        {figure}
      </>
    ) : (
      <>
        <div><div className="lb-num">{n}</div></div>
        <div>
          <H className="lb-h3-stage">{title}</H>
          {typeof children === 'string' ? <p>{children}</p> : children}
        </div>
      </>
    )}
  </div>
);

/** Required disclaimer under any results. */
export const ResultsNote = ({ children }) => (
  <p className="lb-proof-note">
    {children || 'Results are shown without client names. Figures come from each client’s booking records, GA4 or ads account. Results depend on your market, budget and starting position — no agency can promise a model will name you.'}
  </p>
);
