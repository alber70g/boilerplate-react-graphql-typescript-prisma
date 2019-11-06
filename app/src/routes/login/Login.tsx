import React from "react";
import { useLazyQuery } from "@apollo/client";
import { loader } from "graphql.macro";
import { LoginInput, LoginPayload } from "../../generated/graphql";
import { Link } from "react-router-dom";

const LOGIN = loader("./login.gql");

const Login: React.FC = () => {
  const [login, { data, loading }] = useLazyQuery<LoginPayload, LoginInput>(
    LOGIN
  );
  let username: string, password: string;

  return (
    <>
      <h2>Login</h2>
      {loading ? "loading" : ""}

      <form
        onSubmit={e => {
          e.preventDefault();
          login({ variables: { username, password } });
        }}
      >
        <label>
          Email
          <input
            type="text"
            placeholder="john@doe.com"
            ref={n => (username = (n && n.value) || "")}
          />
        </label>

        <label>
          Password
          <input type="password" ref={n => (password = (n && n.value) || "")} />
        </label>

        <input type="submit" value="Login" />
      </form>

      <p>
        <Link to="/register">Create an account</Link>
      </p>

      <pre>
        {data && JSON.stringify(data, null, 2)}
        {!data && "no response yet"}
      </pre>
    </>
  );
};

export default Login;
