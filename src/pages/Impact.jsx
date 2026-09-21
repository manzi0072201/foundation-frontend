import { Link, NavLink } from 'react-router-dom'
import LogoMark from '../components/Logo'

const heroStats = [
  { value: '15+', label: 'Schools supported', period: 'since 2019' },
  { value: '500+', label: 'Students reached', period: 'since 2019' },
  { value: '10+', label: 'Activities delivered', period: 'in the last year' },
  { value: '10+', label: 'Communities engaged', period: 'across 3 regions' }
]

const locations = [
  { name: 'Kigali', schools: '0 schools', note: 'COMING NEXT' },
  { name: 'Northern Province', schools: '0 schools', note: 'COMING NEXT' },
  { name: 'Eastern Province', schools: 'ES MUHAZI', note: 'Youth club and community support activities.' },
  { name: 'Southern Province', schools: '0 school', note: 'COMING NEXT.' }
]

const programImpact = [
  {
    tag: 'School Programs',
    title: 'Schools, classrooms, learning',
    stats: [
      { value: '1', label: 'Schools reached' },
      { value: '500+', label: 'Students participated' }
    ],
    to: '/programs/school-programs'
  },
  {
    tag: 'Family & Community Support',
    title: 'Families growing stable and hopeful',
    stats: [
      { value: '8+', label: 'Communities reached' },
      { value: '15+', label: 'Activities delivered' }
    ],
    to: '/programs/family-community'
  },
  {
    tag: 'Youth Development',
    title: 'Young people stepping up',
    stats: [
      { value: '500+', label: 'Youth engaged' },
      { value: '1', label: 'Youth clubs running' }
    ],
    to: '/programs/youth-development'
  }
]

const beforeAfter = [
  { before: 'Classrooms overcrowded or shared between shifts', after: 'Purpose-built classrooms with space for every learner' },
  { before: 'Children sitting on the floor without books', after: 'Desks, learning materials and stocked reading corners' },
  { before: 'Families struggling to keep children enrolled', after: 'Gardens and support that help families afford school' },
  { before: 'Few safe spaces for young people after school', after: 'Youth clubs offering mentorship and skills' }
]

const stories = [
  { place: 'Kigali', title: 'A classroom block, built by many hands', to: '/news/impact-classroom-block' },
  { place: 'Northern Province', title: 'A school garden that fed a whole term', to: '/news/impact-school-garden' },
  { place: 'Eastern Province', title: 'Youth club graduates step into leadership', to: '/news/impact-youth-leaders' }
]

const journey = [
  { year: '2017', label: 'First partner school', mark: 'Kigali' },
  { year: '2019', label: 'Second region', mark: 'Northern Province' },
  { year: '2022', label: 'Family support gardens', mark: '8 communities' },
  { year: '2024', label: 'Youth clubs launch', mark: 'Eastern Province' },
  { year: '2026', label: '15 schools, 3 regions', mark: 'today' }
]

const partners = ['Partner logo', 'Partner logo', 'Partner logo', 'Partner logo']

const Impact = () => (
  <main>
    {/* Breadcrumb */}
    <nav aria-label="Breadcrumb" className="overflow-x-auto px-4 pt-16 sm:px-6">
      <ol className="mx-auto flex w-fit items-center gap-3 text-xs font-medium">
        <li>
          <NavLink to="/" className="whitespace-nowrap text-srms-ink-soft transition hover:text-srms-forest">
            Home
          </NavLink>
        </li>
        <li aria-hidden="true" className="text-srms-clay">/</li>
        <li>
          <span aria-current="page" className="whitespace-nowrap text-srms-forest">
            Our Impact
          </span>
        </li>
      </ol>
    </nav>

    {/* 1. Hero */}
    <section className="px-4 pt-11 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl animate-rise">
            <p className="inline-flex items-center gap-2.5 rounded-full border border-srms-clay/70 bg-white/80 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">
              <span className="h-2 w-2 rounded-full bg-srms-amber" />
              Our Impact
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-srms-ink sm:text-6xl">
              Turning action into
              <br />
              <span className="text-srms-forest">meaningful change</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-srms-ink-soft">
              Discover the people, schools and communities we've reached, and the
              progress made through their programs.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/programs"
                className="rounded-full bg-srms-amber px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-srms-amber/90"
              >
                Explore Our Programs
              </Link>
              <Link
                to="/get-involved"
                className="rounded-full border border-srms-clay/80 px-7 py-3.5 text-sm font-semibold text-srms-ink transition hover:border-srms-forest"
              >
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
                <p className="mt-8 text-lg font-semibold tracking-tight text-srms-sand">Foundation</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.32em] text-srms-sand/75">By Our Hands</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {heroStats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-srms-clay/70 bg-white p-6">
              <p className="text-3xl font-semibold text-srms-forest">{stat.value}</p>
              <p className="mt-2 text-sm font-medium text-srms-ink">{stat.label}</p>
              <p className="mt-1 text-xs text-srms-ink-soft">{stat.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 2. Where we work */}
    <section id="where-we-work" className="px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">Where We Work</p>
        <h2 className="mt-3 text-3xl font-semibold text-srms-ink sm:text-4xl">Our reach across Rwanda</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((loc) => (
            <div key={loc.name} className="rounded-3xl border border-srms-clay/70 bg-white p-7">
              <p className="text-lg font-semibold text-srms-ink">{loc.name}</p>
              <p className="mt-1 text-sm font-semibold text-srms-forest">{loc.schools}</p>
              <p className="mt-3 text-sm leading-relaxed text-srms-ink-soft">{loc.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 3. Impact by program */}
    <section id="impact-by-program" className="px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">Impact by Program</p>
        <h2 className="mt-3 text-3xl font-semibold text-srms-ink sm:text-4xl">Change, connected to each program</h2>
        <p className="mt-4 max-w-2xl text-srms-ink-soft">
          What we do leads to what changed. Here is the evidence behind each
          program area.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {programImpact.map((program) => (
            <div key={program.title} className="flex flex-col rounded-3xl border border-srms-clay/70 bg-white p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-srms-forest">{program.tag}</p>
              <h3 className="mt-3 text-lg font-semibold text-srms-ink">{program.title}</h3>
              <div className="mt-6 grid gap-5">
                {program.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-semibold text-srms-ink">{stat.value}</p>
                    <p className="mt-1 text-sm text-srms-ink-soft">{stat.label}</p>
                  </div>
                ))}
              </div>
              <Link
                to={program.to}
                className="group mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-srms-forest transition hover:text-srms-amber"
              >
                View Program
                <span aria-hidden="true" className="transition group-hover:translate-x-1">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 4. What has changed */}
    <section id="what-changed" className="px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">What Has Changed?</p>
        <h2 className="mt-3 text-3xl font-semibold text-srms-ink sm:text-4xl">Small steps, measured over time</h2>
        <p className="mt-4 max-w-2xl text-srms-ink-soft">
          We focus on changes we can see and verify — enrolment, participation
          and access — rather than making claims we can't back up.
        </p>
        <div className="mt-10 overflow-hidden rounded-3xl border border-srms-clay/70 bg-white">
          <div className="grid divide-y divide-srms-clay/50 md:grid-cols-2 md:divide-y-0">
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-srms-ink-soft">Before</p>
              <ul className="mt-5 space-y-3">
                {beforeAfter.slice(0, 3).map((item) => (
                  <li key={item.before} className="text-sm leading-relaxed text-srms-ink-soft">
                    {item.before}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-srms-sand/40 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-srms-forest">After</p>
              <ul className="mt-5 space-y-3">
                {beforeAfter.slice(0, 3).map((item) => (
                  <li key={item.after} className="text-sm leading-relaxed text-srms-ink">
                    {item.after}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* 5. Stories of impact */}
    <section id="stories" className="px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">Stories of Impact</p>
        <h2 className="mt-3 text-3xl font-semibold text-srms-ink sm:text-4xl">Real people, real change</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {stories.map((story) => (
            <Link
              key={story.title}
              to={story.to}
              className="group flex flex-col rounded-3xl border border-srms-clay/70 bg-white p-7 transition hover:-translate-y-0.5 hover:shadow-srms"
            >
              <div className="flex h-40 items-center justify-center rounded-2xl bg-srms-sand">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-srms-ink-soft">
                  Photo — coming soon
                </span>
              </div>
              <p className="mt-6 text-xs font-semibold text-srms-amber">{story.place}</p>
              <h3 className="mt-3 text-lg font-semibold text-srms-ink transition group-hover:text-srms-forest">
                {story.title}
              </h3>
              <p className="mt-auto pt-6 text-sm font-semibold text-srms-forest">
                Read Story <span aria-hidden="true">→</span>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* 6. Our journey */}
    <section id="journey" className="px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">Our Journey</p>
        <h2 className="mt-3 text-3xl font-semibold text-srms-ink sm:text-4xl">Growth you can trace</h2>
        <div className="mt-10 space-y-0">
          {journey.map((point) => (
            <div key={point.year} className="grid gap-3 border-l border-srms-clay/60 py-6 pl-5 md:grid-cols-[7rem_1fr_auto] md:items-center">
              <p className="text-lg font-semibold text-srms-forest">{point.year}</p>
              <p className="text-srms-ink">{point.label}</p>
              <p className="text-sm text-srms-ink-soft md:text-right">{point.mark}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 7. Impact reports */}
    <section id="reports" className="px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">Impact Reports</p>
        <h2 className="mt-3 text-3xl font-semibold text-srms-ink sm:text-4xl">What we share, openly</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[2025, 2024, 2023].map((year) => (
            <div key={year} className="flex flex-col justify-between gap-6 rounded-3xl border border-srms-clay/70 bg-white p-7 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-lg font-semibold text-srms-ink">{year} Impact Report</h3>
                <p className="mt-2 text-sm leading-relaxed text-srms-ink-soft">
                  Annual overview of our programs and their results.
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-srms-clay/70 px-5 py-2.5 text-sm font-semibold text-srms-forest">
                View Report <span aria-hidden="true">→</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 8. Partners & supporters */}
    <section id="partners" className="px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">Partners &amp; Supporters</p>
        <h2 className="mt-3 text-3xl font-semibold text-srms-ink sm:text-4xl">Working hand in hand</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner, index) => (
            <div key={index} className="flex h-24 items-center justify-center rounded-3xl border border-srms-clay/70 bg-white p-6">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-srms-ink-soft">
                {partner === 'Partner logo' ? 'Logo — awaiting permission' : partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 9. Final CTA */}
    <section className="px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2.5rem] bg-srms-sand px-6 py-16 text-center sm:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">Get Involved</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold text-srms-ink sm:text-4xl">
            Help us create more impact
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-srms-ink-soft">
            Together we can reach more schools, support more young people and
            strengthen more communities.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/get-involved"
              className="rounded-full bg-srms-forest px-7 py-3.5 text-sm font-semibold text-srms-sand transition hover:-translate-y-0.5 hover:bg-srms-forest/90"
            >
              Get Involved
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-srms-clay/80 px-7 py-3.5 text-sm font-semibold text-srms-ink transition hover:border-srms-forest"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  </main>
)

export default Impact
