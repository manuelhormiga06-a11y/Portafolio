function Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-6xl px-6 py-20">
      <header>
        <h2 className="text-3xl font-bold text-white">Contacto</h2>
        <p className="mt-3 text-slate-400">Puedes comunicarte conmigo mediante WhatsApp.</p>
      </header>
      <address className="mt-8 not-italic">
        <a
          href="https://wa.me/573128367886"
          target="_blank"
          rel="noreferrer"
          className="inline-block rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
        >
          Contactarme por WhatsApp
        </a>
      </address>
    </section>
  )
}

export default Contact