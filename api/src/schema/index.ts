import { join } from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

const typesArray = fileLoader(join(__dirname, './**/*.graphql'));
const typeDefs = mergeTypes(typesArray, { all: true });

const resolversArray = fileLoader(join(__dirname, './**/resolvers.ts'));
const resolvers = mergeResolvers(resolversArray);

export { typeDefs, resolvers };
