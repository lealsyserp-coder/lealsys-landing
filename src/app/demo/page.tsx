'use client'

import Link from 'next/link'
import { InlineWidget } from 'react-calendly'
import { ArrowLeft, MessageCircle, Phone } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/siteConfig'

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      <header className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
        <Link href="/" className="flex items-center gap-3 group">
          <ArrowLeft size={16} className="text-slate-500 group-hover:text-white transition-colors" />
          <img
            src="/lealsys-icon.png"
            alt="Lealsys"
            className="h-8 w-8 object-contain"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          <div className="leading-tight">
            <p className="text-sm font-extrabold text-white">LealSys</p>
            <p className="text-[9px] text-slate-500 tracking-[0.22em] uppercase font-bold">ERP</p>
          </div>
        </Link>

        <div className="flex items-center gap-4 text-sm">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <MessageCircle size={14} className="text-[#25D366]" />
            +504 3221-8864
          </a>
          <a
            href="tel:+50432235185"
            className="hidden sm:flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <Phone size={14} className="text-blue-400" />
            +504 3223-5185
          </a>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-start py-8 px-4">
        <div className="text-center mb-6">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-[0.18em]">Demo gratis</p>
          <h1 className="mt-2 text-2xl sm:text-3xl font-bold text-white">Agenda tu demo de 30 minutos</h1>
          <p className="mt-2 text-slate-400 text-sm">Elige el día y la hora que mejor te quede. Sin compromiso.</p>
        </div>

        <div className="w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-2xl">
          <InlineWidget
            url="https://calendly.com/lealsyserp/30min"
            styles={{ height: '700px', minWidth: '320px' }}
          />
        </div>
      </main>
    </div>
  )
}
