# Rest API developed with Express and Node + TypeScript

A simple Rest API for the purpose of learning how to develop using Node and Express along with the use of TypeScript. It is based on the functionality of a blog, it has the basic functions of creating categories, making posts, user creation and login.

## Technologies used for its development

- NodeJS
- ExpressJS
- TypeScript
- Jest and Supertest (For testing purposes)
- Prisma ORM
- MySQL as database
- MVC
- JWT for session creation and management

## How to execute the project

You will need a file `.env` in the root of the project, inside you will need to add two important environment variables:

```
DATABASE_URL=""
JWT_SECRET=""
```

After you have done this, install the project dependencies:

```
> npm install
```

Add the models found in the file `prisma/schema.prisma` to your database:

```
> npx prisma push
```

Execute the API:

```
> npm run dev

> rest-api-blog-node-express@1.0.0 dev
> nodemon src/server.ts

[nodemon] 3.1.0
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: ts,json
[nodemon] starting `ts-node src/server.ts`
Server is running at http://localhost:3000
```
