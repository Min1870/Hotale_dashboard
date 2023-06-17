import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Booking from "../pages/Booking";
import AddBooking from "../pages/AddBooking";
import EditBooking from "../pages/EditBooking";
import Customers from "../pages/Customers";
import InvoiceList from "../pages/InvoiceList";
import Setting from "../pages/Setting";
import Room from "../pages/Room";
import Layout from "../Layout"

const Paths = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="booking" element={<Booking/>}/>
            <Route path="booking-add" element={<AddBooking/>}/>
            <Route path="booking-edit" element={<EditBooking/>}/>
            <Route path="rooms" element={<Room/>}/>
            <Route path="customers" element={<Customers/>}/>
            <Route path="invoice-list" element={<InvoiceList/>}/>
            <Route path="setting" element={<Setting/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Paths;
