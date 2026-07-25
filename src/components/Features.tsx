import {
  Receipt, Package, Wallet, BarChart3,
  Calculator, Users, ShoppingCart,
} from 'lucide-react'
import { Reveal } from './Reveal'

const features = [
  {
    icon: Receipt,
    title: 'Facturación profesional',
    desc: 'Facturas, notas de crédito y guías de despacho con numeración correlativa, RTN del cliente y formatos legales.',
  },
  {
    icon: Calculator,
    title: 'Contabilidad automática',
    desc: 'Cada venta, compra o pago genera su asiento contable de partida doble automáticamente. Sin doble digitación.',
  },
  {
    icon: Package,
    title: 'Inventario y kardex',
    desc: 'Control por almacén, lotes, vencimientos y costo promedio ponderado. Alertas de stock mínimo.',
  },
  {
    icon: Wallet,
    title: 'Cartera CxC y CxP',
    desc: 'Antigüedad de saldos por cobrar y por pagar, conciliación bancaria, gestión de cheques y cobros.',
  },
  {
    icon: ShoppingCart,
    title: 'Compras y proveedores',
    desc: 'Solicitudes, órdenes, recepción y facturación con seguimiento del flujo de compra completo.',
  },
  {
    icon: BarChart3,
    title: 'Reportes financieros',
    desc: 'Balance general, estado de resultados, libro diario y mayor. Exportables a Excel y PDF.',
  },
  {
    icon: Users,
    title: 'Roles y permisos',
    desc: 'Administrador y operador con acceso granular por módulo. Tu equipo ve solo lo que necesita.',
  },
] as const

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-[0.18em]">
            Funcionalidades
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Módulos ERP completos: facturación, contabilidad e inventario
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Reemplazá Excel, hojas sueltas y sistemas viejos con una sola herramienta.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <Reveal
              key={title}
              delay={i * 60}
              className="group relative p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg hover:-translate-y-0.5 transition-all bg-white"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 shadow-sm shadow-blue-600/20">
                <Icon size={20} className="text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1.5">{title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
