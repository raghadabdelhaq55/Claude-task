// Reusable scrollable list of selectable options (Time / Tour / Transportation).
// Rendered inside a DropdownField panel.
export default function OptionList({ items, selected, onSelect }) {
  return (
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
  )
}
