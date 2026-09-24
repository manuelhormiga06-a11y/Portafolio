function Projects() {
  const projects = [
    {
      title: 'Previnox',
      type: 'Plataforma web',
      text: 'Plataforma digital de apoyo emocional y salud mental con registro e inicio de sesión, dashboard, contacto y diferentes herramientas de apoyo.',
    },
    {
      title: 'DigitalPro',
      type: 'Agencia digital',
      text: 'Proyecto de una agencia digital con secciones de inicio, servicios, precios, galería y contacto.',
    },
  ]

  return (
    <section id="proyectos" className="border-y border-slate-800 bg-slate-900/60 px-6 py-20">
      <header className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">Mi trabajo</p>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Proyectos destacados</h2>
        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          Proyectos en los que he aplicado conocimientos de desarrollo web durante mi formación.
        </p>
      </header>

      <section className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-2" aria-label="Proyectos destacados">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="group rounded-3xl border border-slate-700 bg-slate-950 p-8 transition hover:-translate-y-1 hover:border-cyan-400"
          >
            <header>
              <p className="text-sm font-semibold text-cyan-400">Proyecto 0{index + 1} · {project.type}</p>
              <h3 className="mt-3 text-3xl font-bold text-white group-hover:text-cyan-400">{project.title}</h3>
            </header>
            <p className="mt-5 max-w-xl leading-7 text-slate-400">{project.text}</p>
          </article>
        ))}
      </section>
    </section>
  )
}

export default Projects