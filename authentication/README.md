**\*\*** Authentication **\*\***
Most apps revolve around users
so, When building for users, we need to consider three fundamentals concepts:

- identify - verfying who someone is through authentication
- Sessions - keep track of a user's logged-in state across request
- Access - controls what they can do

In developer terms, we call these authentication, session management, and authorization

with React single-page apps, you're only dealing with client-side code
with Next.js, you've got to protect you app from three different angles: client-side, server-side and API routes

In authentication you've got so many things to take care of

1- let users sign up
2- Give them a way to sign in
3- Enable them to manage their account (password changes, email updates, etc)
4- Show or hide UI elements based on whether they-re logged in
5- Protect certain routes depending on authentication status
6- Access session and user data when needed
7- Set up role-based access control(admin, editor viewer, and so on)
8- Provide a way to sign out
