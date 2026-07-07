import { ChevronDown } from './icons'

// A horizontal toggle "tab" for a search section: shows the label + current
// value + chevron, and reveals its content in a compact popover anchored
// directly beneath the tab (sized to its content — no empty space).
export default function SectionTab({ icon: Icon, label, value, open, onClick, align = 'left', children }) {
  return (
    <div className="relative">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={open}
        className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors ${
          open ? 'border-brand bg-brand/5' : 'border-gray-200 hover:border-gray-300'
        }`}
      >
        <Icon className="h-5 w-5 shrink-0 text-brand" />
        <span className="flex min-w-0 flex-col">
          <span className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">
            {label}
          </span>
          <span className="truncate text-sm font-medium text-gray-800">{value}</span>
        </span>
        <ChevronDown
          className={`ml-auto h-4 w-4 shrink-0 text-gray-400 transition-transform ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {open && (
        <div
          className={`absolute top-full z-40 mt-2 w-max min-w-full max-w-[min(20rem,88vw)] rounded-xl border border-gray-200 bg-white p-3 shadow-xl ${
            align === 'right' ? 'right-0' : 'left-0'
          }`}
        >
          {children}
        </div>
      )}
    </div>
  )
}
