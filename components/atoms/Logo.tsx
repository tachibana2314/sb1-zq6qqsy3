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
          width={140}
          height={35}
          className="w-[100px] md:w-[140px] h-auto"
          priority
        />
      </motion.div>
    </Link>
  );
};