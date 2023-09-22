import { Tabs, Box, rem } from '@mantine/core';
import { Outlet, Link } from 'react-router-dom';
export function Layout() {

  return (
    <Box style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      borderRight: "1px solid #ebebeb",
    }}>
      <Tabs variant="pills"  defaultValue="gallery">
        <Tabs.List>
          <Tabs.Tab value="gallery">
            Gallery
          </Tabs.Tab>
          <Tabs.Tab value="messages" >
            Messages
          </Tabs.Tab>
          <Tabs.Tab value="settings">
            Settings
          </Tabs.Tab>
        </Tabs.List>
    </Tabs>
      <Outlet />
    </Box> 
  );
}