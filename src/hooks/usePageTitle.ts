import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export function usePageTitle(key: string) {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = `${t(key)} · Firas Gacha`;
    return () => {
      document.title = t("meta.siteTitle");
    };
  }, [t, key, i18n.language]);
}
