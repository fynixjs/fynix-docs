// doc/quickstart/view.tsx
import { Fynix } from "fynixui";
import DocLayout from "../view";

export default function QuickStart() {
  return (
    <DocLayout>
      <div r-class="max-w-4xl">
        <h1 r-class="text-4xl font-bold mb-6">What is Fynix?</h1>
        <p r-class="text-gray-600 mb-8">
          Fynix is a modern JavaScript framework for building user interfaces.
          It is designed to be simple, fast, and flexible. Fynix allows you to
          create reusable components that can manage their own state and compose
          them to build complex UIs. With its intuitive API and powerful
          features, Fynix makes it easy to develop interactive web applications.
        </p>

        <div r-class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <h3 r-class="font-semibold mb-2">You will learn</h3>
          <ul r-class="list-disc list-inside space-y-1 text-gray-700">
            <li>How to create and nest components</li>
            <li>How to add markup and styles</li>
            <li>How to display data</li>
            <li>How to render conditions and lists</li>
            <li>How to respond to events and update the screen</li>
            <li>How to share data between components</li>
          </ul>
        </div>

        {/* Creating and nesting components */}
        <section r-class="mb-12">
          <h2 r-class="text-3xl font-bold mb-4">
            Creating and nesting components
          </h2>
          <p r-class="text-gray-600 mb-4">
            Fynix apps are made out of components. A component is a piece of the
            UI (user interface) that has its own logic and appearance. A
            component can be as small as a button, or as large as an entire
            page.
          </p>
          <p r-class="text-gray-600 mb-4">
            Fynix components are JavaScript functions that return markup:
          </p>
          <div r-class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-4">
            <pre>
              <code>{`function MyButton() {
  return (
    <button>I'm a button</button>
  );
}`}</code>
            </pre>
          </div>
          <p r-class="text-gray-600 mb-4">
            Now that you've declared MyButton, you can nest it into another
            component:
          </p>
          <div r-class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-4">
            <pre>
              <code>{`export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}`}</code>
            </pre>
          </div>
          <p r-class="text-gray-600 mb-4">
            Notice that{" "}
            <code r-class="bg-gray-100 px-2 py-1 rounded">
              &lt;MyButton /&gt;
            </code>{" "}
            starts with a capital letter. That's how you know it's a Fynix
            component. Fynix component names must always start with a capital
            letter, while HTML tags must be lowercase.
          </p>
          <div r-class="bg-gray-100 p-4 rounded-lg mb-4">
            <p r-class="text-sm text-gray-600 mb-2">
              <strong>Complete Example:</strong>
            </p>
            <div r-class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
              <pre>
                <code>{`function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}`}</code>
              </pre>
            </div>
          </div>
          <p r-class="text-gray-600">
            The{" "}
            <code r-class="bg-gray-100 px-2 py-1 rounded">export default</code>{" "}
            keywords specify the main component in the file.
          </p>
        </section>

        {/* Writing markup with JSX */}
        <section r-class="mb-12">
          <h2 r-class="text-3xl font-bold mb-4">Writing markup with JSX</h2>
          <p r-class="text-gray-600 mb-4">
            The markup syntax you've seen above is called JSX. It is optional,
            but most Fynix projects use JSX for its convenience. FynixJS
            supports JSX out of the box with Vite.
          </p>
          <p r-class="text-gray-600 mb-4">
            JSX is stricter than HTML. You have to close tags like{" "}
            <code r-class="bg-gray-100 px-2 py-1 rounded">&lt;br /&gt;</code>.
            Your component also can't return multiple JSX tags. You have to wrap
            them into a shared parent, like a{" "}
            <code r-class="bg-gray-100 px-2 py-1 rounded">
              &lt;div&gt;...&lt;/div&gt;
            </code>{" "}
            or an empty{" "}
            <code r-class="bg-gray-100 px-2 py-1 rounded">
              &lt;&gt;...&lt;/&gt;
            </code>{" "}
            wrapper:
          </p>
          <div r-class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <pre>
              <code>{`function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}`}</code>
            </pre>
          </div>
        </section>

        {/* Adding styles */}
        <section r-class="mb-12">
          <h2 r-class="text-3xl font-bold mb-4">Adding styles</h2>
          <p r-class="text-gray-600 mb-4">
            In Fynix, you specify a CSS class with{" "}
            <code r-class="bg-gray-100 px-2 py-1 rounded">class</code>. It works
            the same way as the HTML class attribute:
          </p>
          <div r-class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-4">
            <pre>
              <code>{`<img class="avatar" />`}</code>
            </pre>
          </div>
          <p r-class="text-gray-600 mb-4">
            Then you write the CSS rules for it in a separate CSS file:
          </p>
          <div r-class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-4">
            <pre>
              <code>{`/* In your CSS */
.avatar {
  border-radius: 50%;
}`}</code>
            </pre>
          </div>
          <p r-class="text-gray-600">
            FynixJS comes with Tailwind CSS v4 built-in, so you can use utility
            classes directly in your components.
          </p>
        </section>

        {/* Displaying data */}
        <section r-class="mb-12">
          <h2 r-class="text-3xl font-bold mb-4">Displaying data</h2>
          <p r-class="text-gray-600 mb-4">
            JSX lets you put markup into JavaScript. Curly braces let you
            "escape back" into JavaScript so that you can embed some variable
            from your code and display it to the user. For example, this will
            display user.name:
          </p>
          <div r-class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-4">
            <pre>
              <code>{`return (
  <h1>
    {user.name}
  </h1>
);`}</code>
            </pre>
          </div>
          <p r-class="text-gray-600 mb-4">
            You can also "escape into JavaScript" from JSX attributes, but you
            have to use curly braces instead of quotes. For example,{" "}
            <code r-class="bg-gray-100 px-2 py-1 rounded">class="avatar"</code>{" "}
            passes the "avatar" string as the CSS class, but{" "}
            <code r-class="bg-gray-100 px-2 py-1 rounded">
              src={"{"}user.imageUrl{"}"}
            </code>{" "}
            reads the JavaScript user.imageUrl variable value, and then passes
            that value as the src attribute:
          </p>
          <div r-class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-4">
            <pre>
              <code>{`return (
  <img
    class="avatar"
    src={user.imageUrl}
  />
);`}</code>
            </pre>
          </div>
          <p r-class="text-gray-600 mb-4">
            You can put more complex expressions inside the JSX curly braces
            too, for example, string concatenation:
          </p>
          <div r-class="bg-gray-100 p-4 rounded-lg">
            <div r-class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
              <pre>
                <code>{`const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        class="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Conditional rendering */}
        <section r-class="mb-12">
          <h2 r-class="text-3xl font-bold mb-4">Conditional rendering</h2>
          <p r-class="text-gray-600 mb-4">
            In Fynix, there is no special syntax for writing conditions.
            Instead, you'll use the same techniques as you use when writing
            regular JavaScript code. For example, you can use an if statement to
            conditionally include JSX:
          </p>
          <div r-class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-4">
            <pre>
              <code>{`let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return (
  <div>
    {content}
  </div>
);`}</code>
            </pre>
          </div>
          <p r-class="text-gray-600 mb-4">
            If you prefer more compact code, you can use the conditional ?
            operator. Unlike if, it works inside JSX:
          </p>
          <div r-class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-4">
            <pre>
              <code>{`<div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>`}</code>
            </pre>
          </div>
          <p r-class="text-gray-600 mb-4">
            When you don't need the else branch, you can also use a shorter
            logical && syntax:
          </p>
          <div r-class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <pre>
              <code>{`<div>
  {isLoggedIn && <AdminPanel />}
</div>`}</code>
            </pre>
          </div>
        </section>

        {/* Rendering lists */}
        <section r-class="mb-12">
          <h2 r-class="text-3xl font-bold mb-4">Rendering lists</h2>
          <p r-class="text-gray-600 mb-4">
            You will rely on JavaScript features like for loop and the array
            map() function to render lists of components.
          </p>
          <p r-class="text-gray-600 mb-4">
            For example, let's say you have an array of products:
          </p>
          <div r-class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-4">
            <pre>
              <code>{`const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];`}</code>
            </pre>
          </div>
          <p r-class="text-gray-600 mb-4">
            Inside your component, use the map() function to transform an array
            of products into an array of &lt;li&gt; items:
          </p>
          <div r-class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-4">
            <pre>
              <code>{`const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);

return (
  <ul>{listItems}</ul>
);`}</code>
            </pre>
          </div>
          <p r-class="text-gray-600 mb-4">
            Notice how &lt;li&gt; has a key attribute. For each item in a list,
            you should pass a string or a number that uniquely identifies that
            item among its siblings. Usually, a key should be coming from your
            data, such as a database ID. Fynix uses your keys to know what
            happened if you later insert, delete, or reorder the items.
          </p>
          <div r-class="bg-gray-100 p-4 rounded-lg">
            <div r-class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
              <pre>
                <code>{`const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Responding to events */}
        <section r-class="mb-12">
          <h2 r-class="text-3xl font-bold mb-4">Responding to events</h2>
          <p r-class="text-gray-600 mb-4">
            You can respond to events by declaring event handler functions
            inside your components. In Fynix, use the{" "}
            <code r-class="bg-gray-100 px-2 py-1 rounded">r-click</code>{" "}
            attribute instead of onClick:
          </p>
          <div r-class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-4">
            <pre>
              <code>{`function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button r-click={handleClick}>
      Click me
    </button>
  );
}`}</code>
            </pre>
          </div>
          <p r-class="text-gray-600">
            Notice how{" "}
            <code r-class="bg-gray-100 px-2 py-1 rounded">
              r-click={"{"}handleClick{"}"}
            </code>{" "}
            has no parentheses at the end! Do not call the event handler
            function: you only need to pass it down. Fynix will call your event
            handler when the user clicks the button.
          </p>
        </section>

        {/* Updating the screen */}
        <section r-class="mb-12">
          <h2 r-class="text-3xl font-bold mb-4">Updating the screen</h2>
          <p r-class="text-gray-600 mb-4">
            Often, you'll want your component to "remember" some information and
            display it. For example, maybe you want to count the number of times
            a button is clicked. To do this, add state to your component.
          </p>
          <p r-class="text-gray-600 mb-4">
            First, import restState from Fynix:
          </p>
          <div r-class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-4">
            <pre>
              <code>{`import { restState } from '@fynix';`}</code>
            </pre>
          </div>
          <p r-class="text-gray-600 mb-4">
            Now you can declare a state variable inside your component:
          </p>
          <div r-class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-4">
            <pre>
              <code>{`function MyButton() {
  const count = restState(0);
  // ...`}</code>
            </pre>
          </div>
          <p r-class="text-gray-600 mb-4">
            You'll get a reactive state object from restState. The first time
            the button is displayed, count.value will be 0 because you passed 0
            to restState(). When you want to change state, update count.value
            directly:
          </p>
          <div r-class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-4">
            <pre>
              <code>{`function MyButton() {
  const count = restState(0);

  function handleClick() {
    count.value++;
  }

  return (
    <button r-click={handleClick}>
      Clicked {count.value} times
    </button>
  );
}`}</code>
            </pre>
          </div>
          <p r-class="text-gray-600 mb-4">
            Fynix will re-render your component when the state changes. If you
            render the same component multiple times, each will get its own
            state:
          </p>
          <div r-class="bg-gray-100 p-4 rounded-lg">
            <div r-class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
              <pre>
                <code>{`import { restState } from '@fynix';

export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  const count = restState(0);

  function handleClick() {
    count.value++;
  }

  return (
    <button r-click={handleClick}>
      Clicked {count.value} times
    </button>
  );
}`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Using Hooks */}
        <section r-class="mb-12">
          <h2 r-class="text-3xl font-bold mb-4">Using Hooks</h2>
          <p r-class="text-gray-600 mb-4">
            Functions starting with{" "}
            <code r-class="bg-gray-100 px-2 py-1 rounded">rest</code> are called
            Hooks in Fynix.{" "}
            <code r-class="bg-gray-100 px-2 py-1 rounded">restState</code> is a
            built-in Hook provided by Fynix. You can find other built-in Hooks
            in the Hooks Reference section.
          </p>
          <p r-class="text-gray-600">
            Available hooks include:{" "}
            <code r-class="bg-gray-100 px-2 py-1 rounded">restState</code>,{" "}
            <code r-class="bg-gray-100 px-2 py-1 rounded">restStore</code>,{" "}
            <code r-class="bg-gray-100 px-2 py-1 rounded">restEffect</code>,{" "}
            <code r-class="bg-gray-100 px-2 py-1 rounded">restComputed</code>,{" "}
            <code r-class="bg-gray-100 px-2 py-1 rounded">restAsync</code>,{" "}
            <code r-class="bg-gray-100 px-2 py-1 rounded">restForm</code>, and
            more.
          </p>
        </section>

        {/* Sharing data between components */}
        <section r-class="mb-12">
          <h2 r-class="text-3xl font-bold mb-4">
            Sharing data between components
          </h2>
          <p r-class="text-gray-600 mb-4">
            In the previous example, each MyButton had its own independent
            count, and when each button was clicked, only the count for the
            button clicked changed. However, often you'll need components to
            share data and always update together.
          </p>
          <p r-class="text-gray-600 mb-4">
            Fynix offers two powerful ways to share state:
          </p>

          <h3 r-class="text-xl font-semibold mb-3">
            Method 1: Using restStore (Global State)
          </h3>
          <p r-class="text-gray-600 mb-4">
            The easiest way to share state in Fynix is using{" "}
            <code r-class="bg-gray-100 px-2 py-1 rounded">restStore</code>,
            which automatically syncs state across all components:
          </p>
          <div r-class="bg-gray-100 p-4 rounded-lg mb-6">
            <div r-class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
              <pre>
                <code>{`import { restStore } from '@fynix';

export default function MyApp() {
  const count = restStore('sharedCount', 0);

  function handleClick() {
    count.value++;
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton />
      <MyButton />
      <button r-click={handleClick}>
        Increment from parent: {count.value}
      </button>
    </div>
  );
}

function MyButton() {
  // Access the same shared state using the same key
  const count = restStore('sharedCount', 0);

  return (
    <button r-click={() => count.value++}>
      Clicked {count.value} times
    </button>
  );
}`}</code>
              </pre>
            </div>
          </div>

          <h3 r-class="text-xl font-semibold mb-3">
            Method 2: Lifting State Up (Props)
          </h3>
          <p r-class="text-gray-600 mb-4">
            You can also share state by moving it "upwards" to the parent
            component and passing it down as props:
          </p>
          <div r-class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-4">
            <pre>
              <code>{`export default function MyApp() {
  const count = restState(0);

  function handleClick() {
    count.value++;
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count.value} onClick={handleClick} />
      <MyButton count={count.value} onClick={handleClick} />
    </div>
  );
}`}</code>
            </pre>
          </div>
          <p r-class="text-gray-600 mb-4">
            The information you pass down like this is called props. Now the
            MyApp component contains the count state and the handleClick event
            handler, and passes both of them down as props to each of the
            buttons.
          </p>
          <p r-class="text-gray-600 mb-4">
            Finally, change MyButton to read the props you have passed from its
            parent component:
          </p>
          <div r-class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-4">
            <pre>
              <code>{`function MyButton({ count, onClick }) {
  return (
    <button r-click={onClick}>
      Clicked {count} times
    </button>
  );
}`}</code>
            </pre>
          </div>
          <div r-class="bg-gray-100 p-4 rounded-lg">
            <p r-class="text-sm text-gray-600 mb-2">
              <strong>Complete Example:</strong>
            </p>
            <div r-class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
              <pre>
                <code>{`import { restState } from '@fynix';

export default function MyApp() {
  const count = restState(0);

  function handleClick() {
    count.value++;
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count.value} onClick={handleClick} />
      <MyButton count={count.value} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button r-click={onClick}>
      Clicked {count} times
    </button>
  );
}`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section r-class="mb-8">
          <h2 r-class="text-3xl font-bold mb-4">Next Steps</h2>
          <p r-class="text-gray-600 mb-4">
            By now, you know the basics of how to write Fynix code!
          </p>
          <ul r-class="list-disc list-inside text-gray-600 space-y-2">
            <li>
              Check out the <strong>Hooks Reference</strong> to learn about all
              available reactive hooks
            </li>
            <li>
              Explore <strong>Routing</strong> to build multi-page applications
            </li>
            <li>
              Learn about <strong>Form Validation</strong> with restForm
            </li>
            <li>
              Discover <strong>Code Splitting</strong> with restLazy and
              Suspense
            </li>
            <li>
              Master <strong>Styling with Tailwind CSS</strong> v4
            </li>
          </ul>
        </section>
      </div>
    </DocLayout>
  );
}

QuickStart.meta = {
  title: "Quick Start - FynixJS",
  description:
    "Learn the fundamentals of FynixJS in this comprehensive quick start guide",
  keywords: "Fynix, Quick Start, Tutorial, Components, JSX, State Management",
};
