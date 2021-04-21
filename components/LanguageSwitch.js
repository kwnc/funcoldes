import React from "react";
import Image from "next/image";
import Link from "next/link";

import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const LanguageSwitch = () => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <Link href="/" locale={router.locale === "es" ? "en" : "es"}>
      <Image src="/en-es.png" width={96} height={63.75} alt="en/es" />
    </Link>
  );
};
export default LanguageSwitch;
