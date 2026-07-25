import { Check, X, Minus } from 'lucide-react'
import { Reveal } from './Reveal'
import { WhyLealsysMobile } from './WhyLealsysMobile'

type Value = boolean | 'partial'

const rows: { feature: string; excel: Value; viejo: Value; lealsys: Value }[] = [
  { feature: 'Configuración fiscal local (RTN, ISV, multi-moneda)', excel: false, viejo: 'partial', lealsys: true },
  { feature: 'Contabilidad automática de partida doble', excel: false, viejo: 'partial', lealsys: true },
  { feature: 'Acceso simultáneo desde celular y oficina', excel: false, viejo: false, lealsys: true },
  { feature: 'Respaldos automáticos en la nube', excel: false, viejo: false, lealsys: true },
  { feature: 'Reportes financieros en un clic', excel: 'partial', viejo: true, lealsys: true },
  { feature: 'Multi-empresa con un solo login', excel: false, viejo: false, lealsys: true },
  { feature: 'Sin instalación ni servidores propios', excel: true, viejo: false, lealsys: true },
  { feature: 'Soporte en español por WhatsApp', excel: false, viejo: false, lealsys: true },
]

function Cell({ value, highlighted = false, size = 'md' }: { value: Value; highlighted?: boolean; size?: 'sm' | 'md' }) {
  const dim = size === 'sm' ? 'h-7 w-7' : 'h-8 w-8'
  const icon = size === 'sm' ? 14 : 16

  if (value === true) {
    return (
      <div
        className={`inline-flex ${dim} items-center justify-center rounded-full ${
          highlighted
            ? 'bg-emerald-500 text-white shadow-sm shadow-emerald-600/30'
            : 'bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200'
        }`}
      >
        <Check size={icon} strokeWidth={3} />
      </div>
    )
  }
  if (value === 'partial') {
    return (
      <div className={`inline-flex ${dim} items-center justify-center rounded-full bg-amber-50 text-amber-600 ring-1 ring-amber-200`}>
        <Minus size={icon} strokeWidth={3} />
      </div>
    )
  }
  return (
    <div className={`inline-flex ${dim} items-center justify-center rounded-full bg-slate-100 text-slate-400 ring-1 ring-slate-200`}>
      <X size={icon} strokeWidth={3} />
    </div>
  )
}

function Legend() {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
      <span className="inline-flex items-center gap-1.5">
        <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200">
          <Check size={10} strokeWidth={3} />
        </span>
        Disponible
      </span>
      <span className="inline-flex items-center gap-1.5">
        <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-amber-50 text-amber-600 ring-1 ring-amber-200">
          <Minus size={10} strokeWidth={3} />
        </span>
        Parcial
      </span>
      <span className="inline-flex items-center gap-1.5">
        <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-slate-100 text-slate-400 ring-1 ring-slate-200">
          <X size={10} strokeWidth={3} />
        </span>
        No disponible
      </span>
    </div>
  )
}

export function WhyLealsys() {
  return (
    <section id="why" className="py-20 sm:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-[0.18em]">
            Comparativa
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            ¿Por qué las PYMEs eligen Lealsys?
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Compará lado a lado lo que recibís con Lealsys frente a lo que probablemente
            estás usando hoy. Una decisión informada, sin promesas vacías.
          </p>
        </Reveal>

        {/* MOBILE: tab-based clean comparison */}
        <Reveal className="md:hidden">
          <WhyLealsysMobile rows={rows} />
        </Reveal>

        {/* DESKTOP: comparison table */}
        <Reveal className="mt-14 max-w-5xl mx-auto hidden md:block">
          <div className="relative rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 overflow-hidden">
            <div className="relative grid grid-cols-12 border-b border-slate-200 bg-slate-50/60">
              <div className="col-span-6 px-6 py-5">
                <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.14em]">
                  Funcionalidad
                </p>
              </div>
              <div className="col-span-2 px-3 py-5 text-center">
                <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.14em]">
                  Excel
                </p>
                <p className="mt-0.5 text-[10px] text-slate-400 hidden lg:block">Manual</p>
              </div>
              <div className="col-span-2 px-3 py-5 text-center">
                <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.14em]">
                  Sistema viejo
                </p>
                <p className="mt-0.5 text-[10px] text-slate-400 hidden lg:block">Local</p>
              </div>
              <div className="col-span-2 px-3 py-5 text-center bg-gradient-to-b from-blue-600 to-blue-700">
                <p className="text-[11px] font-extrabold text-white uppercase tracking-[0.18em]">
                  Lealsys
                </p>
                <p className="mt-0.5 text-[10px] text-blue-200 hidden lg:block">En la nube</p>
              </div>
            </div>

            <div className="relative divide-y divide-slate-100">
              {rows.map((r, i) => (
                <div
                  key={r.feature}
                  className={`grid grid-cols-12 items-center ${
                    i % 2 === 1 ? 'bg-slate-50/40' : 'bg-white'
                  }`}
                >
                  <div className="col-span-6 px-6 py-4">
                    <p className="text-sm font-medium text-slate-800 leading-snug">
                      {r.feature}
                    </p>
                  </div>
                  <div className="col-span-2 py-4 text-center">
                    <Cell value={r.excel} />
                  </div>
                  <div className="col-span-2 py-4 text-center">
                    <Cell value={r.viejo} />
                  </div>
                  <div className="col-span-2 py-4 text-center relative">
                    <div className="absolute inset-y-0 inset-x-1 bg-blue-50/40 -z-0" aria-hidden />
                    <div className="relative">
                      <Cell value={r.lealsys} highlighted />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Legend />
        </Reveal>
      </div>
    </section>
  )
}
