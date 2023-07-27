import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Stack,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  IconButton,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
const pages = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "menu" },
  { name: "About", path: "about" },
  { name: "Contact", path: "contact" },
];

function NavBar() {
  const [state, setState] = useState(false);
  const navigate = useNavigate();
  const bookingNavigate = () => {
    navigate("booking");
  };
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <Box
      sx={{
        width: 350,
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List
        sx={{
          paddingTop: "20px",
          textAlign: "center",
        }}
      >
        {pages.map((text, index) => (
          <ListItem key={text.name} disablePadding>
            <ListItemButton
              component={Link}
              to={text.path}
              sx={{
                textAlign: "center",
                "&:hover": {
                  color: "green",
                  bgcolor: "transparent",
                },
              }}
            >
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <Button
          color="success"
          variant="contained"
          onClick={bookingNavigate}
          disableElevation
        >
          Book a Table
        </Button>
      </List>
    </Box>
  );

  return (
    <div>
      <AppBar
        position="static"
        sx={{
          bgcolor: "inherit",
        }}
        elevation={0}
      >
        <Container>
          <Toolbar>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <img src="navLogo.svg" alt="nav-logo" />
            </Box>
            <Stack
              direction="row"
              spacing={2}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {pages.map((page) => (
                <Button
                  key={page.name}
                  variant="text"
                  component={Link}
                  to={page.path}
                  color="inherit"
                  sx={{
                    color: "black",
                    "&:hover": {
                      color: "green",
                      bgcolor: "transparent",
                    },
                  }}
                  disableRipple
                >
                  {page.name}
                </Button>
              ))}
              <Button
                color="success"
                variant="contained"
                onClick={bookingNavigate}
                disableElevation
              >
                Book a Table
              </Button>
            </Stack>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <img src="navLogo.svg" alt="nav-logo" />
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={state}
                onClose={toggleDrawer(false)}
                sx={{ display: { xs: "flex", md: "none" } }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseIcon />
                  </IconButton>
                </Box>

                {list()}
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default NavBar;
