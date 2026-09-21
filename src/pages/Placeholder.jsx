import { NavLink, useLocation } from 'react-router-dom'
import Logo from '../components/Logo'
import { LogoMark } from '../components/Logo'

const pageMap = {
  '/about': { tag: 'About Us', title: 'About Us', text: 'Who we are and why we exist.' },
  '/programs': { tag: 'Programs', title: 'Our Programs', text: 'Everything we do across schools, families and youth.' },
  '/impact': { tag: 'Impact', title: 'Our Impact', text: 'The communities changed by our work.' },
  '/news': { tag: 'News', title: 'News & Events', text: 'Updates, stories and activities from our programs.' },
  '/news/latest': { tag: 'News', title: 'Latest News', text: 'The most recent reports from the field.' },
  '/news/events': { tag: 'News', title: 'Upcoming Events', text: 'Mark your calendar for what is coming up.' },
  '/news/activities': { tag: 'News', title: 'Activities', text: 'Recurring activities you can join.' },
  '/contact': { tag: 'Contact', title: 'Get In Touch', text: 'Send us a message or find our office.' },
  '/get-involved': { tag: 'Get Involved', title: 'Get Involved', text: 'Volunteer, partner, support or donate.' },
  '/get-involved/volunteer': { tag: 'Get Involved', title: 'Volunteer', text: 'Give your time and skills.' },
  '/get-involved/partner': { tag: 'Get Involved', title: 'Partner With Us', text: 'Work together to reach more people.' },
  '/get-involved/support': { tag: 'Get Involved', title: 'Support Our Work', text: 'Help us keep the programs running.' },
  '/get-involved/donate': { tag: 'Get Involved', title: 'Donate', text: 'Your gift changes lives.' },
  '/newsletter': { tag: 'News', title: 'Newsletter', text: 'Get monthly updates and stories by email.' }
}

const fallbackGroups = [
  { key: 'About', items: ['our-story', 'mission-vision', 'our-values', 'our-team'] },
  { key: 'Programs', items: ['school-programs', 'family-community', 'youth-development'] },
  { key: 'Get Involved', items: ['volunteer', 'partner', 'support', 'donate'] }
]

const Placeholder = () => {
  const { pathname } = useLocation()
  const entry = pageMap[pathname] || {
    tag: 'Coming Soon',
    title: 'This page is on its way',
    text: 'We are still building this section. In the meantime, explore our programs and get involved today.'
  }
  const crumbs = pathname.split('/').filter(Boolean)

  return (
    <main className="px-4 pb-16 pt-20 sm:px-6 sm:pt-24">
      <div className="mx-auto max-w-3xl">
        <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.3em] text-srms-ink-soft animate-rise">
          <NavLink to="/" className="transition hover:text-srms-forest">
            Home
          </NavLink>
          {crumbs.map((crumb, i) => (
            <span key={crumb} className="ml-2 inline-flex items-center gap-2">
              <span className="opacity-40">/</span>
              <NavLink to={'/' + crumbs.slice(0, i + 1).join('/')} className="transition hover:text-srms-forest">
                {crumb.replace(/-/g, ' ')}
              </NavLink>
            </span>
          ))}
        </nav>

        <div className="mt-10 rounded-3xl border border-srms-clay/70 bg-white p-8 sm:p-10 animate-rise" style={{ animationDelay: '0.06s' }}>
          <LogoMark className="h-12 w-12" />
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-srms-amber">{entry.tag}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-srms-ink">{entry.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-srms-ink-soft">{entry.text}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <NavLink to="/get-involved" className="rounded-full bg-srms-amber px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5">
              Get Involved
            </NavLink>
            <NavLink to="/programs" className="rounded-full border border-srms-clay/80 px-6 py-3 text-sm font-semibold text-srms-ink transition hover:border-srms-forest">
              Explore Programs
            </NavLink>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {fallbackGroups.map((group) => (
            <div key={group.key} className="rounded-3xl border border-srms-clay/70 bg-white p-6 animate-rise" style={{ animationDelay: '0.12s' }}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">{group.key}</h2>
              <ul className="mt-4 space-y-1">
                {group.items.map((item) => (
                  <li key={item}>
                    <NavLink to={'#' + item} className="flex items-center justify-between rounded-2xl px-3 py-2 text-sm text-srms-ink transition hover:bg-srms-clay/40">
                      {item.replace(/-/g, ' ')}
                      <span className="opacity-50">→</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 text-sm text-srms-ink-soft">
          Want to help right away?{' '}
          <NavLink to="/get-involved" className="font-semibold text-srms-forest underline decoration-srms-amber underline-offset-4">
            Explore volunteering and partnerships →
          </NavLink>
        </p>
      </div>
    </main>
  )
}

export default Placeholder
