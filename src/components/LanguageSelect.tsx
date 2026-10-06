import { useTranslation } from "react-i18next";
import { isFrench } from "../lib/locale";
import gbFlag from "../assets/flags/gb.svg";
import frFlag from "../assets/flags/fr.svg";

const languages = [
  { code: "en", label: "English", flag: gbFlag },
  { code: "fr", label: "Français", flag: frFlag },
] as const;

type Language = (typeof languages)[number];

function Flag({ language }: { language: Language }) {
  return (
    <img
      src={language.flag}
      alt=""
      className="h-4 w-6 rounded-sm object-cover shadow-sm"
    />
  );
}

function useLanguage() {
  const { i18n } = useTranslation();
  const current = isFrench(i18n.language) ? languages[1] : languages[0];

  const select = (code: Language["code"]) => {
    i18n.changeLanguage(code);
    (document.activeElement as HTMLElement | null)?.blur();
  };

  return { current, select };
}

function LanguageOptions() {
  const { current, select } = useLanguage();

  return languages.map((language) => (
    <li key={language.code}>
      <button
        type="button"
        lang={language.code}
        className={language.code === current.code ? "menu-active" : undefined}
        aria-current={language.code === current.code ? "true" : undefined}
        onClick={() => select(language.code)}
      >
        <Flag language={language} />
        {language.label}
      </button>
    </li>
  ));
}

export function LanguageSelect() {
  const { t } = useTranslation();
  const { current } = useLanguage();

  return (
    <div className="dropdown dropdown-end ml-2">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-sm gap-2"
        aria-label={t("nav.toggleLanguage")}
        aria-haspopup="menu"
        title={t("nav.toggleLanguage")}
      >
        <Flag language={current} />
        <span className="text-sm font-semibold">
          {current.code.toUpperCase()}
        </span>
        <i className="ri-arrow-down-s-line" aria-hidden="true" />
      </div>
      <ul
        tabIndex={-1}
        className="menu dropdown-content z-20 mt-2 w-40 rounded-box bg-base-100 p-2 shadow"
      >
        <LanguageOptions />
      </ul>
    </div>
  );
}

export function LanguageMenuItems() {
  const { t } = useTranslation();

  return (
    <li>
      <h2 className="menu-title">{t("nav.language")}</h2>
      <ul>
        <LanguageOptions />
      </ul>
    </li>
  );
}
