function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Navegación principal">
        <a href="#inicio" className="text-xl font-bold text-white">Manuel José</a>
        <ul className="hidden gap-6 text-sm md:flex">
          <li><a href="#sobre-mi" className="hover:text-cyan-400">Sobre mí</a></li>
          <li><a href="#habilidades" className="hover:text-cyan-400">Habilidades</a></li>
          <li><a href="#servicios" className="hover:text-cyan-400">Servicios</a></li>
          <li><a href="#proyectos" className="hover:text-cyan-400">Proyectos</a></li>
          <li><a href="#contacto" className="hover:text-cyan-400">Contacto</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header