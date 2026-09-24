function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <header id="inicio" className="grid items-center gap-12 md:grid-cols-[1.3fr_0.7fr]">
        <section>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Desarrollo de software
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-tight text-white md:text-7xl">
            Hola, soy <span className="text-cyan-400">Manuel José</span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            Soy estudiante de Desarrollo de Software y desarrollador en formación,
            enfocado en crear soluciones web modernas, funcionales y fáciles de utilizar.
          </p>

          <p className="mt-4 max-w-3xl leading-7 text-slate-400">
            Durante mi formación he trabajado con HTML, CSS, JavaScript, React, Vite,
            Tailwind CSS, Bootstrap, Python y MySQL, apoyándome en Git, GitHub y
            Visual Studio Code para desarrollar y organizar mis proyectos.
          </p>

          <nav className="mt-9 flex flex-wrap gap-4" aria-label="Acciones principales">
            <a
              href="#proyectos"
              className="rounded-xl bg-cyan-500 px-6 py-3 font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-400"
            >
              Ver proyectos
            </a>
            <a
              href="#contacto"
              className="rounded-xl border border-slate-700 px-6 py-3 font-bold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Contactarme
            </a>
          </nav>
        </section>

        <aside className="rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-2xl shadow-cyan-950/20">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Mi enfoque
          </p>
          <h2 className="mt-4 text-2xl font-bold text-white">
            Aprender, construir y mejorar
          </h2>
          <p className="mt-4 leading-7 text-slate-400">
            Me interesa seguir creciendo en el desarrollo frontend y convertir ideas
            en experiencias digitales claras, ordenadas y útiles.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate-300">
            <li>✓ Desarrollo de interfaces web</li>
            <li>✓ Componentes con React</li>
            <li>✓ Diseño con Tailwind CSS</li>
            <li>✓ Desarrollo y aprendizaje continuo</li>
          </ul>
        </aside>
      </header>
    </section>
  )
}

export default About