// src/components/StatsSection.jsx
import { useEffect, useRef } from "react";

function useCountUp(target, duration = 1500) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    let start = null;
    const initial = 0;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const value = Math.floor(progress * (target - initial) + initial);
      ref.current.textContent = value.toLocaleString();
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        // final formatting (if needed)
        ref.current.textContent = target.toLocaleString();
      }
    };
    requestAnimationFrame(step);
  }, [target, duration]);
  return ref;
}

export default function StatsSection() {
  const t1 = useCountUp(1250000, 1800); // transactions
  const t2 = useCountUp(42000, 1400);   // active retailers
  const t3 = useCountUp(99.98 * 100, 1600); // uptime *100 to display with %
  const t4 = useCountUp(4.9 * 100, 1600); // NPS or score scaled

  return (
    <section
      aria-label="Platform stats"
      className="relative max-w-6xl mx-auto px-6 py-20"
    >
      <div className="relative z-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Built to scale. Trusted to perform.
          </h2>
          <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
            Real-time reliability, enterprise-grade security, and measurable growth —
            engineered for retailers and businesses of every size.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="relative p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-white/40 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-indigo-600 to-blue-500 flex items-center justify-center text-white text-xl shadow-md">
                ⚡
              </div>
              <div>
                <div className="text-sm text-slate-500">Transactions / month</div>
                <div className="mt-2 text-2xl font-bold text-slate-900">
                  <span ref={t1}>0</span>+
                </div>
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-600">Seamless processing at scale with instant settlement options.</p>
          </div>

          {/* Card 2 */}
          <div className="relative p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-white/40 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-400 flex items-center justify-center text-white text-xl shadow-md">
                👥
              </div>
              <div>
                <div className="text-sm text-slate-500">Active retailers</div>
                <div className="mt-2 text-2xl font-bold text-slate-900">
                  <span ref={t2}>0</span>+
                </div>
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-600">Easy onboarding, fast payouts, and high partner retention.</p>
          </div>

          {/* Card 3 */}
          <div className="relative p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-white/40 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-rose-500 to-pink-400 flex items-center justify-center text-white text-xl shadow-md">
                🔒
              </div>
              <div>
                <div className="text-sm text-slate-500">API uptime</div>
                <div className="mt-2 text-2xl font-bold text-slate-900">
                  <span ref={t3}>0</span><span className="text-base">%</span>
                </div>
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-600">99.99% SLA with robust redundancy and monitoring.</p>
          </div>

          {/* Card 4 */}
          <div className="relative p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-white/40 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-emerald-500 to-lime-400 flex items-center justify-center text-white text-xl shadow-md">
                ⭐
              </div>
              <div>
                <div className="text-sm text-slate-500">Avg. partner rating</div>
                <div className="mt-2 text-2xl font-bold text-slate-900">
                  <span ref={t4}>0</span><span className="text-base">/100</span>
                </div>
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-600">High satisfaction driven by fast support and merchant-first policies.</p>
          </div>
        </div>
      </div>

      {/* soft glow background elements */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 -top-20 w-80 h-80 rounded-full bg-gradient-to-tr from-indigo-200 to-blue-200 opacity-30 blur-3xl"></div>
        <div className="absolute -right-24 -bottom-20 w-96 h-96 rounded-full bg-gradient-to-tr from-pink-200 to-amber-200 opacity-25 blur-3xl"></div>
      </div>
    </section>
  );
}
