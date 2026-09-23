const LogoMark = ({ className = 'h-9 w-9' }) => (
  <span
    className={`inline-flex items-center justify-center overflow-hidden rounded-2xl bg-srms-forest ${className}`}
    aria-hidden="true"
  >
    <img src="/logo.jpeg" alt="" className="h-full w-full object-cover" />
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