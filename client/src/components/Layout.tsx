import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, Box } from "@mantine/core";
import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../providers/authProvider";
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
      <Box>
        <Tabs position="center" variant="outline" active={0}>
          <Link to="/">Home</Link>
        </Tabs>
        <Outlet />
      </Box>
    );
  }
}
