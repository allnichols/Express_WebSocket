import { Container, Tabs } from "@mantine/core";
import classes from "./header.module.css";

export default function SideBar() {
  return (
    <div className={classes.header}>
      <Container className={classes.container}>
        <Tabs className={classes.tabs} variant="outline" color="blue">
          <Tabs.List>
            <Tabs.Tab className={classes.tab} value="Chat">
              Chat
            </Tabs.Tab>
            <Tabs.Tab className={classes.tab} value="Rooms">
              Rooms
            </Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </Container>
    </div>
  );
}
