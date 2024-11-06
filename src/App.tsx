import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from "react-router-dom";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "./services/firebase";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import LandingHeader from "./components/LandingHeader";
import DashboardHeader from "./components/DashboardHeader";
import LandingPage from "./pages/LandingPage";
import Courses from "./pages/Courses";
import ProtectedRoute from "./services/ProtectedRoute";
import { setUser, setLoading } from "./store/authSlice";
import { RootState } from "./store";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(setLoading(true));

    const storedUser = JSON.parse(localStorage.getItem("user") || "null");
    if (storedUser) {
      dispatch(setUser(storedUser));
      dispatch(setLoading(false));
    }

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      dispatch(setUser(currentUser));
      dispatch(setLoading(false));
    });

    return () => unsubscribe();
  }, [dispatch]);

  const location = useLocation();

  const renderHeader = () => {
    if (location.pathname === "/dashboard" || location.pathname === "/courses") {
      return <DashboardHeader />;
    }
    if (location.pathname === "/" || location.pathname === "/signUp") {
      return <LandingHeader />;
    }
    return null;
  };

  return (
    <>
      {renderHeader()}
      <Routes>
        <Route 
          path="/" 
          element={<LandingPage />} 
        />
        <Route 
          path="/signUp" 
          element={user ? <Navigate to="/dashboard" /> : <SignUp />} 
        />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute user={user} loading={loading}>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/courses"
          element={
            <ProtectedRoute user={user} loading={loading}>
              <Courses />
            </ProtectedRoute>
          } 
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

const Main = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default Main;
