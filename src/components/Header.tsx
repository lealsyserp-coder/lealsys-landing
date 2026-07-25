'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.lealsys.com'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Funcionalidades', href: '#features' },
    { label: 'Por qué Lealsys', href: '#why' },
    { label: 'Precios', href: '#pricing' },
  ]

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200'
          : 'bg-white border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <img src="/lealsys-icon.png" alt="Lealsys" className="h-11 w-11 object-contain" />
          <div className="leading-tight">
            <p className="text-xl font-extrabold tracking-tight text-slate-900">LealSys</p>
            <p className="text-[10px] text-slate-500 tracking-[0.22em] uppercase -mt-0.5 font-bold">ERP</p>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-base text-slate-800 hover:text-slate-900 hover:bg-slate-100 px-3.5 py-2 rounded-md transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={APP_URL}
            className="text-base text-slate-800 hover:text-slate-900 font-medium px-3 py-2 transition-colors"
          >
            Iniciar sesión
          </a>
          <a
            href="#demo"
            className="text-base px-5 py-2.5 bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-colors font-semibold shadow-sm"
          >
            Solicitar demo
          </a>
        </div>

        <button
          className="lg:hidden p-2 -mr-2 text-slate-700"
          onClick={() => setOpen(v => !v)}
          aria-label="Menú"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 flex flex-col gap-1">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-base text-slate-800 font-medium py-2.5 px-2 rounded-md hover:bg-slate-100"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="border-t border-slate-100 mt-2 pt-3 flex flex-col gap-2">
            <a href={APP_URL} className="text-base text-slate-800 font-medium py-2.5 px-2">Iniciar sesión</a>
            <a
              href="#demo"
              onClick={() => setOpen(false)}
              className="text-base px-4 py-3 bg-slate-900 text-white rounded-md text-center font-semibold"
            >
              Solicitar demo
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
