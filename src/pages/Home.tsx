import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HireMe } from "../components/HireMe";
import { Page } from "../components/Page";
import { Tools } from "../components/Tools";
import { usePageTitle } from "../hooks/usePageTitle";
import { generateCv } from "../utils/generateCv";
import profileImg from "../assets/profile.png";

export function Home() {
  const { t, i18n } = useTranslation();
  usePageTitle("nav.home");

  const downloadCv = async () => {
    try {
      await generateCv(t, i18n.language);
    } catch (error) {
      console.error("[CV] Error generating PDF:", error);
      alert(t("cv.error"));
    }
  };

  return (
    <Page>
      <section className="flex w-full flex-col items-center justify-center md:flex-row">
        <div className="flex w-full flex-col justify-center p-4 md:w-1/2">
          <div className="text-start">
            <p className="mb-6 text-5xl font-bold">{t("home.hey")}</p>
            <h1 className="text-5xl font-bold">{t("home.name")}</h1>
            <p className="text-5xl font-bold text-primary">{t("home.title")}</p>
            <p className="py-6">{t("home.description")}</p>
          </div>

          <p className="flex max-w-lg items-center pt-6">
            {t("home.findMe")}
            <span className="ml-2 inline-flex space-x-4">
              <a
                href="https://www.linkedin.com/in/firasgacha/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-2xl hover:text-[#0072b1]"
                aria-label="LinkedIn"
              >
                <i className="ri-linkedin-box-fill" />
              </a>
              <a
                href="https://github.com/firasgacha"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-2xl hover:text-gray-400"
                aria-label="GitHub"
              >
                <i className="ri-github-fill" />
              </a>
            </span>
          </p>

          <div className="flex w-full flex-col gap-4 pt-7 md:flex-row md:gap-8">
            <a
              href="mailto:firasgacha.inbox@gmail.com"
              className="btn btn-primary btn-sm md:btn-md lg:btn-lg"
            >
              <i className="ri-mail-line" />
              {t("home.emailMe")}
            </a>

            <button
              type="button"
              onClick={downloadCv}
              className="btn btn-neutral btn-sm md:btn-md lg:btn-lg"
            >
              <i className="ri-download-cloud-line" />
              {t("home.resume")}
            </button>
          </div>
        </div>

        <div className="hidden w-full items-center justify-center p-4 md:flex md:w-1/2">
          <img
            src={profileImg}
            alt={t("home.name")}
            className="w-72 rounded-full object-cover"
            loading="eager"
          />
        </div>
      </section>

      <Tools />
      <HireMe />

      <div className="alert mt-10 flex flex-col items-center justify-between gap-4 p-5 sm:flex-row">
        <p className="text-3xl font-bold">{t("home.interestedTitle")}</p>
        <NavLink to="/contact" className="btn btn-primary btn-sm md:btn-md lg:btn-lg">
          <i className="ri-mail-line" />
          {t("home.contactMe")}
        </NavLink>
      </div>
    </Page>
  );
}
