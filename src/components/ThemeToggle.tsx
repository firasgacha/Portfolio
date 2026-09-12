import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function readTheme(): "light" | "dark" {
  if (typeof document === "undefined") return "light";
  return document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light";
}

function applyTheme(theme: "light" | "dark") {
  localStorage.setItem("theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
  document.documentElement.classList.toggle("dark", theme === "dark");
  window.dispatchEvent(new Event("themechange"));
}

export function ThemeToggle() {
  const { t } = useTranslation();
  const [theme, setTheme] = useState<"light" | "dark">(readTheme);

  useEffect(() => {
    const sync = () => setTheme(readTheme());
    window.addEventListener("themechange", sync);
    return () => window.removeEventListener("themechange", sync);
  }, []);

  const toggleTheme = () => {
    applyTheme(theme === "light" ? "dark" : "light");
  };

  const label = theme === "light" ? t("nav.darkMode") : t("nav.lightMode");

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="btn btn-ghost btn-sm"
      aria-label={label}
      title={label}
    >
      {theme === "light" ? (
        <i className="ri-moon-line text-xl" />
      ) : (
        <i className="ri-sun-line text-xl" />
      )}
    </button>
  );
}
