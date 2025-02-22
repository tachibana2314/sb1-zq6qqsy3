"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "PLANING",
    description: "出店する街が持つ特徴を捉え、この場所で何をやるべきか一緒に導きだすことから始めます。そして導きだした結果を元に店舗名やコンセプト等を将来性も踏まえ、構築していきます。",
    imageUrl: "/images/planning.png",
    details: [
      "市場調査・分析",
      "コンセプト立案",
      "事業計画策定",
      "店舗名・ブランディング提案"
    ]
  },
  {
    title: "SHOP DESIGN",
    description: "コンセプトやストーリーに合わせたプラン作りを行います。その街に根付いた上でオリジナル性の高いお店作りを行います。また、お客様により良いサービスを提供できるよう、機能性も考え抜いた空間作りを心がけています。",
    imageUrl: "/images/design.png",
    details: [
      "店舗設計・デザイン",
      "内装デザイン",
      "照明計画",
      "動線設計"
    ]
  },
  {
    title: "COORDINATE",
    description: "オリジナル家具のデザインから、照明や雑貨、グリーンなど、細部までコンセプトに合わせた提案をいたします。空間にあったサインや装飾までコーディネートいたします。",
    imageUrl: "/images/coordinate.png",
    details: [
      "家具デザイン・選定",
      "照明器具選定",
      "インテリア小物選定",
      "グリーンコーディネート"
    ]
  },
  {
    title: "MANAGEMENT",
    description: "ご予算、店舗の業態、希望立地などに合わせて最適な物件選びからお手伝いいたします。そしてコンセプトに合わせて考えられたプランを提案します。",
    imageUrl: "/images/management.png",
    details: [
      "物件選定サポート",
      "予算管理",
      "工程管理",
      "各種申請手続き"
    ]
  }
];

export default function Service() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-light mb-4">SERVICE</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            その街に根付き永く愛されることを目指す業態提案、店名、ロゴ、<br />
            そしてお店の設計からインテリアデザイン、販促物まで、ワンストップで提案いたします。
          </p>
        </motion.div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
            >
              <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-900 text-white rounded-lg">
                    <Image
                      src={service.imageUrl}
                      alt={service.title}
                      width={24}
                      height={24}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <div className="bg-gray-900 text-white py-2 px-4">
                    <h2 className="text-sm tracking-wider">{service.title}</h2>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                      <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`relative aspect-[4/3] bg-gray-50 rounded-lg p-12 flex items-center justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  width={200}
                  height={200}
                  className="w-32 h-32 object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}