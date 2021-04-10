import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";

import { useTranslation } from "next-i18next";

const useStyles = makeStyles({
  selectFocus: {
    "&:focus": {
      background: "transparent",
    },
  },
});

const LanguageMenu = (props) => {
  const { i18n } = useTranslation();
  const classes = useStyles();

  const [values, setValues] = useState({
    language: "es",
  });

  function handleChange(event) {
    i18n.changeLanguage(event.target.value);

    setValues((oldValues) => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <Select
      value={values.language}
      onChange={(e) => handleChange(e)}
      disableUnderline
      inputProps={{
        name: "language",
      }}
      classes={{
        select: classes.selectFocus,
      }}
    >
      <MenuItem value={"es"}>
        <Image src="/es.png" height={50} width={50} alt="ES" />
      </MenuItem>
      <MenuItem value={"en"}>
        <Image src="/en.png" height={50} width={50} alt="EN" />
      </MenuItem>
    </Select>
  );
};
export default LanguageMenu;
