import { useTranslation } from "react-i18next";

export function Footer() {
    const { t } = useTranslation();
    
    return (
        <footer className="footer footer-center bg-base-100 text-base-content p-4 mt-12">
            <aside>
                <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
            </aside>
        </footer>
    );
}
