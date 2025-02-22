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
        className="relative"
      >
        <Image
          src="/logo/logo.png"
          alt="TSUMUGITE"
          width={160}
          height={40}
          className="w-[120px] md:w-[160px] h-auto"
          priority
        />
      </motion.div>
    </Link>
  );
};