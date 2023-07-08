import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Booking from "../pages/Booking";
import AddBooking from "../pages/AddBooking";
import EditBooking from "../pages/EditBooking";
import Customers from "../pages/Customers";
import InvoiceList from "../pages/InvoiceList";
import Setting from "../pages/Setting";
import Room from "../pages/Room";
import Layout from "../Layout";
import General from "../components/Setting/General";
import Email from "../components/Setting/Email";
import Security from "../components/Setting/Security";
import Activity from "../components/Setting/Activity";
import Register from "../pages/Register";
import Login from "../pages/Login";
import RouteGuard from "./RouteGuard";
import AddRoom from "../pages/AddRoom";
import AddBlog from "../pages/AddBlog";
import Blogs from "../pages/Blogs";

const Paths = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <RouteGuard>
                <Layout />
              </RouteGuard>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="booking" element={<Booking />} />
            <Route path="booking-add" element={<AddBooking />} />
            <Route path="booking-edit" element={<EditBooking />} />
            <Route path="rooms" element={<Room />} />
            <Route path="room-add" element={<AddRoom />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blog-add" element={<AddBlog />} />
            <Route path="customers" element={<Customers />} />
            <Route path="invoice-list" element={<InvoiceList />} />
            <Route path="setting" element={<Setting />}>
              <Route path="general" element={<General />} />
              <Route path="email" element={<Email />} />
              <Route path="security" element={<Security />} />
              <Route path="activity" element={<Activity />} />
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Paths;
