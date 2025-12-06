// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/60 backdrop-blur-sm border-b border-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-md bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-lg">
              <span className="text-white font-bold">M</span>
            </div>
            <div>
              <div className="text-slate-800 font-semibold">MyPayLite</div>
              <div className="text-xs text-slate-500 -mt-0.5">Retail fintech</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a className="text-slate-700 hover:text-slate-900 transition" href="#">Products</a>
            <a className="text-slate-700 hover:text-slate-900 transition" href="#">Pricing</a>
            <a className="text-slate-700 hover:text-slate-900 transition" href="#">Partners</a>
            <a className="text-slate-700 hover:text-slate-900 transition" href="#">Docs</a>
            <a className="ml-4 inline-flex items-center px-4 py-2 rounded-md border border-slate-200 text-sm font-medium hover:bg-slate-50 transition" href="#">For Business</a>
            <button className="ml-4 inline-flex items-center px-4 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md text-sm font-medium hover:scale-[1.01] transition-transform">
              Sign up
            </button>
          </div>

          <div className="md:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:bg-slate-100">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden><path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
