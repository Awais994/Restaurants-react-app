import React from "react";
import { List, ListItem, ListItemText, ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";
function ListFooter({ props }) {
  return (
    <>
      <List>
        {props.map((text, index) => (
          <ListItem key={index * Math.random()} disablePadding>
            {text.path !== undefined ? (
              <ListItemButton component={Link} to={text.path}>
                <ListItemText primary={text.name} />
              </ListItemButton>
            ) : (
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListFooter;
