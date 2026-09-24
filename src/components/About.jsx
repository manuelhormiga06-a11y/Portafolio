function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl px-6 py-24">
      <header id="inicio" className="max-w-3xl">
        <p className="mb-3 text-cyan-400">Desarrollo de software</p>
        <h1 className="text-4xl font-bold text-white md:text-6xl">Hola, soy Manuel José</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          Soy estudiante de desarrollo de software y desarrollador en formación. Trabajo en proyectos web y continúo fortaleciendo mis conocimientos en tecnologías de desarrollo.
        </p>
        <a href="#proyectos" className="mt-8 inline-block rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400">
          Ver mis proyectos
        </a>
      </header>
    </section>
  )
}

export default About