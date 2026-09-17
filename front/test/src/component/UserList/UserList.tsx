import "./userList.css";
import UserFetch from "../../hooks/UserFetch";
import UserCard from "../UserCard/UserCard";

type user = {
    userName: string;
    _id: string;
    email: string;
};

export default function UserList() {
    const [data] = UserFetch("http://localhost:3001/user/users");
    console.log(data);
    
  return (
   <div className="list">
   {data && 
   Array(data).map((user) => {
    return <p key={user._id}>{user.map(
        (user: user) => {
            return <UserCard key={user._id}>{user.userName}</UserCard>
        }
    )}</p>
   })
   
   }
   </div>
  )
}
