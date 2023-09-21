import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
const router = createBrowserRouter([
    {
        path: "/",
        loader() {
            return { user: null };
        },
        Component: Layout,
    }
]);

export default router;