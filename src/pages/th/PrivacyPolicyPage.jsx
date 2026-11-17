import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import { Page, Breadcrumb, PageHero } from '@/brand/components';
import { Privacy } from '@/brand/Illustrations';
import '@/brand/pages/misc.css';

export default function PrivacyPolicyPageTh() {
  return (
    <>
      <Helmet>
        <title>นโยบายความเป็นส่วนตัว | Locully</title>
        <meta name="description" content="นโยบายความเป็นส่วนตัวของ Locully อธิบายวิธีที่เราเก็บรวบรวม ใช้ และปกป้องข้อมูลส่วนบุคคลของคุณ" />
        <link rel="canonical" href="https://www.locully.org/th/privacy-policy" />
        <meta name="robots" content="noindex" />
      </Helmet>

      <Page className="lbp-legal-page">
        <Breadcrumb items={[{ label: 'หน้าแรก', to: '/th/' }, { label: 'นโยบายความเป็นส่วนตัว' }]} />

        <PageHero
          eyebrow="ข้อกฎหมาย"
          title="นโยบายความเป็นส่วนตัว"
          lede="อัปเดตล่าสุด: มีนาคม 2026 · Locully Co. Ltd. กรุงเทพฯ ประเทศไทย"
          visual={<Privacy />}
        />

        <section className="lb-sec alt lbp-legal">
          <div className="lb-wn">
            <p>
              <em>หน้านี้เป็นฉบับแปล หากเนื้อหาภาษาไทยและภาษาอังกฤษไม่ตรงกัน ให้ยึด<Link to="/privacy-policy">ฉบับภาษาอังกฤษ</Link>เป็นหลัก</em>
            </p>

            <p>
              นโยบายความเป็นส่วนตัวนี้อธิบายว่า Locully Co. Ltd. ("Locully" หรือ "เรา") เก็บรวบรวม ใช้ และปกป้องข้อมูลอย่างไร เมื่อคุณเข้าชม <a href="https://www.locully.org">locully.org</a> หรือติดต่อเราเกี่ยวกับบริการของเรา
            </p>

            <h2>1. ข้อมูลที่เราเก็บรวบรวม</h2>
            <p>เราเก็บรวบรวมข้อมูลสองทาง:</p>
            <ul>
              <li><strong>ข้อมูลที่คุณให้เรา</strong> ได้แก่ ชื่อ อีเมล ชื่อคลินิก เบอร์โทรศัพท์ และรายละเอียดอื่นที่คุณส่งผ่านแบบฟอร์มติดต่อหรือตอนนัดคุยกับเรา</li>
              <li><strong>ข้อมูลที่เก็บโดยอัตโนมัติ</strong> ได้แก่ หน้าที่เข้าชม เวลาที่ใช้บนเว็บไซต์ ประเภทเบราว์เซอร์ ประเภทอุปกรณ์ และตำแหน่งที่ตั้งโดยประมาณ (ประเทศ/เมือง) ซึ่งเก็บผ่าน Google Analytics และ Meta Pixel</li>
            </ul>

            <h2>2. เราใช้ข้อมูลของคุณอย่างไร</h2>
            <p>เราใช้ข้อมูลที่เก็บรวบรวมเพื่อ:</p>
            <ul>
              <li>ตอบคำถามที่ติดต่อเข้ามาและให้บริการของเรา</li>
              <li>ส่งข้อความติดตามผลที่เกี่ยวข้องกับคำขอของคุณ</li>
              <li>ปรับปรุงเว็บไซต์และทำความเข้าใจว่าผู้เข้าชมใช้งานอย่างไร</li>
              <li>ทำแคมเปญโฆษณาแบบกำหนดกลุ่มเป้าหมายบน Meta (Facebook/Instagram)</li>
            </ul>
            <p>เราไม่ขาย ไม่ให้เช่า และไม่แลกเปลี่ยนข้อมูลส่วนบุคคลของคุณกับบุคคลภายนอก</p>

            <h2>3. คุกกี้และการติดตาม</h2>
            <p>เว็บไซต์ของเราใช้เครื่องมือติดตามต่อไปนี้:</p>
            <ul>
              <li><strong>Google Tag Manager / Google Analytics</strong> วัดปริมาณการเข้าชมเว็บไซต์และพฤติกรรมผู้ใช้แบบไม่ระบุตัวตน</li>
              <li><strong>Meta Pixel</strong> ติดตามการเข้าชมหน้าเว็บและ conversion เพื่อวัดผลโฆษณาบน Facebook และ Instagram</li>
            </ul>
            <p>คุณเลือกไม่ให้ Google Analytics เก็บข้อมูลได้ที่ <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">tools.google.com/dlpage/gaoptout</a> และจัดการการตั้งค่าโฆษณาของ Meta ได้ที่ <a href="https://www.facebook.com/ads/preferences" target="_blank" rel="noopener noreferrer">facebook.com/ads/preferences</a></p>

            <h2>4. การจัดเก็บและความปลอดภัยของข้อมูล</h2>
            <p>
              ข้อมูลที่ส่งผ่านแบบฟอร์มติดต่อจะประมวลผลผ่าน Formspree และจัดเก็บอย่างปลอดภัย เราใช้มาตรการทางเทคนิคตามสมควรเพื่อปกป้องข้อมูลของคุณ แต่ไม่มีวิธีส่งข้อมูลผ่านอินเทอร์เน็ตวิธีใดที่ปลอดภัย 100%
            </p>

            <h2>5. บริการของบุคคลภายนอก</h2>
            <p>เราใช้บริการของบุคคลภายนอกต่อไปนี้ ซึ่งอาจประมวลผลข้อมูลของคุณตามนโยบายความเป็นส่วนตัวของแต่ละราย:</p>
            <ul>
              <li>Formspree (ประมวลผลแบบฟอร์มติดต่อ)</li>
              <li>Google Analytics (วิเคราะห์การใช้งานเว็บไซต์)</li>
              <li>Meta Pixel (วัดผลโฆษณา)</li>
              <li>Calendly (นัดเวลาคุย)</li>
              <li>Vercel (โฮสต์เว็บไซต์)</li>
            </ul>

            <h2>6. สิทธิของคุณ</h2>
            <p>คุณมีสิทธิขอเข้าถึง ขอแก้ไข หรือขอลบข้อมูลส่วนบุคคลที่เราเก็บไว้เกี่ยวกับคุณ หากต้องการใช้สิทธิเหล่านี้ ติดต่อเราได้ที่ <a href="mailto:admin@locully.org">admin@locully.org</a></p>

            <h2>7. การเปลี่ยนแปลงนโยบายนี้</h2>
            <p>เราอาจปรับปรุงนโยบายความเป็นส่วนตัวนี้เป็นครั้งคราว วันที่ด้านบนของหน้านี้คือวันที่แก้ไขล่าสุด การใช้เว็บไซต์ต่อหลังมีการเปลี่ยนแปลงถือว่าคุณยอมรับนโยบายฉบับปรับปรุง</p>

            <h2>8. ติดต่อ</h2>
            <p>
              หากมีคำถามเกี่ยวกับนโยบายความเป็นส่วนตัวนี้:<br />
              <a href="mailto:admin@locully.org">admin@locully.org</a><br />
              Locully Co. Ltd. กรุงเทพฯ ประเทศไทย
            </p>
          </div>
        </section>

        <Footer />
      </Page>
    </>
  );
}
