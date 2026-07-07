import { useState } from 'react'
import { CalendarIcon, ChevronLeft, ChevronRight } from './icons'

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]
const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

// Build the grid of day cells for a given month/year (leading blanks + days).
function buildDays(year, month) {
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const cells = Array.from({ length: firstDay }, () => null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)
  return cells
}

// Defaults to October 2022 to match the reference screenshot.
export default function Calendar({ selected, onSelect }) {
  const [view, setView] = useState({ year: 2022, month: 9 })

  const move = (delta) => {
    setView(({ year, month }) => {
      const next = new Date(year, month + delta, 1)
      return { year: next.getFullYear(), month: next.getMonth() }
    })
  }

  const days = buildDays(view.year, view.month)

  return (
    <div className="flex min-w-0 flex-col">
      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-700">
        <CalendarIcon className="h-4 w-4 text-brand" />
        Date
      </div>

      <div className="rounded-lg border border-gray-200 p-3">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-800">
            {MONTHS[view.month]} {view.year}
          </span>
          <div className="flex items-center gap-1 text-gray-400">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Previous month"
              className="grid h-6 w-6 place-items-center rounded transition-colors hover:bg-gray-100 hover:text-gray-700"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Next month"
              className="grid h-6 w-6 place-items-center rounded transition-colors hover:bg-gray-100 hover:text-gray-700"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-y-1 text-center text-[11px] text-gray-400">
          {WEEKDAYS.map((d) => (
            <span key={d} className="py-1 font-medium">
              {d}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-y-1 text-center text-xs">
          {days.map((day, i) => {
            if (day === null) return <span key={`b-${i}`} />
            const isSelected =
              selected &&
              selected.day === day &&
              selected.month === view.month &&
              selected.year === view.year
            return (
              <button
                key={day}
                type="button"
                onClick={() => onSelect({ day, month: view.month, year: view.year })}
                className={`mx-auto grid h-7 w-7 place-items-center rounded-full transition-colors ${
                  isSelected
                    ? 'bg-brand font-medium text-white'
                    : 'text-gray-600 hover:bg-brand/10 hover:text-brand'
                }`}
              >
                {day}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
