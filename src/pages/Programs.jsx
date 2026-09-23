import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LogoMark } from '../components/Logo'
import { org, pillars } from '../data/site'

const howWeWork = [
  { step: '01', title: 'Listen & Mobilize', text: 'We begin in the community — schools, families and young people tell us what they truly need, and we mobilize our members around it.' },
  { step: '02', title: 'Serve Together', text: 'We put our values into action: Umuganda, supporting vulnerable families, school-material support and kitchen gardens.' },
  { step: '03', title: 'Develop Skills & Talent', text: 'We train young people in leadership, life skills, talents and ICT so they can grow, create and contribute.' },
  { step: '04', title: 'Measure & Pass On', text: 'We track results, learn and share openly — and we pass the vision on to the next generation, as we have since 2017.' }
]

const servedGroups = [
  { title: 'Young People', text: 'The main beneficiaries — gaining leadership, ICT, mentorship, talent development, innovation and community-service opportunities.' },
  { title: 'Students', text: 'Students from disadvantaged backgrounds receive school materials, mentorship, educational support and talent activities.' },
  { title: 'Vulnerable Families', text: 'Families facing social or economic challenges receive community support, school assistance and kitchen-garden initiatives.' },
  { title: 'Schools & Communities', text: 'Schools gain better-supported students and youth activities, while the wider community gains responsible, skilled young people.' }
]

const impactStats = [
  { value: '4', label: 'Interconnected program pillars' },
  { value: '9', label: 'Founding members, 2025' },
  { value: '2M RWF', label: 'Budget committed to our first year' }
]

const storiesList = [
  'From kitchen garden to family support',
  'A young person who found their talent',
  'Umuganda, in our own hands'
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
            Empowering Generation.
            <br />
            <span className="text-srms-forest">Building Better Future.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-srms-ink-soft">
            {org.name} works through four interconnected pillars — Faith,
            Helping Others, Youth Transformation, and Talent &amp; ICT — each
            planned hand in hand with the young people and communities we serve.
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
          <h2 className="mt-3 text-3xl font-semibold text-srms-ink sm:text-4xl">Our four pillars, at a glance</h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((card) => (
              <Link key={card.to} to={card.to} className="group rounded-[2.5rem] border border-srms-clay/70 bg-white p-8 transition hover:-translate-y-1 hover:shadow-srms">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-srms-sand text-center">
                  <span className="font-mono text-lg font-semibold text-srms-forest">{card.mark}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-srms-ink transition group-hover:text-srms-forest">{card.tag}</h3>
                <p className="mt-3 text-sm leading-relaxed text-srms-ink-soft">{card.summary}</p>
                <ul className="mt-4 space-y-2">
                  {card.activities.slice(0, 4).map((activity) => (
                    <li key={activity} className="flex items-start gap-2 text-xs text-srms-ink-soft">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-srms-amber" />
                      {activity}
                    </li>
                  ))}
                </ul>
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
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-amber">Our Foundation</p>
            <h2 className="mt-3 text-3xl font-semibold text-srms-sand sm:text-4xl">Small start, real roots</h2>
            <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-3">
              {impactStats.map((stat) => (
                <div key={stat.label} className="rounded-3xl bg-white/10 p-8">
                  <p className="text-4xl font-semibold text-srms-sand">{stat.value}</p>
                  <p className="mt-2 text-sm text-srms-sand/75">{stat.label}</p>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-xl text-xs text-srms-sand/60">
              As partnerships and donations grow, so does our reach. The first
              year is designed to begin with limited resources and expand with
              community support.
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
                  <p className="text-xs font-semibold text-srms-amber">Field story</p>
                  <h3 className="mt-3 text-base font-semibold text-srms-ink">{story}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-srms-ink-soft">
                    We are collecting this story from our programs in {org.location}. It will be published with permission.
                  </p>
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
            {[
              'Faith & values session',
              'Community cleaning',
              'Kitchen garden',
              'Talent club practice',
              'ICT & digital skills',
              'School-material support'
            ].map((label) => (
              <div key={label} className="flex h-56 items-center justify-center rounded-[2rem] border-2 border-dashed border-srms-clay/70 bg-srms-clay/20">
                <p className="px-6 text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-srms-ink-soft">
                  {label} — photo coming soon
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
              Every pillar is carried by hands like yours. Volunteer, partner
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