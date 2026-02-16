export default function Home() {
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

  const experiences = [
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
  ];

  const linkedInHighlights = [
    "5+ years building full stack web products (since 2020)",
    "Strong focus on Laravel, PHP, React, and API integrations",
    "Hands-on experience with Docker, Linux, Git, Scrum, and Kanban",
    "Projects across energy, healthcare compliance, real estate, and sports tech",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-[#f03196] px-6 py-12 text-zinc-100">
      <main className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <aside className="lg:sticky lg:top-12 lg:h-[calc(100vh-6rem)] lg:flex lg:flex-col lg:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Full Stack Developer
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Milene Danelli</h1>
            <p className="mt-4 max-w-md text-sm leading-7 text-zinc-600 dark:text-zinc-300">
              Systems analyst and developer with 5 years of experience building robust web products
              focused on backend, frontend, and API integrations.
            </p>

            <nav className="mt-10 hidden space-y-4 lg:block">
              <a
                href="#about"
                className="block text-sm uppercase tracking-wide text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                About
              </a>
              <a
                href="#experience"
                className="block text-sm uppercase tracking-wide text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                Experience
              </a>
              <a
                href="#linkedin"
                className="block text-sm uppercase tracking-wide text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                LinkedIn
              </a>
              <a
                href="#skills"
                className="block text-sm uppercase tracking-wide text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                Skills
              </a>
              <a
                href="#education"
                className="block text-sm uppercase tracking-wide text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                Education
              </a>
              <a
                href="#contact"
                className="block text-sm uppercase tracking-wide text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                Contact
              </a>
            </nav>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm lg:mt-0">
            <a
              href="mailto:mi.danelli@outlook.com"
              className="rounded-full border border-zinc-300 px-3 py-1.5 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/milene-danelli-4a2480162"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-zinc-300 px-3 py-1.5 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              LinkedIn
            </a>
          </div>
        </aside>

        <div
          className="space-y-14 pb-12 lg:h-screen lg:overflow-y-auto lg:snap-y lg:snap-mandatory lg:scroll-smooth lg:[scrollbar-width:none] lg:[-ms-overflow-style:none] lg:[&::-webkit-scrollbar]:hidden"
        >
          <section id="about" className="scroll-mt-24 min-h-screen py-8 lg:snap-start">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">About</h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
              <p>
                I currently work with Laravel 11 and PHP 8.2, delivering high-demand projects that
                connect business, data, and user experience.
              </p>
              <p>
                I have experience with agile methodologies, Linux environments, and quality
                practices, including PHPUnit tests, Git version control, and Docker-based delivery.
              </p>
              <p>
                I also build integrations with external APIs, including government services and AI
                solutions such as ChatGPT.
              </p>
            </div>
          </section>

          <section id="experience" className="scroll-mt-24 min-h-screen py-8 lg:snap-start">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Experience
            </h2>
            <div className="mt-5 space-y-4">
              {experiences.map((experience) => (
                <article
                  key={`${experience.company}-${experience.period}`}
                  className="rounded-xl border border-zinc-200 p-5 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
                >
                  <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                    {experience.period}
                  </p>
                  <h3 className="mt-2 text-base font-semibold">
                    {experience.role} · {experience.company}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
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

          <section id="linkedin" className="scroll-mt-24 min-h-screen py-8 lg:snap-start">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              LinkedIn Highlights
            </h2>
            <div className="mt-5 rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
              <ul className="space-y-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                {linkedInHighlights.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <a
                href="https://www.linkedin.com/in/milene-danelli-4a2480162"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex rounded-full border border-zinc-300 px-3 py-1.5 text-sm transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
              >
                View full profile on LinkedIn
              </a>
            </div>
          </section>

          <section id="skills" className="scroll-mt-24 min-h-screen py-8 lg:snap-start">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Skills</h2>
            <ul className="mt-5 grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
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

          <section id="education" className="scroll-mt-24 min-h-screen py-8 lg:snap-start">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Education
            </h2>
            <div className="mt-5 space-y-4 text-sm">
              <article className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
                <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">2021 - 2022</p>
                <h3 className="mt-2 font-semibold">Systems Analysis and Development</h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-300">
                  Centro Universitário União das Américas Descomplica
                </p>
              </article>
              <article className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
                <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">2018 - 2021</p>
                <h3 className="mt-2 font-semibold">Computer Science</h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-300">
                  Universidade Tecnológica Federal do Paraná
                </p>
              </article>
              <article className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
                <h3 className="font-semibold">Languages</h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-300">
                  Portuguese (native), Spanish (advanced), English (intermediate)
                </p>
              </article>
            </div>
          </section>

          <section id="contact" className="scroll-mt-24 min-h-screen py-8 lg:snap-start">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Contact</h2>
            <p className="mt-5 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
              Open to full stack developer opportunities in challenging projects. Current location:
              Badalona, Barcelona, Spain.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <a
                href="mailto:mi.danelli@outlook.com"
                className="rounded-full border border-zinc-300 px-3 py-1.5 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
              >
                mi.danelli@outlook.com
              </a>
              <a
                href="https://www.linkedin.com/in/milene-danelli-4a2480162"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-zinc-300 px-3 py-1.5 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
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
