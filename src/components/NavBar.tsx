import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import scriptIcon from "../assets/script.png";
import { ThemeToggle } from "./ThemeToggle";

export function NavBar() {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
    };

    return (
        <div className="navbar bg-base-100 mb-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <div className="w-12 rounded">
                            <img alt="logo" src={scriptIcon} />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><NavLink to={"/"}>{t('nav.home')}</NavLink></li>
                        <li><NavLink to={"/work"}>{t('nav.work')}</NavLink></li>
                        <li><NavLink to={"/contact"}>{t('nav.contact')}</NavLink></li>
                    </ul>
                </div>
                <div className="avatar">
                    <div className="w-12 rounded">
                        <img alt="logo" src={scriptIcon} />
                    </div>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to={"/"}>{t('nav.home')}</NavLink></li>
                    <li><NavLink to={"/work"}>{t('nav.work')}</NavLink></li>
                    <li><NavLink to={"/contact"}>{t('nav.contact')}</NavLink></li>
                </ul>
                <ThemeToggle />
                <button 
                    onClick={toggleLanguage} 
                    className="btn btn-ghost btn-sm ml-2"
                    aria-label="Toggle language"
                >
                    <span className="text-sm font-semibold">{i18n.language === 'en' ? 'FR' : 'EN'}</span>
                </button>
            </div>
        </div>
    );
}
