"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative flex items-center"
      >
        <Image
          src="/logo/logo.png"
          alt="TSUMUGITE"
          width={120}
          height={30}
          className="w-[90px] md:w-[120px] h-auto p-4"
          priority
        />
      </motion.div>
    </Link>
  );
};