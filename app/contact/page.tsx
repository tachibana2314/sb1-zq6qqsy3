import { Contact } from "@/components/organisms/Contact";
import { Metadata } from "next";
import { SchemaOrg } from "@/components/SEO/SchemaOrg";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: 'お問い合わせ | TSUMUGITE',
  description: '店舗デザイン・店舗施工のことならTSUMUGITEにお問い合わせください。飲食店、美容室、アパレル、オフィスなど、ジャンル・業種問わず、お客様のコンセプトに合わせた空間づくりを提案いたします。',
  openGraph: {
    title: 'お問い合わせ | TSUMUGITE',
    description: '店舗デザイン・店舗施工のことならTSUMUGITEにお問い合わせください。飲食店、美容室、アパレル、オフィスなど、ジャンル・業種問わず、お客様のコンセプトに合わせた空間づくりを提案いたします。',
  }
};

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'ホーム', url: 'https://tsumugite-naisoudesign.com' },
    { name: 'お問い合わせ', url: 'https://tsumugite-naisoudesign.com/contact' }
  ]);

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      <Contact />
    </>
  );
}