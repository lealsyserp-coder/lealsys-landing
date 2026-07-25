import { Store, Wrench, Briefcase, Building, Stethoscope, GraduationCap, Hammer, Truck } from 'lucide-react'
import { Reveal } from './Reveal'

const industries = [
  { icon: Store, name: 'Comercio y retail', desc: 'Pulperías, tiendas, distribuidoras' },
  { icon: Wrench, name: 'Servicios', desc: 'Talleres, asesorías, consultoras' },
  { icon: Briefcase, name: 'Contadores', desc: 'Despachos con varios clientes' },
  { icon: Building, name: 'Inmobiliarias', desc: 'Bienes raíces y administración' },
  { icon: Stethoscope, name: 'Salud', desc: 'Clínicas, farmacias, laboratorios' },
  { icon: GraduationCap, name: 'Educación', desc: 'Colegios y academias' },
  { icon: Hammer, name: 'Construcción', desc: 'Constructoras y ferreterías' },
  { icon: Truck, name: 'Transporte', desc: 'Logística y distribución' },
] as const

export function Industries() {
  return (
    <section className="py-20 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-[0.18em] mb-3">Industrias</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Para todo tipo de PYME
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Lealsys se adapta a tu industria. Si tu negocio factura, compra y mueve inventario,
            te sirve.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map(({ icon: Icon, name, desc }, i) => (
            <Reveal
              key={name}
              delay={i * 50}
              className="group bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div className="h-11 w-11 rounded-lg bg-blue-50 flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
                <Icon size={22} className="text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900 text-sm">{name}</h3>
              <p className="mt-1 text-xs text-slate-500">{desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
