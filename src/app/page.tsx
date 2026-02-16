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
      role: "Programador Web Full Stack Pleno/Senior",
      company: "Arkenova Energy Solutions",
      period: "Febrero 2025 - Actualidad",
      description:
        "Desarrollo de sistema de gestión energética y monitoramiento de hardwares de energía.",
      stack: ["Laravel 11", "PHP 8.2", "Python", "MySQL", "ReactJS", "Docker", "Git"],
    },
    {
      role: "Programador Web Full Stack Pleno/Senior",
      company: "Zenit Software",
      period: "Julio 2022 - Septiembre 2025",
      description:
        "Desarrollo de sistema de seguridad laboral para médicos, exámenes y citas, con integración de APIs gubernamentales y ChatGPT API.",
      stack: ["PHP Laravel", "Blade", "Livewire", "MySQL", "Docker", "Git"],
    },
    {
      role: "Programador Web Full Stack",
      company: "R4 Marketing",
      period: "Mayo 2022 - Julio 2022",
      description:
        "Participación en el desarrollo de un sistema inmobiliario para gestión de propiedades, clientes y transacciones.",
      stack: ["PHP Laravel", "VueJS", "MySQL", "Git"],
    },
    {
      role: "Programador Web Full Stack",
      company: "Traux",
      period: "Diciembre 2021 - Agosto 2022",
      description:
        "Desarrollo del sistema Fan Partner del equipo Vila Nova con integraciones bancarias y control de entradas a estadios.",
      stack: ["PHP Laravel", "Blade", "MySQL", "Git"],
    },
    {
      role: "Programador Web Full Stack Junior",
      company: "Semear y Friella",
      period: "Mayo 2020 - Diciembre 2021",
      description:
        "Desarrollo de sistema integral para frigorífico con módulos de finanzas, ventas, salud, automatización, administración y RRHH.",
      stack: ["PHP Laravel", "Blade", "Livewire", "MySQL", "Git"],
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 px-6 py-10 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <main className="mx-auto w-full max-w-5xl space-y-10">
        <section className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950">
          <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">
            Desarrolladora de Software
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight">Milene Danelli</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
            Analista de sistemas y desarrolladora full stack con 5 años de experiencia en backend
            y frontend, participando en proyectos desafiantes desde 2020. Desarrollo soluciones
            web con enfoque en rendimiento, mantenibilidad e integración de APIs.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-zinc-300 px-3 py-1 dark:border-zinc-700">
              Badalona, Barcelona, España
            </span>
            <a
              className="rounded-full border border-zinc-300 px-3 py-1 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
              href="mailto:mi.danelli@outlook.com"
            >
              mi.danelli@outlook.com
            </a>
            <a
              className="rounded-full border border-zinc-300 px-3 py-1 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
              href="https://www.linkedin.com/in/milene-danelli-4a2480162"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>

        <section className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="text-2xl font-semibold">Conocimientos</h2>
          <ul className="mt-4 grid grid-cols-2 gap-3 text-sm sm:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-lg border border-zinc-200 px-3 py-2 text-zinc-700 dark:border-zinc-800 dark:text-zinc-200"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="text-2xl font-semibold">Experiencias</h2>
          <div className="mt-6 space-y-6">
            {experiences.map((experience) => (
              <article
                key={`${experience.company}-${experience.period}`}
                className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold">{experience.role}</h3>
                  <p className="text-sm text-zinc-500">{experience.period}</p>
                </div>
                <p className="mt-1 text-sm font-medium text-zinc-600 dark:text-zinc-300">
                  {experience.company}
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {experience.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {experience.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="text-2xl font-semibold">Educación e Idiomas</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-base font-semibold">Formación</h3>
              <ul className="mt-3 space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
                <li>
                  <p className="font-medium text-zinc-800 dark:text-zinc-200">
                    Análisis y Desarrollo de Sistemas
                  </p>
                  <p>Centro Universitário União das Américas Descomplica (2021 - 2022)</p>
                </li>
                <li>
                  <p className="font-medium text-zinc-800 dark:text-zinc-200">
                    Ciencias de la Computación
                  </p>
                  <p>Universidade Tecnológica Federal do Paraná (2018 - 2021)</p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold">Idiomas</h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                <li>Portugués (nativo)</li>
                <li>Español (avanzado)</li>
                <li>Inglés (intermedio)</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
