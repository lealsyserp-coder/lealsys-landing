import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

type DemoPayload = {
  nombre: string
  empresa: string
  whatsapp: string
  email: string
  mensaje?: string
}

function isValidEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)
}

export async function POST(request: Request) {
  let body: DemoPayload
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'JSON inválido' }, { status: 400 })
  }

  const nombre = body.nombre?.trim()
  const empresa = body.empresa?.trim()
  const whatsapp = body.whatsapp?.trim()
  const email = body.email?.trim().toLowerCase()
  const mensaje = body.mensaje?.trim() || null

  if (!nombre || !empresa || !whatsapp || !email) {
    return NextResponse.json({ error: 'Campos obligatorios faltantes' }, { status: 400 })
  }
  if (nombre.length > 120 || empresa.length > 120 || whatsapp.length > 30 || email.length > 160) {
    return NextResponse.json({ error: 'Datos demasiado largos' }, { status: 400 })
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Email inválido' }, { status: 400 })
  }

  const { error } = await supabase.from('demos_solicitadas').insert({
    nombre,
    empresa,
    whatsapp,
    email,
    mensaje,
    origen: 'landing',
  })

  if (error) {
    console.error('demo insert error', error)
    return NextResponse.json({ error: 'No se pudo guardar la solicitud' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
