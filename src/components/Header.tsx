'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.lealsys.com'

const servicios = [
  {
    label: 'Lealsys ERP',
    desc: 'Software contable en la nube',
    href: '/',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    label: 'Asesoría Contable',
    desc: 'Expertos en tu equipo, sin costo fijo',
    href: '/asesoria',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M12 2a5 5 0 1 1 0 10A5 5 0 0 1 12 2z" />
        <path d="M3 20c0-4 4-7 9-7s9 3 9 7" />
      </svg>
    ),
  },
]

const links = [
  { label: 'Funcionalidades', href: '/#features' },
  { label: 'Por qué Lealsys', href: '/#why' },
  { label: 'Precios', href: '/#pricing' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const [mobileServiciosOpen, setMobileServiciosOpen] = useState(false)
  const dropRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

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

          {/* Servicios dropdown — al final de los links */}
          <div className="relative" ref={dropRef}>
            <button
              onClick={() => setDropOpen(v => !v)}
              className={`flex items-center gap-1.5 text-base font-medium px-3.5 py-2 rounded-md transition-colors ${
                dropOpen ? 'text-slate-900 bg-slate-100' : 'text-slate-800 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Servicios
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${dropOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {dropOpen && (
              <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-xl border border-slate-200 shadow-xl shadow-slate-900/10 py-2 z-50">
                {servicios.map(s => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setDropOpen(false)}
                    className="flex items-start gap-3 px-4 py-3 hover:bg-slate-50 transition-colors group"
                  >
                    <div className="mt-0.5 p-1.5 bg-slate-100 rounded-lg group-hover:bg-blue-50 transition-colors shrink-0">
                      {s.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{s.label}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{s.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={APP_URL}
            className="text-base text-slate-800 hover:text-slate-900 font-medium px-3 py-2 transition-colors"
          >
            Iniciar sesión
          </a>
          <a
            href="/demo"
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
          {/* Servicios en móvil: expandible */}
          <button
            onClick={() => setMobileServiciosOpen(v => !v)}
            className="flex items-center justify-between text-base text-slate-800 font-medium py-2.5 px-2 rounded-md hover:bg-slate-100 w-full"
          >
            Servicios
            <ChevronDown size={16} className={`transition-transform duration-200 ${mobileServiciosOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobileServiciosOpen && (
            <div className="ml-3 flex flex-col gap-0.5 mb-1">
              {servicios.map(s => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => { setOpen(false); setMobileServiciosOpen(false) }}
                  className="flex items-center gap-2.5 py-2.5 px-2 rounded-md hover:bg-slate-50 text-sm text-slate-700 font-medium"
                >
                  {s.icon}
                  {s.label}
                </Link>
              ))}
            </div>
          )}

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
              href="/demo"
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
