// src/layouts/MainLayout.js
export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* leave space for the fixed navbar */}
      <div className="pt-20">
        {children}
      </div>
    </div>
  );
}
