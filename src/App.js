import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./pages/Header";
import Login from "./pages/Login";
import Otp from "./pages/Otp";
import Profile from "./pages/Profile";
import CourseDetail from "./pages/CourseDetail";
import Learn from "./pages/Learn";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Header />}>
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} /> 
                <Route path="otp" element={<Otp />} />
                <Route path="profile" element={<Profile />} />
                <Route path="courses">
                    <Route index element={<Home />} />
                    <Route path=":courseId">
                        <Route index element={<CourseDetail />} />
                        <Route path="play" element={<Learn />} />
                    </Route>
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
