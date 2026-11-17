import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import Footer from '@/components/Footer';
import { posts } from '@/data/blogData';
import { Page, Breadcrumb, PageHero, Section, SectionHeader } from '@/brand/components';
import LeadForm from '@/brand/LeadForm';
import { Article } from '@/brand/Illustrations';
import { Hreflang } from '@/i18n';
import '@/brand/pages/blog.css';

const URL = 'https://www.locully.org/th/blog/';
const TITLE = 'บล็อก SEO และ GEO สำหรับคลินิกและธุรกิจในกรุงเทพฯ | Locully';

export default function BlogIndexPageTh() {
  // Thai month names with the Gregorian year, so dates match the English page.
  const formatDate = (iso) => new Date(iso).toLocaleDateString('th-TH-u-ca-gregory', { day: 'numeric', month: 'short', year: 'numeric' });

  const schemaBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'หน้าแรก', item: 'https://www.locully.org/th/' },
      { '@type': 'ListItem', position: 2, name: 'บล็อก', item: URL },
    ],
  };

  // Posts are English-only for now: English titles and English post URLs.
  const schemaItemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'บล็อก Locully: SEO และ GEO สำหรับคลินิกและธุรกิจในกรุงเทพฯ',
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
        <title>{TITLE}</title>
        <meta name="description" content="คู่มือ SEO และ GEO สำหรับคลินิกและธุรกิจในกรุงเทพฯ และประเทศไทย วิธีติดอันดับบน Google และทำให้ ChatGPT, Perplexity และ Google AI แนะนำธุรกิจของคุณ" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content="คู่มือ SEO และ GEO สำหรับคลินิกและธุรกิจในกรุงเทพฯ และประเทศไทย" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <link rel="canonical" href={URL} />
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaItemList)}</script>
      </Helmet>
      <Hreflang path="/blog/" />

      <Page className="lbp-blog-index">
        <Breadcrumb items={[{ label: 'หน้าแรก', to: '/th/' }, { label: 'บล็อก' }]} />

        {/* Page header */}
        <PageHero
          eyebrow="บทความ"
          title="บล็อก Locully"
          lede="คู่มือที่ใช้ได้จริง ว่าคลินิกในประเทศไทยทำอย่างไรให้ ChatGPT, Perplexity และ Google AI Overviews แนะนำ ตอนนี้บทความทั้งหมดยังเป็นภาษาอังกฤษ"
          visual={<Article />}
        />

        {/* Featured (pillar) post */}
        <Section alt>
          <div className="lbp-blog-featured-tag">
            <span className="lb-tag">บทความแนะนำ · คู่มือหลัก</span>
          </div>

          <div className="lbp-blog-featured">
            <div>
              <div className="lbp-blog-meta">
                <span className="lb-label">{pillar.category}</span>
                <span className="lbp-blog-meta-item"><Clock style={{ width: 14, height: 14 }} aria-hidden="true" />{pillar.readTime}</span>
                <span className="lbp-blog-meta-item"><Calendar style={{ width: 14, height: 14 }} aria-hidden="true" />{formatDate(pillar.publishDate)}</span>
              </div>

              <h2 className="lbp-blog-featured-title" lang="en">{pillar.title}</h2>
              <p lang="en">{pillar.excerpt}</p>
              <Link to={`/blog/${pillar.slug}/`} className="lb-tlink lbp-blog-stretch">
                อ่านคู่มือ <ArrowRight style={{ width: 16, height: 16 }} aria-hidden="true" />
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
          <SectionHeader eyebrow="บทความทั้งหมด" title="ทุกคู่มือ อธิบายให้เข้าใจง่าย" />

          <div className="lb-g3">
            {rest.map((post) => (
              <article key={post.slug} className="lbp-blog-card">
                <div className="lbp-blog-card-top">
                  <span className="lb-tag">{post.category}</span>
                  <span className="lbp-blog-read"><Clock style={{ width: 13, height: 13 }} aria-hidden="true" />{post.readTime}</span>
                </div>

                <h2 className="lbp-blog-card-title" lang="en">{post.title}</h2>

                <p lang="en">{post.excerpt}</p>

                <div className="lbp-blog-card-foot">
                  <span>{formatDate(post.publishDate)}</span>
                  <Link to={`/blog/${post.slug}/`} className="lb-tlink sm lbp-blog-stretch">
                    อ่าน <ArrowRight style={{ width: 14, height: 14 }} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* CTA + lead form */}
        <LeadForm
          eyebrow="AI Audit"
          title="อยากรู้ไหมว่าแบรนด์ของคุณอยู่ตรงไหนใน AI Search?"
          lede="เราจะตรวจว่าคุณปรากฏตรงไหนบ้างใน ChatGPT, Perplexity และ Google AI Overviews แล้วชี้ให้เห็นชัด ๆ ว่าคุณพลาดโอกาสตรงไหน"
          subject="New AI Visibility Audit Request — Locully [TH]"
        />

        <Footer />
      </Page>
    </>
  );
}
