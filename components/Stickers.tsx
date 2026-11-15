export function Star({ className = "", fill = "#F2452B" }: { className?: string; fill?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <path d="M32 6l7 16.4 17.8 1.6-13.5 11.7L47.4 53 32 43.6 16.6 53l4.1-17.3L7.2 24l17.8-1.6z"
        fill={fill} stroke="#16120F" strokeWidth="3" strokeLinejoin="round" />
    </svg>
  );
}

export function FolderTab({ className = "", fill = "#2F6BFF" }: { className?: string; fill?: string }) {
  return (
    <svg viewBox="0 0 80 110" className={className} aria-hidden>
      <path d="M6 20c0-6 3-10 9-10h20c6 0 6 8 12 8h20c6 0 9 4 9 10v72H6z" fill={fill} stroke="#16120F" strokeWidth="3" strokeLinejoin="round" />
      <path d="M6 40h68" stroke="#16120F" strokeWidth="2" opacity=".25" />
    </svg>
  );
}

export function Clapper({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 110" className={className} aria-hidden>
      <rect x="8" y="42" width="104" height="60" rx="6" fill="#FFF0A3" stroke="#16120F" strokeWidth="3" />
      <path d="M8 42l-2-22 100-12 6 22z" fill="#16120F" />
      <path d="M26 38l-4-26M54 34l-4-26M82 30l-4-26M108 26l-4-22" stroke="#FBF8F0" strokeWidth="7" />
      <path d="M22 62h76M22 80h50" stroke="#16120F" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function Tape({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`h-6 w-20 bg-butter/80 shadow-sm ${className}`} style={{ clipPath: "polygon(4% 0,100% 8%,96% 100%,0 92%)" }} />;
}
