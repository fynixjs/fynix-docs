//src/homepage/view.tsx
import { Fynix, Path } from "fynixui";

export default function HomePage() {
  return (
    <div r-class="w-full text-gray-900">
      {/* ================= HERO ================= */}
      <section r-class="relative max-w-6xl mx-auto px-6 py-28 text-center">
        <h1 r-class="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
          Build Reactive Apps <br />
          <span r-class="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            The Modern Way
          </span>
        </h1>

        <p r-class="mt-8 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Fynix is a modern, lightweight JavaScript framework for building
          reactive web applications. It combines the simplicity of a virtual DOM
          with advanced features like fiber architecture, priority-based
          scheduling, and built-in security mechanisms.
        </p>

        <div r-class="mt-12 flex justify-center gap-4 flex-wrap">
          <Path
            to="/docs"
            value="Get Started"
            r-class="px-8 py-3 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800 transition shadow-lg"
          />
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            r-class="px-8 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            View on GitHub
          </a>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section r-class="bg-gray-50 py-24 border-t border-gray-100">
        <div r-class="max-w-6xl mx-auto px-6">
          <h2 r-class="text-3xl md:text-4xl font-bold text-center mb-20">
            Powerful by Design
          </h2>

          <div r-class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Reactive State Management",
                desc: "Automatic dependency tracking with efficient updates.",
              },
              {
                title: "Fiber Architecture",
                desc: "Non-blocking rendering with priority scheduling.",
              },
              {
                title: "File-Based Routing",
                desc: "Convention-over-configuration routing system.",
              },
              {
                title: "Security First",
                desc: "Built-in XSS protection and input sanitization.",
              },
              {
                title: "Zero Dependencies",
                desc: "Minimal runtime with no external libraries.",
              },
              {
                title: "TypeScript Support",
                desc: "Full TypeScript support with first-class definitions.",
              },
            ].map((feature) => (
              <div r-class="bg-white p-8 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300">
                <h3 r-class="text-lg font-semibold mb-3">{feature.title}</h3>
                <p r-class="text-gray-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section r-class="py-28">
        <div r-class="max-w-5xl mx-auto px-6 text-center">
          <h2 r-class="text-3xl md:text-4xl font-bold mb-16">
            Built on Clear Principles
          </h2>

          <div r-class="grid md:grid-cols-3 gap-12">
            <div>
              <h3 r-class="text-xl font-semibold mb-4 text-indigo-600">
                Simplicity
              </h3>
              <p r-class="text-gray-600 leading-relaxed">
                Clean, intuitive APIs that are easy to learn and enjoyable to
                use.
              </p>
            </div>

            <div>
              <h3 r-class="text-xl font-semibold mb-4 text-indigo-600">
                Performance
              </h3>
              <p r-class="text-gray-600 leading-relaxed">
                Efficient rendering with intelligent scheduling and minimal
                overhead.
              </p>
            </div>

            <div>
              <h3 r-class="text-xl font-semibold mb-4 text-indigo-600">
                Security
              </h3>
              <p r-class="text-gray-600 leading-relaxed">
                Protection against common web vulnerabilities by default.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section r-class="bg-gray-950 py-28 text-center text-white">
        <h2 r-class="text-3xl md:text-4xl font-bold mb-6">
          Build. Contribute. Innovate. With Fynix.
        </h2>

        <p r-class="max-w-2xl mx-auto text-gray-400 mb-12 text-lg">
          Join developers building fast, secure, and reactive web applications.
          Help shape the future of the Fynix ecosystem.
        </p>

        <div r-class="flex justify-center gap-4 flex-wrap">
          <Path
            to="/docs"
            value="Get Started"
            r-class="px-8 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-200 transition shadow-lg"
          />
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            r-class="px-8 py-3 border border-gray-600 text-gray-300 rounded-xl hover:bg-gray-800 hover:text-white transition"
          >
            Contribute on GitHub
          </a>
        </div>
      </section>
      {/* ================= ROADMAP / DEVELOPMENT LOGS ================= */}
      <section r-class="bg-gray-50 py-28 border-t border-gray-200">
        <div r-class="max-w-5xl mx-auto px-6">
          <div r-class="text-center mb-20">
            <h2 r-class="text-3xl md:text-4xl font-bold mb-6">
              Development Roadmap
            </h2>
            <p r-class="text-gray-600 max-w-2xl mx-auto">
              Fynix is actively evolving. Here’s what’s been shipped — and
              what’s coming next.
            </p>
          </div>

          <div r-class="space-y-14">
            {/* v1.0 Completed */}
            <div r-class="relative pl-10 border-l-2 border-indigo-500">
              <div r-class="absolute -left-[11px] top-1 w-5 h-5 bg-indigo-500 rounded-full"></div>
              <h3 r-class="text-xl font-semibold mb-3">
                v1.0.10 — Core Framework Released
              </h3>
              <p r-class="text-gray-600 leading-relaxed">
                The first stable release of Fynix delivers reactive state
                management, fiber-based rendering, file-based routing, built-in
                security, TypeScript support, and full meta management for
                dynamic SEO control.
              </p>

              <div r-class="mt-4 flex flex-wrap gap-3 text-xs font-medium">
                <span r-class="px-3 py-1 bg-green-100 text-green-700 rounded-full">
                  Reactive Core
                </span>
                <span r-class="px-3 py-1 bg-green-100 text-green-700 rounded-full">
                  Fiber Architecture
                </span>
                <span r-class="px-3 py-1 bg-green-100 text-green-700 rounded-full">
                  File Routing
                </span>
                <span r-class="px-3 py-1 bg-green-100 text-green-700 rounded-full">
                  Meta Management
                </span>
              </div>

              <span r-class="inline-block mt-5 text-sm font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                Completed
              </span>
            </div>

            {/* v1.5 In Progress */}
            <div r-class="relative pl-10 border-l-2 border-gray-300">
              <div r-class="absolute -left-[11px] top-1 w-5 h-5 bg-gray-400 rounded-full"></div>
              <h3 r-class="text-xl font-semibold mb-3">
                v1.1.0 — Server-Side Rendering & Hydration
              </h3>
              <p r-class="text-gray-600 leading-relaxed">
                The next major milestone introduces full SSR support with
                hydration. This will dramatically improve SEO, first paint
                performance, and scalability while maintaining Fynix’s reactive
                architecture.
              </p>

              <span r-class="inline-block mt-5 text-sm font-semibold text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">
                In Progress
              </span>
            </div>

            {/* Future */}
            <div r-class="relative pl-10 border-l-2 border-gray-300">
              <div r-class="absolute -left-[11px] top-1 w-5 h-5 bg-gray-300 rounded-full"></div>
              <h3 r-class="text-xl font-semibold mb-3">
                v2.0.0 — Ecosystem & Tooling Expansion
              </h3>
              <p r-class="text-gray-600 leading-relaxed">
                Planned improvements include a CLI overhaul, plugin ecosystem,
                DevTools integration, advanced compiler optimizations, and
                performance benchmarking suite.
              </p>

              <span r-class="inline-block mt-5 text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                Planned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer r-class="bg-white border-t border-gray-200">
        <div r-class="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-12 text-sm">
          <div>
            <h3 r-class="text-lg font-semibold mb-4">Fynix</h3>
            <p r-class="text-gray-600 leading-relaxed">
              A modern, lightweight framework for building reactive web
              applications.
            </p>
          </div>

          <div>
            <h4 r-class="font-semibold mb-4">Resources</h4>
            <ul r-class="space-y-2 text-gray-600">
              <li>
                <Path
                  to="/docs"
                  value="Docs"
                  r-class="hover:text-indigo-600 transition"
                />
              </li>
              <li>
                <Path
                  to="/learn"
                  value="Learn"
                  r-class="hover:text-indigo-600 transition"
                />
              </li>
              <li>
                <Path
                  to="/blog"
                  value="Blog"
                  r-class="hover:text-indigo-600 transition"
                />
              </li>
            </ul>
          </div>

          <div>
            <h4 r-class="font-semibold mb-4">Community</h4>
            <ul r-class="space-y-2 text-gray-600">
              <li>
                <a href="#" r-class="hover:text-indigo-600 transition">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" r-class="hover:text-indigo-600 transition">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" r-class="hover:text-indigo-600 transition">
                  X
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 r-class="font-semibold mb-4">Company</h4>
            <ul r-class="space-y-2 text-gray-600">
              <li>
                <Path
                  to="/privacy"
                  value="Privacy Policy"
                  r-class="hover:text-indigo-600 transition"
                />
              </li>
              <li>
                <Path
                  to="/contact"
                  value="Contact"
                  r-class="hover:text-indigo-600 transition"
                />
              </li>
            </ul>
          </div>
        </div>

        <div r-class="border-t border-gray-200">
          <div r-class="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
            <p>© 2026 Fynix, Inc. All rights reserved.</p>
            <div r-class="flex gap-6">
              <a href="#" r-class="hover:text-indigo-600 transition">
                GitHub
              </a>
              <a href="#" r-class="hover:text-indigo-600 transition">
                X
              </a>
              <a href="#" r-class="hover:text-indigo-600 transition">
                Discord
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
