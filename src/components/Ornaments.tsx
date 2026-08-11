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
