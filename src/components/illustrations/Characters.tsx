const SKIN = "#f3c8a0";
const HAIR = "#2b2118";

export function StudentCharacter({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 460" className={className} aria-hidden>
      <ellipse cx="200" cy="430" rx="95" ry="11" fill="var(--color-ink-900)" opacity="0.08" />

      <path d="M198 283 L228 283 L222 388 L192 390 Z" fill="var(--color-blue-900)" />
      <ellipse cx="207" cy="398" rx="20" ry="13" fill="var(--color-sand-400)" />
      <rect x="189" y="404" width="36" height="7" rx="3.5" fill="var(--color-ink-900)" />

      <path d="M164 283 L196 283 L207 400 L175 406 Z" fill="var(--color-blue-700)" />
      <ellipse cx="190" cy="414" rx="22" ry="14" fill="var(--color-sand-400)" />
      <rect x="170" y="421" width="40" height="7" rx="3.5" fill="var(--color-ink-900)" />

      <rect x="234" y="172" width="54" height="98" rx="16" fill="var(--color-ink-900)" />
      <rect x="245" y="208" width="32" height="36" rx="8" fill="var(--color-blue-700)" />

      <path
        d="M150 176 C150 155 173 147 200 147 C227 147 250 155 250 176 L258 290 Q200 306 142 290 Z"
        fill="var(--color-sand-400)"
      />
      <path d="M186 150 L200 172 L214 150 Z" fill="#ffffff" />
      <path d="M242 178 Q222 178 210 200" stroke="var(--color-ink-900)" strokeWidth="13" fill="none" strokeLinecap="round" />

      <path
        d="M244 184 L252 216 L242 246"
        stroke="var(--color-sand-400)"
        strokeWidth="28"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <ellipse cx="240" cy="250" rx="13" ry="11" fill={SKIN} />

      <path
        d="M160 180 L131 224 L166 249"
        stroke="var(--color-sand-400)"
        strokeWidth="34"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <ellipse cx="168" cy="251" rx="15" ry="13" fill={SKIN} />

      <g transform="rotate(-13 168 250)">
        <rect x="143" y="216" width="50" height="68" rx="8" fill="var(--color-blue-900)" />
        <rect x="150" y="224" width="36" height="50" rx="3" fill="var(--color-blue-500)" />
      </g>

      <rect x="186" y="138" width="28" height="24" rx="8" fill={SKIN} />
      <ellipse cx="150" cy="112" rx="8" ry="12" fill={SKIN} />
      <ellipse cx="250" cy="112" rx="8" ry="12" fill={SKIN} />
      <circle cx="200" cy="108" r="50" fill={SKIN} />
      <circle cx="181" cy="106" r="5" fill="var(--color-ink-900)" />
      <circle cx="219" cy="106" r="5" fill="var(--color-ink-900)" />
      <path d="M179 126 Q200 143 221 126" stroke="var(--color-ink-900)" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path
        d="M146 96 Q150 36 200 30 Q250 36 254 96 Q236 76 224 83 Q219 58 200 63 Q181 58 176 83 Q164 76 146 96 Z"
        fill={HAIR}
      />
    </svg>
  );
}

export function CelebratingCharacter({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 460" className={className} aria-hidden>
      <ellipse cx="200" cy="430" rx="95" ry="11" fill="#000" opacity="0.12" />

      <path d="M172 280 L204 280 L210 400 L178 402 Z" fill="var(--color-blue-700)" />
      <ellipse cx="192" cy="410" rx="21" ry="13" fill="var(--color-sand-400)" />
      <rect x="173" y="417" width="38" height="7" rx="3.5" fill="var(--color-ink-900)" />

      <path d="M196 280 L228 280 L222 400 L190 402 Z" fill="var(--color-blue-900)" />
      <ellipse cx="208" cy="410" rx="21" ry="13" fill="var(--color-sand-400)" />
      <rect x="189" y="417" width="38" height="7" rx="3.5" fill="var(--color-ink-900)" />

      <path
        d="M152 176 C152 155 174 147 200 147 C226 147 248 155 248 176 L254 288 Q200 302 146 288 Z"
        fill="var(--color-blue-300)"
      />
      <path d="M187 150 L200 172 L213 150 Z" fill="#ffffff" />

      <path
        d="M158 182 L118 150 L104 108"
        stroke="var(--color-blue-300)"
        strokeWidth="30"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="100" cy="100" r="15" fill={SKIN} />
      <path
        d="M242 182 L282 150 L296 108"
        stroke="var(--color-blue-300)"
        strokeWidth="30"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="300" cy="100" r="15" fill={SKIN} />

      <rect x="186" y="138" width="28" height="24" rx="8" fill={SKIN} />
      <ellipse cx="150" cy="112" rx="8" ry="12" fill={SKIN} />
      <ellipse cx="250" cy="112" rx="8" ry="12" fill={SKIN} />
      <circle cx="200" cy="108" r="50" fill={SKIN} />
      <circle cx="181" cy="106" r="5" fill="var(--color-ink-900)" />
      <circle cx="219" cy="106" r="5" fill="var(--color-ink-900)" />
      <path d="M177 124 Q200 148 223 124" stroke="var(--color-ink-900)" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path
        d="M146 96 Q150 36 200 30 Q250 36 254 96 Q236 76 224 83 Q219 58 200 63 Q181 58 176 83 Q164 76 146 96 Z"
        fill={HAIR}
      />

      <g transform="translate(200 46) rotate(-18)">
        <rect x="-30" y="-4" width="60" height="10" rx="3" fill="var(--color-ink-900)" />
        <path d="M-38 1 L0 -18 L38 1 L0 20 Z" fill="var(--color-ink-900)" />
        <circle cx="0" cy="-18" r="4" fill="var(--color-sand-400)" />
        <path d="M0 -18 L4 4" stroke="var(--color-sand-400)" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="5" cy="8" r="4" fill="var(--color-sand-400)" />
      </g>
    </svg>
  );
}
