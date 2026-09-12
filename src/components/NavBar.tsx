import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { isFrench } from "../lib/locale";
import scriptIcon from "../assets/script.png";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { to: "/", key: "nav.home" },
  { to: "/work", key: "nav.work" },
  { to: "/projects", key: "nav.projects" },
  { to: "/contact", key: "nav.contact" },
] as const;

function linkClassName({ isActive }: { isActive: boolean }) {
  return isActive ? "menu-active" : undefined;
}

function NavItem({
  to,
  label,
}: {
  to: (typeof links)[number]["to"];
  label: string;
}) {
  return (
    <li>
      <NavLink to={to} end={to === "/"} className={linkClassName}>
        {label}
      </NavLink>
    </li>
  );
}

export function NavBar() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(isFrench(i18n.language) ? "en" : "fr");
  };

  const languageLabel = isFrench(i18n.language) ? "EN" : "FR";

  return (
    <div className="navbar mb-12 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <button
            type="button"
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            aria-label={t("nav.menu")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-20 mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            {links.map((link) => (
              <NavItem key={link.to} to={link.to} label={t(link.key)} />
            ))}
            <li>
              <ThemeToggle />
            </li>
            <li>
              <button type="button" onClick={toggleLanguage}>
                {languageLabel}
              </button>
            </li>
          </ul>
        </div>
        <NavLink to="/" className="avatar" aria-label={t("nav.home")}>
          <div className="w-12 rounded">
            <img alt="" src={scriptIcon} />
          </div>
        </NavLink>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links.map((link) => (
            <NavItem key={link.to} to={link.to} label={t(link.key)} />
          ))}
        </ul>
        <ThemeToggle />
        <button
          type="button"
          onClick={toggleLanguage}
          className="btn btn-ghost btn-sm ml-2"
          aria-label={t("nav.toggleLanguage")}
        >
          <span className="text-sm font-semibold">{languageLabel}</span>
        </button>
      </div>
    </div>
  );
}
