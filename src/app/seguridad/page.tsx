import Link from 'next/link'
import { ShieldCheck, Lock, Server, RefreshCw, Eye, Users } from 'lucide-react'

export const metadata = {
  title: 'Seguridad — LealSys ERP',
  description: 'Cómo LealSys protege los datos de tu empresa con cifrado, respaldos y control de acceso.',
}

const items = [
  {
    icon: Lock,
    title: 'Cifrado en tránsito y en reposo',
    desc: 'Todas las comunicaciones están protegidas con TLS 1.3. Los datos almacenados usan cifrado AES-256. Ningún dato viaja ni se guarda en texto plano.',
  },
  {
    icon: Server,
    title: 'Infraestructura en la nube confiable',
    desc: 'LealSys opera sobre Supabase (infraestructura AWS) con centros de datos certificados ISO 27001. Tu información nunca se almacena en servidores locales vulnerables.',
  },
  {
    icon: RefreshCw,
    title: 'Respaldos automáticos diarios',
    desc: 'Realizamos respaldos completos de la base de datos cada 24 horas con retención de 7 días. En caso de incidente, podemos restaurar tu información rápidamente.',
  },
  {
    icon: Users,
    title: 'Control de acceso por roles',
    desc: 'Cada usuario solo ve y puede hacer lo que su rol permite. Los administradores pueden definir qué módulos accede cada operador. El aislamiento entre empresas es total a nivel de base de datos (RLS).',
  },
  {
    icon: Eye,
    title: 'Sesiones seguras',
    desc: 'Las sesiones expiran automáticamente tras inactividad. Los tokens de acceso se renuevan periódicamente. No guardamos contraseñas — usamos autenticación delegada segura.',
  },
  {
    icon: ShieldCheck,
    title: 'Aislamiento multi-empresa',
    desc: 'Cada empresa opera en un espacio completamente aislado. Es imposible que un usuario de una empresa acceda a datos de otra, incluso con el mismo proveedor.',
  },
]

export default function Seguridad() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <Link href="/" className="text-sm text-blue-600 hover:underline mb-8 inline-block">← Volver al inicio</Link>

        <div className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900 mb-3">Seguridad en LealSys</h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Tu información financiera es lo más crítico de tu negocio. Aquí te explicamos cómo la protegemos.
          </p>
        </div>

        <div className="space-y-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4 p-5 rounded-xl border border-slate-200 hover:border-blue-200 hover:bg-blue-50/30 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                <Icon size={18} className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 rounded-xl bg-slate-900 text-white">
          <h3 className="font-semibold text-lg mb-2">¿Encontraste una vulnerabilidad?</h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-3">
            Tomamos la seguridad muy en serio. Si descubrís un problema de seguridad, reportalo de forma responsable antes de hacer cualquier divulgación pública.
          </p>
          <a href="mailto:info@lealsys.com" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium">
            info@lealsys.com →
          </a>
        </div>

        <p className="text-xs text-slate-400 mt-8">Última actualización: 29 de junio de 2026</p>
      </div>
    </div>
  )
}
