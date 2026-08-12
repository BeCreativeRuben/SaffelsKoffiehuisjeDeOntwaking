export function SteamCup({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <g
        className="steam"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      >
        <path d="M44 40c-6-8 6-13 0-21" />
        <path d="M61 38c-6-8 6-13 0-21" />
        <path d="M78 40c-6-8 6-13 0-21" />
      </g>
      <path
        d="M30 52h60v16a30 30 0 0 1-60 0V52Z"
        fill="currentColor"
        opacity="0.92"
      />
      <path
        d="M90 56h7a10 10 0 0 1 0 20h-9"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M26 100h68"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 12"
      className={className}
      aria-hidden="true"
      fill="none"
      preserveAspectRatio="none"
    >
      <path
        d="M2 8c8-8 17-8 25 0s17 8 25 0 17-8 25 0 17 8 25 0 17-8 25 0 17 8 25 0 17-8 25 0 15 8 21 2"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Sprig({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none">
      <path
        d="M32 58C32 34 32 18 32 6"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M32 20c-8-2-13-8-14-16 8 1 13 7 14 16Zm0 0c8-2 13-8 14-16-8 1-13 7-14 16Zm0 16c-8-2-13-8-14-16 8 1 13 7 14 16Zm0 0c8-2 13-8 14-16-8 1-13 7-14 16Zm0 16c-8-2-13-8-14-16 8 1 13 7 14 16Zm0 0c8-2 13-8 14-16-8 1-13 7-14 16Z"
        fill="currentColor"
        opacity="0.85"
      />
    </svg>
  );
}

export function Heart({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 20.5C6.5 16.5 3 13 3 9.3 3 6.9 4.9 5 7.2 5c1.6 0 3.1.8 4 2.1L12 8.3l.8-1.2c.9-1.3 2.4-2.1 4-2.1C19.1 5 21 6.9 21 9.3c0 3.7-3.5 7.2-9 11.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function CakeSlice({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 38 26 10c8 3 13 8 15 16l-3 12H8l-2-0Z" />
      <path d="M6 38c10-4 24-4 35 0" />
      <circle cx="27" cy="7" r="2.5" fill="currentColor" stroke="none" />
      <path d="M14 33c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0" />
    </svg>
  );
}

export function CoffeePot({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 14h20l-2 26H16l-2-26Z" />
      <path d="M34 18h5a5 5 0 0 1 0 10h-6" />
      <path d="M14 14c0-4 4-7 10-7s10 3 10 7" />
      <path d="M24 4v3" />
      <path d="M18 22c4 2 8 2 12 0" />
    </svg>
  );
}

export function Bunting({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10c12 6 28 6 40 0" />
      <path d="M10 13l4 9 5-7" />
      <path d="M21 15.5l3 9 4-8.5" />
      <path d="M33 15l3 8 4-10" />
    </svg>
  );
}

export function Home({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 22 24 8l16 14" />
      <path d="M12 20v20h24V20" />
      <path d="M20 40v-10h8v10" />
      <path d="M30 12v-4h4v8" />
    </svg>
  );
}
