import { PhoneCall, Settings2, Rocket } from 'lucide-react'
import { Reveal } from './Reveal'

const steps = [
  {
    icon: PhoneCall,
    title: 'Conversemos 30 minutos',
    desc: 'Un asesor entiende tu operación, módulos necesarios y volumen de empresa.',
  },
  {
    icon: Settings2,
    title: 'Configuramos tu empresa',
    desc: 'Plan de cuentas, almacenes, usuarios y datos iniciales listos para usar.',
  },
  {
    icon: Rocket,
    title: 'Empezás a operar',
    desc: 'Facturás, controlás inventario y obtenés tu contabilidad desde el día uno.',
  },
]

export function Stats() {
  return (
    <section className="bg-slate-900 text-white py-20 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-xs font-semibold text-blue-300 uppercase tracking-[0.18em]">
            Implementación guiada
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            De la primera llamada a operar en menos de una semana
          </h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Acompañamos a tu equipo en cada paso. Sin instaladores, sin consultorías
            interminables, sin sorpresas.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 100}
              className="relative rounded-2xl bg-slate-800/60 border border-slate-700/80 p-7 hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-900/40">
                  <s.icon size={20} className="text-white" />
                </div>
                <span className="text-3xl font-bold text-slate-700 tabular-nums">
                  0{i + 1}
                </span>
              </div>
              <h3 className="text-base font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
