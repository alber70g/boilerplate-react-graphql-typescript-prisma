# React app with GraphQL backend

## Getting started

### Install Prisma

```
brew tap prisma/prisma
brew install prisma
```

### Start Docker container

```
docker-compose up -d
```

### Deploy Prisma model Changes to database

After making changes to the Prisma models run `prisma deploy` to persist the
changes to the database.

```
prisma deploy
```

### Generate schema

After deploying changes to the database run `prisma generate` to generate the
Prisma client.

```
prisma generate
```

### Generate resolver types

The generator uses the GraphQL introspection (http://localhost:4000) to generate
the types. Therefore make sure the server is running (`npm start`)

Then use the [graphql-code-generator](graphql-code-generator.com) client go
generate the types from the schema

```
npm run generate:types
```
