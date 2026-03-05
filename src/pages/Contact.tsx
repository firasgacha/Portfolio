import { useTranslation } from "react-i18next";
import { useState } from "react";

export function Contact() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    // Replace with your Formspree form ID after creating an account at https://formspree.io
    const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID || "xaqdraqg";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                })
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };
    
    return (
        <div className="w-full flex items-center justify-center my-12">
            <div className="top-40 py-12 lg:px-28 px-8">
                <p className="md:text-3xl text-xl font-bold leading-7 text-center">{t('contact.title')}</p>
                
                {status === "success" ? (
                    <div className="mt-8 p-4 bg-success/20 text-success rounded-lg text-center">
                        <p className="font-semibold">{t('contact.success') || "Thank you for your message! I'll get back to you soon."}</p>
                        <button 
                            onClick={() => setStatus("idle")}
                            className="mt-4 btn btn-sm btn-outline"
                        >
                            {t('contact.sendAnother')}
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="md:flex items-center mt-12">
                            <div className="md:w-72 flex flex-col">
                                <label className="text-base font-semibold leading-none">{t('contact.name')}</label>
                                <input 
                                    tabIndex={0} 
                                    aria-label="Please input name" 
                                    type="text" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    pattern="[a-zA-Z\s]+"
                                    className="text-base leading-none p-3 focus:oultine-none focus:border-primary mt-4 bg-base-200 border rounded border-base-300 placeholder:text-base-content/40" 
                                    placeholder={t('contact.namePlaceholder')} 
                                />
                            </div>
                            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                                <label className="text-base font-semibold leading-none">{t('contact.email')}</label>
                                <input 
                                    tabIndex={0} 
                                    aria-label="Please input email address" 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                                    className="text-base leading-none p-3 focus:oultine-none focus:border-primary mt-4 bg-base-200 border rounded border-base-300 placeholder:text-base-content/40" 
                                    placeholder={t('contact.emailPlaceholder')} 
                                />
                            </div>
                        </div>
                        <div>
                            <div className="w-full flex flex-col mt-8">
                                <label className="text-base font-semibold leading-none">{t('contact.message')}</label>
                                <textarea 
                                    tabIndex={0} 
                                    aria-label="leave a message" 
                                    role="textbox" 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="h-36 text-base leading-none p-3 focus:oultine-none focus:border-primary mt-4 bg-base-200 border rounded border-base-300 placeholder:text-base-content/40 resize-none" 
                                    placeholder={t('contact.messagePlaceholder')} 
                                />
                            </div>
                        </div>
                        
                        {status === "error" && (
                            <div className="mt-4 p-3 bg-error/20 text-error rounded-lg text-center">
                                <p>{t('contact.error') || "Something went wrong. Please try again or email me directly."}</p>
                            </div>
                        )}
                        
                        <div className="flex items-center justify-center w-full">
                            <button 
                                type="submit" 
                                disabled={status === "submitting"}
                                className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-primary rounded hover:bg-primary-focus focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === "submitting" ? t('contact.sending') : t('contact.submit')}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
