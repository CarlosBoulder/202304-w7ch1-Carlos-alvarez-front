import { useState } from "react";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  const [user, setUser] = useState({ username: "", password: "" });

  const onChangeUserData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <LoginFormStyled>
      <h2>Login:</h2>
      <label>
        Name:
        <input
          type="text"
          id="username"
          onChange={onChangeUserData}
          autoComplete="off"
        />
      </label>
      <label>
        Password:
        <input
          type="text"
          id="password"
          onChange={onChangeUserData}
          autoComplete="off"
        />
      </label>
      <input type="submit" value="Submit" />
    </LoginFormStyled>
  );
};

export default LoginForm;
