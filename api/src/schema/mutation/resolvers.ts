import { MutationResolvers } from '../../generated/graphql';
import { prisma } from '../../../orm/generated/prisma-client';

const resolvers: { Mutation: MutationResolvers } = {
  Mutation: {
    async registerUser(_, args) {
      const { clientMutationId, email, password } = args.input;
      const user = await prisma.createUser({ email, password, name: "noname" });
      return { user, token: email + password };
    },
  },
};

export default resolvers;
