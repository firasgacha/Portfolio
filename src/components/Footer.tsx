import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer footer-center mt-12 bg-base-100 p-4 text-base-content">
      <aside>
        <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
      </aside>
    </footer>
  );
}
