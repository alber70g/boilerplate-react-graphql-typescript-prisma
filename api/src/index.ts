import { ApolloServer } from 'apollo-server';
import { PrismaClient } from '@prisma/client';

import { typeDefs, resolvers } from './schema';

const prisma = new PrismaClient()

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers, context: {prisma} });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
}).finally(() => {
    prisma.$di
});
