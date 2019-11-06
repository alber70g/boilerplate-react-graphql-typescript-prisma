import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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

export type LoginQueryVariables = {
  username: Scalars['String'],
  password: Scalars['String']
};


export type LoginQuery = (
  { __typename?: 'Query' }
  & { login: Maybe<(
    { __typename?: 'LoginPayload' }
    & Pick<LoginPayload, 'success' | 'token'>
  )> }
);

export type RegisterUserMutationVariables = {
  input: RegisterUserInput
};


export type RegisterUserMutation = (
  { __typename?: 'Mutation' }
  & { registerUser: (
    { __typename?: 'RegisterUserPayload' }
    & Pick<RegisterUserPayload, 'token'>
    & { user: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id'>
    )> }
  ) }
);


export const LoginDocument = gql`
    query Login($username: String!, $password: String!) {
  login(input: {username: $username, password: $password}) {
    success
    token
  }
}
    `;
export type LoginComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<LoginQuery, LoginQueryVariables>, 'query'> & ({ variables: LoginQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const LoginComponent = (props: LoginComponentProps) => (
      <ApolloReactComponents.Query<LoginQuery, LoginQueryVariables> query={LoginDocument} {...props} />
    );
    
export type LoginProps<TChildProps = {}> = ApolloReactHoc.DataProps<LoginQuery, LoginQueryVariables> & TChildProps;
export function withLogin<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LoginQuery,
  LoginQueryVariables,
  LoginProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, LoginQuery, LoginQueryVariables, LoginProps<TChildProps>>(LoginDocument, {
      alias: 'login',
      ...operationOptions
    });
};
export type LoginQueryResult = ApolloReactCommon.QueryResult<LoginQuery, LoginQueryVariables>;
export const RegisterUserDocument = gql`
    mutation RegisterUser($input: RegisterUserInput!) {
  registerUser(input: $input) {
    user {
      id
    }
    token
  }
}
    `;
export type RegisterUserMutationFn = ApolloReactCommon.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;
export type RegisterUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RegisterUserMutation, RegisterUserMutationVariables>, 'mutation'>;

    export const RegisterUserComponent = (props: RegisterUserComponentProps) => (
      <ApolloReactComponents.Mutation<RegisterUserMutation, RegisterUserMutationVariables> mutation={RegisterUserDocument} {...props} />
    );
    
export type RegisterUserProps<TChildProps = {}> = ApolloReactHoc.MutateProps<RegisterUserMutation, RegisterUserMutationVariables> & TChildProps;
export function withRegisterUser<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RegisterUserMutation,
  RegisterUserMutationVariables,
  RegisterUserProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, RegisterUserMutation, RegisterUserMutationVariables, RegisterUserProps<TChildProps>>(RegisterUserDocument, {
      alias: 'registerUser',
      ...operationOptions
    });
};
export type RegisterUserMutationResult = ApolloReactCommon.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;