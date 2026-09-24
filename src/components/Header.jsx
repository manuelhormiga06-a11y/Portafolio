function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Navegación principal">
        <a href="#inicio" className="text-xl font-black tracking-tight text-white">
          Manuel<span className="text-cyan-400">.</span>
        </a>

        <ul className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <li><a href="#sobre-mi" className="transition hover:text-cyan-400">Sobre mí</a></li>
          <li><a href="#habilidades" className="transition hover:text-cyan-400">Habilidades</a></li>
          <li><a href="#servicios" className="transition hover:text-cyan-400">Servicios</a></li>
          <li><a href="#proyectos" className="transition hover:text-cyan-400">Proyectos</a></li>
          <li><a href="#contacto" className="transition hover:text-cyan-400">Contacto</a></li>
        </ul>

        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-white">
            Menú
          </summary>
          <ul className="absolute right-0 mt-3 w-48 rounded-xl border border-slate-700 bg-slate-950 p-3 shadow-xl">
            <li><a href="#sobre-mi" className="block rounded-lg px-3 py-2 hover:bg-slate-800">Sobre mí</a></li>
            <li><a href="#habilidades" className="block rounded-lg px-3 py-2 hover:bg-slate-800">Habilidades</a></li>
            <li><a href="#servicios" className="block rounded-lg px-3 py-2 hover:bg-slate-800">Servicios</a></li>
            <li><a href="#proyectos" className="block rounded-lg px-3 py-2 hover:bg-slate-800">Proyectos</a></li>
            <li><a href="#contacto" className="block rounded-lg px-3 py-2 hover:bg-slate-800">Contacto</a></li>
          </ul>
        </details>
      </nav>
    </header>
  )
}

export default Header