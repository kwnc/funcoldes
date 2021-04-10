import * as React from "react";
import Image from "next/image";

import styles from "./LanguageButton.module.css";

function LanguageButton() {
  return (
    <>
      <Image
        className={styles.position}
        src="/en.png"
        height={50}
        width={50}
        alt="language-switch"
      />
    </>
  );
}

export default LanguageButton;
