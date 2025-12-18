Routing metadata

The Metadata API in Next.js is a powerfull feature that lets us define metadata for each page

Metadata ensures our content looks great when it's shared or indexed by search engines

Two ways to handle metadata in layout.tsx or page.tsx files:

1. Export a static metadata object
2. Export a dynamic generateMetadata function

Metadata Rules

- Both layout.tsx and page.tsx can export metadata. Layout metadata applies to all its pages, while page metadata is specific to that page

-Metadata follows a top-down order, starting from the root level

- When metadata exists in multiple places along a route, they merge together, with page metadata overriding layout metadata for matching properties

Params and searchParams
For a given URL:
Params:
is a promise that resolves to an object containing the dynamic route parameters (like id)

searchParams:
is a promise that resolves to an object constaining to query parameters(like filters and sorting)

we can access params and search params in client component by using use hook instead of async await bcz client component don't support async await

while page.tsx has access to both params and seachParams, layout.tsx only has access to params

Templates:
Templates are similar to layouts in that they are also UI shared between multiple pages in your app

Whenever a user navigates between routes sharinga template, you get a completely fresh start

- a new template component instance is mounted
- DOM elements are recreated
- state is cleared
- effects are re-synchronized

ERROR

- It automatically wraps route segments and their nested children in a React Error Boundary
- You can create custom error UIs for specific segments using the file-system hierarchy
- It isolates errors to affected segments while keeping the rest of you app functional
- it enables you to attempt to recover from a erro without requiring a full page reload

Handling errors in nested routes

- Errors always bubble up to find the closest parent error boundary
- An error.tsx file handles errors not just for its own folder, but for all the nested child segments below it too
- By strategically placing error.tsx files at different levels in your route folders, you can control exactly how detailed your error handling gets
- Where you put your error.tsx file makes a huge difference - it determines exactly which parts of your UI get affected when things go wrong

Handling global errors

1- if an error boundary can't catch errors in the layout.tsx file from the same segment, what about errors in the root layout?

- it doesn't have a parent segment. how do we handle those errors?

ans: Next.js provides a special file called global-error.tsx that goes in your root app directory. this is your last line of defense when something goes catastrophically wrong at the highest level of your app

PARALLEL Routes

- Parallel ruotes in Next.js are defined using a feature know a "slots"
- Slots help Organize content in a modular way
- To create a slot, we use the `@folder` naming convention
- Each defined slot automatically becomes a prop in its corresponding `layout.tsx` file

Parallel routes use cases

- Dashboards with multiple sections
- Split-view interfaces
- multi-pane layouts
- complex admin interfaces

Paralle routes benefits

1- Parallel routes are great for splitting a layout into manageable slots(especially when different teams work on different parts)
2- independent route handling
3- Sub-navigation

Sub-navigation in routes

- Each slot can essentially function as a mini-application, complete with its own navigation and state management

- Users can interact with each section separately, applying filters, sorting data, or navigating through pages without affection other parts
