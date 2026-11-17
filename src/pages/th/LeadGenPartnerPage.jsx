import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import {
  Users, Target, Database, MessageCircle, BarChart,
  MapPin, GraduationCap, Building2, Briefcase
} from 'lucide-react';
import Footer from '@/components/Footer';
import {
  Page, PageHero, Section, SectionHeader, Button, Figure, StatRow,
} from '@/brand/components';
import { Expo } from '@/brand/Illustrations';
import { Hreflang } from '@/i18n';
import '@/brand/pages/about.css';

const URL = 'https://www.locully.org/th/lead-gen-partner';
const TITLE = 'พาร์ตเนอร์การตลาดสำหรับงานแฟร์และงานเอ็กซ์โปในไทย | Locully';
const DESCRIPTION = 'กำลังจะออกบูธงานแฟร์หรืองานเอ็กซ์โปในประเทศไทย? Locully คือทีมการตลาดภาคสนามของคุณ ดูแลการเก็บ lead โฆษณาในพื้นที่ และการติดตามผลที่เติม pipeline ให้เต็ม';

const LeadGenPartnerPageTh = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const openCalendly = () => { window.open('https://calendly.com/locully/30min', '_blank'); };

  const services = [
    { icon: Users, title: "ตัวแทนในพื้นที่", description: "ทีมงานมืออาชีพเป็นตัวแทนแบรนด์ของคุณในงานเอ็กซ์โป เข้าใจวัฒนธรรมไทยและสื่อสารภาษาอังกฤษได้" },
    { icon: Target, title: "การเก็บ lead", description: "เก็บและคัดกรอง lead อย่างเป็นระบบ ทุกรายชื่อถูกจัดระดับตามความสนใจและความพร้อม" },
    { icon: Database, title: "เชื่อมต่อ CRM", description: "บันทึกข้อมูลเข้าระบบของคุณโดยตรงภายในวันเดียวกัน ไม่ต้องวุ่นกับ spreadsheet" },
    { icon: MessageCircle, title: "ดูแล lead หลังจบงาน", description: "ส่งชุดข้อความติดตามผลภายใน 24 ชั่วโมง เพื่อให้ lead ของคุณยังสนใจอยู่" },
    { icon: BarChart, title: "ข้อมูลเชิงลึกของตลาด", description: "วิเคราะห์อย่างละเอียดเรื่องกลุ่มผู้เข้าชมงาน คู่แข่งที่มาออกบูธ และสัญญาณของตลาด" }
  ];

  const expoTypes = [
    { title: "งานแนะแนวศึกษาต่อต่างประเทศ", icon: GraduationCap, desc: "เชื่อมมหาวิทยาลัยกับนักเรียนไทยที่วางแผนเรียนต่อต่างประเทศ" },
    { title: "งานเอ็กซ์โปอสังหาริมทรัพย์", icon: Building2, desc: "โอกาสลงทุนอสังหาริมทรัพย์ทั่วเอเชียตะวันออกเฉียงใต้" },
    { title: "งานเอ็กซ์โปการศึกษา", icon: GraduationCap, desc: "โรงเรียนนานาชาติและหลักสูตรภาษา" },
    { title: "งานประชุมธุรกิจ", icon: Briefcase, desc: "งาน networking แบบ B2B ที่ BITEC, IMPACT และที่อื่น ๆ" },
    { title: "งานแสดงสินค้า", icon: MapPin, desc: "งานแสดงสินค้าเฉพาะอุตสาหกรรมในศูนย์จัดงานหลักทุกแห่งของไทย" }
  ];

  const metrics = [
    { value: "500+", label: "lead คุณภาพ" },
    { value: "45%", label: "conversion เฉลี่ย" },
    { value: "3×", label: "ROI เพิ่มขึ้น" },
    { value: "100%", label: "ความถูกต้องของข้อมูล" }
  ];

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
      </Helmet>
      <Hreflang path="/lead-gen-partner" />

      <Page className="lbp-lgp">
        {/* Hero */}
        <PageHero
          as="section"
          eyebrow="พาร์ตเนอร์ในประเทศไทย"
          visual={<Expo />}
          title="พาร์ตเนอร์การตลาดในพื้นที่ สำหรับงานแฟร์และงานเอ็กซ์โป"
          lede="ขยายตลาดในประเทศไทยได้โดยไม่ต้องแบกต้นทุนตั้งทีมเอง เราคือทีมผู้เชี่ยวชาญการตลาดในพื้นที่ที่ทำงานให้คุณโดยเฉพาะ"
        >
          <div className="lb-hero-cta">
            <Button onClick={openCalendly}>เริ่มแคมเปญของคุณ</Button>
          </div>
        </PageHero>

        {/* Overview */}
        <Section alt>
          <div className="lb-split">
            <div>
              <span className="lb-eyebrow">ทีมในพื้นที่ของคุณ</span>
              <h2 className="lb-h2">ผู้เชี่ยวชาญในพื้นที่ สำหรับตลาดระดับโลก</h2>
              <p className="lb-body-lg" style={{ margin: 0 }}>การทำตลาดในวงการงานแสดงสินค้าของไทยต้องอาศัยความรู้ในพื้นที่และความเข้าใจวัฒนธรรม</p>
              <div className="lb-stack lbp-lgp-checks">
                {["ทีมที่เข้าใจวัฒนธรรมไทย", "คัดกรอง lead ได้ทันที", "เข้าตลาดได้ด้วยต้นทุนที่คุ้มค่า"].map((item) => (
                  <div key={item} className="lb-si">
                    <svg className="lb-tick" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10.5L8 14.5L16 5.5" stroke="#e26a2c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <div className="lb-si-t" style={{ margin: 0 }}>{item}</div>
                  </div>
                ))}
              </div>
            </div>

            <Figure
              className="lbp-lgp-fig"
              src="https://images.unsplash.com/photo-1695060704188-4a86d4be9721"
              alt="ทิวทัศน์เมืองกรุงเทพฯ"
              caption={(
                <>
                  <span className="lbp-lgp-figcap-label">ทำไมต้องประเทศไทย?</span>
                  <h3 className="lbp-lgp-figcap-h">ศูนย์กลางเชิงกลยุทธ์</h3>
                </>
              )}
            />
          </div>
        </Section>

        {/* Services */}
        <Section>
          <SectionHeader
            eyebrow="บริการ"
            title="ดูแลครบทุกขั้นตอน"
            lede="เราไม่ได้แค่แจกโบรชัวร์ เราสร้าง pipeline"
          />
          <div className="lb-g3">
            {services.map(({ icon: IconC, title, description }) => (
              <div key={title} className="lb-card sm">
                <span className="lbp-about-disc"><IconC aria-hidden="true" /></span>
                <div className="lb-h3">{title}</div>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Expo Types */}
        <Section alt>
          <div className="lbp-lgp-expo">
            <div>
              <span className="lb-eyebrow">ประเภทงาน</span>
              <h2 className="lb-h2">งานที่เราดูแล</h2>
              <p className="lb-body-lg" style={{ margin: '0 0 28px' }}>ตั้งแต่งานแสดงสินค้านานาชาติขนาดใหญ่ที่ BITEC ไปจนถึงงานเอ็กซ์โปสินค้าหรูเฉพาะกลุ่ม</p>
              <Figure
                className="lbp-lgp-fig-sm"
                src="https://images.unsplash.com/photo-1703757931698-6b905414d019"
                alt="งานแสดงสินค้า"
              />
            </div>
            <div className="lbp-lgp-expo-cards">
              {expoTypes.map(({ icon: IconC, title, desc }) => (
                <div key={title} className="lbp-lgp-expo-card">
                  <span className="lbp-about-disc"><IconC aria-hidden="true" /></span>
                  <div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Metrics */}
        <Section>
          <SectionHeader eyebrow="ผลลัพธ์ที่พิสูจน์แล้ว" title="ผลลัพธ์ที่พาร์ตเนอร์ของเราได้รับ" />
          <StatRow stats={metrics.map((m) => ({ n: m.value, l: m.label }))} />
        </Section>

        {/* Final CTA — partner consultation (not the AI audit) */}
        <Section alt>
          <div className="lbp-lgp-cta">
            <h3 className="lb-h2">พร้อมโดดเด่นในงานเอ็กซ์โปครั้งหน้าหรือยัง?</h3>
            <p className="lb-lede">ให้ Locully เป็นตัวแทนแบรนด์ของคุณอย่างมืออาชีพ</p>
            <Button onClick={openCalendly}>นัดปรึกษา</Button>
          </div>
        </Section>

        <Footer />
      </Page>
    </>
  );
};

export default LeadGenPartnerPageTh;
