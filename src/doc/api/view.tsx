// doc/gettingstarted/view.tsx
import { Fynix } from "fynixui";
import DocLayout from "../view";

export default function API() {
  console.log("GettingStarted component rendering!");
  return (
    <DocLayout>
        <div r-class="max-w-4xl">
        <h1 r-class="text-4xl font-bold mb-6">API Reference</h1>

        <section r-class="mb-8">
            <h2 r-class="text-2xl font-semibold mb-4">API Reference</h2>
            <p r-class="text-gray-600 mb-4">API Reference content goes here.</p>
        </section>
      </div>
    </DocLayout>
  );
}

API.meta = {
  title: "Getting Started - FynixJS",
  description: "Learn how to get started with FynixJS",
  keywords: "Fynix, Getting Started, Installation",
};
