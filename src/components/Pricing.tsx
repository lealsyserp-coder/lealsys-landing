import {
  Building2, Users, Layers, Headphones,
  ShieldCheck, Cloud, Phone, MessageCircle,
} from 'lucide-react'
import { Reveal } from './Reveal'
import { WHATSAPP_URL } from '@/lib/siteConfig'

const includes = [
  { icon: Building2, label: 'Una o varias empresas' },
  { icon: Users, label: 'Usuarios y roles a medida' },
  { icon: Layers, label: 'Módulos según tu operación' },
  { icon: Cloud, label: 'Hospedaje en la nube' },
  { icon: ShieldCheck, label: 'Cifrado y respaldos diarios' },
  { icon: Headphones, label: 'Soporte por WhatsApp y correo' },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Nos adaptamos a tu empresa
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Cada PYME es distinta. Diseñamos una propuesta a la medida según el
            tamaño de tu operación, los módulos que necesitás y la cantidad de usuarios.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-14 relative rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/60 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-3 p-6 sm:p-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Una propuesta hecha para tu negocio
              </h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Te acompañamos en una llamada de 30 minutos para entender tu
                operación y armar una propuesta clara, sin contratos forzados ni
                letras pequeñas.
              </p>

              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {includes.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-blue-600" />
                    </div>
                    <span className="text-sm text-slate-700 leading-snug pt-2">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 p-6 sm:p-12 text-white flex flex-col justify-center">
              <p className="text-xs font-semibold text-blue-300 uppercase tracking-[0.18em]">
                Hablemos
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight">
                Contactá a un asesor
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Sin compromiso. Te damos una recomendación honesta según
                lo que tu empresa realmente necesita.
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href="#demo"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-500 hover:bg-blue-400 text-white rounded-lg font-semibold transition-colors shadow-md shadow-blue-900/30"
                >
                  <MessageCircle size={16} />
                  Solicitar demo
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/15 text-white rounded-lg font-semibold transition-colors border border-white/20"
                >
                  <Phone size={16} />
                  Llamar a un asesor
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
