import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { User } from "firebase/auth";

interface ProtectedRouteProps {
  user: User | null;
  loading: boolean;
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ user, loading, children }) => {
  if (loading) {
    return <p>Loading...</p>;
  }
  if (!user) {
    return <Navigate to="/signUp" />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;