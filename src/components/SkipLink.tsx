import { useTranslation } from "react-i18next";

export function SkipLink() {
  const { t } = useTranslation();

  return (
    <a
      href="#main-content"
      className="sr-only btn btn-primary focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50"
    >
      {t("nav.skipToContent")}
    </a>
  );
}
