'use client'

import { InlineWidget } from 'react-calendly'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Clock, Video } from 'lucide-react'

const CALENDLY_URL =
  'https://calendly.com/lealsyserp/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=2563eb'

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-start py-12 px-4">
        <div className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-xl border border-slate-200 flex flex-col sm:flex-row">
          {/* Left panel */}
          <div className="sm:w-80 shrink-0 bg-white border-b sm:border-b-0 sm:border-r border-slate-200 p-8 flex flex-col">
            <div className="mb-6">
              <img
                src="/lealsys-icon.png"
                alt="Lealsys"
                className="h-14 w-14 object-contain"
              />
            </div>

            <p className="text-sm font-semibold text-slate-500 mb-1">LealSys</p>
            <h2 className="text-2xl font-bold text-slate-900 mb-5">Demo Lealsys</h2>

            <div className="space-y-3 text-sm text-slate-600 mb-6">
              <div className="flex items-center gap-2">
                <Clock size={15} className="text-slate-400 shrink-0" />
                <span>30 min</span>
              </div>
              <div className="flex items-center gap-2">
                <Video size={15} className="text-slate-400 shrink-0" />
                <span>Enlace de videollamada al confirmar</span>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              ¡Hola! Esta reunión es para conocer más de tu empresa y mostrarte cómo Lealsys puede ayudarte a crecer. La demo dura 30 minutos.
            </p>

            <div className="mt-auto pt-8 flex gap-4 text-xs text-blue-600">
              <a href="/privacidad" className="hover:underline">Política de privacidad</a>
            </div>
          </div>

          {/* Right panel — Calendly calendar only */}
          <div className="flex-1 min-h-[650px]">
            <InlineWidget
              url={CALENDLY_URL}
              styles={{ height: '100%', minHeight: '650px', minWidth: '300px' }}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
