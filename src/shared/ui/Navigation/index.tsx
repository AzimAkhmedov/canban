import { ReactNode, useState } from "react";
import s from "./index.module.scss";
import { NavLink } from "react-router-dom";
import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  SwipeableDrawer,
} from "@mui/material";
import Box from "@mui/material/Box";
const Navigation = () => {
  const [state, setState] = useState<boolean>(false);

  const toggleDrawer =
    (anchor: string, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState(open);
    };

  return (
    <>
      {/* <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/tasks"}>Tasks </NavLink>
        </li>
        <li>
          <Button variant="contained">Sign Up</Button>
          <Button variant="outlined">Sign In</Button>
        </li>
      </ul> */}
      <Button onClick={toggleDrawer("left", true)}>Menu</Button>

      <SwipeableDrawer
        anchor={"left"}
        open={state}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        <Box sx={{ width: 250 }}>
          <List sx={{ alignItems: "center" }}>
            <ListItem disablePadding>
              <NavLink to={"/"}>
                <ListItemButton>
                  <ListItemText primary={"Home"} />
                </ListItemButton>
              </NavLink>
            </ListItem>
            <ListItem disablePadding>
              <NavLink to={"/tasks"}>
                <ListItemButton>
                  <ListItemText primary={"Tasks"} />
                </ListItemButton>
              </NavLink>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem>
              <ListItemButton>Sing Up</ListItemButton>

              <ListItemButton>Sing In</ListItemButton>
            </ListItem>
          </List>
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default Navigation;
