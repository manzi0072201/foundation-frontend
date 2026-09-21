import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo, { LogoMark } from './Logo'

const navItems = [
  { label: 'Home', to: '/' },
  {
    label: 'About Us',
    to: '/about',
    children: [
      { label: 'Our Story', to: '/about/our-story' },
      { label: 'Mission & Vision', to: '/about/mission-vision' },
      { label: 'Our Values', to: '/about/our-values' },
      { label: 'Our Team', to: '/about/our-team' }
    ]
  },
  {
    label: 'Our Programs',
    to: '/programs',
    children: [
      { label: 'All Programs', to: '/programs' },
      { label: 'School Programs', to: '/programs/school-programs' },
      { label: 'Family & Community Support', to: '/programs/family-community' },
      { label: 'Youth Development', to: '/programs/youth-development' }
    ]
  },
  { label: 'Our Impact', to: '/impact' },
  { label: 'News & Events', to: '/news' },
  { label: 'Contact', to: '/contact' }
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const toggle = () => setOpen((prev) => !prev)
  const close = () => setOpen(false)

  return (
    <>
      <header className="sticky top-4 z-50 px-4 sm:px-6">
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-3xl border border-srms-clay/40 bg-white/85 px-5 py-3 shadow-srms backdrop-blur animate-rise"
        >
          <Logo to="/" className="shrink-0" />

          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition ${
                      isActive
                        ? 'bg-srms-forest text-white'
                        : 'text-srms-ink hover:bg-srms-clay/50'
                    }`
                  }
                >
                  {item.label}
                  {item.to !== '/' && (
                    <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 opacity-60" fill="none" aria-hidden="true">
                      <path d="M3 4.5 6 7.5 9 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <NavLink
              to="/get-involved"
              className="inline-flex items-center rounded-full bg-srms-amber px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-srms-amber/90"
            >
              Get Involved
            </NavLink>
          </div>

          <button
            type="button"
            onClick={toggle}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-srms-clay/70 text-srms-ink lg:hidden"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`h-0.5 w-5 rounded-full bg-current transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}
              />
              <span className={`h-0.5 w-5 rounded-full bg-current ${open ? 'opacity-0' : ''}`} />
              <span
                className={`h-0.5 w-5 rounded-full bg-current transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}
              />
            </div>
          </button>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 top-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 top-24 bg-srms-ink/40 backdrop-blur-sm animate-rise"
            onClick={close}
            aria-hidden="true"
          />
          <aside className="absolute right-3 left-3 top-24 rounded-3xl bg-white p-5 shadow-srms animate-rise lg:hidden">
            <nav aria-label="Mobile">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      onClick={close}
                      className={({ isActive }) =>
                        `flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition ${
                          isActive ? 'bg-srms-forest text-white' : 'text-srms-ink hover:bg-srms-clay/40'
                        }`
                      }
                    >
                      {item.label}
                      <span className="opacity-50">→</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-6 border-t border-srms-clay/50 pt-5">
              <NavLink
                to="/get-involved"
                onClick={close}
                className="flex items-center justify-center rounded-2xl bg-srms-amber px-4 py-3 text-sm font-semibold text-white"
              >
                Get Involved
              </NavLink>
            </div>
          </aside>
        </div>
      )}
    </>
  )
}

export default Navbar
export { LogoMark }
