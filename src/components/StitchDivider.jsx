export default function StitchDivider({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/60 to-gold/60" />
      <svg width="34" height="14" viewBox="0 0 34 14" fill="none">
        <path
          d="M1 7c3-6 6 6 9 0s6 6 9 0 6 6 9 0 5 5 5 5"
          stroke="var(--color-gold)"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeDasharray="3 3.4"
        />
      </svg>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-gold/60 to-gold/60" />
    </div>
  );
}
