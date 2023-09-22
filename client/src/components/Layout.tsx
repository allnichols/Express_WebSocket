import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { useAuth } from "../providers/authProvider";
import Header from "./header";
export function Layout() {
  const { isAuthenticated, checkIfAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!checkIfAuthenticated()) {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <Outlet />;
  } else {
    return (
      <>
        <Header />
        <Outlet />
      </>
    );
  }
}
