import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

function Footer() {
  const router = useRouter();
  const { t } = useTranslation("footer");

  return (
    <footer>
      <div className="container mx-auto px-8">
        <div className="w-full flex flex-col md:flex-row py-6">
          <div className="flex-1 mb-6 text-black">
            <Image
              src="/logo-description.jpg"
              className="w-4/5"
              height={130}
              width={650}
              alt="logo"
            />
          </div>
          <div className="flex-1">
            <div className="py-4 center-container content-between">
              <Link href="/" locale={(router.locale = "es")}>
                <a className="px-4">
                  <Image
                    src="/es.png"
                    width={20}
                    height={20}
                    alt="Spanish flag"
                  />
                  Español
                </a>
              </Link>
              <Link href="/" locale={(router.locale = "en")}>
                <a className="px-4">
                  <Image
                    src="/en.png"
                    width={20}
                    height={20}
                    alt="English flag"
                  />
                  English
                </a>
              </Link>
              <Link href="/" locale={(router.locale = "pl")}>
                <a className="px-4">
                  <Image
                    src="/pl.png"
                    width={20}
                    height={20}
                    alt="Polish flag"
                  />
                  Polski
                </a>
              </Link>
            </div>

            <b className="py-4 text-gray-700 md:mb-6">
              Funcoldes &copy; {new Date().getFullYear()} | {t("description")}{" "}
              <a
                href="https://bio.link/konradwenc"
                target="_blank"
                rel="noreferrer"
                className="text-yellow-700"
              >
                Konrad Wenc
              </a>
            </b>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
