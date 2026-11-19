import Link from 'next/link'
import { Mail, MessageCircle, MapPin, Phone } from 'lucide-react'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.lealsys.com'

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-10">
          <div className="col-span-2 sm:col-span-1 sm:row-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <img
                src="/lealsys-icon.png"
                alt="Lealsys"
                className="h-10 w-10 object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <div className="leading-tight">
                <p className="text-lg font-extrabold text-white">LealSys</p>
                <p className="text-[10px] text-slate-500 tracking-[0.22em] uppercase -mt-0.5 font-bold">ERP</p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed">
              ERP y software contable en la nube para empresas que quieren
              crecer sin fricciones.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Producto</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/#features" className="hover:text-white transition-colors">Funcionalidades</a></li>
              <li><a href="/#why" className="hover:text-white transition-colors">Por qué Lealsys</a></li>
              <li><a href="/#pricing" className="hover:text-white transition-colors">Planes</a></li>
              <li><a href={APP_URL} className="hover:text-white transition-colors">Iniciar sesión</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="mailto:info@lealsys.com" className="hover:text-white transition-colors flex items-center gap-2">
                  <Mail size={14} className="text-slate-500" />
                  info@lealsys.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/50432218864" className="hover:text-white transition-colors flex items-center gap-2">
                  <MessageCircle size={14} className="text-slate-500" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="tel:+50432235185" className="hover:text-white transition-colors flex items-center gap-2">
                  <Phone size={14} className="text-slate-500" />
                  +504 3223-5185
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2">
                  <MapPin size={14} className="text-slate-500" />
                  San Pedro Sula, Honduras
                </span>
              </li>
              <li>
                <a href="https://linkedin.com/company/lealsys" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <svg className="text-slate-500" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/privacidad" className="hover:text-white transition-colors">Privacidad</Link></li>
              <li><Link href="/terminos" className="hover:text-white transition-colors">Términos de uso</Link></li>
              <li><Link href="/seguridad" className="hover:text-white transition-colors">Seguridad</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Lealsys. Todos los derechos reservados.</p>
          <p className="text-slate-500">ERP en la nube &middot; Para empresas en crecimiento</p>
        </div>
      </div>
    </footer>
  )
}
