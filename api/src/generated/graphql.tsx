import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type LoginInput = {
  username: Scalars['String'],
  password: Scalars['String'],
};

export type LoginPayload = {
   __typename?: 'LoginPayload',
  success: Scalars['Boolean'],
  user?: Maybe<User>,
  token?: Maybe<Scalars['String']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  registerUser: RegisterUserPayload,
};


export type MutationRegisterUserArgs = {
  input: RegisterUserInput
};

export type Node = {
  id: Scalars['ID'],
};

export type Query = {
   __typename?: 'Query',
  login?: Maybe<LoginPayload>,
  node?: Maybe<Node>,
};


export type QueryLoginArgs = {
  input: LoginInput
};


export type QueryNodeArgs = {
  id: Scalars['ID']
};

export type RegisterUserInput = {
  email: Scalars['String'],
  password: Scalars['String'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type RegisterUserPayload = {
   __typename?: 'RegisterUserPayload',
  user?: Maybe<User>,
  clientMutationId?: Maybe<Scalars['String']>,
  token: Scalars['String'],
};

export type User = Node & {
   __typename?: 'User',
  id: Scalars['ID'],
  name: Scalars['String'],
  email: Scalars['String'],
};




export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  LoginInput: LoginInput,
  String: ResolverTypeWrapper<Scalars['String']>,
  LoginPayload: ResolverTypeWrapper<LoginPayload>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  User: ResolverTypeWrapper<User>,
  Node: ResolverTypeWrapper<Node>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Mutation: ResolverTypeWrapper<{}>,
  RegisterUserInput: RegisterUserInput,
  RegisterUserPayload: ResolverTypeWrapper<RegisterUserPayload>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  LoginInput: LoginInput,
  String: Scalars['String'],
  LoginPayload: LoginPayload,
  Boolean: Scalars['Boolean'],
  User: User,
  Node: Node,
  ID: Scalars['ID'],
  Mutation: {},
  RegisterUserInput: RegisterUserInput,
  RegisterUserPayload: RegisterUserPayload,
};

export type LoginPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginPayload'] = ResolversParentTypes['LoginPayload']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  registerUser?: Resolver<ResolversTypes['RegisterUserPayload'], ParentType, ContextType, RequireFields<MutationRegisterUserArgs, 'input'>>,
};

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'User', ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  login?: Resolver<Maybe<ResolversTypes['LoginPayload']>, ParentType, ContextType, RequireFields<QueryLoginArgs, 'input'>>,
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<QueryNodeArgs, 'id'>>,
};

export type RegisterUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegisterUserPayload'] = ResolversParentTypes['RegisterUserPayload']> = {
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type Resolvers<ContextType = any> = {
  LoginPayload?: LoginPayloadResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Node?: NodeResolvers,
  Query?: QueryResolvers<ContextType>,
  RegisterUserPayload?: RegisterUserPayloadResolvers<ContextType>,
  User?: UserResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
