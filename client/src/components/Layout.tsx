import { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../providers/authProvider';
import { Tabs, Box, rem } from '@mantine/core';
import { Outlet, Link } from 'react-router-dom';


export function Layout() {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/register');
    }
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return <Outlet />
  } else {
    return (
      <Box>
        <Tabs position="center" variant="outline" active={0}>
          <Link to="/">Home</Link>
        </Tabs>
        <Outlet />
      </Box>
    )
  }

}