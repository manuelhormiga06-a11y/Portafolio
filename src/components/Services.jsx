function Services() {
  const services = [
    { title: 'Desarrollo web', text: 'Creación de interfaces web utilizando tecnologías frontend.' },
    { title: 'Interfaces con React', text: 'Construcción de interfaces organizadas mediante componentes reutilizables.' },
    { title: 'Diseño con Tailwind CSS', text: 'Estilización de interfaces utilizando clases utilitarias.' },
  ]

  return (
    <section id="servicios" className="mx-auto max-w-6xl px-6 py-20">
      <header>
        <h2 className="text-3xl font-bold text-white">Servicios</h2>
        <p className="mt-3 text-slate-400">Servicios relacionados con las tecnologías y conocimientos que actualmente manejo.</p>
      </header>
      <section className="mt-10 grid gap-6 md:grid-cols-3" aria-label="Servicios ofrecidos">
        {services.map((service) => (
          <article key={service.title} className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
            <h3 className="text-xl font-semibold text-white">{service.title}</h3>
            <p className="mt-3 text-slate-400">{service.text}</p>
          </article>
        ))}
      </section>
    </section>
  )
}

export default Services