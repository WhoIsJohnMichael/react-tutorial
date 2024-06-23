import { useNavigate, useParams } from 'react-router-dom'

export const Profile = () => {

  const navigate = useNavigate()
  let { username } = useParams()
  return (
    <div>
      <h1>This is the Profile Page for { username }</h1>
      <button onClick={()=>{navigate("/")}}>Go back to Home</button>
    </div>
  )
}