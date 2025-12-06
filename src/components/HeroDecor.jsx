// src/components/HeroDecor.jsx
export default function HeroDecor() {
  return (
    <svg className="pointer-events-none absolute -right-16 -top-10 opacity-40" width="420" height="420" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0" stopColor="#7c3aed" stopOpacity="0.8" />
          <stop offset="1" stopColor="#0ea5e9" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <circle cx="210" cy="210" r="170" fill="url(#g1)" />
      <circle cx="140" cy="120" r="80" fill="white" fillOpacity="0.06" />
      <circle cx="280" cy="260" r="40" fill="white" fillOpacity="0.04" />
    </svg>
  );
}
