import Link from 'next/link'

export const metadata = {
  title: 'Términos de Uso — LealSys ERP',
  description: 'Términos y condiciones de uso de la plataforma LealSys ERP.',
}

export default function Terminos() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <Link href="/" className="text-sm text-blue-600 hover:underline mb-8 inline-block">← Volver al inicio</Link>

        <h1 className="text-3xl font-bold text-slate-900 mb-2">Términos de Uso</h1>
        <p className="text-sm text-slate-500 mb-10">Última actualización: 29 de junio de 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Aceptación</h2>
            <p>Al acceder y utilizar LealSys ERP (en adelante, "el Servicio"), usted acepta estar vinculado por estos Términos de Uso. Si no está de acuerdo con alguna parte de estos términos, no podrá utilizar el Servicio.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">2. Descripción del servicio</h2>
            <p>LealSys es una plataforma ERP en la nube que ofrece módulos de facturación, contabilidad, inventario, cartera, compras y reportes financieros para empresas en Honduras y Centroamérica. El acceso se presta bajo modalidad de suscripción mensual.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">3. Registro y cuenta</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>El usuario es responsable de mantener la confidencialidad de sus credenciales de acceso.</li>
              <li>Cada empresa contratante podrá crear hasta el número de usuarios permitido por su plan.</li>
              <li>El usuario se compromete a proporcionar información veraz y actualizada.</li>
              <li>LealSys se reserva el derecho de suspender cuentas ante uso fraudulento o violación de estos términos.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">4. Planes y pagos</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>El acceso al Servicio requiere el pago de una suscripción mensual según el plan contratado.</li>
              <li>Los precios son en Lempiras (HNL) o Dólares (USD) según acuerdo.</li>
              <li>El vencimiento de la suscripción sin pago resultará en la suspensión del acceso. Los datos se conservan por 90 días.</li>
              <li>No se realizan reembolsos por períodos parciales una vez iniciado el ciclo de facturación.</li>
              <li>LealSys podrá modificar los precios con 30 días de aviso previo.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">5. Uso aceptable</h2>
            <p>El usuario se compromete a no:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Usar el Servicio para actividades ilegales o fraudulentas.</li>
              <li>Intentar acceder de forma no autorizada a sistemas o datos de otros usuarios.</li>
              <li>Reproducir, distribuir o modificar el software sin autorización expresa.</li>
              <li>Ingresar datos falsos o información que infrinja derechos de terceros.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">6. Propiedad de los datos</h2>
            <p>Los datos ingresados por el usuario (clientes, facturas, inventario, contabilidad) son propiedad exclusiva del usuario. LealSys actúa como procesador de datos y no reclama derechos sobre el contenido generado por el cliente.</p>
            <p className="mt-2">El usuario puede exportar sus datos en cualquier momento desde la plataforma.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">7. Propiedad intelectual</h2>
            <p>El software, diseño, marca y contenidos de LealSys son propiedad exclusiva de LealSys y están protegidos por las leyes de propiedad intelectual aplicables. Se concede al usuario una licencia de uso limitada, no exclusiva e intransferible durante la vigencia de su suscripción.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">8. Disponibilidad del servicio</h2>
            <p>LealSys se compromete a mantener una disponibilidad del servicio del 99% mensual, excluyendo mantenimientos programados (notificados con 24h de anticipación) y causas de fuerza mayor. No garantizamos disponibilidad ininterrumpida.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">9. Limitación de responsabilidad</h2>
            <p>LealSys no será responsable por:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Pérdidas económicas derivadas del uso incorrecto del software.</li>
              <li>Errores en declaraciones fiscales generadas a partir de datos incorrectos ingresados por el usuario.</li>
              <li>Interrupciones del servicio causadas por terceros o fuerza mayor.</li>
            </ul>
            <p className="mt-2">La responsabilidad máxima de LealSys en cualquier caso no excederá el monto pagado por el usuario en los últimos 3 meses.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">10. Cancelación</h2>
            <p>El usuario puede cancelar su suscripción en cualquier momento. Tras la cancelación, el acceso continúa hasta el fin del período pagado. Los datos se conservan por 90 días adicionales y luego son eliminados permanentemente.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">11. Modificaciones</h2>
            <p>LealSys puede modificar estos términos con 15 días de aviso previo. El uso continuado del Servicio tras la vigencia de los cambios implica la aceptación de los nuevos términos.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">12. Ley aplicable</h2>
            <p>Estos términos se rigen por las leyes de la República de Honduras. Cualquier controversia se resolverá en los tribunales competentes de San Pedro Sula, Honduras.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">13. Contacto</h2>
            <p>Para consultas sobre estos términos: <a href="mailto:info@lealsys.com" className="text-blue-600 hover:underline">info@lealsys.com</a></p>
          </section>

        </div>
      </div>
    </div>
  )
}
