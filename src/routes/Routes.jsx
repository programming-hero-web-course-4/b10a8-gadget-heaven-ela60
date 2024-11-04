import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Statics from "../pages/Statics";
import Dashboard from "../pages/Dashboard";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <h2 className="text-center text-red-500 py-24">Error:404</h2>,
        children: [
            {
                path: '/',
                element:<Home/>
            },
            {
                path: '/statics',
                element: <Statics/>
                
            },
            {
                path: '/dashboard',
                element:<Dashboard/>
            },
        ]
    },
])

export default routes;