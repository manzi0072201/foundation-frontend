import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo, { LogoMark } from '../components/Logo'

const programCards = [
  {
    to: '/programs/school-programs',
    mark: '01',
    tag: 'School Programs',
    summary: 'Classrooms, books, teacher training and meals so children can learn with dignity.',
    list: ['Build & renovate classrooms', 'Supply books, desks and learning materials', 'Train teachers & support school feeding']
  },
  {
    to: '/programs/family-community',
    mark: '02',
    tag: 'Family & Community Support',
    summary: 'Gardens, skills workshops and family counselling that strengthen homes and neighbourhoods.',
    list: ['Food security gardens', 'Skills & livelihood workshops', 'Family counselling and home visits']
  },
  {
    to: '/programs/youth-development',
    mark: '03',
    tag: 'Youth Development',
    summary: 'Mentorship, leadership camps and vocational training that grow young people into leaders.',
    list: ['Mentorship & role models', 'Leadership camps & clubs', 'Vocational & life-skills training']
  }
]

const howWeWork = [
  { step: '01', title: 'Listen', text: 'We begin in the community itself — schools tell us what they truly need.' },
  { step: '02', title: 'Partner', text: 'We work alongside schools, families, businesses and local leaders as equals.' },
  { step: '03', title: 'Act', text: 'We turn understanding into practical programs — building, teaching, supporting.' },
  { step: '04', title: 'Measure', text: 'We track outcomes, learn from results and share them openly with supporters.' }
]

const servedGroups = [
  { mark: '🎒', title: 'Students', text: 'Children and young people learning in the schools we support.' },
  { mark: '🏫', title: 'Schools', text: 'Classrooms, staff and leadership teams we build and strengthen alongside.' },
  { mark: '👨‍👩‍👧', title: 'Families', text: 'Parents and carers working with us to keep children in school and fed.' },
  { mark: '🌍', title: 'Communities', text: 'Neighbours, faith groups, businesses and local leaders who carry the work.' }
]

const impactStats = [
  { value: '12', label: 'Schools reached' },
  { value: '6,400+', label: 'Children enrolled' },
  { value: '87', label: 'Projects completed' }
]

const storiesList = ['Story 1', 'Story 2', 'Story 3']

const miniStat = [
  { value: '01', label: 'Listen' },
  { value: '02', label: 'Partner' },
  { value: '03', label: 'Act' },
  { value: '04', label: 'Measure' }
]

const Programs = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    const sectionId = pathname.replace('/programs', '').split('/').filter(Boolean).pop()
    if (!sectionId) return
    const el = document.getElementById(sectionId)
    if (el) {
      const timer = setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80)
      return () => clearTimeout(timer)
    }
  }, [pathname])

  return (
    <main>
      {/* 1. Hero */}
      <section id="programs-overview" className="px-4 pb-8 pt-16 sm:px-6 sm:pt-24 animate-rise">
        <div className="mx-auto max-w-6xl">
          <p className="inline-flex items-center gap-2.5 rounded-full border border-srms-clay/70 bg-white/80 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">
            Our Programs
          </p>
          <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-srms-ink sm:text-7xl">
            Creating Opportunities.
            <br />
            <span className="text-srms-forest">Strengthening Communities.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-srms-ink-soft">
            We work with schools, families and communities through programs
            designed to support and empower young people — planned hand in hand
            with the people we serve.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link to="/get-involved" className="inline-flex items-center gap-2 rounded-full bg-srms-amber px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5">
              Get Involved
              <span aria-hidden="true">→</span>
            </Link>
            <Link to="/programs" className="inline-flex items-center gap-2 rounded-full border border-srms-clay/80 px-7 py-3.5 text-sm font-semibold text-srms-ink transition hover:border-srms-forest">
              Explore Our Programs
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Programs overview cards */}
      <section id="program-cards" className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">What We Do</p>
          <h2 className="mt-3 text-3xl font-semibold text-srms-ink sm:text-4xl">Our programs, at a glance</h2>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {programCards.map((card) => (
              <Link key={card.to} to={card.to} className="group rounded-[2.5rem] border border-srms-clay/70 bg-white p-8 transition hover:-translate-y-1 hover:shadow-srms">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-srms-sand text-center">
                  <span className="font-mono text-lg font-semibold text-srms-forest">{card.mark}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-srms-ink transition group-hover:text-srms-forest">{card.tag}</h3>
                <p className="mt-3 text-sm leading-relaxed text-srms-ink-soft">{card.summary}</p>
                <p className="mt-6 text-sm font-semibold text-srms-forest transition group-hover:text-srms-amber">
                  Learn more <span aria-hidden="true">→</span>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. How we work — numbered approach */}
      <section id="how-we-work" className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2.5rem] bg-srms-sand px-6 py-16 sm:px-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">How We Work</p>
            <h2 className="mt-3 text-3xl font-semibold text-srms-ink sm:text-4xl">Our approach</h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {howWeWork.map((step) => (
                <div key={step.step}>
                  <span className="font-mono text-4xl font-semibold text-srms-amber/60">{step.step}</span>
                  <h3 className="mt-5 text-lg font-semibold text-srms-ink">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-srms-ink-soft">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Who we serve */}
      <section id="who-we-serve" className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">Who We Serve</p>
          <h2 className="mt-3 text-3xl font-semibold text-srms-ink sm:text-4xl">People at the centre of our work</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {servedGroups.map((group) => (
              <div key={group.title} className="rounded-3xl border border-srms-clay/70 bg-white p-7">
                <h3 className="mt-0 text-lg font-semibold text-srms-ink">{group.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-srms-ink-soft">{group.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Program impact */}
      <section id="program-impact" className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2.5rem] bg-srms-forest px-6 py-16 text-center sm:px-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-amber">Program Impact</p>
            <h2 className="mt-3 text-3xl font-semibold text-srms-sand sm:text-4xl">Measured, shared, growing</h2>
            <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-3">
              {impactStats.map((stat) => (
                <div key={stat.label} className="rounded-3xl bg-white/10 p-8">
                  <p className="text-4xl font-semibold text-srms-sand">{stat.value}</p>
                  <p className="mt-2 text-sm text-srms-sand/75">{stat.label}</p>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-xl text-xs text-srms-sand/60">
              Figures reflect our verified program records and are reviewed
              before publication.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Stories from the programs — reserved story slots */}
      <section id="program-stories" className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">Stories From the Programs</p>
          <h2 className="mt-3 text-3xl font-semibold text-srms-ink sm:text-4xl">Real people, real change</h2>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {storiesList.map((story) => (
              <article key={story} className="flex flex-col overflow-hidden rounded-[2rem] border border-srms-clay/70 bg-white">
                <div className="flex h-44 items-center justify-center bg-srms-sand">
                  <span className="font-mono text-sm font-semibold uppercase tracking-[0.25em] text-srms-ink-soft">
                    Photo — coming soon
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold text-srms-amber">Student story</p>
                  <p className="mt-3 text-sm leading-relaxed text-srms-ink">"{story} placeholder — team will replace."</p>
                  <p className="mt-auto pt-5 text-sm font-semibold text-srms-forest">Read story <span aria-hidden="true">→</span></p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Gallery — reserved photo slots */}
      <section id="gallery" className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">Gallery</p>
              <h2 className="mt-3 text-3xl font-semibold text-srms-ink sm:text-4xl">From our programs</h2>
            </div>
            <Link to="/news" className="shrink-0 text-sm font-semibold text-srms-forest transition hover:text-srms-amber">
              View gallery →
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[0, 1, 2, 3, 4, 5].map((n) => (
              <div key={n} className="flex h-56 items-center justify-center rounded-[2rem] border-2 border-dashed border-srms-clay/70 bg-srms-clay/20">
                <p className="px-6 text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-srms-ink-soft">
                  Photo slot {n + 1} — coming soon
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Get involved CTA */}
      <section id="get-involved" className="px-4 pb-20 pt-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2.5rem] border border-srms-clay/70 bg-white px-6 py-16 text-center sm:px-12">
            <LogoMark className="mx-auto h-12 w-12" />
            <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-semibold text-srms-ink sm:text-4xl">
              Be part of the change
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-srms-ink-soft">
              Every program is carried by hands like yours. Volunteer, partner
              or support our work today.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
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

export default Programs
