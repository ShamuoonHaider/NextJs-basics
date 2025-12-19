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

Response Headers:
These are sent back from server to the client. They provide information about the server and the data being sent in the response.

"Content-Type" header which indicates the media type of the response. It tells the client what the data type of the returned content is, such as text/html for HTML document, application/json for JSON data, etc.

COOKIES in route handers

- Cookies are small pieces of data that a server sends to a user's web browser
- the browser can store the cookies and send them back to the same server with future requests

Cookies serve three main purposes:

- Managing sessions (like user logins and shopping carts)
- handling personalization (such as user preferences and themes)
- tracking (like recording and analyzing user behaviour)
