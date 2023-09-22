import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import {Layout} from "./components/Layout";

const routes = createBrowserRouter(
    createRoutesFromElements(
    <Route  element={<Layout/>}>
      <Route index path="/" element={<div>home</div>} />
      <Route path="/login" element={<div>login</div>} />
    </Route>
  ));

const router = <RouterProvider router={routes} />;

export default router;