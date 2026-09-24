function Footer() {
  return (
    <footer className="border-t border-slate-800 px-6 py-10 text-center">
      <p className="text-sm text-slate-500">
        © {new Date().getFullYear()} Manuel José · Portafolio personal
      </p>
      <p className="mt-2 text-xs text-slate-600">
        Desarrollado con React, Vite y Tailwind CSS.
      </p>
    </footer>
  )
}

export default Footer