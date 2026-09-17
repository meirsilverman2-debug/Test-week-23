import "./userCard.css";


type UserCardProps = {
    children: React.ReactNode
};


export default function UserCard({children}: UserCardProps) {
  return (
    <div className="user-card">
        {children}
    </div>
  )
}
