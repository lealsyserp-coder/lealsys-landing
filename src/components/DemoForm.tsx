'use client'

import { Phone, Mail, MessageCircle, Clock, ShieldCheck, Users } from 'lucide-react'
import { InlineWidget } from 'react-calendly'
import { Reveal } from './Reveal'
import { WHATSAPP_URL } from '@/lib/siteConfig'

const CALENDLY_URL = 'https://calendly.com/lealsyserp/30min'

export function DemoForm() {
  return (
    <section id="demo" className="py-20 sm:py-28 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-blue-100/40 blur-3xl -z-0"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-[0.18em]">
              Demo gratis
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Hablemos en 30 minutos
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Te mostramos cómo funciona Lealsys con datos reales de tu empresa.
              Si te encaja, lo configuramos juntos. Si no, te decimos honestamente.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: Clock, label: 'Agenda en segundos', val: 'Elige el día y hora que mejor te quede' },
                { icon: Users, label: 'Demo personalizada', val: '30 min · 1 a 1 con un asesor' },
                { icon: ShieldCheck, label: 'Sin compromiso', val: 'No te pedimos tarjeta de crédito' },
              ].map(({ icon: Icon, label, val }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{label}</p>
                    <p className="text-sm text-slate-600">{val}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 space-y-2.5 text-sm">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors">
                <MessageCircle size={16} className="text-[#25D366]" />
                <span><strong>WhatsApp:</strong> +504 3221-8864</span>
              </a>
              <a href="tel:+50432235185" className="flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors">
                <Phone size={16} className="text-blue-600" />
                <span><strong>Teléfono:</strong> +504 3223-5185</span>
              </a>
              <a href="mailto:info@lealsys.com" className="flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors">
                <Mail size={16} className="text-blue-600" />
                <span><strong>Email:</strong> info@lealsys.com</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
            <InlineWidget
              url={CALENDLY_URL}
              styles={{ height: '660px', minWidth: '320px' }}
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
