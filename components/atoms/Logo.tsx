"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Building2 } from "lucide-react";

export const Logo = () => {
  return (
    <Link href="/">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center space-x-2"
      >
        <Building2 className="w-5 h-5" />
        <span className="text-base font-bold tracking-wider current-color">TSUMUGITE</span>
      </motion.div>
    </Link>
  );
};