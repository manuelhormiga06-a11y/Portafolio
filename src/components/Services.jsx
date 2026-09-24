function Services() {
  const services = [
    {
      title: 'Desarrollo web',
      text: 'Creación de interfaces web modernas, organizadas y adaptables a diferentes tamaños de pantalla.',
    },
    {
      title: 'Interfaces con React',
      text: 'Construcción de interfaces mediante componentes reutilizables y una estructura clara.',
    },
    {
      title: 'Diseño con Tailwind CSS',
      text: 'Creación de estilos consistentes y responsivos utilizando clases utilitarias de Tailwind CSS.',
    },
  ]

  return (
    <section id="servicios" className="mx-auto max-w-6xl px-6 py-20">
      <header>
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">Lo que desarrollo</p>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Servicios</h2>
        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          Áreas de desarrollo relacionadas con mis conocimientos y proyectos actuales.
        </p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-3" aria-label="Servicios">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-3xl border border-slate-700 bg-slate-900 p-7 transition hover:-translate-y-1 hover:border-cyan-400"
          >
            <p className="text-3xl font-black text-cyan-400">0{services.indexOf(service) + 1}</p>
            <h3 className="mt-6 text-xl font-bold text-white">{service.title}</h3>
            <p className="mt-4 leading-7 text-slate-400">{service.text}</p>
          </article>
        ))}
      </section>
    </section>
  )
}

export default Services