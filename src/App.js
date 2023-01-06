import { Routes, Route } from "react-router-dom";
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Review from './Pages/Review/Review';
import ContactUs from './Pages/ContactUs/ContactUs';
import Login from './Pages/Auth/Login';
import Register from "./Pages/Auth/SignUp";
import RequireAuth from "./Pages/Auth/RequireAuth";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointment from "./Pages/Dashboard/MyAppointment";
import MyReview from "./Pages/Dashboard/MyReview";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/appointment" element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>}>
        </Route>
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>}>
            <Route index element={<MyAppointment></MyAppointment>}></Route>
            <Route path="review"element={<MyReview></MyReview>}></Route>
        </Route>
        <Route path="/review" element={<Review></Review>}></Route>
        <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
