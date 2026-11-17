/** Shared chrome copy: nav, footer, CTA, lead form, 404, WhatsApp. Page copy lives in the page files. */
export const STRINGS = {
  en: {
    cta: 'Get your AI audit',
    ctaShort: 'AI audit',
    nav: {
      services: 'Services', industries: 'Industries', insights: 'Insights', about: 'About', contact: 'Contact',
      seo: 'SEO', geo: 'AI search / GEO', performance: 'Performance marketing', audit: 'GEO audit',
      main: 'Main', home: 'Locully home', toggle: 'Toggle menu', switchTo: 'ไทย', switchLabel: 'ดูหน้านี้เป็นภาษาไทย',
    },
    industries: null, // English names come from src/data/industryData.js
    footer: {
      desc: 'SEO, AI search (GEO) and performance marketing agency in Bangkok.',
      services: 'Services', company: 'Company', contact: 'Contact',
      fairs: 'Fairs & expos partner', aboutLocully: 'About Locully', founder: 'Founder',
      location: 'Bangkok, Thailand', rights: '© 2026 Locully Co. Ltd. All rights reserved.', privacy: 'Privacy Policy',
    },
    form: {
      name: 'Your name', namePh: 'Your name', email: 'Email', website: 'Website', optional: '(optional)',
      sending: 'Sending…', sent: 'Request sent', orCall: 'Or call',
      missingT: 'Missing Information', missingD: 'Please fill in all required fields.',
      siteT: 'Check your website', siteD: 'Enter your website address, e.g. yourbusiness.com',
      okT: 'Request Sent!', okD: "We've received your audit request and will be in touch shortly.",
      errT: 'Something went wrong', errD: 'Please try again or email us at admin@locully.org.',
    },
    sticky: { region: 'Quick contact', call: 'Call Locully on +66 62 695 9444' },
    notFound: {
      title: 'Page Not Found | Locully', eyebrow: 'Error 404', h1: "This page doesn't exist",
      lede: "The page you're looking for may have moved or never existed. Here are some good places to go instead.",
      home: 'Back to home', geo: 'GEO & AI search optimisation', blog: 'Read the blog',
    },
  },
  th: {
    cta: 'ขอรับ AI Audit ฟรี',
    ctaShort: 'AI Audit',
    nav: {
      services: 'บริการ', industries: 'อุตสาหกรรม', insights: 'บทความ', about: 'เกี่ยวกับเรา', contact: 'ติดต่อเรา',
      seo: 'รับทำ SEO', geo: 'รับทำ GEO (AI Search)', performance: 'Performance Marketing', audit: 'ตรวจ GEO ฟรี',
      main: 'เมนูหลัก', home: 'หน้าแรก Locully', toggle: 'เปิดหรือปิดเมนู', switchTo: 'EN', switchLabel: 'View this page in English',
    },
    industries: {
      'physiotherapy-clinics': 'คลินิกกายภาพบำบัด',
      'dental-clinics': 'คลินิกทันตกรรม',
      'wellness-clinics': 'คลินิกเวลเนส',
      'fertility-clinics': 'คลินิกผู้มีบุตรยากและ IVF',
      'beauty-clinics': 'คลินิกความงาม',
      property: 'อสังหาริมทรัพย์',
    },
    footer: {
      desc: 'เอเจนซี่ SEO, GEO (AI Search) และ Performance Marketing ในกรุงเทพฯ',
      services: 'บริการ', company: 'บริษัท', contact: 'ติดต่อเรา',
      fairs: 'พาร์ตเนอร์งานแฟร์และเอ็กซ์โป', aboutLocully: 'เกี่ยวกับ Locully', founder: 'ผู้ก่อตั้ง',
      location: 'กรุงเทพฯ ประเทศไทย', rights: '© 2026 Locully Co. Ltd. สงวนลิขสิทธิ์', privacy: 'นโยบายความเป็นส่วนตัว',
    },
    form: {
      name: 'ชื่อของคุณ', namePh: 'ชื่อของคุณ', email: 'อีเมล', website: 'เว็บไซต์', optional: '(ไม่บังคับ)',
      sending: 'กำลังส่ง…', sent: 'ส่งคำขอแล้ว', orCall: 'หรือโทร',
      missingT: 'ข้อมูลยังไม่ครบ', missingD: 'กรุณากรอกข้อมูลให้ครบทุกช่อง',
      siteT: 'ตรวจสอบเว็บไซต์ของคุณ', siteD: 'กรอกที่อยู่เว็บไซต์ เช่น yourbusiness.com',
      okT: 'ส่งคำขอเรียบร้อย', okD: 'เราได้รับคำขอ Audit ของคุณแล้ว และจะติดต่อกลับโดยเร็ว',
      errT: 'เกิดข้อผิดพลาด', errD: 'กรุณาลองอีกครั้ง หรืออีเมลหาเราที่ admin@locully.org',
    },
    sticky: { region: 'ติดต่อด่วน', call: 'โทรหา Locully ที่ +66 62 695 9444' },
    notFound: {
      title: 'ไม่พบหน้านี้ | Locully', eyebrow: 'Error 404', h1: 'ไม่พบหน้าที่คุณต้องการ',
      lede: 'หน้านี้อาจถูกย้ายหรือไม่เคยมีอยู่ ลองไปที่หน้าเหล่านี้แทน',
      home: 'กลับหน้าแรก', geo: 'บริการ GEO และ AI Search', blog: 'อ่านบทความ',
    },
  },
};
