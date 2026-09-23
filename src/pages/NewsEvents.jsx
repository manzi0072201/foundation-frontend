import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LogoMark } from '../components/Logo'

const featuredStory = {
  tag: 'Featured Story',
  title: 'From a student club to a foundation: nine young hands carry a vision forward',
  excerpt:
    'What began in 2017 as a group of students serving around Muhazi Secondary School became, in 2025, a community-based foundation built on faith, service, transformation and talent & ICT.',
  date: 'Established 2025 · Rooted in 2017',
  to: '/news/from-a-school-club-to-a-foundation'
}

const categories = ['All', 'News', 'Events', 'Activities', 'Stories']

const newsArticles = [
  {
    slug: 'umuganda-young-hands',
    category: 'Activities',
    title: 'Umuganda: young hands in the community',
    excerpt: 'Volunteers join community cleaning, tree planting and environmental protection alongside local authorities.',
    date: 'Ongoing · Monthly'
  },
  {
    slug: 'from-a-school-club-to-a-foundation',
    category: 'News',
    title: 'From student club to foundation',
    excerpt: 'Nine active members transformed a seven-year student initiative into a community-based foundation.',
    date: '2025'
  },
  {
    slug: 'kitchen-gardens-for-families',
    category: 'Stories',
    title: 'Kitchen gardens for families in need',
    excerpt: 'Families plant kitchen gardens (uturima tw\u2019igikoni) and share food with those who need it most.',
    date: 'Ongoing'
  },
  {
    slug: 'school-material-support',
    category: 'Activities',
    title: 'School-material support',
    excerpt: 'We provide books, pens, school bags and learning materials to vulnerable students and community members.',
    date: 'Ongoing'
  },
  {
    slug: 'youth-talent-showcase',
    category: 'Events',
    title: 'Annual Youth Talent Showcase',
    excerpt: 'Young people perform, create and showcase their talents before parents, schools and partners.',
    date: 'Coming 2026'
  },
  {
    slug: 'ict-digital-skills',
    category: 'Stories',
    title: 'Young people learning ICT & digital skills',
    excerpt: 'Training in graphic design, photography, content creation and more opens new doors for young people.',
    date: 'Ongoing'
  }
]

const upcomingEvents = [
  {
    month: 'OCT',
    day: '24',
    year: '2026',
    title: 'ICT & Digital Skills Workshop',
    location: 'Kagarama, Kicukiro · Kigali City',
    time: '10:00 – 15:00',
    description:
      'A hands-on session where young people learn digital skills — from digital content creation to basic technology use.',
    audience: 'Open to young people — registration required',
    to: '/news/events/ict-digital-skills-workshop'
  },
  {
    month: 'NOV',
    day: '21',
    year: '2026',
    title: 'Annual Youth Talent Showcase',
    location: 'Young & community partners, Kigali',
    time: '14:00 – 18:00',
    description:
      'Young people present their talents — music, dance, poetry, art and more — before parents, schools and potential partners.',
    audience: 'Open to the community — performers register to showcase',
    to: '/news/events/youth-talent-showcase'
  },
  {
    month: 'DEC',
    day: '05',
    year: '2026',
    title: 'Umuganda: Community Cleaning & Tree Planting',
    location: 'Kagarama, Kicukiro · Kigali City',
    time: '8:00 – 12:00',
    description:
      'Young volunteers join community cleaning, tree planting and environmental protection activities.',
    audience: 'Open to all volunteers',
    to: '/news/events/umuganda-community-cleaning'
  }
]

const pastEvents = [
  {
    title: 'School-Material Support Visits',
    date: '2025',
    note: 'Founding members supported vulnerable students and community members with school materials.',
    to: '/news/events/school-material-support'
  },
  {
    title: 'Community Fellowship Activities',
    date: '2024',
    note: 'Activities that brought people together to share happiness and strengthen community relationships.',
    to: '/news/events/community-fellowship'
  },
  {
    title: 'Kitchen-Garden Beginnings',
    date: '2021',
    note: 'Students established kitchen gardens to support poor families with food and cooking support.',
    to: '/news/events/kitchen-garden-beginnings'
  }
]

const galleryPhotos = [
  'Faith & values session',
  'Umuganda cleaning',
  'Tree planting',
  'Kitchen garden',
  'Talent club practice',
  'ICT & digital skills'
]

const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const NewsEvents = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const filteredNews =
    activeCategory === 'All'
      ? newsArticles
      : newsArticles.filter((article) => article.category === activeCategory)

  const handleSubscribe = (event) => {
    event.preventDefault()
    if (!email.trim()) return
    setSubscribed(true)
    setEmail('')
  }

  return (
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
              News &amp; Events
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
                News &amp; Events
              </p>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-srms-ink sm:text-6xl">
                Stay connected with
                <br />
                <span className="text-srms-forest">our work</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-srms-ink-soft">
                Discover our latest activities, stories, announcements, and
                upcoming events.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => scrollToSection('upcoming-events')}
                  className="rounded-full bg-srms-amber px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-srms-amber/90"
                >
                  View Upcoming Events
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('latest-news')}
                  className="rounded-full border border-srms-clay/80 px-7 py-3.5 text-sm font-semibold text-srms-ink transition hover:border-srms-forest"
                >
                  Browse Latest News
                </button>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  { label: 'Latest News', id: 'latest-news' },
                  { label: 'Upcoming Events', id: 'upcoming-events' },
                  { label: 'Past Events', id: 'past-events' },
                  { label: 'Highlights', id: 'photo-highlights' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className="rounded-full border border-srms-clay/60 bg-white px-4 py-2 text-xs font-semibold text-srms-ink-soft transition hover:border-srms-forest hover:text-srms-forest"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full max-w-md shrink-0 animate-rise lg:w-auto" style={{ animationDelay: '0.12s' }}>
              <div className="rounded-[2.5rem] border border-srms-clay/60 bg-white p-3 shadow-srms">
                <div className="flex h-72 items-center justify-center overflow-hidden rounded-[2rem] bg-srms-sand px-8">
                  <span className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-srms-ink-soft">
                    Recent activity photo
                    <br />
                    <span className="normal-case tracking-normal">(to be provided)</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Story */}
      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-[2.5rem] border border-srms-clay/70 bg-white shadow-srms animate-rise">
            <div className="flex h-64 items-center justify-center bg-srms-sand sm:h-80">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-srms-ink-soft">
                Photo — coming soon
              </span>
            </div>
            <div className="p-7 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-amber">{featuredStory.tag}</p>
              <h2 className="mt-4 max-w-3xl text-2xl font-semibold leading-snug text-srms-ink sm:text-4xl">
                {featuredStory.title}
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-srms-ink-soft">{featuredStory.excerpt}</p>
              <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                <p className="text-sm text-srms-ink-soft">{featuredStory.date}</p>
                <Link
                  to={featuredStory.to}
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-srms-forest transition hover:text-srms-amber"
                >
                  Read Full Story
                  <span aria-hidden="true" className="transition group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Latest News */}
      <section id="latest-news" className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">Latest News</p>
          <h2 className="mt-3 text-3xl font-semibold text-srms-ink sm:text-4xl">What we've been doing lately</h2>

          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  activeCategory === category
                    ? 'bg-srms-forest text-white'
                    : 'border border-srms-clay/70 bg-white text-srms-ink hover:border-srms-forest'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredNews.map((article) => (
              <article
                key={article.slug}
                className="flex flex-col rounded-3xl border border-srms-clay/70 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-srms"
              >
                <div className="flex h-40 items-center justify-center rounded-2xl bg-srms-sand">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-srms-ink-soft">
                    Photo — coming soon
                  </span>
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-srms-amber">
                  {article.category}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-srms-ink">{article.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-srms-ink-soft">{article.excerpt}</p>
                <p className="mt-4 text-xs text-srms-ink-soft">{article.date}</p>
                <Link
                  to={`/news/${article.slug}`}
                  className="group mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-srms-forest transition hover:text-srms-amber"
                >
                  Read More
                  <span aria-hidden="true" className="transition group-hover:translate-x-1">→</span>
                </Link>
              </article>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <p className="mt-10 rounded-3xl border border-srms-clay/70 bg-white p-8 text-sm text-srms-ink-soft">
              No articles in this category yet — check back soon.
            </p>
          )}
        </div>
      </section>

      {/* 4. Upcoming Events */}
      <section id="upcoming-events" className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">Upcoming Events</p>
          <h2 className="mt-3 text-3xl font-semibold text-srms-ink sm:text-4xl">What's coming next</h2>
          <p className="mt-4 max-w-2xl text-srms-ink-soft">
            Mark your calendar — these are the next moments where you can join,
            participate and meet us in person.
          </p>

          <div className="mt-10 space-y-4">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="flex flex-col gap-6 rounded-3xl border border-srms-clay/70 bg-white p-7 sm:flex-row sm:items-start"
              >
                <div className="flex h-24 w-24 shrink-0 flex-col items-center justify-center rounded-2xl bg-srms-forest text-srms-sand">
                  <span className="text-sm font-semibold tracking-[0.2em]">{event.month}</span>
                  <span className="text-3xl font-semibold leading-none">{event.day}</span>
                  <span className="mt-1 text-xs text-srms-sand/75">{event.year}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-srms-ink">{event.title}</h3>
                  <p className="mt-1 text-sm text-srms-forest">
                    {event.location} · {event.time}
                  </p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-srms-ink-soft">{event.description}</p>
                  <p className="mt-2 text-xs text-srms-ink-soft">{event.audience}</p>
                  <Link
                    to={event.to}
                    className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-srms-forest transition hover:text-srms-amber"
                  >
                    View Event
                    <span aria-hidden="true" className="transition group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Past Events */}
      <section id="past-events" className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">Past Events</p>
          <h2 className="mt-3 text-3xl font-semibold text-srms-ink sm:text-4xl">Recently, with our own hands</h2>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {pastEvents.map((event) => (
              <Link
                key={event.title}
                to={event.to}
                className="group flex flex-col rounded-3xl border border-srms-clay/70 bg-white p-7 transition hover:-translate-y-0.5 hover:shadow-srms"
              >
                <div className="flex h-40 items-center justify-center rounded-2xl bg-srms-sand">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-srms-ink-soft">
                    Photo — coming soon
                  </span>
                </div>
                <p className="mt-6 text-xs font-semibold text-srms-amber">{event.date}</p>
                <h3 className="mt-3 text-lg font-semibold text-srms-ink transition group-hover:text-srms-forest">
                  {event.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-srms-ink-soft">{event.note}</p>
                <p className="mt-auto pt-6 text-sm font-semibold text-srms-forest">
                  View Event <span aria-hidden="true">→</span>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Photo Highlights */}
      <section id="photo-highlights" className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">From Our Recent Activities</p>
          <h2 className="mt-3 text-3xl font-semibold text-srms-ink sm:text-4xl">Photo highlights</h2>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {galleryPhotos.map((label) => (
              <div
                key={label}
                className="flex aspect-[4/3] items-center justify-center rounded-3xl border border-srms-clay/70 bg-srms-sand p-4"
              >
                <span className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-srms-ink-soft">
                  {label}
                  <br />
                  <span className="normal-case tracking-normal">Photo — coming soon</span>
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/news/gallery"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-srms-forest transition hover:text-srms-amber"
            >
              View Gallery
              <span aria-hidden="true" className="transition group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Newsletter */}
      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2.5rem] border border-srms-clay/70 bg-white px-6 py-14 text-center sm:px-12">
            <span className="mx-auto flex h-12 w-12">
              <LogoMark className="h-12 w-12" />
            </span>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">Stay Updated</p>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold text-srms-ink sm:text-4xl">
              Get occasional updates
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-srms-ink-soft">
              Get occasional updates about our programs, events and community
              activities — straight to your inbox.
            </p>
            {subscribed ? (
              <p className="mx-auto mt-8 max-w-md rounded-full bg-srms-sand px-6 py-3.5 text-sm font-semibold text-srms-forest">
                Thank you — you're on the list.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row">
                <label htmlFor="newsletter-email" className="sr-only">
                  Your email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Your Email Address"
                  className="flex-1 rounded-full border border-srms-clay/70 bg-white px-6 py-3.5 text-sm text-srms-ink placeholder:text-srms-ink-soft focus:border-srms-forest focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-full bg-srms-forest px-7 py-3.5 text-sm font-semibold text-srms-sand transition hover:-translate-y-0.5 hover:bg-srms-forest/90"
                >
                  Subscribe
                </button>
              </form>
            )}
            <p className="mt-4 text-xs text-srms-ink-soft">
              Prefer a dedicated page?{' '}
              <NavLink to="/newsletter" className="font-semibold text-srms-forest underline decoration-srms-amber underline-offset-4">
                Visit the newsletter page →
              </NavLink>
            </p>
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2.5rem] bg-srms-sand px-6 py-16 text-center sm:px-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">Be Part of Our Next Story</p>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold text-srms-ink sm:text-4xl">
              Want to support our work, volunteer, or partner with Foundation By Our Hands?
            </h2>
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
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default NewsEvents
