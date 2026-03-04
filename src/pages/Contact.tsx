import { useTranslation } from "react-i18next";

export function Contact() {
    const { t } = useTranslation();
    
    return (
        <div className="w-full flex items-center justify-center my-12">
            <div className="top-40 py-12 lg:px-28 px-8">
                <p className="md:text-3xl text-xl font-bold leading-7 text-center">{t('contact.title')}</p>
                <div className="md:flex items-center mt-12">
                    <div className="md:w-72 flex flex-col">
                        <label className="text-base font-semibold leading-none">{t('contact.name')}</label>
                        <input tabIndex={0} arial-label="Please input name" type="name" className="text-base leading-none p-3 focus:oultine-none focus:border-primary mt-4 bg-base-200 border rounded border-base-300 placeholder:text-base-content/40" placeholder={t('contact.namePlaceholder')} />
                    </div>
                    <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label className="text-base font-semibold leading-none">{t('contact.email')}</label>
                        <input tabIndex={0} arial-label="Please input email address" type="name" className="text-base leading-none p-3 focus:oultine-none focus:border-primary mt-4 bg-base-200 border rounded border-base-300 placeholder:text-base-content/40" placeholder={t('contact.emailPlaceholder')} />
                    </div>
                </div>
                <div>
                    <div className="w-full flex flex-col mt-8">
                        <label className="text-base font-semibold leading-none">{t('contact.message')}</label>
                        <textarea tabIndex={0} aria-label="leave a message" role="textbox" className="h-36 text-base leading-none p-3 focus:oultine-none focus:border-primary mt-4 bg-base-200 border rounded border-base-300 placeholder:text-base-content/40 resize-none" placeholder={t('contact.messagePlaceholder')} />
                    </div>
                </div>
                <div className="flex items-center justify-center w-full">
                    <button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-primary rounded hover:bg-primary-focus focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:outline-none">{t('contact.submit')}</button>
                </div>
            </div>
        </div>
    );
}
