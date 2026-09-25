import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import Footer from '@/components/Footer';
import { posts } from '@/data/blogData';
import { Page, Breadcrumb, PageHero, Section, SectionHeader } from '@/brand/components';
import LeadForm from '@/brand/LeadForm';
import { Article } from '@/brand/Illustrations';
import '@/brand/pages/blog.css';

export default function BlogIndexPage() {
  const formatDate = (iso) => new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

  const schemaBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.locully.org' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.locully.org/blog/' },
    ],
  };

  const schemaItemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Locully Blog — AI Search Optimization for Clinics',
    numberOfItems: posts.length,
    itemListElement: posts.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://www.locully.org/blog/${p.slug}/`,
      name: p.title,
    })),
  };

  // Feature the AI Search Statistics pillar as the top article; fall back to first post.
  const FEATURED_SLUG = 'ai-search-statistics';
  const pillar = posts.find((p) => p.slug === FEATURED_SLUG) || posts[0];
  const rest = posts.filter((p) => p !== pillar);

  return (
    <>
      <Helmet>
        <title>Blog — AI Search Optimization Insights for Clinics | Locully</title>
        <meta name="description" content="Guides, explainers, and checklists on AI search optimization for Thailand clinics — how to get recommended by ChatGPT, Perplexity, and Google AI." />
        <meta property="og:title" content="Blog — AI Search Optimization Insights for Clinics | Locully" />
        <meta property="og:description" content="Guides, explainers, and checklists on AI search optimization for Thailand clinics." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.locully.org/blog/" />
        <link rel="canonical" href="https://www.locully.org/blog/" />
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaItemList)}</script>
      </Helmet>

      <Page className="lbp-blog-index">
        <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Blog' }]} />

        {/* Page header */}
        <PageHero
          eyebrow="Insights"
          title="Locully Blog"
          lede="Practical guides on how Thailand clinics get recommended by ChatGPT, Perplexity, and Google AI Overviews."
          visual={<Article />}
        />

        {/* Featured (pillar) post */}
        <Section alt>
          <div className="lbp-blog-featured-tag">
            <span className="lb-tag">Featured · Pillar Guide</span>
          </div>

          <div className="lbp-blog-featured">
            <div>
              <div className="lbp-blog-meta">
                <span className="lb-label">{pillar.category}</span>
                <span className="lbp-blog-meta-item"><Clock style={{ width: 14, height: 14 }} aria-hidden="true" />{pillar.readTime}</span>
                <span className="lbp-blog-meta-item"><Calendar style={{ width: 14, height: 14 }} aria-hidden="true" />{formatDate(pillar.publishDate)}</span>
              </div>

              <h2 className="lbp-blog-featured-title">{pillar.title}</h2>
              <p>{pillar.excerpt}</p>
              <Link to={`/blog/${pillar.slug}/`} className="lb-tlink lbp-blog-stretch">
                Read the guide <ArrowRight style={{ width: 16, height: 16 }} aria-hidden="true" />
              </Link>
            </div>

            <div className="lbp-blog-side">
              {(pillar.relatedPosts || []).slice(0, 4).map((slug) => {
                const p = posts.find((x) => x.slug === slug);
                if (!p) return null;
                return (
                  <Link key={slug} to={`/blog/${slug}/`} className="lb-chip">
                    <span>{p.category}</span>
                    <ArrowRight style={{ width: 14, height: 14, flexShrink: 0 }} aria-hidden="true" />
                  </Link>
                );
              })}
            </div>
          </div>
        </Section>

        {/* All posts grid */}
        <Section>
          <SectionHeader eyebrow="All Articles" title="Every guide, explained" />

          <div className="lb-g3">
            {rest.map((post) => (
              <article key={post.slug} className="lbp-blog-card">
                <div className="lbp-blog-card-top">
                  <span className="lb-tag">{post.category}</span>
                  <span className="lbp-blog-read"><Clock style={{ width: 13, height: 13 }} aria-hidden="true" />{post.readTime}</span>
                </div>

                <h2 className="lbp-blog-card-title">{post.title}</h2>

                <p>{post.excerpt}</p>

                <div className="lbp-blog-card-foot">
                  <span>{formatDate(post.publishDate)}</span>
                  <Link to={`/blog/${post.slug}/`} className="lb-tlink sm lbp-blog-stretch">
                    Read <ArrowRight style={{ width: 14, height: 14 }} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* CTA + lead form */}
        <LeadForm
          eyebrow="Free Audit"
          title="Ready to see where your brand stands in AI search?"
          lede="We'll audit your current AI visibility across ChatGPT, Perplexity, and Google AI Overviews — and show you exactly where you're missing out."
        />

        <Footer />
      </Page>
    </>
  );
}
