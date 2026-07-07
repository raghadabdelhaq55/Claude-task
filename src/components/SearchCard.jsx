import { useState, useRef, useEffect } from 'react'
import { TIMES, TOURS, TRANSPORTATION } from '../data'
import { CalendarIcon, ClockIcon, TourIcon, TransportIcon, SearchIcon } from './icons'
import Calendar from './Calendar'
import OptionList from './OptionList'
import SectionTab from './SectionTab'

const TABS = ['Public Tours', 'Private Tours']
const MONTHS_SHORT = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]

export default function SearchCard() {
  const [tab, setTab] = useState('Public Tours')
  const [open, setOpen] = useState(null) // 'date' | 'time' | 'tour' | 'transport' | null
  const [date, setDate] = useState({ day: 6, month: 9, year: 2022 })
  const [time, setTime] = useState('1:00 am')
  const [tour, setTour] = useState('Lucca Bike Tour')
  const [transport, setTransport] = useState('Minivan and Bus')
  const cardRef = useRef(null)

  // Close the open popover when clicking outside the card.
  useEffect(() => {
    function handleOutside(e) {
      if (cardRef.current && !cardRef.current.contains(e.target)) setOpen(null)
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [])

  const toggle = (id) => setOpen((cur) => (cur === id ? null : id))
  const dateLabel = `${date.day} ${MONTHS_SHORT[date.month]} ${date.year}`

  const handleSearch = () => {
    setOpen(null)
    // In a real app this would trigger a query; here we surface the selection.
    console.log({ tab, date, time, tour, transport })
  }

  return (
    <div
      ref={cardRef}
      className="w-full max-w-5xl rounded-2xl bg-white/95 shadow-2xl ring-1 ring-black/5 backdrop-blur"
    >
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

      {/* Horizontal row of section toggles; each reveals a popover beneath it */}
      <div className="grid grid-cols-1 gap-3 p-5 sm:grid-cols-2 sm:p-6 lg:grid-cols-[repeat(4,minmax(0,1fr))_auto] lg:items-center">
        <SectionTab
          icon={CalendarIcon}
          label="Date"
          value={dateLabel}
          open={open === 'date'}
          onClick={() => toggle('date')}
        >
          <Calendar
            selected={date}
            onSelect={(d) => {
              setDate(d)
              setOpen(null)
            }}
          />
        </SectionTab>

        <SectionTab
          icon={ClockIcon}
          label="Time"
          value={time}
          open={open === 'time'}
          onClick={() => toggle('time')}
        >
          <OptionList
            items={TIMES}
            selected={time}
            onSelect={(v) => {
              setTime(v)
              setOpen(null)
            }}
          />
        </SectionTab>

        <SectionTab
          icon={TourIcon}
          label="Tour"
          value={tour}
          open={open === 'tour'}
          onClick={() => toggle('tour')}
        >
          <OptionList
            items={TOURS}
            selected={tour}
            onSelect={(v) => {
              setTour(v)
              setOpen(null)
            }}
          />
        </SectionTab>

        <SectionTab
          icon={TransportIcon}
          label="Transportation"
          value={transport}
          open={open === 'transport'}
          onClick={() => toggle('transport')}
          align="right"
        >
          <OptionList
            items={TRANSPORTATION}
            selected={transport}
            onSelect={(v) => {
              setTransport(v)
              setOpen(null)
            }}
          />
        </SectionTab>

        <div className="flex justify-center sm:col-span-2 lg:col-span-1 lg:justify-start">
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
