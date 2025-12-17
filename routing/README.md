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
