function Projects() {
  const projects = [
    {
      title: 'Previnox',
      text: 'Plataforma digital de apoyo emocional y salud mental con páginas de usuario, registro e inicio de sesión, dashboard, contacto y herramientas de apoyo.',
    },
    {
      title: 'DigitalPro',
      text: 'Proyecto de una agencia digital con secciones de inicio, servicios, precios, galería y contacto.',
    },
  ]

  return (
    <section id="proyectos" className="border-y border-slate-800 bg-slate-900/60 px-6 py-20">
      <header className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-white">Proyectos</h2>
        <p className="mt-3 text-slate-400">Algunos proyectos en los que he trabajado durante mi formación.</p>
      </header>
      <section className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="rounded-2xl border border-slate-700 bg-slate-950 p-6">
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-3 leading-7 text-slate-400">{project.text}</p>
          </article>
        ))}
      </section>
    </section>
  )
}

export default Projects