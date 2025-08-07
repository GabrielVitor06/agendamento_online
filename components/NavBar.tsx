"use client";

import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Stack,
  ListItemIcon,
} from "@mui/material";
import {
  HomeFilled,
  EventNote,
  LocationOn,
  ContactPage,
  Login,
  Menu,
} from "@mui/icons-material";
import React, { useState } from "react";
import Link from "next/link";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <CssBaseline />

      <AppBar
        component="nav"
        color="inherit"
        position="static"
        sx={{ bgcolor: "#000000", color: "#FFFFFF" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Stack
            direction="row"
            alignItems="center"
            display={{ sm: "none" }}
            justifyContent={"space-between"}
            width={"100%"}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <Menu />
            </IconButton>
            <Typography variant="h6">NEI&apos;S BARBER SHOP</Typography>
            <Avatar sx={{ bgcolor: "#000000" }}>H</Avatar>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            gap={1}
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            <Avatar sx={{ bgcolor: "#000000" }}>H</Avatar>
            <Typography variant="h6">NEI&apos;S BARBER SHOP</Typography>
          </Stack>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button href="/" startIcon={<HomeFilled />} color="inherit">
              Home
            </Button>
            <Button href="#" startIcon={<ContactPage />} color="inherit">
              Contato
            </Button>
            <Button
              href="/localization"
              startIcon={<LocationOn />}
              color="inherit"
            >
              Local
            </Button>
            <Button href="/agendar" startIcon={<EventNote />} color="inherit">
              Agendar
            </Button>
            <IconButton
              href="/login"
              sx={{
                backgroundColor: "#f1f1f1",
                "&:hover": {
                  backgroundColor: "#e0e0e0",
                },
              }}
            >
              <Login color="success" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <Box
          onClick={handleDrawerToggle}
          sx={{
            textAlign: "center",
            bgcolor: "#000000",
            color: "#FFFFFF",
            height: "100%",
          }}
        >
          <Typography variant="h6" sx={{ my: 2 }}>
            NEI&apos;S BARBER SHOP
          </Typography>
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemButton component={Link} href="/">
                <ListItemIcon>
                  <HomeFilled />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component={Link} href="#">
                <ListItemIcon>
                  <ContactPage />
                </ListItemIcon>
                <ListItemText primary="Contato" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component={Link} href="/localization">
                <ListItemIcon>
                  <LocationOn />
                </ListItemIcon>
                <ListItemText primary="Local" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component={Link} href="/agendar">
                <ListItemIcon>
                  <EventNote />
                </ListItemIcon>
                <ListItemText primary="Agendar" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component={Link} href="/login">
                <ListItemIcon>
                  <Login />
                </ListItemIcon>
                <ListItemText primary="Login" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
