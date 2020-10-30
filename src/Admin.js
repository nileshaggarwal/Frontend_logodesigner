import React from "react";
import { login } from "./adminapicall";

const Admin = () => {
  const Login = () => {
    login();
  };

  return <div>{login()}</div>;
};

export default Admin;
