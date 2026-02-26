export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center px-6">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20 blur-3xl animate-pulse"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      {/* Main Card */}
      <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 max-w-3xl w-full text-center shadow-2xl">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-400 px-4 py-1 rounded-full text-sm mb-6 border border-cyan-500/20">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></span>
          Portfolio in Development
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-wide">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
            Md. Ahsan Ul Alam
          </span>
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          Full Stack Developer • Laravel • Vue • Next.js
          <br />
          Crafting scalable & high-performance web applications.
        </p>

        {/* Coming Soon */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          🚀 Something Amazing is Launching Soon
        </h2>

        {/* Email Box */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-xl bg-black/50 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 w-full sm:w-72"
          />
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition-transform duration-300 font-semibold shadow-lg shadow-cyan-500/20">
            Notify Me
          </button>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-400">
          <span className="px-3 py-1 border border-gray-700 rounded-full">
            Laravel
          </span>
          <span className="px-3 py-1 border border-gray-700 rounded-full">
            Vue.js
          </span>
          <span className="px-3 py-1 border border-gray-700 rounded-full">
            Next.js
          </span>
          <span className="px-3 py-1 border border-gray-700 rounded-full">
            Tailwind CSS
          </span>
          <span className="px-3 py-1 border border-gray-700 rounded-full">
            MySQL
          </span>
        </div>

        {/* Footer */}
        <p className="text-gray-600 text-xs mt-10">
          © 2026 • Designed & Developed with Precision
        </p>
      </div>
    </div>
  );
}
