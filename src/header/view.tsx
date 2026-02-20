//src/header/view.tsx
import { Fynix, Path } from "fynixui";

export default function Header() {
  return (
    <header r-class="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200">
      <div r-class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo + Brand */}
        <div r-class="flex items-center gap-3">
          <img
            src="/fynixlogo.png"
            alt="Fynix Logo"
            r-class="w-10 h-10 rounded-xl shadow-sm"
          />
          <h2 r-class="text-xl font-semibold tracking-tight text-gray-800">
            FynixJS
          </h2>
        </div>

        {/* Navigation */}
        <nav r-class="hidden md:flex items-center gap-8">
          <Path
            to="/"
            r-class="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
            value="Home"
          />
          <Path
            to="/doc/gettingstarted"
            r-class="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
            value="Docs"
          />
        </nav>

        {/* Right Side */}
        <div r-class="flex items-center gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            r-class="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png"
              alt="GitHub"
              r-class="w-5 h-5"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
