import { login, logout } from "../store"
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Login = () => {
  // use dispatch is for modifying states
  const dispatch = useDispatch();
  // use selector is for displaying states
  const username = useSelector((state: any) => state.user.value.username);

  const [newUsername, setNewUsername] = useState<string>(username);

  return (
    <div>
      <h1>Login</h1>
      <input onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setNewUsername(e.target.value)} value={newUsername ? newUsername : ""}/>
      <button onClick={()=>dispatch(login({username: newUsername}))}>Login</button>
      <button onClick={()=>{dispatch(logout()); setNewUsername("");}}>Logout</button>
      <br/>
      { username && username !== "" && <h4>Welcome, {username}</h4> }
    </div>
  )
}