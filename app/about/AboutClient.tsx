"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Fan as Fax, Mail } from "lucide-react";

const companyInfo = {
  name: "TSUMUGITE株式会社",
  nameEn: "TSUMUGITE",
  representative: "代表取締役：田中泰三",
  postalCode: "〒 460-0017",
  address: "名古屋市中区松原1-14-4 戸田ビル2F",
  tel: "052-265-8205",
  fax: "052-265-8232",
  license: "許可番号：愛知県知事（般ー4）第75152号",
  registration: "登録番号：一級 愛知県知事登録（い-4）第14099号",
  manager: "管理建築士：窪野淳史",
  services: [
    "事業内容：",
    "美容室や飲食店などの店舗設計・デザイン全般",
    "住宅の設計・施工",
    "オフィスの設計・施工",
    "新築店舗の設計・施工",
    "建築設計および空間デザイン全般",
    "グラフィックデザイン制作"
  ]
};

export function AboutClient() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-light text-center mb-16">ABOUT</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {/* Company Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-2">
                <h2 className="text-2xl font-light mb-4">{companyInfo.name}</h2>
                <p className="text-gray-600">{companyInfo.nameEn}</p>
                <p className="text-gray-600">{companyInfo.representative}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                  <div>
                    <p className="text-gray-600">{companyInfo.postalCode}</p>
                    <p className="text-gray-600">{companyInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <p className="text-gray-600">TEL：{companyInfo.tel}</p>
                </div>

                <div className="flex items-center space-x-3">
                  <Fax className="w-5 h-5 text-gray-400" />
                  <p className="text-gray-600">FAX：{companyInfo.fax}</p>
                </div>
              </div>

              <div className="space-y-2 text-sm text-gray-600">
                <p>{companyInfo.license}</p>
                <p>{companyInfo.registration}</p>
                <p>{companyInfo.manager}</p>
              </div>

              <div className="space-y-2">
                <p className="font-medium">{companyInfo.services[0]}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {companyInfo.services.slice(1).map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative aspect-square lg:aspect-auto lg:h-[600px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.744795332755!2d136.90442687677445!3d35.16501897315043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600376d92b5e3b1d%3A0x91b5bb5c8148e8f0!2z44CSNDYwLTAwMTcg5oSb55-l55yM5ZCN5Y-k5bGL5biC5Lit5Yy65p2-5Y6f77yR5LiB55uu77yR77yU4oiS77yU!5e0!3m2!1sja!2sjp!4v1710669144435!5m2!1sja!2sjp"
                className="w-full h-full min-h-[400px] rounded-lg shadow-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}