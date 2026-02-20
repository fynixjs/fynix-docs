// doc/sidebar/view.tsx
import { For, Fynix, Path } from "fynixui";

export default function Sidebar() {
  const SidebarItems = [
    {
      to: "/doc/gettingstarted",
      value: " Quick start",
    },
    { to: "/doc/api", value: "API Reference" },
    { to: "/doc/guides", value: "Guides" },
    { to: "/doc/best-practices", value: "Best Practices" },
  ];

  return (
    <nav r-class="p-6">
      <h2 r-class="text-md font-semibold text-gray-700  tracking-wider mb-4">
        Get started
      </h2>

      <div r-class="space-y-1">
        <For each={SidebarItems}>
          {(item, index) => {
            const currentPath =
              typeof window !== "undefined" ? window.location.pathname : "";

            // Make Getting Started active for both /doc and /doc/gettingstarted
            const isActive =
              item.to === "/doc/gettingstarted"
                ? currentPath === item.to ||
                  currentPath === "/doc" ||
                  currentPath === "/doc/"
                : currentPath === item.to;

            return (
              <div
                key={index}
                r-class={`rounded-lg transition-all duration-200 flex items-center gap-3`}
              >
                <Path
                  to={item.to}
                  value={item.value}
                  r-class={`font-sm no-underline ${
                    isActive ? "text-blue-600" : "text-gray-700"
                  }`}
                />
              </div>
            );
          }}
        </For>
      </div>
    </nav>
  );
}
