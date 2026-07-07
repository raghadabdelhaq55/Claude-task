// Reusable scrollable list column used by Time / Tour / Transportation.
// Selecting an item lifts state up to the parent search card.
export default function OptionColumn({ icon: Icon, label, items, selected, onSelect }) {
  return (
    <div className="flex min-w-0 flex-col border-gray-200 sm:border-l sm:pl-5 sm:first:border-l-0 sm:first:pl-0">
      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-700">
        <Icon className="h-4 w-4 text-brand" />
        {label}
      </div>
      <ul className="scroll-slim flex max-h-56 flex-col gap-1 overflow-y-auto pr-1 text-sm">
        {items.map((item) => {
          const active = selected === item
          return (
            <li key={item}>
              <button
                type="button"
                onClick={() => onSelect(item)}
                className={`w-full rounded-md px-2 py-1.5 text-left leading-snug transition-colors ${
                  active
                    ? 'bg-brand/10 font-medium text-brand'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {item}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
