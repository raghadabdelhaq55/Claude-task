import { ChevronDown } from './icons'

// A collapsible section: header row (icon + label + current value + chevron)
// that toggles its body open/closed inline. Closed by default.
export default function AccordionSection({ icon: Icon, label, value, open, onToggle, children }) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center gap-3 py-4 text-left"
      >
        <Icon className="h-4 w-4 shrink-0 text-brand" />
        <span className="text-sm font-semibold text-gray-700">{label}</span>
        {value && (
          <span className="ml-auto truncate pl-3 text-sm text-gray-400">{value}</span>
        )}
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-gray-400 transition-transform ${
            value ? 'ml-3' : 'ml-auto'
          } ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && <div className="pb-4">{children}</div>}
    </div>
  )
}
