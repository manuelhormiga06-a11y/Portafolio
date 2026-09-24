function Skills() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Tailwind CSS', 'Bootstrap', 'Python', 'MySQL', 'Git', 'GitHub', 'Visual Studio Code']

  return (
    <section id="habilidades" className="border-y border-slate-800 bg-slate-900/60 px-6 py-20">
      <header className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-white">Habilidades y tecnologías</h2>
        <p className="mt-3 text-slate-400">Tecnologías con las que he trabajado durante mi formación y proyectos.</p>
      </header>
      <ul className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {skills.map((skill) => (
          <li key={skill} className="rounded-xl border border-slate-700 bg-slate-950 p-4 text-center">{skill}</li>
        ))}
      </ul>
    </section>
  )
}

export default Skills