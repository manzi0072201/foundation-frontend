import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import { contact } from '../data/site'

const linkLists = [
  {
    title: 'Explore',
    links: [
      { label: 'Home', to: '/' },
      { label: 'About Us', to: '/about' },
      { label: 'Our Programs', to: '/programs' },
      { label: 'Our Impact', to: '/impact' },
      { label: 'News & Events', to: '/news' },
      { label: 'Contact', to: '/contact' }
    ]
  },
  {
    title: 'Our Programs',
    links: [
      { label: 'Faith & Prayer', to: '/programs/faith-prayer' },
      { label: 'Helping Others', to: '/programs/helping-others' },
      { label: 'Youth Transformation', to: '/programs/youth-transformation' },
      { label: 'Talent & ICT', to: '/programs/talent-ict' },
      { label: 'All Programs', to: '/programs' }
    ]
  },
  {
    title: 'Get Involved',
    links: [
      { label: 'Volunteer', to: '/get-involved/volunteer' },
      { label: 'Partner With Us', to: '/get-involved/partnership' },
      { label: 'Support Our Work', to: '/get-involved/support' },
      { label: 'Donate', to: '/get-involved/donate' }
    ]
  }
]

const socials = [
  {
    label: 'Facebook',
    href: '#facebook',
    icon: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
        <path d="M13.5 21v-7h2.4l.36-2.8H13.5V9.4c0-.81.22-1.37 1.4-1.37h1.47V5.55c-.25-.03-1.13-.11-2.15-.11-2.13 0-3.59 1.3-3.59 3.69v2.07H8.1V14h2.53v7h2.87Z" />
      </svg>
    )
  },
  {
    label: 'X (Twitter)',
    href: '#x',
    icon: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
        <path d="M17.2 5h2.4l-5.24 6 6.16 8.15h-4.82l-3.78-4.94L7.4 19.15H5l5.61-6.42L4.64 5h4.94l3.42 4.52L17.2 5Zm-.84 12.7h1.33L8.77 6.25H7.34l9.02 11.45Z" />
      </svg>
    )
  },
  {
    label: 'Instagram',
    href: '#instagram',
    icon: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.7" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="16.8" cy="7.2" r="1.1" fill="currentColor" />
      </svg>
    )
  },
  {
    label: 'LinkedIn',
    href: '#linkedin',
    icon: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
        <path d="M6.5 8.7H3.6V20h2.9V8.7ZM5 7.3a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4ZM20.4 20h-2.9v-5.5c0-1.6-.6-2.5-1.9-2.5-1.1 0-1.9.9-1.9 2.5V20h-2.9V8.7h2.9v1.5c.6-.9 1.7-1.6 3.1-1.6 2.2 0 3.6 1.4 3.6 4.2V20Z" />
      </svg>
    )
  },
  {
    label: 'YouTube',
    href: '#youtube',
    icon: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
        <path d="M21.6 7.2a2.5 2.5 0 0 0-1.75-1.77C18.36 5 12 5 12 5s-6.36 0-7.85.43A2.5 2.5 0 0 0 2.4 7.2 26.3 26.3 0 0 0 2 12a26.3 26.3 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.75 1.77C5.64 19 12 19 12 19s6.36 0 7.85-.43a2.5 2.5 0 0 0 1.75-1.77A26.3 26.3 0 0 0 22 12a26.3 26.3 0 0 0-.4-4.8ZM10 15.3V8.7L15.5 12 10 15.3Z" />
      </svg>
    )
  }
]

const Footer = () => (
  <footer className="mt-24 px-4 pb-10 sm:px-6">
    <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-srms-forest px-6 py-14 text-srms-sand sm:px-12">
      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Logo
            to="/"
            className="[&_*]:!text-srms-sand"
            markClassName="!bg-srms-sand/15"
          />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-srms-sand/80">
            We are a youth-led community foundation growing faith, service,
            transformation and talent &amp; ICT — one hand at a time.
          </p>

          <div className="mt-7 flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-2xl bg-srms-sand/10 text-srms-sand transition hover:bg-srms-sand hover:text-srms-forest"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {linkLists.map((group) => (
          <div key={group.title}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-sand/60">
              {group.title}
            </h3>
            <ul className="mt-5 space-y-3">
              {group.links.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className="text-sm text-srms-sand/85 transition hover:text-srms-amber"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-8 border-t border-srms-sand/15 pt-8 md:grid-cols-3">
        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-srms-sand/60">
            Contact
          </h4>
          <p className="mt-3 text-sm text-srms-sand/85">
            {contact.email}
          </p>
          <p className="mt-1 text-sm text-srms-sand/85">{contact.phone}</p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-srms-sand/60">
            Visit Us
          </h4>
          <p className="mt-3 text-sm text-srms-sand/85">
            {contact.address}
          </p>
          <p className="mt-1 text-sm text-srms-sand/85">
            Mon – Fri, 8:00 – 17:00
          </p>
        </div>
        <div className="md:text-right">
          <NavLink
            to="/newsletter"
            className="inline-flex items-center gap-2 rounded-full border border-srms-sand/40 px-5 py-2.5 text-sm font-semibold text-srms-sand transition hover:border-srms-amber hover:text-srms-amber"
          >
            Subscribe to our newsletter
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
              <path d="M3 8h9M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </NavLink>
          <p className="mt-3 text-xs text-srms-sand/60 md:hidden">
            Get updates on programs and impact.
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-srms-sand/15 pt-8 md:flex-row">
        <p className="text-xs text-srms-sand/70">
          © {new Date().getFullYear()} Foundation By Our Hands We Can. All rights
          reserved.
        </p>
        <div className="flex items-center gap-6 text-xs text-srms-sand/70">
          <a href="#privacy" className="transition hover:text-srms-amber">
            Privacy Policy
          </a>
          <a href="#terms" className="transition hover:text-srms-amber">
            Terms
          </a>
          <span className="text-srms-sand/40">Built with hope</span>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
