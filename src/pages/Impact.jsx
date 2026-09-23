import { Link, NavLink } from 'react-router-dom'
import { LogoMark } from '../components/Logo'
import { budget, budgetTotal, pillars } from '../data/site'

const heroStats = [
  { value: '2017', label: 'A student initiative at Muhazi Secondary School', period: 'how it all began' },
  { value: '16', label: 'Members on our shared committee', period: 'established in the early years' },
  { value: '9', label: 'Young founders in 2025', period: 'when the foundation was formed' },
  { value: '4', label: 'Interconnected pillars', period: 'faith, service, transformation, talent & ICT' }
]

const locations = [
  { name: 'Kagarama', schools: 'Program headquarters', note: 'Where Foundation By Our Hands We Can is being implemented — Kicukiro District, Kigali City.' },
  { name: 'Kicukiro District', schools: 'Our home district', note: 'Community outreach and youth activities across the district.' },
  { name: 'Kigali City', schools: 'Capital, Rwanda', note: 'Our first programs are taking shape here, with room to grow.' },
  { name: 'Muhazi Secondary School', schools: 'Where it began', note: 'The student initiative that started the vision in 2017.' }
]

const programImpact = pillars.map((pillar) => ({
  tag: pillar.tag,
  title: pillar.title,
  activities: pillar.activities,
  to: pillar.to
}))

const beforeAfter = [
  { before: 'Young people have potential and talent but few opportunities, guidance or platforms', after: 'Leadership, mentorship, life skills and discussion forums help them act' },
  { before: 'Some families face difficulties meeting basic needs', after: 'Community support, food assistance and kitchen gardens build resilience' },
  { before: 'Vulnerable students may lack essential school materials', after: 'School-material support and mentorship keep children learning' },
  { before: 'Talents and ICT skills remain undeveloped', after: 'Talent clubs, digital-skills training and innovation activities open doors' }
]

const stories = [
  { place: 'Kigali', title: 'From a school club to a foundation', to: '/news/from-a-school-club-to-a-foundation' },
  { place: 'Community', title: 'Kitchen gardens bring food and hope', to: '/news/kitchen-gardens-for-families' },
  { place: 'Kicukiro', title: 'Umuganda, in our own hands', to: '/news/umuganda-young-hands' }
]

const journey = [
  { year: '2017', label: 'A student initiative begins', mark: 'Muhazi Secondary School' },
  { year: '2018', label: 'The vision is passed on', mark: 'Nsabimana Jean Marie & Queen Kelly' },
  { year: '2020', label: 'Committee of 16 established', mark: 'Shared leadership' },
  { year: '2021', label: 'Kitchen gardens and family support', mark: 'Serving the community' },
  { year: '2025', label: 'A foundation is formed', mark: '9 founding members' },
  { year: '2026', label: 'First year of programs', mark: 'today' }
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
              From student hands
              <br />
              <span className="text-srms-forest">to a foundation</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-srms-ink-soft">
              Discover the young people, families and communities behind our
              four pillars — and the progress we are making, together.
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
                <p className="mt-8 text-center text-lg font-semibold tracking-tight text-srms-sand">Foundation</p>
                <p className="mt-1 text-center text-[11px] uppercase tracking-[0.32em] text-srms-sand/75">By Our Hands We Can</p>
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
        <h2 className="mt-3 text-3xl font-semibold text-srms-ink sm:text-4xl">Rooted in Kigali, born in a school</h2>
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
        <h2 className="mt-3 text-3xl font-semibold text-srms-ink sm:text-4xl">Change, connected to each pillar</h2>
        <p className="mt-4 max-w-2xl text-srms-ink-soft">
          What we do leads to what changes. Here is what each of our four
          pillars exists to create.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {programImpact.map((program) => (
            <div key={program.title} className="flex flex-col rounded-3xl border border-srms-clay/70 bg-white p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-srms-forest">{program.tag}</p>
              <h3 className="mt-3 text-lg font-semibold text-srms-ink">{program.title}</h3>
              <ul className="mt-5 space-y-2.5">
                {program.activities.slice(0, 4).map((activity) => (
                  <li key={activity} className="flex items-start gap-2 text-sm text-srms-ink-soft">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-srms-amber" />
                    {activity}
                  </li>
                ))}
              </ul>
              <Link
                to={program.to}
                className="group mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-srms-forest transition hover:text-srms-amber"
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
          We focus on changes we can see and verify — participation, support
          delivered and skills gained — rather than making claims we can't back up.
        </p>
        <div className="mt-10 overflow-hidden rounded-3xl border border-srms-clay/70 bg-white">
          <div className="grid divide-y divide-srms-clay/50 md:grid-cols-2 md:divide-y-0">
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-srms-ink-soft">Before</p>
              <ul className="mt-5 space-y-3">
                {beforeAfter.map((item) => (
                  <li key={item.before} className="text-sm leading-relaxed text-srms-ink-soft">
                    {item.before}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-srms-sand/40 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-srms-forest">After</p>
              <ul className="mt-5 space-y-3">
                {beforeAfter.map((item) => (
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

    {/* 7. First-year budget */}
    <section id="reports" className="px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">How We Plan To Spend</p>
        <h2 className="mt-3 text-3xl font-semibold text-srms-ink sm:text-4xl">Our first-year budget, openly</h2>
        <p className="mt-4 max-w-2xl text-srms-ink-soft">
          A small-start budget of {budgetTotal} RWF that lets us begin with
          limited resources and expand as partnerships and donations grow.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {budget.map((item) => (
            <div key={item.category} className="flex flex-col justify-between gap-6 rounded-3xl border border-srms-clay/70 bg-white p-7 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-lg font-semibold text-srms-ink">{item.category}</h3>
                <p className="mt-2 text-sm leading-relaxed text-srms-ink-soft">{item.activities}</p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-srms-clay/70 px-5 py-2.5 text-sm font-semibold text-srms-forest">
                {item.amount} RWF
              </span>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-3xl bg-srms-forest px-7 py-6 text-center text-srms-sand sm:flex sm:items-center sm:justify-between">
          <p className="text-lg font-semibold">Total estimated budget — first year</p>
          <p className="text-2xl font-semibold text-srms-amber">{budgetTotal} RWF</p>
        </div>
      </div>
    </section>

    {/* 8. Partners & supporters */}
    <section id="partners" className="px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">Partners &amp; Supporters</p>
        <h2 className="mt-3 text-3xl font-semibold text-srms-ink sm:text-4xl">Working hand in hand</h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-srms-ink-soft">
          We seek to build partnerships with schools, communities, government
          institutions, civil society organizations and private-sector actors
          committed to youth development. Logos will appear here once partners
          agree to be represented.
        </p>
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
            Together we can reach more young people, support more families and
            strengthen more communities — hand in hand.
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