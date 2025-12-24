Data fetching is App Router
So far, we've been working with hard-coded content in our routes and components

In actual enterprise apps, you're usually pulling data from external sources

The App Router is built on React Server Components(RSC) architecture which gives us the flexibility to fetch data using either server components or client components

However, It's usually preferable to use server components for data operations because:

- You can directly communicate with your databases and file systems on the server side

- You get better performance since you're closer to your data sources

- Your client-side bundle stays lean because the heavy lifting happens server-side

- Your sensitive operations and API keys remains secure on the server

Request memoization:

This means you can fetch data wherever you need it in your component tree without worrying about duplicate network requests

React will only make the actual fetch once and reuse the result for subsequent calls during same render pass

It's a React feature and thereby included in Next.js

Lets you wriet data-fetching code exacly where you need it rather than having to centralize fetches and pass data down through props

Loading and Error states

While client components require you to manage these staes with separate variables and contional rendering, server components make this process much cleaner

To implement a loading state, all we need to do is define and export a React component loading.tsx

For handling errors, define and export a React component in error.tsx

Data fetching patterns:

When fetching data inside components, you need to be aware of two data fetching patterns:

1. Sequential
2. Parallel

Sequential: requests in a component tree are dependent on each other. This can lead to longer loading times

Parallel: requests in a route are eagerly intiated and will load data at the same time. This reduces the total time it takes to load data.
