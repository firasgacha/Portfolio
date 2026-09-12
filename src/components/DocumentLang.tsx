import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { isFrench } from "../lib/locale";

export function DocumentLang() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = isFrench(i18n.language) ? "fr" : "en";
  }, [i18n.language]);

  return null;
}
