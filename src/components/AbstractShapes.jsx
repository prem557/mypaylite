export default function AbstractShapes() {
  return (
    <>
      {/* Top-left circle */}
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-gradient-to-tr from-indigo-400 to-blue-400 opacity-30 animate-floaty-slow"></div>
      {/* Bottom-right square */}
      <div className="absolute -bottom-24 -right-16 w-60 h-60 rounded-3xl bg-gradient-to-tr from-purple-300 to-pink-300 opacity-25 animate-floaty-fast"></div>
      {/* Floating small circles */}
      <div className="absolute top-32 right-10 w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-300 opacity-20 animate-floaty-slower"></div>
      <div className="absolute bottom-40 left-16 w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-300 to-purple-200 opacity-15 animate-floaty-slower"></div>
    </>
  );
}
 
