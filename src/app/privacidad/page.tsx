import Link from 'next/link'

export const metadata = {
  title: 'Política de Privacidad — LealSys ERP',
  description: 'Política de privacidad y tratamiento de datos personales de LealSys ERP.',
}

export default function Privacidad() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <Link href="/" className="text-sm text-blue-600 hover:underline mb-8 inline-block">← Volver al inicio</Link>

        <h1 className="text-3xl font-bold text-slate-900 mb-2">Política de Privacidad</h1>
        <p className="text-sm text-slate-500 mb-10">Última actualización: 29 de junio de 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Responsable del tratamiento</h2>
            <p>LealSys ERP (en adelante, "LealSys", "nosotros" o "el servicio"), con domicilio en San Pedro Sula, Honduras, es responsable del tratamiento de los datos personales que usted nos proporciona al utilizar nuestra plataforma.</p>
            <p className="mt-2">Contacto: <a href="mailto:info@lealsys.com" className="text-blue-600 hover:underline">info@lealsys.com</a></p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">2. Datos que recopilamos</h2>
            <p>Recopilamos únicamente los datos necesarios para prestar el servicio:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Datos de identificación: nombre, correo electrónico, número de teléfono.</li>
              <li>Datos empresariales: nombre de la empresa, RTN/NIT, dirección fiscal.</li>
              <li>Datos de uso: registros de acceso, módulos utilizados, reportes generados.</li>
              <li>Datos financieros ingresados por el usuario: facturas, transacciones, inventario (son datos del cliente, no de LealSys).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">3. Finalidad del tratamiento</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Prestación y mejora del servicio ERP.</li>
              <li>Gestión de la relación contractual y facturación.</li>
              <li>Envío de comunicaciones relacionadas con el servicio (actualizaciones, mantenimiento).</li>
              <li>Atención al cliente y soporte técnico.</li>
              <li>Cumplimiento de obligaciones legales.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">4. Base legal</h2>
            <p>El tratamiento de sus datos se realiza bajo las siguientes bases legales:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Ejecución de contrato:</strong> para la prestación del servicio contratado.</li>
              <li><strong>Consentimiento:</strong> para el envío de comunicaciones comerciales.</li>
              <li><strong>Interés legítimo:</strong> para la mejora del servicio y la seguridad.</li>
              <li><strong>Obligación legal:</strong> cuando la normativa hondureña así lo exija.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">5. Almacenamiento y seguridad</h2>
            <p>Sus datos se almacenan en servidores seguros provistos por Supabase (infraestructura sobre AWS). Aplicamos medidas técnicas y organizativas que incluyen:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Cifrado en tránsito (TLS 1.3) y en reposo (AES-256).</li>
              <li>Respaldos automáticos diarios.</li>
              <li>Control de acceso basado en roles (RLS a nivel de base de datos).</li>
              <li>Autenticación segura con sesiones con expiración automática.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">6. Compartición de datos</h2>
            <p>LealSys <strong>no vende ni cede</strong> sus datos personales a terceros. Únicamente los compartimos con:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Proveedores de infraestructura técnica (Supabase, Vercel) bajo acuerdos de confidencialidad.</li>
              <li>Autoridades competentes cuando la ley lo requiera.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">7. Retención de datos</h2>
            <p>Conservamos sus datos mientras mantenga activa su cuenta. Tras la cancelación, sus datos se conservan por un período de 90 días para permitir reactivaciones, y posteriormente son eliminados de forma segura, salvo obligación legal de conservación.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">8. Sus derechos</h2>
            <p>Usted tiene derecho a:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Acceso:</strong> solicitar una copia de sus datos personales.</li>
              <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
              <li><strong>Eliminación:</strong> solicitar la eliminación de sus datos.</li>
              <li><strong>Portabilidad:</strong> recibir sus datos en formato exportable.</li>
              <li><strong>Oposición:</strong> oponerse al tratamiento de sus datos para comunicaciones comerciales.</li>
            </ul>
            <p className="mt-3">Para ejercer estos derechos, escríbanos a <a href="mailto:info@lealsys.com" className="text-blue-600 hover:underline">info@lealsys.com</a>. Responderemos en un plazo máximo de 30 días hábiles.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">9. Cookies</h2>
            <p>LealSys utiliza únicamente cookies técnicas esenciales para el funcionamiento de la sesión. No utilizamos cookies de rastreo publicitario ni de terceros.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">10. Modificaciones</h2>
            <p>Podemos actualizar esta política ocasionalmente. Le notificaremos mediante correo electrónico o aviso en la plataforma con al menos 15 días de anticipación ante cambios materiales.</p>
          </section>

        </div>
      </div>
    </div>
  )
}
