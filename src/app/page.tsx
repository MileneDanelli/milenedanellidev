"use client";

import { useEffect, useState } from "react";

type Language = "en" | "es";

const skills = [
  "PHP Laravel",
  "Java com Spring Boot",
  "REST API",
  "Microservices",
  "Livewire",
  "Blade",
  "React JS",
  "Vue JS",
  "Angular",
  "JavaScript",
  "jQuery",
  "HTML",
  "CSS",
  "MySQL",
  "MariaDB",
  "Linux",
  "Docker",
  "Git",
  "Scrum",
  "Kanban",
];

const experiences = {
  en: [
    {
      role: "Full Stack Web Developer (Mid/Senior)",
      company: "Arkenova Energy Solutions",
      period: "February 2025 - Present",
      description:
        "Development of an energy management platform and energy hardware monitoring system.",
      stack: ["Laravel 11", "PHP 8.2", "Python", "MySQL", "ReactJS", "Docker", "Git"],
    },
    {
      role: "Full Stack Web Developer (Mid/Senior)",
      company: "Zenit Software",
      period: "July 2022 - September 2025",
      description:
        "Development of an occupational safety platform with medical workflows, exams, and appointments, including government API and ChatGPT API integrations.",
      stack: ["PHP Laravel", "Blade", "Livewire", "MySQL", "Docker", "Git"],
    },
    {
      role: "Full Stack Web Developer",
      company: "R4 Marketing",
      period: "May 2022 - July 2022",
      description:
        "Contributed to the development of a real estate platform for managing properties, clients, and transactions.",
      stack: ["PHP Laravel", "VueJS", "MySQL", "Git"],
    },
    {
      role: "Full Stack Web Developer",
      company: "Traux",
      period: "December 2021 - August 2022",
      description:
        "Developed the Fan Partner platform for Vila Nova football club, including banking integrations and stadium access control.",
      stack: ["PHP Laravel", "Blade", "MySQL", "Git"],
    },
    {
      role: "Junior Full Stack Web Developer",
      company: "Semear y Friella",
      period: "May 2020 - December 2021",
      description:
        "Developed an integrated management system for a food processing business with finance, sales, health, automation, administration, and HR modules.",
      stack: ["PHP Laravel", "Blade", "Livewire", "MySQL", "Git"],
    },
  ],
  es: [
    {
      role: "Desarrolladora Web Full Stack (Mid/Senior)",
      company: "Arkenova Energy Solutions",
      period: "Febrero 2025 - Actualidad",
      description:
        "Desarrollo de una plataforma de gestión energética y de un sistema de monitoreo de hardware de energía.",
      stack: ["Laravel 11", "PHP 8.2", "Python", "MySQL", "ReactJS", "Docker", "Git"],
    },
    {
      role: "Desarrolladora Web Full Stack (Mid/Senior)",
      company: "Zenit Software",
      period: "Julio 2022 - Septiembre 2025",
      description:
        "Desarrollo de una plataforma de seguridad laboral con flujos médicos, exámenes y citas, incluyendo integraciones con API gubernamentales y API de ChatGPT.",
      stack: ["PHP Laravel", "Blade", "Livewire", "MySQL", "Docker", "Git"],
    },
    {
      role: "Desarrolladora Web Full Stack",
      company: "R4 Marketing",
      period: "Mayo 2022 - Julio 2022",
      description:
        "Contribuí al desarrollo de una plataforma inmobiliaria para gestionar inmuebles, clientes y transacciones.",
      stack: ["PHP Laravel", "VueJS", "MySQL", "Git"],
    },
    {
      role: "Desarrolladora Web Full Stack",
      company: "Traux",
      period: "Diciembre 2021 - Agosto 2022",
      description:
        "Desarrollé la plataforma Fan Partner del club Vila Nova, incluyendo integraciones bancarias y control de acceso al estadio.",
      stack: ["PHP Laravel", "Blade", "MySQL", "Git"],
    },
    {
      role: "Desarrolladora Web Full Stack Junior",
      company: "Semear y Friella",
      period: "Mayo 2020 - Diciembre 2021",
      description:
        "Desarrollé un sistema de gestión integrado para una empresa de procesamiento de alimentos con módulos de finanzas, ventas, salud, automatización, administración y RR.HH.",
      stack: ["PHP Laravel", "Blade", "Livewire", "MySQL", "Git"],
    },
  ],
} as const;

const linkedInHighlights = {
  en: [
    "5+ years building full stack web products (since 2020)",
    "Strong focus on Laravel, PHP, React, and API integrations",
    "Hands-on experience with Docker, Linux, Git, Scrum, and Kanban",
    "Projects across energy, healthcare compliance, real estate, and sports tech",
  ],
  es: [
    "Más de 5 años construyendo productos web full stack (desde 2020)",
    "Fuerte enfoque en Laravel, PHP, React e integraciones de API",
    "Experiencia práctica con Docker, Linux, Git, Scrum y Kanban",
    "Proyectos en energía, salud ocupacional, inmobiliario y tecnología deportiva",
  ],
} as const;

const ui = {
  en: {
    roleLabel: "Full Stack Developer",
    heroText:
      "Systems analyst and developer with 5 years of experience building robust web products focused on backend, frontend, and API integrations.",
    languageLabel: "Language",
    nav: {
      about: "About",
      experience: "Experience",
      linkedin: "LinkedIn",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
    },
    quickLinks: {
      email: "Email",
      linkedin: "LinkedIn",
    },
    aboutParagraphs: [
      "I currently work with Laravel 11 and PHP 8.2, delivering high-demand projects that connect business, data, and user experience.",
      "I have experience with agile methodologies, Linux environments, and quality practices, including PHPUnit tests, Git version control, and Docker-based delivery.",
      "I also build integrations with external APIs, including government services and AI solutions such as ChatGPT.",
    ],
    linkedinHighlights: "LinkedIn Highlights",
    viewLinkedIn: "View full profile on LinkedIn",
    educationItems: {
      analysisTitle: "Systems Analysis and Development",
      languagesTitle: "Languages",
      languagesText: "Portuguese (native), Spanish (advanced), English (intermediate)",
    },
    contactText:
      "Open to full stack developer opportunities in challenging projects. Current location: Badalona, Barcelona, Spain.",
  },
  es: {
    roleLabel: "Desarrolladora Full Stack",
    heroText:
      "Analista de sistemas y desarrolladora con 5 años de experiencia creando productos web robustos, con foco en backend, frontend e integraciones de API.",
    languageLabel: "Idioma",
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      linkedin: "LinkedIn",
      skills: "Habilidades",
      education: "Educación",
      contact: "Contacto",
    },
    quickLinks: {
      email: "Correo",
      linkedin: "LinkedIn",
    },
    aboutParagraphs: [
      "Actualmente trabajo con Laravel 11 y PHP 8.2, entregando proyectos de alta demanda que conectan negocio, datos y experiencia de usuario.",
      "Tengo experiencia con metodologías ágiles, entornos Linux y prácticas de calidad, incluyendo pruebas con PHPUnit, control de versiones con Git y entrega basada en Docker.",
      "También desarrollo integraciones con APIs externas, incluyendo servicios gubernamentales y soluciones de IA como ChatGPT.",
    ],
    linkedinHighlights: "Destacados de LinkedIn",
    viewLinkedIn: "Ver perfil completo en LinkedIn",
    educationItems: {
      analysisTitle: "Análisis y Desarrollo de Sistemas",
      languagesTitle: "Idiomas",
      languagesText: "Portugués (nativo), Español (avanzado), Inglés (intermedio)",
    },
    contactText:
      "Disponible para oportunidades como desarrolladora full stack en proyectos desafiantes. Ubicación actual: Badalona, Barcelona, España.",
  },
} as const;

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = ui[language];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-black via-black to-[#f03196] px-4 pb-8 pt-20 text-zinc-100 sm:px-6 sm:py-12">
      <button
        type="button"
        onClick={() => setLanguage((prev) => (prev === "en" ? "es" : "en"))}
        aria-label={language === "en" ? "Switch to Spanish" : "Cambiar a inglés"}
        className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-lg transition-colors hover:bg-zinc-100 sm:right-6 sm:top-6 dark:border-zinc-700 dark:hover:bg-zinc-900"
      >
        {language === "en" ? "🇬🇧" : "🇪🇸"}
      </button>

      <main className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <aside className="min-w-0 lg:sticky lg:top-12 lg:h-[calc(100vh-6rem)] lg:flex lg:flex-col lg:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">{t.roleLabel}</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">Milene Danelli</h1>
            <p className="mt-4 max-w-md break-words text-sm leading-7 text-zinc-600 dark:text-zinc-300">
              {t.heroText}
            </p>

            <div className="fixed left-4 top-4 z-30 lg:hidden">
              <button
                type="button"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="inline-flex items-center justify-center rounded-lg border border-zinc-300 p-2 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
              >
                <span className="flex flex-col gap-1">
                  <span
                    className={`block h-0.5 w-5 rounded-full bg-zinc-600 transition-transform duration-300 dark:bg-zinc-300 ${
                      isMobileMenuOpen ? "translate-y-1.5 rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-5 rounded-full bg-zinc-600 transition-opacity duration-300 dark:bg-zinc-300 ${
                      isMobileMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-5 rounded-full bg-zinc-600 transition-transform duration-300 dark:bg-zinc-300 ${
                      isMobileMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  isMobileMenuOpen ? "mt-3 max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <nav className="max-h-[70vh] space-y-2 overflow-y-auto rounded-lg bg-black/30 p-2 text-xs backdrop-blur-sm">
                  <a
                    href="#about"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block rounded-lg border border-zinc-300 px-3 py-2 uppercase tracking-wide text-zinc-600 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900"
                  >
                    {t.nav.about}
                  </a>
                  <a
                    href="#experience"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block rounded-lg border border-zinc-300 px-3 py-2 uppercase tracking-wide text-zinc-600 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900"
                  >
                    {t.nav.experience}
                  </a>
                  <a
                    href="#linkedin"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block rounded-lg border border-zinc-300 px-3 py-2 uppercase tracking-wide text-zinc-600 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900"
                  >
                    {t.nav.linkedin}
                  </a>
                  <a
                    href="#skills"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block rounded-lg border border-zinc-300 px-3 py-2 uppercase tracking-wide text-zinc-600 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900"
                  >
                    {t.nav.skills}
                  </a>
                  <a
                    href="#education"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block rounded-lg border border-zinc-300 px-3 py-2 uppercase tracking-wide text-zinc-600 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900"
                  >
                    {t.nav.education}
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block rounded-lg border border-zinc-300 px-3 py-2 uppercase tracking-wide text-zinc-600 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900"
                  >
                    {t.nav.contact}
                  </a>
                </nav>
              </div>
            </div>

            <nav className="mt-10 hidden space-y-4 lg:block">
              <a
                href="#about"
                className="block text-sm uppercase tracking-wide text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                {t.nav.about}
              </a>
              <a
                href="#experience"
                className="block text-sm uppercase tracking-wide text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                {t.nav.experience}
              </a>
              <a
                href="#linkedin"
                className="block text-sm uppercase tracking-wide text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                {t.nav.linkedin}
              </a>
              <a
                href="#skills"
                className="block text-sm uppercase tracking-wide text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                {t.nav.skills}
              </a>
              <a
                href="#education"
                className="block text-sm uppercase tracking-wide text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                {t.nav.education}
              </a>
              <a
                href="#contact"
                className="block text-sm uppercase tracking-wide text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                {t.nav.contact}
              </a>
            </nav>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-sm lg:mt-0">
            <a
              href="mailto:mi.danelli@outlook.com"
              className="rounded-full border border-zinc-300 px-3 py-1.5 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              {t.quickLinks.email}
            </a>
            <a
              href="https://www.linkedin.com/in/milene-danelli-4a2480162"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-zinc-300 px-3 py-1.5 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              {t.quickLinks.linkedin}
            </a>
          </div>
        </aside>

        <div className="min-w-0 space-y-10 pb-8 lg:h-screen lg:space-y-14 lg:overflow-y-auto lg:pb-12 lg:snap-y lg:snap-mandatory lg:scroll-smooth lg:[scrollbar-width:none] lg:[-ms-overflow-style:none] lg:[&::-webkit-scrollbar]:hidden">
          <section id="about" className="scroll-mt-20 py-6 lg:min-h-screen lg:scroll-mt-24 lg:py-8 lg:snap-start">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              {t.nav.about}
            </h2>
            <div className="mt-5 space-y-4 break-words text-sm leading-7 text-zinc-600 dark:text-zinc-300">
              {t.aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section id="experience" className="scroll-mt-20 py-6 lg:min-h-screen lg:scroll-mt-24 lg:py-8 lg:snap-start">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              {t.nav.experience}
            </h2>
            <div className="mt-5 space-y-4">
              {experiences[language].map((experience) => (
                <article
                  key={`${experience.company}-${experience.period}`}
                  className="rounded-xl border border-zinc-200 p-4 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600 sm:p-5"
                >
                  <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                    {experience.period}
                  </p>
                  <h3 className="mt-2 break-words text-base font-semibold leading-6">
                    {experience.role} · {experience.company}
                  </h3>
                  <p className="mt-3 break-words text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    {experience.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {experience.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="linkedin" className="scroll-mt-20 py-6 lg:min-h-screen lg:scroll-mt-24 lg:py-8 lg:snap-start">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              {t.linkedinHighlights}
            </h2>
            <div className="mt-5 rounded-xl border border-zinc-200 p-4 dark:border-zinc-800 sm:p-5">
              <ul className="space-y-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                {linkedInHighlights[language].map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <a
                href="https://www.linkedin.com/in/milene-danelli-4a2480162"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex max-w-full whitespace-normal rounded-full border border-zinc-300 px-3 py-1.5 text-center text-sm transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
              >
                {t.viewLinkedIn}
              </a>
            </div>
          </section>

          <section id="skills" className="scroll-mt-20 py-6 lg:min-h-screen lg:scroll-mt-24 lg:py-8 lg:snap-start">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              {t.nav.skills}
            </h2>
            <ul className="mt-5 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-lg border border-zinc-200 px-3 py-2 text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>

          <section id="education" className="scroll-mt-20 py-6 lg:min-h-screen lg:scroll-mt-24 lg:py-8 lg:snap-start">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              {t.nav.education}
            </h2>
            <div className="mt-5 space-y-4 text-sm">
              <article className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800 sm:p-5">
                <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">2021 - 2022</p>
                <h3 className="mt-2 font-semibold">{t.educationItems.analysisTitle}</h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-300">
                  Centro Universitário União das Américas Descomplica
                </p>
              </article>
              <article className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800 sm:p-5">
                <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">2018 - 2021</p>
                <h3 className="mt-2 font-semibold">Computer Science</h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-300">
                  Universidade Tecnológica Federal do Paraná
                </p>
              </article>
              <article className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800 sm:p-5">
                <h3 className="font-semibold">{t.educationItems.languagesTitle}</h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-300">{t.educationItems.languagesText}</p>
              </article>
            </div>
          </section>

          <section id="contact" className="scroll-mt-20 py-6 lg:min-h-screen lg:scroll-mt-24 lg:py-8 lg:snap-start">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              {t.nav.contact}
            </h2>
            <p className="mt-5 break-words text-sm leading-7 text-zinc-600 dark:text-zinc-300">{t.contactText}</p>
            <div className="mt-4 flex flex-wrap gap-3 text-xs sm:text-sm">
              <a
                href="mailto:mi.danelli@outlook.com"
                className="break-all rounded-full border border-zinc-300 px-3 py-1.5 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
              >
                mi.danelli@outlook.com
              </a>
              <a
                href="https://www.linkedin.com/in/milene-danelli-4a2480162"
                target="_blank"
                rel="noreferrer"
                className="break-all rounded-full border border-zinc-300 px-3 py-1.5 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
              >
                linkedin.com/in/milene-danelli-4a2480162
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
