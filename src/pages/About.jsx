import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo, { LogoMark } from '../components/Logo'

const valuesList = [
  { mark: '01', title: 'Community', text: 'We work with people, not for them. Every program starts with a shared table and a real need.' },
  { mark: '02', title: 'Education', text: 'A classroom is the strongest foundation a future can stand on. We build them, stock them and staff them.' },
  { mark: '03', title: 'Compassion', text: 'We meet families where they are — with patience, dignity and without judgment.' },
  { mark: '04', title: 'Growth', text: 'We plant today what a community will harvest for generations.' },
  { mark: '05', title: 'Integrity', text: 'Every donation is accounted for and every promise is kept. Trust is our capital.' },
  { mark: '06', title: 'Innovation', text: 'We try new ideas, keep what works and share it with others.' }
]

const programsBridge = [
  { to: '/programs/school-programs', tag: 'School Support', text: 'Classrooms, books, teacher training and meals so children can learn with dignity.' },
  { to: '/programs/youth-development', tag: 'Youth Development', text: 'Mentorship, leadership camps and vocational skills for young people.' },
  { to: '/programs/family-community', tag: 'Family Support', text: 'Food security gardens, skills workshops and family counselling.' },
  { to: '/get-involved/support', tag: 'Community Initiatives', text: 'Events, drives and volunteer days that bring neighbours together.' }
]

const approachSteps = [
  { step: '01', title: 'Listen', text: 'We begin in the community itself, understanding the needs of schools, families and young people.' },
  { step: '02', title: 'Partner', text: 'We work alongside schools, families, businesses and local leaders as equal partners.' },
  { step: '03', title: 'Act', text: 'We turn understanding into practical programs — building, teaching, supporting.' },
  { step: '04', title: 'Measure', text: 'We track outcomes, learn from results and share them openly with our supporters.' }
]

const storyTimeline = [
  { year: '2011', title: 'A kitchen table, a shared idea', text: 'A few neighbours meet at a kitchen table, worried about children missing school after the rains destroyed their classroom.' },
  { year: '2013', title: 'First school block rebuilt', text: 'Hands and shovels go to work. Fifty children walk back into a classroom with tables, books and a roof.' },
  { year: '2016', title: 'Families join the mission', text: 'Gardens, skills workshops and food sharing extend the work beyond the school gate and into homes.' },
  { year: '2019', title: 'Youth development grows', text: 'Mentorship, camps and vocational training give young people a place at the table.' },
  { year: '2026', title: '120+ active volunteers', text: 'What began at one kitchen table is now a movement carried by hundreds of hands.' }
]

const teamMembers = [1, 2, 3, 4, 5, 6]

const partnersCount = 6

const About = () => {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const sectionId = pathname.replace('/about', '').split('/').filter(Boolean).pop()
    if (!sectionId) return
    const el = document.getElementById(sectionId)
    if (el) {
      const timer = setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60)
      return () => clearTimeout(timer)
    }
  }, [pathname])

  return (
    <main>
      {/* 1. Hero — big logo + overview */}
      <section id="overview" className="px-4 pt-16 sm:px-6 sm:pt-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl animate-rise">
              <p className="inline-flex items-center gap-2.5 rounded-full border border-srms-clay/70 bg-white/80 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">
                About Us
              </p>
              <h1 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-tight text-srms-ink sm:text-6xl">
                Together, We Build
                <br />
                <span className="text-srms-forest">Stronger Futures</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-srms-ink-soft">
                Foundation By Our Hands is a community-driven organization
                working with schools, families and communities to create
                meaningful opportunities for children and young people.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link to="/programs" className="rounded-full bg-srms-amber px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5">
                  Explore Our Programs
                </Link>
                <Link to="/get-involved" className="rounded-full border border-srms-clay/80 px-7 py-3.5 text-sm font-semibold text-srms-ink transition hover:border-srms-forest">
                  Get Involved
                </Link>
              </div>
            </div>

            <div className="shrink-0 animate-rise" style={{ animationDelay: '0.12s' }}>
              <div className="rounded-[2.5rem] border border-srms-clay/60 bg-white p-3 shadow-srms">
                <div className="overflow-hidden rounded-[2rem] bg-srms-forest px-12 py-14">
                  <span className="mx-auto flex h-16 w-16">
                    <LogoMark className="h-16 w-16" />
                  </span>
                  <p className="mt-8 text-center text-lg font-semibold tracking-tight text-srms-sand">
                    Foundation
                  </p>
                  <p className="mt-1 text-center text-[11px] uppercase tracking-[0.32em] text-srms-sand/75">
                    By Our Hands
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reserved hero photo slot — production will place authentic fieldwork photography here */}
        <div className="mx-auto mt-14 max-w-6xl">
          <div className="flex h-72 items-center justify-center rounded-[2.5rem] border-2 border-dashed border-srms-clay/70 bg-srms-clay/20 sm:h-96">
            <div className="text-center">
              <svg viewBox="0 0 24 24" className="mx-auto h-10 w-10 opacity-50" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M3 9.5A2.5 2.5 0 0 1 5.5 7H8l1.5-2h5L16 7h2.5A2.5 2.5 0 0 1 21 9.5v7a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 3 16.5Z" />
                <circle cx="12" cy="12.5" r="3.5" />
              </svg>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-srms-ink-soft">
                Photo of our work — coming soon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Who We Are */}
      <section id="who-we-are" className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">Who We Are</p>
          <div className="mt-6 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-srms-ink sm:text-4xl">
                Built by the community, for the community
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-srms-ink-soft">
                <p>
                  Foundation By Our Hands is a community-focused organization
                  working with schools, families and communities to create
                  meaningful opportunities for children and young people.
                </p>
                <p>
                  We were established to answer a simple question: what happens
                  when a community refuses to wait for help and builds with what
                  it already has? Today we serve children, families and schools
                  across the regions we call home.
                </p>
                <p>
                  What makes us different is how we work — not handing things
                  down, but sitting together and building up, hand by hand.
                </p>
              </div>
            </div>

            {/* Reserved image slot */}
            <div className="flex h-80 items-center justify-center rounded-[2.5rem] border-2 border-dashed border-srms-clay/70 bg-srms-clay/20">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-ink-soft">
                Community photo — coming soon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Story — timeline */}
      <section id="our-story" className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">Our Story</p>
              <h2 className="mt-3 text-3xl font-semibold text-srms-ink sm:text-4xl">How it began & where we are going</h2>
            </div>
          </div>

          <div className="mt-12 space-y-0">
            {storyTimeline.map((event, i) => (
              <div key={event.year} className="relative flex gap-5 pb-10 last:pb-0">
                {i < storyTimeline.length - 1 && (
                  <span className="absolute left-[7px] top-5 h-full w-px bg-srms-clay/70" aria-hidden="true" />
                )}
                <span className="mt-1.5 h-[15px] w-[15px] shrink-0 rounded-full border-2 border-srms-forest bg-white" />
                <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6">
                  <p className="w-14 shrink-0 font-mono text-sm font-semibold text-srms-forest transition hover:text-srms-amber">
                    <Link to="/about#our-story">{event.year}</Link>
                  </p>
                  <div>
                    <h3 className="text-lg font-semibold text-srms-ink">{event.title}</h3>
                    <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-srms-ink-soft">{event.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Mission & Vision */}
      <section id="mission-vision" className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">Mission & Vision</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-srms-clay/70 bg-white p-10 shadow-srms">
              <p className="font-mono text-sm font-semibold text-srms-forest">Mission</p>
              <h3 className="mt-3 text-2xl font-semibold text-srms-ink">What we do</h3>
              <p className="mt-4 text-sm leading-relaxed text-srms-ink-soft">
                To build schools, strengthen families and grow youth leadership
                — hand in hand with the communities we serve.
              </p>
            </div>
            <div className="rounded-3xl border border-srms-clay/70 bg-srms-forest p-10 text-srms-sand shadow-srms">
              <p className="font-mono text-sm font-semibold text-srms-amber">Vision</p>
              <h3 className="mt-3 text-2xl font-semibold text-srms-sand">Where we are going</h3>
              <p className="mt-4 text-sm leading-relaxed text-srms-sand/80">
                A generation of children who learn, lead and lift — in
                communities that build their own future by our hands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Values */}
      <section id="our-values" className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">Our Values</p>
          <h2 className="mt-3 text-3xl font-semibold text-srms-ink sm:text-4xl">What guides every hand we put to work</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {valuesList.map((value) => (
              <div key={value.mark} className="group rounded-3xl border border-srms-clay/70 bg-white p-7 transition hover:-translate-y-0.5 hover:shadow-srms">
                <p className="font-mono text-sm font-semibold text-srms-amber">{value.mark}</p>
                <h3 className="mt-4 text-lg font-semibold text-srms-ink transition group-hover:text-srms-forest">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-srms-ink-soft">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. What We Do */}
      <section id="what-we-do" className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">What We Do</p>
              <h2 className="mt-3 text-3xl font-semibold text-srms-ink sm:text-4xl">Our work, at a glance</h2>
            </div>
            <Link to="/programs" className="shrink-0 text-sm font-semibold text-srms-forest transition hover:text-srms-amber">
              Explore Our Programs →
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {programsBridge.map((item) => (
              <Link key={item.to} to={item.to} className="group rounded-3xl border border-srms-clay/70 bg-white p-7 transition hover:-translate-y-0.5 hover:shadow-srms">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-srms-amber">{item.tag}</p>
                <h3 className="mt-4 text-lg font-semibold text-srms-ink transition group-hover:text-srms-forest">{item.tag}</h3>
                <p className="mt-3 text-sm leading-relaxed text-srms-ink-soft">{item.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Our Approach */}
      <section id="how-we-work" className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2.5rem] bg-srms-sand px-6 py-16 sm:px-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">How We Work</p>
            <h2 className="mt-3 text-3xl font-semibold text-srms-ink sm:text-4xl">Our approach</h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {approachSteps.map((step) => (
                <div key={step.step} className="relative">
                  <p className="font-mono text-4xl font-semibold text-srms-amber/60">{step.step}</p>
                  <h3 className="mt-5 text-lg font-semibold text-srms-ink">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-srms-ink-soft">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Our Team — reserved photo slots */}
      <section id="our-team" className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">Our Team</p>
              <h2 className="mt-3 text-3xl font-semibold text-srms-ink sm:text-4xl">The people behind the work</h2>
            </div>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((n) => (
              <div key={n} className="group overflow-hidden rounded-3xl border border-srms-clay/70 bg-white transition hover:-translate-y-0.5 hover:shadow-srms">
                <div className="relative flex h-64 items-center justify-center bg-srms-clay/20">
                  <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-2 border-dashed border-srms-clay/70 bg-white/70">
                    <svg viewBox="0 0 24 24" className="h-10 w-10 opacity-40" fill="none" stroke="currentColor" strokeWidth="1.4">
                      <circle cx="12" cy="8.5" r="4" />
                      <path d="M4.5 20c1-3.5 4-5 7.5-5s6.5 1.5 7.5 5" />
                    </svg>
                  </div>
                  <span className="absolute bottom-3 right-3 rounded-full bg-white/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-srms-ink-soft">
                    Team Member {n} — photo coming soon
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-srms-ink">Person {n}</h3>
                  <p className="mt-1 text-sm text-srms-forest">Title / Role</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Our Partners — reserved logo slots */}
      <section id="our-partners" className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">Our Partners</p>
          <h2 className="mt-3 text-3xl font-semibold text-srms-ink sm:text-4xl">Trusted by</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-srms-ink-soft">
            Schools, businesses and organizations who walk alongside us. Partner
            logos will appear here once they have agreed to be represented.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {Array.from({ length: partnersCount }).map((_, i) => (
              <div key={i} className="flex h-24 items-center justify-center rounded-3xl border-2 border-dashed border-srms-clay/60 bg-white/60">
                <p className="px-3 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-srms-ink-soft">
                  Partner {i + 1} logo
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Impact Snapshot — verified numbers from our work */}
      <section id="impact-snapshot" className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2.5rem] bg-srms-forest px-6 py-16 text-center sm:px-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-amber">Our Impact</p>
            <h2 className="mt-3 text-3xl font-semibold text-srms-sand">Hands working, together</h2>
            <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-3">
              <div className="rounded-3xl bg-white/10 p-8">
                <p className="text-4xl font-semibold text-srms-sand">6,400+</p>
                <p className="mt-2 text-sm text-srms-sand/75">Children enrolled in schools</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-8">
                <p className="text-4xl font-semibold text-srms-sand">12,000+</p>
                <p className="mt-2 text-sm text-srms-sand/75">Students & families reached</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-8">
                <p className="text-4xl font-semibold text-srms-sand">87</p>
                <p className="mt-2 text-sm text-srms-sand/75">Projects completed</p>
              </div>
            </div>
            <p className="mx-auto mt-8 max-w-xl text-xs text-srms-sand/60">
              Figures shown reflect our verified program records and are
              reviewed with our team before publication.
            </p>
          </div>
        </div>
      </section>

      {/* 11. Final CTA */}
      <section className="px-4 pb-20 pt-6 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2.5rem] border border-srms-clay/70 bg-white px-6 py-16 text-center sm:px-12">
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold text-srms-ink sm:text-4xl">
              Be Part of the Change
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-srms-ink-soft">
              Every great future is built by many hands. Yours can be one of
              them.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link to="/get-involved" className="rounded-full bg-srms-amber px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5">
                Get Involved
              </Link>
              <Link to="/contact" className="rounded-full border border-srms-clay/80 px-7 py-3.5 text-sm font-semibold text-srms-ink transition hover:border-srms-forest">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
