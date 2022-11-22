import { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import { AppContext } from "./utils/AppContext";

const MyRoutes = () => {
    const { userInfo } = useContext(AppContext);

    return (
        <Router>
            {
                userInfo.userId
                    ? <LandingPage />
                    : <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="*" element={<Navigate to="/login" replace />} />
                    </Routes>
            }
        </Router>   
    );
};

export default MyRoutes;