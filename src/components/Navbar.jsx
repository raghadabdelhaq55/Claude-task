import { useState } from 'react'
import { NAV_LINKS } from '../data'
import { ChevronDown } from './icons'

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2 text-white">
      <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-full bg-white/90 ring-2 ring-white/60">
        {/* Simple sun-over-hills mark standing in for the crest logo */}
        <svg viewBox="0 0 40 40" className="h-9 w-9">
          <circle cx="20" cy="16" r="7" fill="#f28c1c" />
          <path d="M4 30c4-6 9-6 12 0M22 30c4-7 10-7 14 0" fill="none" stroke="#3f6212" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </span>
      <span className="leading-none">
        <span className="block text-[10px] font-medium tracking-widest text-white/90">tours in</span>
        <span className="block font-script text-2xl text-brand">Tuscany</span>
      </span>
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 text-sm font-medium text-white/90 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a href="#" className="transition-colors hover:text-brand">
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-6 text-sm font-medium text-white/90 lg:flex">
          <button className="flex items-center gap-1 transition-colors hover:text-brand">
            ENG <ChevronDown className="h-3.5 w-3.5" />
          </button>
          <a href="#" className="transition-colors hover:text-brand">
            Login
          </a>
          <a
            href="#"
            className="rounded-full bg-brand px-5 py-2 text-white shadow-sm transition-colors hover:bg-brand-dark"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="grid h-10 w-10 place-items-center rounded-md text-white lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="mx-4 rounded-2xl bg-black/70 p-4 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col gap-3 text-sm font-medium text-white/90">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a href="#" className="block py-1 transition-colors hover:text-brand">
                  {link}
                </a>
              </li>
            ))}
            <li className="mt-2 flex items-center gap-4 border-t border-white/10 pt-3">
              <a href="#" className="transition-colors hover:text-brand">
                Login
              </a>
              <a href="#" className="rounded-full bg-brand px-5 py-2 text-white hover:bg-brand-dark">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
