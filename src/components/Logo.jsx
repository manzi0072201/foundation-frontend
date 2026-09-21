const LogoMark = ({ className = 'h-9 w-9' }) => (
  <span
    className={`inline-flex items-center justify-center overflow-hidden rounded-2xl bg-srms-forest ${className}`}
    aria-hidden="true"
  >
    <svg viewBox="0 0 44 44" className="h-full w-full">
      <path
        d="M22 13.5C19.4 11 15.5 11.6 15.5 15c0 3 3.3 5.2 6.5 8 3.2-2.8 6.5-5 6.5-8 0-3.4-3.9-4-6.5-1.5Z"
        fill="#f08a5d"
      />
      <path
        d="M10 31c.8-2.6 2.2-4.1 4.3-4.5M34 31c-.8-2.6-2.2-4.1-4.3-4.5M11.4 34.8c.9-2.4 2.2-3.6 4.2-3.9M32.6 34.8c-.9-2.4-2.2-3.6-4.2-3.9"
        stroke="#f7f1e9"
        strokeWidth="2.6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  </span>
)

const Logo = ({ to = '/', compact = false, className = '' }) => (
  <a href={to} className={`group flex items-center gap-3 ${className}`}>
    <LogoMark className={compact ? 'h-8 w-8' : 'h-10 w-10'} />
    {!compact && (
      <span className="flex flex-col leading-none">
        <span className="text-base font-semibold tracking-tight text-srms-ink transition group-hover:text-srms-forest">
          Foundation
        </span>
        <span className="mt-1 text-[11px] uppercase tracking-[0.32em] text-srms-ink-soft">
          By Our Hands 
        </span>
        <span className="mt-1 text-[11px] uppercase tracking-[0.32em] text-srms-ink-soft">
          We Can 
        </span>
      </span>
    )}
  </a>
)

export default Logo
export { LogoMark }