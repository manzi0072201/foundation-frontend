import { Link } from 'react-router-dom'
import { org, pillars } from '../data/site'

const heroStats = [
  { value: '2017', label: 'A student initiative begins at Muhazi Secondary School' },
  { value: '16', label: 'Members on our shared leadership committee' },
  { value: '9', label: 'Young founders who formed the foundation in 2025' },
  { value: '4', label: 'Interconnected pillars of our work' }
]

const programCards = [
  {
    tag: pillars[0].tag,
    title: 'Values rooted in faith',
    text: pillars[0].summary,
    to: pillars[0].to
  },
  {
    tag: pillars[1].tag,
    title: 'Service that reaches the vulnerable',
    text: pillars[1].summary,
    to: pillars[1].to
  },
  {
    tag: pillars[2].tag,
    title: 'Young leaders in the making',
    text: pillars[2].summary,
    to: pillars[2].to
  },
  {
    tag: pillars[3].tag,
    title: 'Talent, digital skills & creativity',
    text: pillars[3].summary,
    to: pillars[3].to
  }
]

const impactList = [
  'Youth leadership training, mentorship and discussion forums',
  'School-material support for vulnerable students',
  'Kitchen gardens and support for vulnerable families',
  'Umuganda, tree planting and community cleaning',
  'ICT and digital-skills training for young people',
  'An annual talent showcase for young creators'
]

const getInvolvedSteps = [
  {
    tag: '01',
    title: 'Volunteer',
    text: 'Give a few hours or a season — serve in schools, at events, or in the community.',
    to: '/get-involved'
  },
  {
    tag: '02',
    title: 'Partner With Us',
    text: 'Schools, organizations, businesses and faith groups can power our four pillars.',
    to: '/get-involved'
  },
  {
    tag: '03',
    title: 'Support Our Work',
    text: 'One-time or recurring gifts, materials, or our social enterprises all keep us going.',
    to: '/get-involved'
  }
]

const newsList = [
  {
    tag: 'Story',
    date: '2025',
    title: 'From a school club to a foundation',
    text: 'Nine active members transformed a seven-year student initiative into a community-based foundation.',
    to: '/news/from-a-school-club-to-a-foundation'
  },
  {
    tag: 'Activity',
    date: 'Ongoing',
    title: 'Umuganda: young hands in the community',
    text: 'Volunteers join community cleaning, tree planting and environmental protection activities.',
    to: '/news/umuganda-young-hands'
  },
  {
    tag: 'Activity',
    date: 'Ongoing',
    title: 'Kitchen gardens for families in need',
    text: 'We establish kitchen gardens and share food with vulnerable families in our community.',
    to: '/news/kitchen-gardens-for-families'
  }
]

const Home = () => (
  <main>
    {/* Hero */}
    <section className="animate-rise">
      <div className="px-4 pb-4 pt-20 sm:px-6 sm:pt-24">
        <div className="mx-auto max-w-6xl">
          <p className="inline-flex items-center gap-2.5 rounded-full border border-srms-clay/70 bg-white/80 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">
            <span className="h-2 w-2 rounded-full bg-srms-amber" />
            Youth-led since 2017
          </p>
          <h1 className="mt-8 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-srms-ink sm:text-6xl">
            Foundation
            <br />
            <span className="text-srms-forest">By Our Hands We Can</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-srms-ink-soft">
            {org.tagline}. We are a youth-led community foundation rooted in
            faith, service, transformation and talent &amp; ICT — empowering a
            better generation, one hand at a time.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              to="/get-involved"
              className="rounded-full bg-srms-amber px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-srms-amber/90"
            >
              Get Involved
            </Link>
            <Link
              to="/programs"
              className="rounded-full border border-srms-clay/80 px-7 py-3.5 text-sm font-semibold text-srms-ink transition hover:border-srms-forest"
            >
              Explore Our Programs
            </Link>
          </div>
        </div>

        <div className="mx-auto max-w-6xl">
          <h2 className="mt-16 text-xs font-semibold uppercase tracking-[0.3em] text-srms-ink-soft">
            Our impact at a glance
          </h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.value} className="rounded-3xl border border-srms-clay/70 bg-white p-6">
                <p className="text-3xl font-semibold text-srms-forest">{stat.value}</p>
                <p className="mt-2 text-sm text-srms-ink-soft">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* What we do — our programs */}
    <section className="px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest/80">
              Our Programs
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-srms-ink">What we do</h2>
          </div>
          <Link to="/programs" className="text-sm font-semibold text-srms-forest transition hover:text-srms-amber">
            View all programs →
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {programCards.map((card) => (
            <Link
              key={card.to}
              to={card.to}
              className="group rounded-3xl border border-srms-clay/70 bg-white p-7 transition hover:-translate-y-0.5 hover:shadow-srms"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-srms-amber">{card.tag}</p>
              <h3 className="mt-4 text-xl font-semibold text-srms-ink transition group-hover:text-srms-forest">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-srms-ink-soft">{card.text}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-srms-forest">
                Learn more
                <span className="transition group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Who we serve */}
    <section className="px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-srms-forest px-6 py-14 text-srms-sand sm:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-sand/70">
              Who we serve
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-srms-sand">
              Young people, families, schools &amp; communities
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-srms-sand/85">
              We believe young people are not only beneficiaries of
              development — they are its contributors and leaders. We walk
              alongside young people, vulnerable students and families,
              schools and the wider community, helping each of them contribute
              with what they have.
            </p>

            <div className="mt-8 space-y-3">
              {impactList.map((item) => (
                <div key={item} className="flex items-start gap-3 text-srms-sand/90">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-srms-amber/80 text-white">
                    <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" aria-hidden="true">
                      <path d="M2.5 6.5 5 9l4.5-5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p className="font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-srms-forest/80 p-8 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-amber">
              A message from our founder
            </p>
            <p className="mt-6 text-xl leading-relaxed text-srms-sand italic">
              "{org.motto}"
            </p>
            <p className="mt-6 text-sm font-semibold text-srms-sand">
              — {org.executiveDirector}, Executive Director
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Get involved */}
    <section className="px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest/80">
            Get Involved
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-srms-ink">
            Lend your hands to good work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-srms-ink-soft">
            There are many ways to help build the future we believe in — every
            contribution, no matter how small, moves us forward.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {getInvolvedSteps.map((step) => (
            <Link
              key={step.title}
              to={step.to}
              className="group rounded-3xl border border-srms-clay/70 bg-white p-7 transition hover:-translate-y-0.5 hover:shadow-srms"
            >
              <p className="text-sm font-semibold text-srms-amber">{step.tag}</p>
              <h3 className="mt-6 text-xl font-semibold text-srms-ink transition group-hover:text-srms-forest">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-srms-ink-soft">{step.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* News & events */}
    <section className="px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest/80">
              News &amp; events
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-srms-ink">Latest happenings</h2>
          </div>
          <Link to="/news" className="text-sm font-semibold text-srms-forest transition hover:text-srms-amber">
            View all news →
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {newsList.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group rounded-3xl border border-srms-clay/70 bg-white p-7 transition hover:-translate-y-0.5 hover:shadow-srms"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-srms-forest">{item.tag}</p>
              <p className="mt-2 text-xs text-srms-ink-soft">{item.date}</p>
              <h3 className="mt-4 text-lg font-semibold text-srms-ink transition group-hover:text-srms-forest">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-srms-ink-soft">{item.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Newsletter CTA */}
    <section className="px-4 pt-8 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-srms-sand px-6 py-14 text-center sm:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest/80">
          Stay connected
        </p>
        <h2 className="mx-auto mt-3 max-w-xl text-3xl font-semibold text-srms-ink">
          Join our community newsletter
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-srms-ink-soft">
          Get monthly stories, program updates, and ways to help — straight to
          your inbox.
        </p>
        <div className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            aria-label="Email address"
            className="w-full rounded-full border border-srms-clay/80 bg-white px-6 py-3.5 text-sm text-srms-ink focus:border-srms-forest focus:outline-none"
          />
          <button
            type="button"
            className="shrink-0 rounded-full bg-srms-forest px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-srms-forest/90"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  </main>
)

export default Home
