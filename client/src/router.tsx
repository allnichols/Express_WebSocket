import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Layout} from "./components/Layout";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <div>Home</div>
            },
            {
                path: 'login',
                element: <div>Login</div>

            }
        ]
    }
]);

const router = <RouterProvider router={routes} />;

export default router;