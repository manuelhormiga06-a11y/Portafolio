function Skills() {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Vite',
    'Tailwind CSS',
    'Bootstrap',
    'Python',
    'MySQL',
    'Git',
    'GitHub',
    'Visual Studio Code',
  ]

  return (
    <section id="habilidades" className="border-y border-slate-800 bg-slate-900/60 px-6 py-20">
      <header className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">Tecnologías</p>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Habilidades</h2>
        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          Tecnologías y herramientas que he utilizado durante mi formación y en mis proyectos.
        </p>
      </header>

      <ul className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5 text-center font-semibold text-slate-200 transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills