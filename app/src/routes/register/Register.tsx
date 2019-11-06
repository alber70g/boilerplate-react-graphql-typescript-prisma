import React from 'react';
import { useMutation } from '@apollo/client';
import { loader } from 'graphql.macro';
import {
  RegisterUserMutationVariables,
  RegisterUserMutationResult,
} from '../../generated/graphql';

const REGISTER_USER = loader('./register.gql');

const Register: React.FC = () => {
  const [register, { called, data }] = useMutation<
    RegisterUserMutationResult,
    RegisterUserMutationVariables
  >(REGISTER_USER);
  let email: string, password: string;

  return (
    <>
      <h2>Register</h2>

      {!called && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            register({ variables: { input: { email, password } } });
          }}
        >
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="john@doe.com"
              onKeyUp={(e: any) => (email = e.target.value)}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              onKeyUp={(e: any) => (password = e.target.value)}
            />
          </label>
          <input type="submit" value="Register" />
        </form>
      )}

      <p>
        {data && JSON.stringify(data, null, 2)}
        {!data && 'no response yet'}
      </p>
    </>
  );
};

export default Register;
