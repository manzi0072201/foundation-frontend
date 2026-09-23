import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const ways = [
  {
    title: 'Volunteer',
    text: 'Give your time, skills and energy to our activities on the ground.',
    cta: 'Volunteer',
    to: 'volunteer',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
        <path d="M12 10.5c-1.6-2-4.3-1.7-4.3.5 0 1.8 2 3 4.3 4.7 2.3-1.7 4.3-2.9 4.3-4.7 0-2.2-2.7-2.5-4.3-.5Z" fill="currentColor" />
        <path d="M7 5.5c-1.4 0-2.5 1-2.5 2.4 0 1.6 1.7 2.6 3.6 4.2M17 5.5c1.4 0 2.5 1 2.5 2.4 0 1.6-1.7 2.6-3.6 4.2M5 19c.6-2 1.7-3.1 3.3-3.3M19 19c-.6-2-1.7-3.1-3.3-3.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: 'Partner With Us',
    text: 'Work with us to create meaningful programs and lasting change.',
    cta: 'Partner',
    to: 'partner',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
        <path d="M12 4 6.5 6.5v5.3c0 3.5 2.4 6.7 5.5 7.7 3.1-1 5.5-4.2 5.5-7.7V6.5L12 4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9.5 11.5 11.2 13l3.3-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: 'Support Our Work',
    text: 'Help us expand our programs and reach more schools and communities.',
    cta: 'Support',
    to: 'support',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
        <path d="M12 20.5 5.6 14a4.3 4.3 0 0 1 6.1-6.1l.3.3.3-.3A4.3 4.3 0 0 1 18.4 14L12 20.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    )
  }
]

const volunteerAreas = [
  'Umuganda and community cleaning',
  'School-material support',
  'School and community activities',
  'Faith & values sessions and fellowship',
  'Environmental protection and tree planting',
  'Talent clubs and ICT support',
  'Professional skills',
  'Communications / media'
]

const partnershipTypes = [
  'School',
  'Community organization',
  'Business / corporate',
  'Educational institution',
  'Faith group',
  'Other'
]

const volunteerInterestOptions = [
  'Umuganda & community cleaning',
  'School activities',
  'Community activities',
  'Faith & values sessions',
  'Talent clubs',
  'ICT & digital skills',
  'Professional skills',
  'Communications / media',
  'Other'
]

const faqs = [
  {
    q: 'Who can volunteer?',
    a: 'Anyone who is willing to commit their time and skills sincerely. Because we work with schools and young people, every volunteer application is reviewed by our team before involvement begins.'
  },
  {
    q: 'Can my school partner with you?',
    a: 'Yes. We look for school partnerships that support students and community activities. Use the "For Schools" section of this page and our team will respond with next steps.'
  },
  {
    q: 'How can an organization partner with you?',
    a: 'Organizations can collaborate through shared programs, resources, expertise, sponsorship and other forms of partnership. Complete the partnership inquiry and we will arrange a conversation.'
  },
  {
    q: 'Do you accept donations?',
    a: 'Yes, we welcome financial and material support. Please contact us so we can share our official donation process, which includes transparent records and receipts.'
  },
  {
    q: 'How can I support without donating money?',
    a: 'Your time, skills, talents and networks matter just as much. Volunteer, join our activities, share our mission, or partner with us — every contribution strengthens the work.'
  }
]

const inputClass =
  'w-full rounded-2xl border border-srms-clay/70 bg-white px-5 py-3.5 text-sm text-srms-ink placeholder:text-srms-ink-soft focus:border-srms-forest focus:outline-none focus:ring-2 focus:ring-srms-forest/20'

const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const GetInvolved = () => {
  const [openFaq, setOpenFaq] = useState(null)
  const [volunteerSent, setVolunteerSent] = useState(false)
  const [partnerSent, setPartnerSent] = useState(false)

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
              Get Involved
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
                Get Involved
              </p>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-srms-ink sm:text-6xl">
                Be part of
                <br />
                <span className="text-srms-forest">the change</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-srms-ink-soft">
                There are many ways to support Foundation By Our Hands and
                contribute to stronger schools, families and communities.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => scrollToSection('ways-to-help')}
                  className="rounded-full bg-srms-amber px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-srms-amber/90"
                >
                  Explore Ways to Help
                </button>
              </div>
            </div>

            <div className="w-full max-w-md shrink-0 animate-rise lg:w-auto" style={{ animationDelay: '0.12s' }}>
              <div className="rounded-[2.5rem] border border-srms-clay/60 bg-white p-3 shadow-srms">
                <div className="flex h-72 flex-col items-center justify-center overflow-hidden rounded-[2rem] bg-srms-sand px-8 text-center">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-srms-ink-soft">
                    Volunteers in action
                    <br />
                    <span className="normal-case tracking-normal">(to be provided)</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Ways to Get Involved */}
      <section id="ways-to-help" className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">Ways to Get Involved</p>
          <h2 className="mt-3 text-3xl font-semibold text-srms-ink sm:text-4xl">Pick how you'd like to help</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {ways.map((way) => (
              <div key={way.title} className="flex flex-col rounded-3xl border border-srms-clay/70 bg-white p-7">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-srms-sand text-srms-forest">
                  {way.icon}
                </span>
                <h3 className="mt-6 text-lg font-semibold text-srms-ink">{way.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-srms-ink-soft">{way.text}</p>
                <button
                  type="button"
                  onClick={() => scrollToSection(way.to)}
                  className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-srms-forest transition hover:text-srms-amber"
                >
                  {way.cta}
                  <span aria-hidden="true" className="transition group-hover:translate-x-1">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Volunteer */}
      <section id="volunteer" className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.25fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">Volunteer With Us</p>
              <h2 className="mt-3 text-3xl font-semibold text-srms-ink sm:text-4xl">Your time and skills can grow our work</h2>
              <p className="mt-4 max-w-xl text-srms-ink-soft">
                You can contribute through:
              </p>
              <ul className="mt-5 space-y-3">
                {volunteerAreas.map((area) => (
                  <li key={area} className="flex items-start gap-3 text-sm text-srms-ink">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-srms-amber" />
                    {area}
                  </li>
                ))}
              </ul>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-srms-ink-soft">
                Because we work with schools and children, every volunteer
                application is reviewed by our team before involvement begins.
              </p>
            </div>

            <div className="rounded-[2rem] border border-srms-clay/70 bg-white p-7 sm:p-9">
              <h3 className="text-xl font-semibold text-srms-ink">Apply to Volunteer</h3>
              {volunteerSent ? (
                <div className="mt-8 rounded-3xl bg-srms-sand p-8 text-center">
                  <p className="text-lg font-semibold text-srms-forest">Thank you for applying.</p>
                  <p className="mt-2 text-sm leading-relaxed text-srms-ink-soft">
                    Our team will review your application and get back to you with the next steps.
                  </p>
                  <button
                    type="button"
                    onClick={() => setVolunteerSent(false)}
                    className="mt-6 rounded-full border border-srms-clay/80 px-6 py-3 text-sm font-semibold text-srms-ink transition hover:border-srms-forest"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(event) => {
                    event.preventDefault()
                    setVolunteerSent(true)
                  }}
                  className="mt-7 grid gap-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="vol-name" className="mb-2 block text-sm font-medium text-srms-ink">
                        Full Name <span className="text-srms-amber">*</span>
                      </label>
                      <input id="vol-name" type="text" required placeholder="Your full name" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="vol-email" className="mb-2 block text-sm font-medium text-srms-ink">
                        Email Address <span className="text-srms-amber">*</span>
                      </label>
                      <input id="vol-email" type="email" required placeholder="you@example.com" className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="vol-phone" className="mb-2 block text-sm font-medium text-srms-ink">
                      Phone Number
                    </label>
                    <input id="vol-phone" type="tel" placeholder="+250 ..." className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="vol-area" className="mb-2 block text-sm font-medium text-srms-ink">
                      Area of Interest <span className="text-srms-amber">*</span>
                    </label>
                    <select id="vol-area" required className={inputClass} defaultValue="">
                      <option value="" disabled>
                        Select an option
                      </option>
                      {volunteerInterestOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="vol-skills" className="mb-2 block text-sm font-medium text-srms-ink">
                      Skills / Experience
                    </label>
                    <textarea id="vol-skills" rows={3} placeholder="Tell us about any relevant skills or experience..." className={`${inputClass} resize-none`} />
                  </div>
                  <div>
                    <label htmlFor="vol-availability" className="mb-2 block text-sm font-medium text-srms-ink">
                      Availability
                    </label>
                    <input id="vol-availability" type="text" placeholder="e.g. weekends, once a month..." className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="vol-why" className="mb-2 block text-sm font-medium text-srms-ink">
                      Why would you like to volunteer?
                    </label>
                    <textarea id="vol-why" rows={3} placeholder="A few words about what draws you to this work..." className={`${inputClass} resize-none`} />
                  </div>
                  <button
                    type="submit"
                    className="rounded-full bg-srms-amber px-8 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-srms-amber/90"
                  >
                    Submit Application
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Partner With Us */}
      <section id="partner" className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-[1.25fr_1fr]">
            <div className="order-2 rounded-[2rem] border border-srms-clay/70 bg-white p-7 sm:p-9 lg:order-1">
              <h3 className="text-xl font-semibold text-srms-ink">Partnership Inquiry</h3>
              {partnerSent ? (
                <div className="mt-8 rounded-3xl bg-srms-sand p-8 text-center">
                  <p className="text-lg font-semibold text-srms-forest">Thank you — inquiry sent.</p>
                  <p className="mt-2 text-sm leading-relaxed text-srms-ink-soft">
                    Our team will review your inquiry and reach out to arrange a conversation.
                  </p>
                  <button
                    type="button"
                    onClick={() => setPartnerSent(false)}
                    className="mt-6 rounded-full border border-srms-clay/80 px-6 py-3 text-sm font-semibold text-srms-ink transition hover:border-srms-forest"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(event) => {
                    event.preventDefault()
                    setPartnerSent(true)
                  }}
                  className="mt-7 grid gap-5"
                >
                  <div>
                    <label htmlFor="org-name" className="mb-2 block text-sm font-medium text-srms-ink">
                      Organization Name <span className="text-srms-amber">*</span>
                    </label>
                    <input id="org-name" type="text" required placeholder="Name of your organization" className={inputClass} />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="org-contact" className="mb-2 block text-sm font-medium text-srms-ink">
                        Contact Person <span className="text-srms-amber">*</span>
                      </label>
                      <input id="org-contact" type="text" required placeholder="Your name" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="org-email" className="mb-2 block text-sm font-medium text-srms-ink">
                        Email Address <span className="text-srms-amber">*</span>
                      </label>
                      <input id="org-email" type="email" required placeholder="you@example.com" className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="org-type" className="mb-2 block text-sm font-medium text-srms-ink">
                      Type of Organization
                    </label>
                    <select id="org-type" className={inputClass} defaultValue="">
                      <option value="" disabled>
                        Select an option
                      </option>
                      {partnershipTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="org-message" className="mb-2 block text-sm font-medium text-srms-ink">
                      How would you like to partner?
                    </label>
                    <textarea id="org-message" rows={4} placeholder="Tell us a little about your organization and how we could work together..." className={`${inputClass} resize-none`} />
                  </div>
                  <button
                    type="submit"
                    className="rounded-full bg-srms-forest px-8 py-4 text-sm font-semibold text-srms-sand transition hover:-translate-y-0.5 hover:bg-srms-forest/90"
                  >
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">Partner With Us</p>
              <h2 className="mt-3 text-3xl font-semibold text-srms-ink sm:text-4xl">Create meaningful opportunities together</h2>
              <p className="mt-4 max-w-xl text-srms-ink-soft">
                We collaborate with schools, organizations, businesses and
                community partners to create meaningful opportunities.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'School partnerships',
                  'Organizational partnerships',
                  'Corporate partnerships',
                  'Educational partnerships',
                  'Community partnerships'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-srms-ink">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-srms-forest" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Support Our Work */}
      <section id="support" className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2.5rem] bg-srms-sand px-6 py-14 text-center sm:px-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">Support Our Work</p>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold text-srms-ink sm:text-4xl">
              Your support extends our programs and reach
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-srms-ink-soft">
              You can support us financially — one-time or recurring — or with
              material resources such as books, educational materials and
              equipment.
            </p>
            <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-3">
              {[
                { title: 'Financial Support', text: 'Donations and giving that keep programs running.' },
                { title: 'Material Resources', text: 'Books, supplies, equipment and learning materials.' },
                { title: 'Long-Term Support', text: 'Recurring giving and planned support for stability.' }
              ].map((item) => (
                <div key={item.title} className="rounded-3xl border border-srms-clay/70 bg-white p-6">
                  <h3 className="text-sm font-semibold text-srms-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-srms-ink-soft">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="rounded-full bg-srms-amber px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-srms-amber/90"
              >
                Talk to Us About Support
              </Link>
            </div>
            <p className="mt-4 text-xs text-srms-ink-soft">
              We share our official donation process and receipts directly with supporters.
            </p>
          </div>
        </div>
      </section>

      {/* 6. For Schools + 7. For Organizations */}
      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col rounded-[2.5rem] border border-srms-clay/70 bg-white p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">For Schools</p>
              <h2 className="mt-3 text-2xl font-semibold text-srms-ink sm:text-3xl">
                Is your school interested in working with us?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-srms-ink-soft">
                We can explore opportunities for collaboration, program
                participation and community activities.
              </p>
              <button
                type="button"
                onClick={() => scrollToSection('partner')}
                className="mt-auto pt-8 text-left"
              >
                <span className="group inline-flex items-center gap-1.5 rounded-full bg-srms-forest px-7 py-3.5 text-sm font-semibold text-srms-sand transition hover:-translate-y-0.5 hover:bg-srms-forest/90">
                  School Partnership Inquiry
                  <span aria-hidden="true" className="transition group-hover:translate-x-1">→</span>
                </span>
              </button>
            </div>

            <div className="flex flex-col rounded-[2.5rem] border border-srms-clay/70 bg-white p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">For Organizations</p>
              <h2 className="mt-3 text-2xl font-semibold text-srms-ink sm:text-3xl">
                Businesses and organizations can contribute
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-srms-ink-soft">
                Through partnerships, resources, expertise, sponsorship and other
                forms of collaboration.
              </p>
              <button
                type="button"
                onClick={() => scrollToSection('partner')}
                className="mt-auto pt-8 text-left"
              >
                <span className="group inline-flex items-center gap-1.5 rounded-full border border-srms-clay/80 px-7 py-3.5 text-sm font-semibold text-srms-ink transition hover:border-srms-forest">
                  Discuss a Partnership
                  <span aria-hidden="true" className="transition group-hover:translate-x-1">→</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Share Our Mission */}
      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2rem] border border-srms-clay/70 bg-srms-sand px-7 py-12 text-center sm:px-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">Share Our Mission</p>
            <h2 className="mt-3 text-3xl font-semibold text-srms-ink sm:text-4xl">Help more people discover our work</h2>
            <p className="mx-auto mt-4 max-w-xl text-srms-ink-soft">
              Follow and share our official accounts to help us reach more
              schools, families and supporters.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {['Facebook', 'Instagram', 'LinkedIn', 'WhatsApp'].map((social) => (
                <a
                  key={social}
                  href={`#${social.toLowerCase()}`}
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-srms-ink transition hover:-translate-y-0.5 hover:bg-srms-forest hover:text-srms-sand"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">Getting Involved FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold text-srms-ink sm:text-4xl">Questions, answered</h2>
          </div>
          <div className="mt-10 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div key={faq.q} className="overflow-hidden rounded-3xl border border-srms-clay/70 bg-white">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-7 py-5 text-left"
                  >
                    <span className="text-sm font-semibold text-srms-ink sm:text-base">{faq.q}</span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-srms-clay/70 text-srms-forest transition-transform ${isOpen ? 'rotate-45' : ''}`}
                    >
                      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                        <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <p className="border-t border-srms-clay/50 px-7 py-5 text-sm leading-relaxed text-srms-ink-soft animate-rise">
                      {faq.a}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2.5rem] bg-srms-forest px-6 py-16 text-center text-srms-sand sm:px-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-sand/70">Every Contribution Matters</p>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold text-srms-sand sm:text-4xl">
              Whether you give your time, expertise, resources, partnership or
              support — your contribution strengthens our work.
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="rounded-full bg-srms-amber px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-srms-amber/90"
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

export default GetInvolved