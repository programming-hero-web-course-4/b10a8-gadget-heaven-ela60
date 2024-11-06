
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Statics from "../pages/Statics";
import Dashboard from "../pages/Dashboard";
import ProductCards from "../components/ProductCards";
import Details from "../components/Details";
import NewPage from "../components/NewPage";
import NotFound from "../components/NotFound";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <NotFound/>,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('/categories.json'),
                children: [
                    {
                        path: '/', 
                        element: <ProductCards />,
                        loader: () => fetch('/data.json') 
                    },
                    {
                        path: 'category/:category_name', 
                        element: <ProductCards />,
                        loader: () => fetch('/data.json') 
                    },
                   
                ]
            },
            {
                path: '/statics',
                element: <Statics />,
                loader: () => fetch('/data.json') 
            },
            {
                path: '/dashboard',
                element:<Dashboard/>
            },
            {
                path: '/new-page',
                element:<NewPage/>
                   
            },
            
            {
                path: 'product/:product_id',
                element: <Details  />,
                loader: ({ params }) => fetch(`/data.json`)
                    .then(res => res.json())
                    .then(data => data.find(item => item.product_id === params.product_id))
            }
        ]
    }
]);

export default routes;