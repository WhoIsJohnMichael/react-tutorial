import { ChangeProfile } from "../components/ChangeProfile"
import { useContext } from 'react';
import { AppContext } from '../App';

export const Profile = (props) => {
  const { username, name } = useContext(AppContext);
  return (
    <div>
      <h3>Profile Page</h3>
      <p>Username: {username}</p>
      <p>Name: {name}</p>
      <ChangeProfile/>.
    </div>
  )
}