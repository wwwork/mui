import { useState } from "react";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import { MailLock } from "@mui/icons-material";

export default function ListDemo() {
  return (
    <Box width={"400px"} sx={{ backgroundColor: "#efefef" }}>
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <MailLock />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText>ListItem 1</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <MailLock />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText>ListItem 2</ListItemText>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <MailLock />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText>ListItem 2</ListItemText>
        </ListItem>
      </List>
    </Box>
  );
}
