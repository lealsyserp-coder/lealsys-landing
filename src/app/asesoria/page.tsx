import {
  BookOpen, FileCheck2, BarChart3, TrendingUp,
  ShieldCheck, Headphones, MessageCircle, Phone, Mail,
  DollarSign, RefreshCw, Building2, ChevronDown, ChevronUp,
  CheckCircle2, Monitor, Lock, Globe, X, Check,
  ArrowRight, Layers, PieChart, Receipt,
} from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppFab } from '@/components/WhatsAppFab'
import { Reveal } from '@/components/Reveal'
import { WHATSAPP_URL } from '@/lib/siteConfig'

export const metadata = {
  title: 'Módulo Contable Lealsys — Software Contable para Honduras',
  description:
    'Sistema contable en la nube para empresas hondureñas. Contabilidad general, facturación fiscal CAI, estados financieros, CxC/CxP, multi-moneda y cumplimiento SAR — todo integrado.',
  keywords: [
    'software contable Honduras',
    'sistema contable Honduras',
    'módulo contable ERP',
    'facturación fiscal CAI Honduras',
    'contabilidad en la nube Honduras',
    'SAR Honduras software',
    'estados financieros Honduras',
    'balance general Honduras',
    'CxC CxP software',
    'ERP Honduras PYME',
    'contabilidad multi-moneda Honduras',
    'software ISR ISV Honduras',
  ],
  alternates: { canonical: '/asesoria' },
  openGraph: {
    title: 'Módulo Contable Lealsys — Software Contable para Honduras',
    description:
      'Contabilidad general, facturación fiscal, estados financieros y cumplimiento SAR — todo integrado en un solo sistema en la nube.',
    url: 'https://lealsys.com/asesoria',
    siteName: 'Lealsys',
    locale: 'es',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Módulo Contable Lealsys — Software Contable para Honduras',
    description:
      'Sistema contable en la nube para empresas hondureñas. Facturación fiscal, estados financieros y cumplimiento SAR.',
  },
}

const caracteristicas = [
  {
    icon: BookOpen,
    title: 'Contabilidad General',
    desc: 'Catálogo de cuentas, asientos automáticos, libro diario y mayor. Contabilización integrada con cada factura, cobro y pago.',
  },
  {
    icon: FileCheck2,
    title: 'Facturación Fiscal CAI',
    desc: 'Emisión de facturas con rangos CAI, control de correlativos, ISV automático y validación ante el SAR.',
  },
  {
    icon: BarChart3,
    title: 'Estados Financieros',
    desc: 'Balance General, Estado de Resultados y Flujo de Efectivo generados en tiempo real — listos para exportar.',
  },
  {
    icon: TrendingUp,
    title: 'CxC / CxP',
    desc: 'Control de cobros y pagos con aging, saldos pendientes y aplicación automática de abonos.',
  },
  {
    icon: DollarSign,
    title: 'Multi-moneda',
    desc: 'Operaciones en Lempiras y Dólares con tipos de cambio diarios. Reportes en cualquier moneda.',
  },
  {
    icon: RefreshCw,
    title: 'Conciliación Bancaria',
    desc: 'Concilia extractos contra el mayor contable en minutos. Identifica diferencias y partidas en tránsito.',
  },
  {
    icon: Building2,
    title: 'Centros de Costo',
    desc: 'Segmenta resultados por departamento, proyecto o sucursal. Conoce la rentabilidad real de cada área.',
  },
  {
    icon: ShieldCheck,
    title: 'Cumplimiento SAR',
    desc: 'ISR, ISV, retenciones e Informe Mensual de Ventas — los datos ya están, solo exportás el reporte.',
  },
] as const

const faqs = [
  {
    q: '¿Cuántas empresas puedo registrar?',
    a: 'Múltiples empresas desde una sola cuenta. Cada empresa tiene su propio catálogo de cuentas, rangos CAI y estados financieros completamente independientes.',
  },
  {
    q: '¿El sistema cumple con las disposiciones del SAR?',
    a: 'Sí. Lealsys incluye control de rangos CAI, emisión de facturas con correlativo, retenciones en la fuente, ISV automático e Informe Mensual de Ventas. Actualizamos cada vez que el SAR emite nuevas disposiciones.',
  },
  {
    q: '¿Necesito conocimientos técnicos para usarlo?',
    a: 'No. La interfaz está diseñada para contadores y dueños de empresa. Si sabés facturar y llevar libros, el sistema es intuitivo desde el primer día.',
  },
  {
    q: '¿Cómo migro mis datos actuales desde Excel?',
    a: 'Nuestro equipo te acompaña en la migración. Importamos catálogo de cuentas, saldos de apertura y maestros de clientes/proveedores. El proceso típico toma menos de una semana.',
  },
  {
    q: '¿Puedo acceder desde fuera de la oficina?',
    a: 'Sí, es 100% en la nube. Solo necesitás internet y un navegador — funciona en computadora, tablet y celular.',
  },
  {
    q: '¿Qué pasa si tengo un problema urgente?',
    a: 'Tenés acceso directo a soporte por WhatsApp. Para cierres contables o contingencias fiscales, priorizamos la atención el mismo día.',
  },
] as const

const comparativa = [
  { feature: 'Asientos automáticos por transacción', excel: false, lealsys: true },
  { feature: 'Facturación fiscal con control CAI', excel: false, lealsys: true },
  { feature: 'Estados financieros en tiempo real', excel: false, lealsys: true },
  { feature: 'Multi-moneda HNL / USD', excel: false, lealsys: true },
  { feature: 'Conciliación bancaria integrada', excel: false, lealsys: true },
  { feature: 'CxC y CxP conectados a contabilidad', excel: false, lealsys: true },
  { feature: 'Cumplimiento SAR sin pasos extra', excel: false, lealsys: true },
  { feature: 'Acceso multi-usuario simultáneo', excel: false, lealsys: true },
] as const


const incluye = [
  'Catálogo de cuentas con plan contable hondureño',
  'Facturación fiscal con control CAI',
  'Estados financieros en tiempo real',
  'CxC y CxP integrados',
  'Multi-moneda HNL / USD',
  'Conciliación bancaria',
  'Centros de costo',
  'Reportes para declaraciones SAR',
  'Soporte directo por WhatsApp',
  'Usuarios ilimitados por empresa',
]

export default function AsesoriaPage() {
  return (
    <>
      <Header />
      <main>

        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-white pt-14 pb-20 sm:pt-20 sm:pb-28">
          <div
            aria-hidden
            className="absolute -top-32 left-1/2 -translate-x-1/2 -z-10 h-[600px] w-[900px] rounded-full bg-blue-200/30 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute top-10 right-0 -z-10 h-[300px] w-[300px] rounded-full bg-indigo-100/40 blur-3xl"
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Reveal>
                <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-slate-900 leading-[1.05]">
                  Contabilidad profesional,
                  <span className="block mt-1 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    sin hojas de cálculo.
                  </span>
                </h1>
                <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                  Facturación fiscal CAI, contabilidad general, estados financieros y cumplimiento SAR
                  integrados en un solo sistema en la nube. Diseñado bajo la normativa fiscal de Honduras.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl shadow-blue-600/25"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white shrink-0">
                      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.881.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.881-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.982z" />
                    </svg>
                    Solicitar demo gratis
                  </a>
                  <a
                    href="#caracteristicas"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-slate-700 bg-white border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 hover:border-slate-300 transition-colors"
                  >
                    Ver características
                    <ArrowRight size={16} />
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Dashboard Mockup */}
            <Reveal delay={150} className="mt-16 max-w-4xl mx-auto">
              <div className="relative rounded-2xl border border-slate-200 shadow-2xl shadow-slate-200/80 overflow-hidden bg-slate-50">
                {/* Browser bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-white border-b border-slate-200">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-amber-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 mx-3 h-6 rounded-md bg-slate-100 flex items-center px-3">
                    <span className="text-xs text-slate-400 font-mono">app.lealsys.com / contabilidad</span>
                  </div>
                </div>
                {/* App content mockup */}
                <div className="grid grid-cols-4 min-h-[260px]">
                  {/* Sidebar */}
                  <div className="col-span-1 bg-slate-900 p-4 space-y-1">
                    {['Dashboard', 'Facturación', 'Contabilidad', 'CxC / CxP', 'Reportes'].map((item, i) => (
                      <div key={item} className={`px-3 py-2 rounded-lg text-xs font-medium ${i === 2 ? 'bg-blue-600 text-white' : 'text-slate-400'}`}>
                        {item}
                      </div>
                    ))}
                  </div>
                  {/* Main content */}
                  <div className="col-span-3 p-5 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="h-3 w-32 bg-slate-800 rounded-full mb-1.5" />
                        <div className="h-2 w-20 bg-slate-200 rounded-full" />
                      </div>
                      <div className="h-8 w-28 rounded-lg bg-blue-600" />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { label: 'Ingresos', color: 'bg-blue-50 border-blue-200', bar: 'bg-blue-500', w: 'w-3/4' },
                        { label: 'Gastos', color: 'bg-amber-50 border-amber-200', bar: 'bg-amber-500', w: 'w-1/2' },
                        { label: 'Utilidad', color: 'bg-green-50 border-green-200', bar: 'bg-green-500', w: 'w-2/3' },
                      ].map(c => (
                        <div key={c.label} className={`rounded-xl border p-3 ${c.color}`}>
                          <div className="text-xs text-slate-500 mb-2">{c.label}</div>
                          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div className={`h-full rounded-full ${c.bar} ${c.w}`} />
                          </div>
                          <div className="mt-2 h-4 w-16 bg-slate-200 rounded" />
                        </div>
                      ))}
                    </div>
                    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                      <div className="grid grid-cols-4 gap-0 text-xs text-slate-400 px-4 py-2 border-b border-slate-100 bg-slate-50">
                        {['Fecha', 'Descripción', 'Débito', 'Crédito'].map(h => <span key={h}>{h}</span>)}
                      </div>
                      {[1, 2, 3].map(r => (
                        <div key={r} className="grid grid-cols-4 gap-0 px-4 py-2 border-b border-slate-50">
                          <div className="h-2.5 w-14 bg-slate-100 rounded" />
                          <div className="h-2.5 w-24 bg-slate-100 rounded" />
                          <div className="h-2.5 w-16 bg-blue-100 rounded" />
                          <div className="h-2.5 w-16 bg-slate-100 rounded" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-xs text-slate-400 mt-3">Vista real del módulo contable de Lealsys</p>
            </Reveal>
          </div>
        </section>

        {/* ── Trust bar ── */}
        <section className="bg-slate-900 border-y border-slate-800 py-5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap items-center justify-center divide-x divide-slate-700">
              {([
                [Globe,      'Sistema 100% en la nube'],
                [DollarSign, 'Multi-moneda HNL / USD'],
                [Building2,  'Multi-empresa desde una cuenta'],
                [Headphones, 'Soporte local'],
              ] as const).map(([Icon, label]) => (
                <div key={label} className="flex items-center gap-2.5 px-6 py-2 text-sm font-medium text-slate-300">
                  <Icon size={15} className="text-blue-400 shrink-0" strokeWidth={2} />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Características ── */}
        <section id="caracteristicas" className="py-20 sm:py-28 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <Reveal className="max-w-2xl mx-auto text-center">
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-[0.18em]">
                Características
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Todo integrado, nada duplicado
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Desde el primer asiento hasta los estados financieros — un solo sistema conectado, sin duplicar datos entre módulos.
              </p>
            </Reveal>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {caracteristicas.map(({ icon: Icon, title, desc }, i) => (
                <Reveal
                  key={title}
                  delay={i * 50}
                  className="group p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 bg-white"
                >
                  <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 shadow-md shadow-blue-600/20 group-hover:shadow-lg group-hover:shadow-blue-600/30 transition-shadow">
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1.5">{title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Comparativa vs Excel ── */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <Reveal className="text-center mb-12">
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-[0.18em]">
                Por qué cambiar
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Lealsys vs. Excel y procesos manuales
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Excel no es un sistema contable. Esta es la diferencia en la práctica.
              </p>
            </Reveal>

            <Reveal delay={80} className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-6 py-4 font-semibold text-slate-700 w-1/2">Funcionalidad</th>
                    <th className="text-center px-6 py-4 font-semibold text-slate-400 w-1/4">Excel / Manual</th>
                    <th className="text-center px-6 py-4 font-semibold text-blue-600 w-1/4">
                      <span className="inline-flex items-center gap-1">
                        <Layers size={14} />
                        Lealsys
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparativa.map(({ feature, excel, lealsys }) => (
                    <tr key={feature} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-3.5 text-slate-700 font-medium">{feature}</td>
                      <td className="px-6 py-3.5 text-center">
                        {excel
                          ? <Check size={18} className="text-green-500 mx-auto" />
                          : <X size={18} className="text-red-400 mx-auto" />}
                      </td>
                      <td className="px-6 py-3.5 text-center">
                        {lealsys
                          ? <Check size={18} className="text-blue-600 mx-auto" strokeWidth={2.5} />
                          : <X size={18} className="text-red-400 mx-auto" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          </div>
        </section>

        {/* ── Incluye (dark) ── */}
        <section className="bg-slate-900 text-white py-20 sm:py-28 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <Reveal>
                <p className="text-xs font-semibold text-blue-300 uppercase tracking-[0.18em]">
                  Sin costos ocultos
                </p>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
                  Todo incluido desde el primer día
                </h2>
                <p className="mt-5 text-slate-400 leading-relaxed text-lg">
                  Sin módulos por separado, sin funciones básicas detrás de un plan superior.
                  El módulo contable de Lealsys viene completo — y crece con tu empresa.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-500 hover:bg-blue-400 text-white rounded-xl font-semibold transition-colors shadow-lg shadow-blue-900/40"
                  >
                    <MessageCircle size={16} />
                    Solicitar cotización
                  </a>
                </div>
                <div className="mt-8 flex items-center gap-3 text-sm text-slate-500">
                  <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                  <span>Sin compromiso — demo gratis de 30 minutos</span>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {incluye.map(item => (
                    <li key={item} className="flex items-start gap-3 bg-slate-800/50 border border-slate-700/60 rounded-xl px-4 py-3.5 hover:border-blue-500/30 transition-colors">
                      <CheckCircle2 size={16} className="text-blue-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-300 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Por qué Lealsys ── */}
        <section className="py-20 sm:py-28 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <Reveal className="max-w-2xl mx-auto text-center">
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-[0.18em]">
                Nuestros pilares
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Un sistema que trabaja como tu empresa
              </h2>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: Monitor, title: 'Todo en la nube', desc: 'Accedé desde cualquier dispositivo. Sin instalaciones, sin servidores locales que mantener.' },
                { icon: Lock, title: 'Datos seguros', desc: 'Cifrado en tránsito y en reposo. Backups automáticos diarios. Tu información nunca se pierde.' },
                { icon: Globe, title: 'Hecho para Honduras', desc: 'Diseñado bajo normativa SAR, el Código de Comercio hondureño y las NIC aplicadas localmente.' },
                { icon: Headphones, title: 'Soporte real', desc: 'WhatsApp directo, respuesta en menos de 4 horas. Una persona real que conoce el sistema.' },
              ].map(({ icon: Icon, title, desc }, i) => (
                <Reveal key={title} delay={i * 70} className="group p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 bg-white text-center">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 shadow-md shadow-blue-600/20 mx-auto group-hover:shadow-lg group-hover:shadow-blue-600/30 transition-shadow">
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <Reveal className="text-center mb-12">
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-[0.18em]">
                FAQ
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Preguntas frecuentes
              </h2>
              <p className="mt-4 text-slate-600">
                Lo que más nos preguntan antes de agendar una demo.
              </p>
            </Reveal>

            <div className="space-y-2.5">
              {faqs.map(({ q, a }, i) => (
                <Reveal key={q} delay={i * 50}>
                  <details className="group bg-slate-50 border border-slate-200 hover:border-blue-200 rounded-2xl overflow-hidden transition-colors">
                    <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-slate-800 hover:text-blue-600 transition-colors select-none">
                      <span>{q}</span>
                      <span className="shrink-0 h-7 w-7 rounded-full bg-white border border-slate-200 group-open:border-blue-200 group-open:bg-blue-50 flex items-center justify-center transition-colors">
                        <ChevronDown size={15} className="text-slate-400 group-open:hidden" />
                        <ChevronUp size={15} className="text-blue-500 hidden group-open:block" />
                      </span>
                    </summary>
                    <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                      {a}
                    </div>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA final ── */}
        <section className="py-20 sm:py-28 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <Reveal className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                ¿Listo para modernizar tu contabilidad?
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Agendá una demo de 30 minutos. Te mostramos el sistema en vivo, con datos reales, adaptado al giro de tu empresa.
              </p>
            </Reveal>

            <Reveal delay={120} className="mt-14 relative rounded-3xl bg-white border border-slate-200 shadow-2xl shadow-slate-200/60 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-3 p-8 sm:p-12">
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Solicitá tu demo del módulo contable
                  </h3>
                  <p className="mt-3 text-slate-500 leading-relaxed">
                    En 30 minutos te mostramos cómo el sistema maneja tu contabilidad, facturación
                    fiscal y estados financieros — sin compromiso, sin presión.
                  </p>

                  <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm text-slate-700">
                    {[
                      'Demo en vivo con datos reales',
                      'Sin instalación previa',
                      'Cotización a tu medida',
                      'Soporte local en Honduras',
                      'Migración acompañada',
                      'Sin contratos forzados',
                    ].map(item => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                          <CheckCircle2 size={15} className="text-blue-600" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-2 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-8 sm:p-12 text-white flex flex-col justify-center">
                  <p className="text-xs font-semibold text-blue-300 uppercase tracking-[0.18em]">
                    Contactanos hoy
                  </p>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight">
                    Hablemos de tu empresa
                  </h3>
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                    Respondemos en menos de 4 horas. Te damos una recomendación honesta según lo que realmente necesitás.
                  </p>

                  <div className="mt-8 space-y-3">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-blue-500 hover:bg-blue-400 text-white rounded-xl font-semibold transition-colors shadow-lg shadow-blue-900/40"
                    >
                      <MessageCircle size={16} />
                      WhatsApp directo
                    </a>
                    <a
                      href="mailto:info@lealsys.com"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white/8 hover:bg-white/12 text-white rounded-xl font-semibold transition-colors border border-white/15"
                    >
                      <Mail size={16} />
                      info@lealsys.com
                    </a>
                    <a
                      href="tel:+50432235185"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white/8 hover:bg-white/12 text-white rounded-xl font-semibold transition-colors border border-white/15"
                    >
                      <Phone size={16} />
                      +504 3223-5185
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
