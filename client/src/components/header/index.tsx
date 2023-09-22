import { Container, Tabs } from "@mantine/core";
import classes from "./header.module.css";

export default function SideBar() {
  // get all rooms and chats
  // show sidebar with rooms and chats
  // when user clicks on room or chat, show room or recent chat
  return (
    <div className={classes.header}>
      <Container className={classes.container}>
        <Tabs
          classNames={{
            root: classes.tabs,
            list: classes.tabsList,
            tab: classes.tab,
          }}
          variant="outline"
          color="blue"
        >
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
