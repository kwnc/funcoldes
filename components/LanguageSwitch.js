import React from "react";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/router";

const LanguageSwitch = () => {
  const router = useRouter();

  return (
    <Link href="/" locale={router.locale === "es" ? "en" : "es"}>
      <Image
        className="cursor-pointer transform transition hover:scale-105 duration-300 ease-in-out"
        src="/en-es.png"
        width={96}
        height={63.75}
        alt="en/es"
      />
    </Link>
  );
};
export default LanguageSwitch;
