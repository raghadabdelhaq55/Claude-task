import { useState } from 'react'
import { TIMES, TOURS, TRANSPORTATION } from '../data'
import { CalendarIcon, ClockIcon, TourIcon, TransportIcon, SearchIcon } from './icons'
import Calendar from './Calendar'
import OptionList from './OptionList'
import AccordionSection from './AccordionSection'

const TABS = ['Public Tours', 'Private Tours']
const MONTHS_SHORT = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]

export default function SearchCard() {
  const [tab, setTab] = useState('Public Tours')
  const [openSections, setOpenSections] = useState({}) // all sections closed by default
  const [date, setDate] = useState({ day: 6, month: 9, year: 2022 })
  const [time, setTime] = useState('1:00 am')
  const [tour, setTour] = useState('Lucca Bike Tour')
  const [transport, setTransport] = useState('Minivan and Bus')

  const toggle = (id) => setOpenSections((s) => ({ ...s, [id]: !s[id] }))
  const dateLabel = `${date.day} ${MONTHS_SHORT[date.month]} ${date.year}`

  const handleSearch = () => {
    // In a real app this would trigger a query; here we surface the selection.
    console.log({ tab, date, time, tour, transport })
  }

  return (
    <div className="w-full max-w-xl rounded-2xl bg-white/95 shadow-2xl ring-1 ring-black/5 backdrop-blur">
      {/* Tabs */}
      <div className="flex gap-6 border-b border-gray-200 px-6 pt-4">
        {TABS.map((t) => {
          const active = tab === t
          return (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={`relative flex items-center gap-2 pb-3 text-sm font-medium transition-colors ${
                active ? 'text-brand' : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              <span
                className={`inline-block h-2.5 w-2.5 rounded-full ${
                  active ? 'bg-brand' : 'bg-gray-300'
                }`}
              />
              {t}
              {active && (
                <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-brand" />
              )}
            </button>
          )
        })}
      </div>

      {/* Collapsible sections — all closed by default */}
      <div className="px-6">
        <AccordionSection
          icon={CalendarIcon}
          label="Date"
          value={dateLabel}
          open={!!openSections.date}
          onToggle={() => toggle('date')}
        >
          <div className="rounded-lg border border-gray-200 p-3">
            <Calendar selected={date} onSelect={setDate} />
          </div>
        </AccordionSection>

        <AccordionSection
          icon={ClockIcon}
          label="Time"
          value={time}
          open={!!openSections.time}
          onToggle={() => toggle('time')}
        >
          <OptionList items={TIMES} selected={time} onSelect={setTime} />
        </AccordionSection>

        <AccordionSection
          icon={TourIcon}
          label="Tour"
          value={tour}
          open={!!openSections.tour}
          onToggle={() => toggle('tour')}
        >
          <OptionList items={TOURS} selected={tour} onSelect={setTour} />
        </AccordionSection>

        <AccordionSection
          icon={TransportIcon}
          label="Transportation"
          value={transport}
          open={!!openSections.transport}
          onToggle={() => toggle('transport')}
        >
          <OptionList items={TRANSPORTATION} selected={transport} onSelect={setTransport} />
        </AccordionSection>
      </div>

      {/* Search button */}
      <div className="px-6 pb-6 pt-5">
        <button
          type="button"
          onClick={handleSearch}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-3 font-medium text-white shadow-lg shadow-brand/30 transition-all hover:bg-brand-dark hover:shadow-brand/40 active:scale-[0.99]"
        >
          <SearchIcon className="h-5 w-5" />
          Search
        </button>
      </div>
    </div>
  )
}
