import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LogoMark } from '../components/Logo'
import { org, pillars } from '../data/site'

const valuesList = [
  { mark: '01', title: 'Faith & Purpose', text: 'Faith is the foundation of character, discipline, hope and purpose — and it is demonstrated through action.' },
  { mark: '02', title: 'Compassion & Service', text: 'We serve people living around us — vulnerable families, students and neighbours — with love and without judgment.' },
  { mark: '03', title: 'Unity & Shared Responsibility', text: 'Our strength depends on a strong committee, shared responsibility, unity and active participation from every member.' },
  { mark: '04', title: 'Youth Leadership', text: 'Young people are not merely beneficiaries of development — they are contributors and leaders of the future.' },
  { mark: '05', title: 'Continuity', text: 'Each generation receives the vision, improves it for its time, and passes it on to the next.' },
  { mark: '06', title: 'Integrity & Accountability', text: 'Decisions are taken in the open, resources are managed transparently, and every promise is kept.' }
]

const programsBridge = [
  { to: pillars[0].to, tag: pillars[0].tag, text: pillars[0].summary },
  { to: pillars[1].to, tag: pillars[1].tag, text: pillars[1].summary },
  { to: pillars[2].to, tag: pillars[2].tag, text: pillars[2].summary },
  { to: pillars[3].to, tag: pillars[3].tag, text: pillars[3].summary }
]

const approachSteps = [
  { step: '01', title: 'Listen', text: 'We begin in the community itself — with schools, families and young people telling us what they truly need.' },
  { step: '02', title: 'Partner', text: 'We work alongside local authorities, schools, communities and institutions as equal partners, complementing existing programs.' },
  { step: '03', title: 'Act', text: 'Teach → Reflect → Mentor → Practice → Serve → Lead → Inspire. We turn values into practical service.' },
  { step: '04', title: 'Measure', text: 'We track our activities, learn from results and share them openly with supporters and partners.' }
]

const storyTimeline = [
  { year: '2017', title: 'It begins at Muhazi Secondary School', text: 'A group of students, initially led by Umutesi Denyse, start serving people living around the school — beginning with school materials for vulnerable students and community members.' },
  { year: '2018', title: 'The vision is passed on', text: 'Nsabimana Jean Marie and Queen Kelly take over, continuing the spirit of service and turning a group of friends into a community of young people creating change together.' },
  { year: '2020', title: 'Shared leadership takes root', text: 'Muhire Janvier and Queen Kelly reorganize the group with friends Aman, Valantin and Emmanuel, establishing a committee of 16 members so no single person carries everything.' },
  { year: '2021', title: 'Service grows in the community', text: 'Members establish kitchen gardens (uturima tw’igikoni), support poor families with food, and organize activities that strengthen community relationships.' },
  { year: '2025', title: 'A foundation is born', text: 'Nine active members reconnect and transform the long-standing student initiative into a community-based foundation: By Our Hands We Can.' },
  { year: '2026', title: 'Building the foundation', text: 'The foundation begins its first year of programs across four pillars — Faith, Helping Others, Youth Transformation, and Talent & ICT.' }
]

const teamMembers = [
  { name: org.executiveDirector, role: 'Executive Director / President' },
  { name: 'Vice President', role: 'Deputy Executive Director' },
  { name: 'Secretary General', role: 'Communications & Records' },
  { name: 'Treasurer', role: 'Finance Officer' },
  { name: 'Program Directors', role: 'Faith · Service · Youth · Talent & ICT' },
  { name: 'Monitoring & Media', role: 'M&E Officer · Communication Officer' }
]

const partnersCount = 6

const About = () => {
  const { pathname } = useLocation()

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
                Building a Better Future
                <br />
                <span className="text-srms-forest">Through Generational Empowerment</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-srms-ink-soft">
                {org.name} is a youth-led community foundation rooted in a
                student initiative from 2017 — working across faith, service,
                youth transformation and talent &amp; ICT to empower young
                people and communities.
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
                    By Our Hands We Can
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
                  {org.name} is a youth-led community empowerment foundation
                  whose roots date back to 2017, when a group of students at
                  Muhazi Secondary School came together with a shared desire to
                  serve others and create positive change.
                </p>
                <p>
                  Over the years, leadership was passed from one generation of
                  students to another — building a strong committee of 16
                  members and a culture of unity, service and shared
                  responsibility. In 2025, nine active members transformed this
                  long-standing student initiative into a broader
                  community-based foundation.
                </p>
                <p>
                  What makes us different is how we work — not handing things
                  down, but sitting together and building up, hand by hand. Our
                  journey shows that meaningful change can begin with a small
                  group of young people who are willing to act.
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
                To empower young people through faith, community service,
                transformation and talent &amp; ICT — so they develop positive
                values, leadership abilities, practical skills and digital
                competencies, and contribute actively to the development of
                their families, communities and country.
              </p>
            </div>
            <div className="rounded-3xl border border-srms-clay/70 bg-srms-forest p-10 text-srms-sand shadow-srms">
              <p className="font-mono text-sm font-semibold text-srms-amber">Vision</p>
              <h3 className="mt-3 text-2xl font-semibold text-srms-sand">Where we are going</h3>
              <p className="mt-4 text-sm leading-relaxed text-srms-sand/80">
                "{org.vision}" A generation that does not wait for change, but
                actively participates in creating it.
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
            {teamMembers.map((member) => (
              <div key={member.name} className="group overflow-hidden rounded-3xl border border-srms-clay/70 bg-white transition hover:-translate-y-0.5 hover:shadow-srms">
                <div className="relative flex h-64 items-center justify-center bg-srms-clay/20">
                  <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-2 border-dashed border-srms-clay/70 bg-white/70">
                    <svg viewBox="0 0 24 24" className="h-10 w-10 opacity-40" fill="none" stroke="currentColor" strokeWidth="1.4">
                      <circle cx="12" cy="8.5" r="4" />
                      <path d="M4.5 20c1-3.5 4-5 7.5-5s6.5 1.5 7.5 5" />
                    </svg>
                  </div>
                  <span className="absolute bottom-3 right-3 rounded-full bg-white/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-srms-ink-soft">
                    Photo coming soon
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-srms-ink">{member.name}</h3>
                  <p className="mt-1 text-sm text-srms-forest">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-srms-ink-soft">
            Our foundation runs on shared leadership — responsibilities are
            distributed across a committee rather than depending on one person,
            following the structure our students established in the early years.
          </p>
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
                <p className="text-4xl font-semibold text-srms-sand">2017</p>
                <p className="mt-2 text-sm text-srms-sand/75">A student initiative begins</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-8">
                <p className="text-4xl font-semibold text-srms-sand">16</p>
                <p className="mt-2 text-sm text-srms-sand/75">Members on our shared committee</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-8">
                <p className="text-4xl font-semibold text-srms-sand">4</p>
                <p className="mt-2 text-sm text-srms-sand/75">Pillars of our work</p>
              </div>
            </div>
            <p className="mx-auto mt-8 max-w-xl text-xs text-srms-sand/60">
              Our journey from a student initiative to a foundation is built on
              continuity, youth leadership, shared responsibility and community
              service.
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
