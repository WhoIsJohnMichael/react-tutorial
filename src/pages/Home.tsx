import { useSelector } from "react-redux";

export const Home = () => {
  
  const username = useSelector((state: any)=>state.user.value.username);

  return (
    <div>
      <h1>Home</h1>
      <br/>
      <hr/>
      { username && username !== "" && <h4>Welcome, {username}</h4> }
    </div>
  )
}