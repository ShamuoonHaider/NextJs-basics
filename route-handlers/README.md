Route handlers

- The app router lets you carete custom request handlers for your routes using a feature call Route Handlers

- Unlike page routes, which give us HTML content, Route Handlers let us build RESTful endpoints with complete control over the response

- Think of it like build a Node + Express app

- There's no need to setup and configure a separate server

Route hanlders are great when making external API request as well
For example, if you're building an app that needs to talk to third-party services. Route handlers run server-side, so our sensitive info like private keys stays secure and never reaches the browser.

Route Handlers are the equivalent of API routes in Page router

Next.js supports GET,POST,PUT,PATCH,DELETE,HEAD, and OPTIONS

If an unsupported method is called, Next.js will return a 405 Method Not Allowed response

HEADERS in route handlers
HTTP headers represent the metadata associated with an API request and response.

Request Headers:

These are sent by the client, such as web browser, to the server. They contain essential information about the request, which helps the server understand and process it correctly

"User-Agent" which identifies the browser and operating system to the server.
"Accept" which indicates the content types like text, video, or image formates that the client can process.
"Authorization" header used by the client to authenticate itself to the server.
