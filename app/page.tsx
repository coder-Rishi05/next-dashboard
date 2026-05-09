"use client";

import AcmeLogo from "@/app/ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { lusitana } from "@/app/ui/fonts";
import { inter, lusi } from "@/app/ui/fonts";
import Image from "next/image";

// import styles from "@/app/ui/home.module.css";

export default function Page() {
  return (
    <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
      <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black" />
      <h1 className={inter.className}>This is children</h1>
      <h1 className={lusi.className}>This is children</h1>
      {/* Add Hero Images Here */}
      <Image
        src="/hero-desktop.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
      <Image
        src="/hero-mobile.png"
        width={500}
        height={620}
        className="hidden "
        alt="Screenshots of the dashboard project showing desktop version"
      />
    </div>
  );
}
