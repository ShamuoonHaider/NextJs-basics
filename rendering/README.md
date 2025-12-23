Client-side Rendering

- This whole approach - where your browser(the client) transforms React components into what you see on screen - that's what we call client-side rendering(CSR)

Drawback of CSR

SEO:
When search engines crawl your site, they're mainly looking at HTML content. But with CSR, your initial HTML is basically just an empty div - not great for search engines trying to figure out what your page is about

When you have a lot of nested components making API calls, the meaningful content might load too slowly for serach egnies to even catch it

Performance:
Your browser(the client) has to do everything: fetch data, build the UI, make everything interactive... that's a lot of work!

Users often end up staring at a blank screen or a loading spinner while all this happens

Every time you add a new feature to your app, that javascript bundle gets bigger, making users wait even longer

This is especially frustrating for people with slower internet connections

Server-side rendering

- Search engines can now easily index the server-rendered content, solving our SEO problem

- Users see actual HTML content right away instead of staring at a blank screen or loading spinner

HYDRATION:

- During hydration, React takes control in the browser and reconstructs the component tree in memory, using the server-rendered HTML as a blueprint

- It carefully maps out where all the interactive elements should go, then hooks up the JavaScript login

- This involves initializing application state, adding click and mouseover handlers and setting up all the dynamic features needed for a full interactive user experience

Server-side solutions
1- Static Site Generation(SSG):
SSG happens during build time when you deploy you application to the server. This results in pages that are already rendered and ready to serve. It's perfect for content that stays relatively stable,like blog posts

2- Server-Side Rendering(SSR):
SSR, on the other hand, renders pages on-demand when users request them. It's ideal for personalized content like social media feeds where the HTML changes based on who's logged in.

Drawback of SSR:
1- You have to fetch everything before you can show anything
Components cannot start rendering and then pause or "wait" while data is still being loaded

If a component needs to fetch data from a database or another source(like an API), this fetching must be completed before the server can begin rendering the page

This can delay the server's response time to the browser, as the server must finish collecting all neccessary data before any part of the page can be sent to the client

2- You have to load everything before you can hydrate anything
For successfull hydration where React adds interactivity to the server-rendered HTML, the component tree in the browser must exactly match the server-generated component tree

This means that al the JavaScript for the component must be loaded on the client before you can start hydrating any of them

3- You have to hydrate everything befoer you can interact with anything

React hydrates the component tree in a single pass, meaning once it starts hydrating, it won't stop until it's finished with the entire tree

As a consequence, all components must be hydrated before you can interact with any of them

React Server Components (RSC)

- React Server Components (RSC) represent a new architecture designed by the React team

- This approact leverages the strengths of the both server and client environments to optimize effciency, load times, and interactivity

The architecture introduces a dual-component model

- Client Components
- Server Components

This distinctionis based not on the components' functionality but rather on their execution environment and the specific systems they are designed to interact with

1- Client Components
Client components are the familiar React components we've been using.

They are typically rendered on the client-side(CSR)but, they can also be rendered to HTML on the server(SSR), allowing users to immediately see the page's HTML content rather than a blank screen

"client components" can render on the server

Optimization strategy

Client components primarily operate on the client but can (can should) also run once on the server for better performace

Client Components have full access to the client environment, such as the browser, allowing them to use state, effects, and event listeners for handling interactivity

They can also access browser-exclusive APIs like geolocation or localStorage, allowing you to build UI for specific use cases
