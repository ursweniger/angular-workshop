# Angular Workshop - Exercise 1

In this exercise, you will be working on adding new functionality to an Angular application. Follow the assignments below to complete the tasks.

## Assignment 1: Add a '/event:id' Route

1. Open the `app-routing.module.ts` file.
2. Add a new route for the `/event:id` path.
3. Configure the route to load the `EventComponent` when accessed.
4. Make sure to pass the `id` parameter to the `EventComponent`.

## Assignment 2: Add a Middleware Logger

1. Create a new file called `logger.middleware.ts`.
2. Implement a middleware function that logs the incoming requests.
3. Import and use the middleware in the `app.module.ts` file.

## Assignment 3: Add a Guard Pipe

1. Add a Pipe to verify the findOne Route is only calles when an integer ist used as path.

## Optional: Assignment 4: Create an Interface for TypeScript of CampusEvent
1. Create a new file called `campus-event.interface.ts`.
2. Define an interface named `CampusEvent` with the following properties:
    - `id` of type `number`
    - `name` of type `string`
    - `date` of type `Date`
    - `location` of type `string`
    - `description` of type `string`
3. Export the `CampusEvent` interface from the file.
4. Import and use the `CampusEvent` interface in the appropriate files where the `CampusEvent` object is used.

Remember to test your changes and make sure everything is working as expected.

