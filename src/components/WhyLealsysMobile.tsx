'use client'

import { useState } from 'react'
import { Check, X, Minus } from 'lucide-react'

type Value = boolean | 'partial'

type Row = { feature: string; excel: Value; viejo: Value; lealsys: Value }

const tabs = [
  { id: 'lealsys', label: 'Lealsys', sub: 'En la nube' },
  { id: 'viejo', label: 'Sistema viejo', sub: 'Local' },
  { id: 'excel', label: 'Excel', sub: 'Manual' },
] as const

type TabId = (typeof tabs)[number]['id']

function StatusIcon({ value }: { value: Value }) {
  if (value === true) {
    return (
      <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm shadow-emerald-600/30">
        <Check size={13} strokeWidth={3} />
      </span>
    )
  }
  if (value === 'partial') {
    return (
      <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-600 ring-1 ring-amber-200">
        <Minus size={13} strokeWidth={3} />
      </span>
    )
  }
  return (
    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-400 ring-1 ring-slate-200">
      <X size={13} strokeWidth={3} />
    </span>
  )
}

export function WhyLealsysMobile({ rows }: { rows: Row[] }) {
  const [active, setActive] = useState<TabId>('lealsys')

  const total = rows.length
  const covered = rows.filter(r => {
    const v = r[active]
    return v === true
  }).length
  const partial = rows.filter(r => r[active] === 'partial').length

  return (
    <div className="mt-10 max-w-md mx-auto md:hidden">
      {/* Segmented tabs */}
      <div
        role="tablist"
        aria-label="Comparar sistemas"
        className="relative grid grid-cols-3 gap-1 p-1 rounded-xl bg-slate-100/80 border border-slate-200"
      >
        {tabs.map(t => {
          const isActive = active === t.id
          return (
            <button
              key={t.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(t.id)}
              className={`relative z-10 py-2.5 px-2 rounded-lg text-xs font-semibold transition-all ${
                isActive
                  ? t.id === 'lealsys'
                    ? 'bg-gradient-to-b from-blue-600 to-blue-700 text-white shadow-md shadow-blue-700/30'
                    : 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {t.label}
            </button>
          )
        })}
      </div>

      {/* Summary chip */}
      <div className="mt-4 flex items-center justify-between px-1">
        <p className="text-xs text-slate-500">
          <span className="font-semibold text-slate-900">{covered}</span> de {total} funciones
          {partial > 0 && (
            <span className="text-slate-400"> · {partial} parcial{partial > 1 ? 'es' : ''}</span>
          )}
        </p>
        <div className="flex items-center gap-1.5">
          <span className="inline-flex h-1.5 w-12 rounded-full bg-slate-200 overflow-hidden">
            <span
              className={`h-full transition-all duration-500 ${
                active === 'lealsys' ? 'bg-emerald-500' : 'bg-slate-400'
              }`}
              style={{ width: `${(covered / total) * 100}%` }}
            />
          </span>
        </div>
      </div>

      {/* Feature list */}
      <ul className="mt-4 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden divide-y divide-slate-100">
        {rows.map(r => (
          <li key={r.feature} className="flex items-start gap-3 px-4 py-3.5">
            <StatusIcon value={r[active]} />
            <span className="text-sm text-slate-800 leading-snug pt-0.5">{r.feature}</span>
          </li>
        ))}
      </ul>

      {/* Mini legend */}
      <div className="mt-4 flex items-center justify-center gap-x-5 gap-y-2 flex-wrap text-[11px] text-slate-500">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Disponible
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          Parcial
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-slate-300" />
          No disponible
        </span>
      </div>
    </div>
  )
}
