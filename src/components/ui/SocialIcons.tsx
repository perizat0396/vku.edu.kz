export function InstagramIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M15 4h-2.2C11 4 9.8 5.3 9.8 7.2V10H7v3.4h2.8V21h3.4v-7.6H16l.6-3.4h-3.4V7.5c0-.9.4-1.3 1.3-1.3H16V4Z" />
    </svg>
  );
}

export function YoutubeIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="2.5" y="6" width="19" height="12" rx="4" />
      <path d="M10.5 9.7 15 12l-4.5 2.3V9.7Z" fill="currentColor" stroke="none" />
    </svg>
  );
}
