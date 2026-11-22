import If from "./NextStatements/conditional1"
import And from "./NextStatements/conditional2"
import Events from "./NextStatements/events"
import ListMap from "./NextStatements/List"
import ListMap2 from "./NextStatements/List2"
import ListMap3 from "./NextStatements/List3"
import Navbar from "./Practice/navbar"
import Admin from "./Practice/admin"
import { Routes,Route } from "react-router-dom"
import Home from "./Practice/home"
import Login from "./Practice/login"
import Signup from "./Practice/signup"
import Form from "./NextStatements/form"
import Password from "./NextStatements/password"
import ErrorPassword from "./NextStatements/errorform"
import CustomerSidebar from "./Practice/Customer"
import Vendor from "./Practice/vendor"
import FuelRequest from "./Practice/fuel_request"
import Services from "./Practice/service"
import About from "./Practice/About"
import Driver from "./Practice/Driver"
import DeliveryVerification from "./Practice/deliveryVerification.jsx";
import Payment from "./Practice/Payment.jsx"
import Settings from "./Practice/setting.jsx"

function App() {
  
 



  return (
    <>
    {/* <Password/> */}
    {/* <ErrorPassword/> */}
    
  
     <Navbar/> 
   
    <main>
        <Routes>
          <Route
            path="/"
            element={<Home/>}
          />

          <Route
            path="/fuel-request"
            element={<FuelRequest/>}
          />

          <Route
            path="/services"
            element={<Services/>}
          />
       
        <Route
            path="/customer"
            element={<CustomerSidebar/>}
          /> 
       
       

          <Route
            path="/about"
            element={<About/>}
          />

          <Route
            path="/login"
            element={<Login/>}
          />

          <Route
            path="/signup"
            element={<Signup/>}
          />

          <Route
            path="/vendor"
            element={<Vendor/>}
          />

          <Route
            path="/driver"
            element={<Driver/>}
          />

          <Route
            path="/admin"
            element={<Admin/>}
          />
          
          <Route
            path="/payment"
            element={<Payment/>}
          />
          <Route
            path="/settings"
            element={<Settings/>}
          />
        </Routes>
      </main> 

      {/* <Form/> */}
      


    {/* <ListMap/> */}
    {/* <ListMap3/> */}
    {/* <And/> */}
    {/* <If/> */}
    {/* <Events/> */}
    </>
  )
}

export default App;