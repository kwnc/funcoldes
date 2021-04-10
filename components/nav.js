import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";

function Nav() {
  const { t } = useTranslation("nav");

  return (
    <header>
      <nav className="nav flex flex-wrap items-center justify-between px-4">
        <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
          <Link href="/">
            <a>
              <Image
                className="h-20 fill-current inline rounded-2xl"
                src="/logo-vertical.jpg"
                alt="logo"
                width={150}
                height={150}
              />
            </a>
          </Link>
        </div>

        <a
          href="https://checkout.wompi.co/l/VPOS_Rh4UTC"
          target="_blank"
          rel="noreferrer"
        >
          <button className="flex justify-end mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            {t("donate")}
          </button>
        </a>

        <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
          htmlFor="menu-btn"
        >
          <span className="navicon bg-grey-darkest flex items-center relative" />
        </label>

        <ul className="menu border-b flex justify-end list-reset w-full md:w-auto items-center justify-between text-center">
          <li className="border-t md:border-none">
            <Link
              href="/mission"
              className="block md:inline-block px-4 py-3 p-10 no-underline text-grey-darkest hover:text-grey-darker"
            >
              <a className="px-6 text-3xl">{t("mission")}</a>
            </Link>
          </li>

          <li className="border-t md:border-none">
            <Link
              href="/impact"
              className="block md:inline-block px-4 p-10 no-underline text-grey-darkest hover:text-grey-darker"
            >
              <a className="px-6 text-3xl">{t("impact")}</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
