function Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-6xl px-6 py-24">
      <section className="rounded-3xl border border-slate-700 bg-slate-900 p-8 text-center md:p-14">
        <header>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">Contacto</p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-5xl">¿Hablamos de un proyecto?</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            Si quieres conocer mi trabajo o comunicarte conmigo, puedes hacerlo directamente por WhatsApp.
          </p>
        </header>

        <address className="mt-8 not-italic">
          <a
            href="https://wa.me/573128367886"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-xl bg-cyan-500 px-7 py-3 font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-400"
          >
            Contactarme por WhatsApp
          </a>
        </address>
      </section>
    </section>
  )
}

export default Contact