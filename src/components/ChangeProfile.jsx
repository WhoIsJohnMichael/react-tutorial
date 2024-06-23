import { useState } from "react"
import { useContext } from 'react';
import { AppContext } from '../App';

export const ChangeProfile = () => {
  
  const {username, setUsername, name, setName} = useContext(AppContext);
  const [newUsername, setNewUsername] = useState(username)
  const [newName, setNewName] = useState(name)

  return (
    <div>
      <label for="username">Username</label>
      <br/>
      <input id="username" type="text" onChange={e=>setNewUsername(e.target.value)} value={newUsername}/>
      <br/>
      <br/>
      <label for="name">Full Name</label>
      <br/>
      <input id="name" type="text" onChange={e=>setNewName(e.target.value)} value={newName}/>
      <br/>
      <br/>
      <button onClick={()=>{
        setUsername(newUsername);
        setName(newName);
      }}>Change Profile</button>
    </div>
  )
}