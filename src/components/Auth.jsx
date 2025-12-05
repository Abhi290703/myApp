import React, { useState } from "react";
import Login from "../UserForm/Login";
import Signup from "../loginform/signup";


export default function Auth() {
  const [entry, setEntry] = useState(false);
  return <> {entry ? <Signup /> : <Login />}</>;
}
