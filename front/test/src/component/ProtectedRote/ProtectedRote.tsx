import { Navigate } from "react-router";

type ProtectedRoteProps = {
  children: React.ReactNode;
  isAuthRequired: boolean;
};

export default function ProtectedRote({children, isAuthRequired=true}: ProtectedRoteProps) {
  const token = localStorage.getItem("token");
  if (!token && isAuthRequired) return <Navigate to={"/signin"} />;
  if (token && !isAuthRequired) return <Navigate to={"/profile"} />;

  return <div>{ children }</div>
}
