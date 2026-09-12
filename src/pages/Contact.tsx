import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Page } from "../components/Page";
import { usePageTitle } from "../hooks/usePageTitle";

const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID ?? "xaqdraqg";

export function Contact() {
  const { t } = useTranslation();
  usePageTitle("nav.contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch(
        `https://formspree.io/f/${FORMSPREE_FORM_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      setStatus(response.ok ? "success" : "error");
      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Page className="items-center">
      <div className="px-8 py-12 lg:px-28">
        <h1 className="text-center text-xl font-bold leading-7 md:text-3xl">
          {t("contact.title")}
        </h1>

        {status === "success" ? (
          <div className="mt-8 rounded-lg bg-success/20 p-4 text-center text-success">
            <p className="font-semibold">{t("contact.success")}</p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="btn btn-outline btn-sm mt-4"
            >
              {t("contact.sendAnother")}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-12">
            <div className="md:flex md:items-start md:gap-6">
              <fieldset className="fieldset md:w-72">
                <label className="label" htmlFor="contact-name">
                  {t("contact.name")}
                </label>
                <input
                  id="contact-name"
                  aria-label={t("contact.name")}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className="input w-full"
                  placeholder={t("contact.namePlaceholder")}
                />
              </fieldset>
              <fieldset className="fieldset mt-4 md:mt-0 md:w-72">
                <label className="label" htmlFor="contact-email">
                  {t("contact.email")}
                </label>
                <input
                  id="contact-email"
                  aria-label={t("contact.email")}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className="input w-full"
                  placeholder={t("contact.emailPlaceholder")}
                />
              </fieldset>
            </div>
            <fieldset className="fieldset mt-8">
              <label className="label" htmlFor="contact-message">
                {t("contact.message")}
              </label>
              <textarea
                id="contact-message"
                aria-label={t("contact.message")}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="textarea h-36 w-full resize-none"
                placeholder={t("contact.messagePlaceholder")}
              />
            </fieldset>

            {status === "error" && (
              <div className="mt-4 rounded-lg bg-error/20 p-3 text-center text-error">
                <p>{t("contact.error")}</p>
              </div>
            )}

            <div className="flex w-full items-center justify-center">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="btn btn-primary btn-lg mt-9"
              >
                {status === "submitting"
                  ? t("contact.sending")
                  : t("contact.submit")}
              </button>
            </div>
          </form>
        )}
      </div>
    </Page>
  );
}
