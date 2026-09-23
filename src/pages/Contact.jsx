import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { contact } from '../data/site'

const contactInfo = [
  {
    label: 'Our Office',
    value: contact.address,
    icon: (
      <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" aria-hidden="true">
        <path d="M10 18s6-5.06 6-9.5A6 6 0 0 0 4 8.5C4 12.94 10 18 10 18Z" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="10" cy="8.5" r="2" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    )
  },
  {
    label: 'Phone',
    value: contact.phone,
    href: contact.phoneHref,
    icon: (
      <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" aria-hidden="true">
        <path d="M4 3h3l1.5 4L7 8.5a10.5 10.5 0 0 0 4.5 4.5L13 11.5l4 1.5v3a1 1 0 0 1-1.1 1A14.9 14.9 0 0 1 3 4.1 1 1 0 0 1 4 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    label: 'Email',
    value: contact.email,
    href: contact.emailHref,
    icon: (
      <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" aria-hidden="true">
        <rect x="3" y="4.5" width="14" height="11" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="m3.5 6 6.5 5 6.5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    label: 'Office Hours',
    value: contact.hours,
    icon: (
      <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="6.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M10 6.5V10l2.5 1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
]

const reasons = [
  'General Inquiry',
  'Program Information',
  'Partnership',
  'Volunteering',
  'School Collaboration',
  'Donations / Support',
  'Media Inquiry',
  'Other'
]

const socials = [
  { label: 'Facebook', href: '#facebook' },
  { label: 'Instagram', href: '#instagram' },
  { label: 'LinkedIn', href: '#linkedin' },
  { label: 'YouTube', href: '#youtube' }
]

const faqs = [
  {
    q: 'How can I volunteer?',
    a: 'Anyone can apply. Head to the Get Involved page, or send us a message through the form above and choose "Volunteering" — we will get back to you with current opportunities.'
  },
  {
    q: 'How can my school work with Foundation By Our Hands?',
    a: "Schools work with us through school partnerships and the Helping Others pillar. Reach out using the form and select \"School Collaboration\", and we'll arrange a conversation with our team."
  },
  {
    q: 'How can we become a partner?',
    a: 'We partner with businesses, faith groups and organizations who share our mission. Pick "Partnership" in the form and tell us a little about your organization.'
  },
  {
    q: 'How can I support your programs?',
    a: 'You can support through donations, volunteering or spreading the word. Choose "Donations / Support" and our team will share how to give in the way that suits you best.'
  }
]

const inputClass =
  'w-full rounded-2xl border border-srms-clay/70 bg-white px-5 py-3.5 text-sm text-srms-ink placeholder:text-srms-ink-soft focus:border-srms-forest focus:outline-none focus:ring-2 focus:ring-srms-forest/20'

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(null)
  const [sent, setSent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSent(true)
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
              Contact Us
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
                Contact Us
              </p>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-srms-ink sm:text-6xl">
                We'd love to
                <br />
                <span className="text-srms-forest">hear from you</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-srms-ink-soft">
                Whether you want to learn more about our programs, partner with
                us, volunteer, or ask a question — we're here to connect.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="rounded-full bg-srms-amber px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-srms-amber/90"
                >
                  Send a Message
                </button>
                <Link
                  to="/get-involved"
                  className="rounded-full border border-srms-clay/80 px-7 py-3.5 text-sm font-semibold text-srms-ink transition hover:border-srms-forest"
                >
                  Get Involved
                </Link>
              </div>
            </div>

            <div className="w-full max-w-md shrink-0 animate-rise lg:w-auto" style={{ animationDelay: '0.12s' }}>
              <div className="rounded-[2.5rem] border border-srms-clay/60 bg-white p-3 shadow-srms">
                <div className="flex h-72 flex-col items-center justify-center overflow-hidden rounded-[2rem] bg-srms-sand px-8 text-center">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-srms-ink-soft">
                    Warm photo
                    <br />
                    <span className="normal-case tracking-normal">(to be provided)</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 + 3. Contact Info & Form side-by-side */}
      <section id="contact-form" className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.25fr]">
            {/* Get In Touch */}
            <div className="rounded-[2rem] border border-srms-clay/70 bg-white p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">Get In Touch</p>
              <h2 className="mt-3 text-2xl font-semibold text-srms-ink sm:text-3xl">Our contact details</h2>
              <ul className="mt-8 space-y-7">
                {contactInfo.map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-srms-sand text-srms-forest">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-srms-ink-soft">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="mt-1 block text-sm font-medium text-srms-ink transition hover:text-srms-forest">
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm font-medium text-srms-ink">{item.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Send Us A Message */}
            <div className="rounded-[2rem] border border-srms-clay/70 bg-white p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">Send Us A Message</p>
              <h2 className="mt-3 text-2xl font-semibold text-srms-ink sm:text-3xl">We usually reply within 2 days</h2>

              {sent ? (
                <div className="mt-8 rounded-3xl bg-srms-sand p-8 text-center">
                  <p className="text-lg font-semibold text-srms-forest">Thank you — message sent.</p>
                  <p className="mt-2 text-sm leading-relaxed text-srms-ink-soft">
                    We'll get back to you as soon as we can. For anything urgent, call us on {contact.phone}.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-6 rounded-full border border-srms-clay/80 px-6 py-3 text-sm font-semibold text-srms-ink transition hover:border-srms-forest"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-srms-ink">
                        Full Name <span className="text-srms-amber">*</span>
                      </label>
                      <input id="name" type="text" required placeholder="Your full name" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-srms-ink">
                        Email Address <span className="text-srms-amber">*</span>
                      </label>
                      <input id="email" type="email" required placeholder="you@example.com" className={inputClass} />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm font-medium text-srms-ink">
                        Phone Number
                      </label>
                      <input id="phone" type="tel" placeholder="+250 ..." className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="reason" className="mb-2 block text-sm font-medium text-srms-ink">
                        Reason for Contacting Us
                      </label>
                      <select id="reason" className={inputClass}>
                        <option value="">Select an option</option>
                        {reasons.map((reason) => (
                          <option key={reason} value={reason}>
                            {reason}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="mb-2 block text-sm font-medium text-srms-ink">
                      Subject <span className="text-srms-amber">*</span>
                    </label>
                    <input id="subject" type="text" required placeholder="What is this about?" className={inputClass} />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-srms-ink">
                      How can we help you? <span className="text-srms-amber">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Tell us a little about your question or idea..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="rounded-full bg-srms-amber px-8 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-srms-amber/90"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Find Us / Map */}
      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-[2.5rem] border border-srms-clay/70 bg-white shadow-srms">
            <div className="flex h-72 items-center justify-center bg-srms-sand">
              <span className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-srms-ink-soft">
                Interactive map
                <br />
                <span className="normal-case tracking-normal">Kagarama, Kicukiro · Kigali City</span>
              </span>
            </div>
            <div className="flex flex-col items-center justify-between gap-4 px-7 py-6 sm:flex-row sm:px-9">
              <div className="text-center sm:text-left">
                <p className="text-lg font-semibold text-srms-ink">Foundation By Our Hands We Can</p>
                <p className="mt-1 text-sm text-srms-ink-soft">{contact.address}</p>
              </div>
              <a
                href={contact.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-srms-clay/80 px-6 py-3 text-sm font-semibold text-srms-forest transition hover:border-srms-forest hover:bg-srms-forest hover:text-white"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Social Media */}
      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2rem] border border-srms-clay/70 bg-srms-sand px-7 py-12 text-center sm:px-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">Connect With Us</p>
            <h2 className="mt-3 text-3xl font-semibold text-srms-ink sm:text-4xl">Follow our work online</h2>
            <p className="mx-auto mt-4 max-w-xl text-srms-ink-soft">
              For the latest updates, photos and stories from the field.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-srms-ink transition hover:-translate-y-0.5 hover:bg-srms-forest hover:text-srms-sand"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-forest">Frequently Asked Questions</p>
            <h2 className="mt-3 text-3xl font-semibold text-srms-ink sm:text-4xl">Answers, before you ask</h2>
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

      {/* 7. Final CTA */}
      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2.5rem] bg-srms-forest px-6 py-16 text-center text-srms-sand sm:px-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-srms-sand/70">Let's Work Together</p>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold text-srms-sand sm:text-4xl">
              Have an idea, question, or opportunity to collaborate?
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/get-involved"
                className="rounded-full bg-srms-amber px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-srms-amber/90"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact