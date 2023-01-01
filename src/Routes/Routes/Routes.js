import DashboardLayout from "../../Layout/DashboardLayout.js";
import Appointment from "../../Pages/Appointment/Appointment/Appointment.js";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor.js";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers.js";
import ManageDoctors from "../../Pages/Dashboard/ManageDoctors/ManageDoctors.js";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment.js";
import Payment from "../../Pages/Dashboard/Payment/Payment.js";
import Home from "../../Pages/Home/Home/Home/Home.js";
import Login from "../../Pages/Login/Login";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError.js";
import SignUp from "../../Pages/SignUp/SignUp.js";
import AdminRoute from "../AdminRoute/AdminRoute.js";
import PrivateRoute from "../privateRoute/PrivateRoute.js";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://doctors-portal-server-beta-khaki.vercel.app/bookings/${params.id}`)
            }
        ]
    }
])


export default router;