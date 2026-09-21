import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

const heroStats = [
  { value: '6,400+', label: 'Children enrolled in schools we helped build' },
  { value: '12,000+', label: 'Students & families reached' },
  { value: '87', label: 'Projects completed across 3 regions' }
]

const programCards = [
  {
    tag: 'School Programs',
    title: 'Books in hand, futures in motion',
    text: 'We build and renovate classrooms, supply learning materials, and train teachers so every child can learn with dignity.',
    to: '/programs/school-programs'
  },
  {
    tag: 'Family & Community Support',
    title: 'Stronger homes, stronger futures',
    text: 'Food security gardens, skills workshops, and family counselling help families grow stable and hopeful.',
    to: '/programs/family-community'
  },
  {
    tag: 'Youth Development',
    title: 'Young hands shaping tomorrow',
    text: 'Mentorship, leadership camps, and vocational training turn young people into agents of change.',
    to: '/programs/youth-development'
  }
]

const impactList = [
  '12,000+ students & family members reached',
  '6,400+ children learning in classrooms we helped build',
  '87 projects completed in 3 regions',
  '240+ active volunteers and partners'
]

const getInvolvedSteps = [
  {
    tag: '01',
    title: 'Volunteer',
    text: 'Give a few hours or a season — teach, garden, or help at community events.',
    to: '/get-involved/volunteer'
  },
  {
    tag: '02',
    title: 'Partner With Us',
    text: 'Businesses, schools, and faith groups can power our programs through partnership.',
    to: '/get-involved/partner'
  },
  {
    tag: '03',
    title: 'Support Our Work',
    text: 'Recurring gifts and one-time donations turn small acts into lasting change.',
    to: '/get-involved/support'
  }
]

const newsList = [
  {
    tag: 'News',
    date: '12 Sep 2026',
    title: 'New classroom block opens in Kagugu',
    text: 'Volunteers and families came together to complete a three-room block serving 120 students.',
    to: '/news/new-classroom-block-kagugu'
  },
  {
    tag: 'Event',
    date: '21 Nov 2026',
    title: 'Hands of Hope Community Fun Day',
    text: 'Games, food, workshops, and music — an open day to celebrate our shared work.',
    to: '/news/hands-of-hope-fun-day'
  },
  {
    tag: 'Activity',
    date: 'Monthly',
    title: 'Garden harvest & food-share',
    text: 'Volunteers harvest school gardens and pack food baskets for families in need.',
    to: '/news/garden-harvest'
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
            Building hope since 2019
          </p>
          <h1 className="mt-8 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-srms-ink sm:text-6xl">
            Foundation
            <br />
            <span className="text-srms-forest">By Our Hands</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-srms-ink-soft">
            We are a community-driven charity building schools, strengthening
            families, and growing opportunities for young people — one
            community at a time. When we work together, every hand matters.
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
          <div className="mt-7 grid gap-4 sm:grid-cols-3">
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

        <div className="mt-8 grid gap-4 md:grid-cols-3">
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
              Children, families, and communities
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-srms-sand/85">
              Everyone has gifts to offer. We walk alongside children in need of
              schooling, families working toward stability, and young people
              growing into leaders — because stronger people build stronger
              communities.
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
              "The village raised us. Now we gather every hand we can find to
              raise the next generation — not with charity from above, but
              with community working together."
            </p>
            <p className="mt-6 text-sm font-semibold text-srms-sand">
              — Keid, Founder
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
