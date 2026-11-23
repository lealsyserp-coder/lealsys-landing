'use client'

import { InlineWidget } from 'react-calendly'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-start py-12 px-4">
        <div className="text-center mb-8">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-[0.18em]">Demo gratis</p>
          <h1 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">Agenda tu demo de 30 minutos</h1>
          <p className="mt-2 text-slate-500 text-sm">Elige el día y la hora que mejor te quede. Sin compromiso.</p>
        </div>

        <div className="w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-2xl">
          <InlineWidget
            url="https://calendly.com/lealsyserp/30min"
            styles={{ height: '700px', minWidth: '320px' }}
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}
