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

FEtching Data From a Database

We've looked at how to fetch data from API endpoint using the Fetch API

Now Let's dive into fetching data from a database in Server Components

What we're about to cover is super important - it's the foundation for data mutations and server actions coming up next

Two key reasons why fetching data directly from a database is powerfull

1- server components have direct access to server-side resources, which makes database interactions seamless
2- since everything happens on the server, we don't need API routes or worry about exposing sensitive information to the client

We're going to working with two super helpful tools - SQLit and Prisma

SQLite:

- A simple, file-based database to store information in your project
- It doesn't require a server or a comples setup and it's perfect for learning and prototyping

Prisma:

- A tool that makes it really easy to talk to your database
- It's like a translator that helps your code communicate with SQLite

Data Mutations

To really appreciate the app router's approach to data mutation. it's worth looking at how we've traditionally handled data mutations in React.

Server Actions

Server Actions are asynchronous functions that are executed on the server

They can be called in Server and Client Components to handle form submissions and data mutations in Next.js applications

You should use Server Actions when you:

- need to perform secure database operations
- want to reduce API boilderplate code
- need progressive enhancement for forms
- want to optimize for performance

Server Actions convention

A server Action can be defined with the React "use server" directive

You can place the directive:

- at the top of an async function to make the function as a Server Action, or
- at the top of a separate file to make all export of that file as Server Actions

Server Actions benefits

Simplified code: They dramatically simplify code as there is no need for separate API routes or client-side state management for form data.

Improved security: they boost security by keeping sensitive operations server-side, away from potential threats

Bettter performance: they improve performance because there's less Javascript running on the client, leading to faster load times and better core web vitals

Progressive enhancement: forms keep working even if JavaScript is turned off in the browser - making your apps more accessible and resilient

Pending state with useFormStatus

useFormStatus is a React hook that gives us status information about the last form submission

const status = useFormStatus()

- pending: a boolean that indicates if the parent <form> is currently submitting
- data: an object containing the form's submission data
- method: a string(either "get" or "post") showing the HTTP method being used
- action: a reference to the function that was passed to the parent <form>'s action prop

Form Validation with useActionState

useActionState is a React hook that allows us to update state based on the result of a form action

It is particularly helpfull for handling form validation and error messages

Pending(useFormStatus) vs isPending(useActionState)

Both can help use determine if a form is begin submitted and let us disable the submit button - but there's an interesting difference between them

The pending state from useFormStatus is specifically for form submission

isPending from useActionState can be used with any Action, not just form submissions

Go with pending from useFormStatus when you're building reusable components that are meant to live inside forms, for example, submit buttons or loading spinners that you'll want to use across different forms in your applications.

Choose isPending from useActionState when you need to keep track of server actions that aren't necessarily related to form submissions. It gives you that extra flexibility.
