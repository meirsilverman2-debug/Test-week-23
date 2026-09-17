import UserList from "../component/UserList/UserList";
import UserFetch from "../hooks/UserFetch";


export default function Signin() {
  return (
    <div>
        <UserList/>
        <UserFetch url="http://localhost:3001/user/users"/>
        <form>
            <input type="text" placeholder="Name"/>
            <input type="email" placeholder="Email" />
            <input type="Number" placeholder="Number"/>
            <button type="submit" onClick={() => {}}>Register</button>

        </form>
    </div>
  )
}
