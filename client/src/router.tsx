import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import {Layout} from "./components/Layout";
import Register from "./screens/auth/register";
import Login from "./screens/auth/login";

const routes = createBrowserRouter(
    createRoutesFromElements(
    <Route  element={<Layout/>}>
      <Route index path="/" element={<div>home</div>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
    </Route>
  ));

const router = <RouterProvider router={routes} />;

export default router;