import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { getPost, getRelatedPosts } from '@/data/blogData';
import { Page, Breadcrumb, PageHero, Section, SectionHeader } from '@/brand/components';
import { Article } from '@/brand/Illustrations';
import '@/brand/pages/blog.css';

export default function BlogPostPage({ slug }) {
  const post = getPost(slug);

  if (!post) return null;

  const relatedPosts = getRelatedPosts(post.relatedPosts || []).slice(0, 3);

  const schemaArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    datePublished: post.publishDate,
    dateModified: post.updatedDate || post.publishDate,
    author: {
      '@type': 'Organization',
      name: 'Locully',
      url: 'https://www.locully.org',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Locully',
      url: 'https://www.locully.org',
      logo: {
        '@type': 'ImageObject',
        url: 'https://horizons-cdn.hostinger.com/ca6fff5d-5563-48f9-b39f-3faa84296ff9/68e793544c569f64d62f0f8841197574.png',
      },
    },
    description: post.metaDescription,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.locully.org/blog/${post.slug}/` },
  };

  const schemaFaq = post.faqs && post.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  } : null;

  const schemaBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.locully.org' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.locully.org/blog/' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://www.locully.org/blog/${post.slug}/` },
    ],
  };

  const formatDate = (iso) => {
    const d = new Date(iso);
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  const clinicLabels = {
    'physiotherapy-clinics': 'Physiotherapy Clinics',
    'dental-clinics': 'Dental Clinics',
    'beauty-clinics': 'Beauty Clinics',
    'fertility-clinics': 'Fertility Clinics',
    'wellness-clinics': 'Wellness Clinics',
  };

  const hasClinics = post.relatedClinics && post.relatedClinics.length > 0;

  return (
    <>
      <Helmet>
        <title>{post.metaTitle} | Locully</title>
        <meta name="description" content={post.metaDescription} />
        <meta property="og:title" content={`${post.metaTitle} | Locully`} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.locully.org/blog/${post.slug}/`} />
        <meta property="article:published_time" content={post.publishDate} />
        <meta property="article:modified_time" content={post.updatedDate || post.publishDate} />
        <link rel="canonical" href={`https://www.locully.org/blog/${post.slug}/`} />
        <script type="application/ld+json">{JSON.stringify(schemaArticle)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        {schemaFaq && <script type="application/ld+json">{JSON.stringify(schemaFaq)}</script>}
      </Helmet>

      <Page className="lbp-blog-post">
        <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Blog', to: '/blog/' }, { label: post.title }]} />

        {/* Hero */}
        <PageHero
          visual={<Article />}
          meta={(
            <div className="lbp-blog-meta">
              <span className="lb-tag">{post.category}</span>
              <span className="lbp-blog-meta-item"><Calendar style={{ width: 14, height: 14 }} aria-hidden="true" />{formatDate(post.publishDate)}</span>
              <span className="lbp-blog-meta-item"><Clock style={{ width: 14, height: 14 }} aria-hidden="true" />{post.readTime}</span>
            </div>
          )}
          title={post.title}
          lede={post.excerpt}
        />

        {/* Article body */}
        <Section className="lbp-blog-article">
          <div className="lb-prose lbp-blog-prose">
            <post.Content />
          </div>
        </Section>

        {/* Related clinic types (if any) */}
        {hasClinics && (
          <Section alt tight>
            <p className="lbp-blog-chiplabel">AI optimization for your clinic type</p>
            <div className="lb-chips">
              {post.relatedClinics.map((clinicSlug) => (
                <Link key={clinicSlug} to={`/industries/${clinicSlug}/`} className="lb-chip">
                  {clinicLabels[clinicSlug] || clinicSlug} <ArrowRight style={{ width: 14, height: 14 }} aria-hidden="true" />
                </Link>
              ))}
            </div>
          </Section>
        )}

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <Section style={hasClinics ? undefined : { borderTop: '1px solid var(--lb-rule-soft)' }}>
            <SectionHeader eyebrow="Related Reading" title="More on AI Search for Clinics" />
            <div className="lb-g3">
              {relatedPosts.map((related) => (
                <article key={related.slug} className="lbp-blog-card">
                  <div className="lbp-blog-card-top">
                    <span className="lb-tag">{related.category}</span>
                    <span className="lbp-blog-read"><Clock style={{ width: 13, height: 13 }} aria-hidden="true" />{related.readTime}</span>
                  </div>
                  <h3 className="lbp-blog-card-title">{related.title}</h3>
                  <p>{related.excerpt}</p>
                  <div className="lbp-blog-card-foot">
                    <span />
                    <Link to={`/blog/${related.slug}/`} className="lb-tlink sm lbp-blog-stretch">
                      Read article <ArrowRight style={{ width: 14, height: 14 }} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </Section>
        )}

        {/* CTA + Contact */}
        <section className="lb-sec alt lbp-blog-cta-head">
          <div className="lb-w">
            <SectionHeader
              eyebrow="Get Started"
              title="See where your brand stands in AI search"
              lede="We'll run your brand across ChatGPT, Perplexity, and Google AI Overviews — and show you exactly what it would take to get recommended."
              style={{ marginBottom: 0 }}
            />
          </div>
        </section>
        <ContactForm />

        <Footer />
      </Page>
    </>
  );
}
