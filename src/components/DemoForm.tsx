'use client'

import { useState } from 'react'
import { Loader2, CheckCircle2, Phone, Mail, MessageCircle, Clock, ShieldCheck, Users } from 'lucide-react'
import { Reveal } from './Reveal'
import { WHATSAPP_URL } from '@/lib/siteConfig'

export function DemoForm() {
  const [form, setForm] = useState({
    nombre: '',
    empresa: '',
    whatsapp: '',
    email: '',
    mensaje: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')
    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'No se pudo enviar la solicitud')
      }
      setStatus('sent')
      setForm({ nombre: '', empresa: '', whatsapp: '', email: '', mensaje: '' })
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Error inesperado')
    }
  }

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
                { icon: Clock, label: 'Respuesta rápida', val: 'Menos de 24h hábiles' },
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

          <Reveal delay={120} className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xl shadow-slate-200/50">
            {status === 'sent' ? (
              <div className="text-center py-10">
                <div className="h-16 w-16 mx-auto rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <CheckCircle2 size={32} className="text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">¡Solicitud recibida!</h3>
                <p className="text-sm text-slate-600 max-w-sm mx-auto">
                  Un asesor te contactará por WhatsApp en menos de 24 horas hábiles
                  para agendar tu demo.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-sm text-blue-600 hover:underline font-medium"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 mb-1">Solicitar demo</h3>
                <p className="text-sm text-slate-500 -mt-1 mb-4">Te contactamos por WhatsApp en menos de 24 horas.</p>

                <div>
                  <label htmlFor="nombre" className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Nombre completo *
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    required
                    value={form.nombre}
                    onChange={e => setForm({ ...form, nombre: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-sm"
                    placeholder="Juan Pérez"
                  />
                </div>
                <div>
                  <label htmlFor="empresa" className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Empresa *
                  </label>
                  <input
                    id="empresa"
                    type="text"
                    required
                    value={form.empresa}
                    onChange={e => setForm({ ...form, empresa: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-sm"
                    placeholder="Distribuidora XYZ"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="whatsapp" className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                      WhatsApp *
                    </label>
                    <input
                      id="whatsapp"
                      type="tel"
                      required
                      value={form.whatsapp}
                      onChange={e => setForm({ ...form, whatsapp: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-sm"
                      placeholder="+504 9999-9999"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-sm"
                      placeholder="juan@empresa.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="mensaje" className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                    ¿En qué te podemos ayudar? (opcional)
                  </label>
                  <textarea
                    id="mensaje"
                    rows={3}
                    value={form.mensaje}
                    onChange={e => setForm({ ...form, mensaje: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-sm resize-none"
                    placeholder="Contanos qué necesitás resolver"
                  />
                </div>

                {status === 'error' && (
                  <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg p-3">
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md shadow-blue-600/20"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    'Solicitar demo'
                  )}
                </button>
                <p className="text-xs text-slate-500 text-center">
                  Al enviar aceptás recibir comunicación comercial de Lealsys.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
