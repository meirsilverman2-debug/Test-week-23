import UserList from "../component/UserList/UserList";
import UserFetch from "../hooks/UserFetch";


export default function Signin() {
  return (
    <div>
        <UserList/>
        <UserFetch url="http://localhost:3001/user/users"/>
    </div>
  )
}
