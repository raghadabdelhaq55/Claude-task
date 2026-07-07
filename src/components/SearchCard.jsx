import { useState } from 'react'
import { TIMES, TOURS, TRANSPORTATION } from '../data'
import { ClockIcon, TourIcon, TransportIcon, SearchIcon } from './icons'
import Calendar from './Calendar'
import OptionColumn from './OptionColumn'

const TABS = ['Public Tours', 'Private Tours']

export default function SearchCard() {
  const [tab, setTab] = useState('Public Tours')
  const [date, setDate] = useState({ day: 6, month: 9, year: 2022 })
  const [time, setTime] = useState('1:00 am')
  const [tour, setTour] = useState('Lucca Bike Tour')
  const [transport, setTransport] = useState('Minivan and Bus')

  const handleSearch = () => {
    // In a real app this would trigger a query; here we surface the selection.
    console.log({ tab, date, time, tour, transport })
  }

  return (
    <div className="w-full max-w-5xl rounded-2xl bg-white/95 shadow-2xl ring-1 ring-black/5 backdrop-blur">
      {/* Tabs */}
      <div className="flex gap-6 border-b border-gray-200 px-5 pt-4 sm:px-6">
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

      {/* Body: calendar + three option columns + search button */}
      <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 sm:p-6 lg:grid-cols-[1.3fr_0.8fr_1.1fr_1.1fr_auto]">
        <Calendar selected={date} onSelect={setDate} />
        <OptionColumn icon={ClockIcon} label="Time" items={TIMES} selected={time} onSelect={setTime} />
        <OptionColumn icon={TourIcon} label="Tour" items={TOURS} selected={tour} onSelect={setTour} />
        <OptionColumn
          icon={TransportIcon}
          label="Transportation"
          items={TRANSPORTATION}
          selected={transport}
          onSelect={setTransport}
        />

        <div className="flex items-start justify-center sm:col-span-2 lg:col-span-1 lg:items-start">
          <button
            type="button"
            onClick={handleSearch}
            aria-label="Search"
            className="grid h-14 w-14 place-items-center rounded-xl bg-brand text-white shadow-lg shadow-brand/30 transition-all hover:bg-brand-dark hover:shadow-brand/40 active:scale-95"
          >
            <SearchIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  )
}
