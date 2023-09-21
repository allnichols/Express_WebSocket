import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout";

const routes = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                Component: () => <div>Home</div>
            },
            {
                path: 'login',
                Component: () => <div>Login</div>

            }
        ]
    }
]);

const router = <RouterProvider router={routes} />;

export default router;