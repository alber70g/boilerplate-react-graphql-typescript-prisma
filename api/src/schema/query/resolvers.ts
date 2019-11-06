import { prisma } from '../../../orm/generated/prisma-client';
import { QueryResolvers } from '../../generated/graphql';

const resolver: { Query: QueryResolvers } = {
  Query: {
    login(_, args) {
      const { username, password } = args.input;
      return {
        success: true,
        token: username + password,
      };
    },
  },
};
export default resolver;
