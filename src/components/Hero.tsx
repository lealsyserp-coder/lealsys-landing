import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/siteConfig'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-20 sm:pt-16 sm:pb-28">
      {/* Background grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Soft blue glow */}
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 -z-10 h-[500px] w-[800px] rounded-full bg-blue-200/40 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.05]">
              El ERP contable
              <span className="block mt-1">que tu empresa</span>
              <span className="block mt-1 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                estaba esperando.
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Facturación, inventario, cartera y contabilidad automática en un solo
              sistema en la nube. Reemplazá Excel, hojas sueltas y software viejo —
              sin perder tiempo ni dinero.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a
                href="#demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg shadow-blue-600/20"
              >
                Solicitar demo gratis
                <ArrowRight size={18} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-slate-700 bg-white border border-slate-300 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#25D366]"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.881.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.881-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.982z"/></svg>
                WhatsApp directo
              </a>
            </div>

            {/* Trust strip */}
            <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-6 max-w-md mx-auto lg:mx-0">
              <div>
                <p className="text-2xl font-bold text-slate-900 tracking-tight">100%</p>
                <p className="text-xs text-slate-500 leading-tight mt-1">En la nube</p>
              </div>
              <div className="border-l border-slate-200 pl-3 sm:pl-6">
                <p className="text-2xl font-bold text-slate-900 tracking-tight">24/7</p>
                <p className="text-xs text-slate-500 leading-tight mt-1">Acceso global</p>
              </div>
              <div className="border-l border-slate-200 pl-3 sm:pl-6">
                <p className="text-2xl font-bold text-slate-900 tracking-tight">&lt; 4h</p>
                <p className="text-xs text-slate-500 leading-tight mt-1">Tiempo de respuesta</p>
              </div>
            </div>
          </div>

          {/* Right: browser mockup */}
          <div className="lg:col-span-7 relative" style={{ perspective: '1200px' }}>
            {/* Glow behind */}
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-3xl blur-3xl"
              style={{ background: 'radial-gradient(ellipse at 60% 50%, rgba(99,102,241,0.15) 0%, rgba(59,130,246,0.08) 50%, transparent 80%)' }}
            />

            {/* Browser frame */}
            <div
              className="relative rounded-2xl overflow-hidden border border-slate-200/80"
              style={{
                boxShadow: '0 25px 60px -10px rgba(15,23,42,0.22), 0 8px 24px -4px rgba(15,23,42,0.10)',
                transform: 'rotateX(4deg) rotateY(-4deg) rotateZ(1deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Chrome bar */}
              <div className="bg-[#f0f2f4] border-b border-slate-200 px-4 py-2.5 flex items-center gap-3">
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 bg-white border border-slate-200 rounded-md px-3 py-[5px] flex items-center gap-1.5">
                  <svg viewBox="0 0 16 16" className="w-3 h-3 text-green-500 shrink-0" fill="currentColor">
                    <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 1.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zM6.5 5.5a1.5 1.5 0 0 1 3 0v1H10a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h.5v-1z"/>
                  </svg>
                  <span className="text-[11px] text-slate-400 font-medium">app.lealsys.com</span>
                </div>
              </div>

              {/* Screenshot */}
              <Image
                src="/dashboard-preview.jpg"
                alt="Dashboard de Lealsys ERP — resumen financiero, ingresos, gastos, cartera e inventario en tiempo real"
                width={1400}
                height={738}
                priority
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
