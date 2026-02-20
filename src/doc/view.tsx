// doc/DocLayout.tsx
import { Fynix } from "fynixui";
import Header from "../header/view";
import Sidebar from "./sidebar/view";

export default function DocLayout({ children }) {
  console.log("DocLayout rendering, children:", children);
  return (
    <div>
      <Header />
      <div r-class="flex min-h-screen">
        {/* Sidebar */}
        <aside r-class="w-64 border-r bg-white sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
          <Sidebar />
        </aside>

        {/* Main content */}
        <main r-class="flex-1 p-8 bg-gray-50 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
