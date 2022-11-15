import Appointment from "../../Pages/Appointment/Appointment/Appointment.js";
import Home from "../../Pages/Home/Home/Home/Home.js";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp.js";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
    }
])


export default router;