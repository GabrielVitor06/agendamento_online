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
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

const navItems = [
  { label: "Home", href: "/" },
  { label: "Agendar", href: "/agendar" },
  { label: "Localização", href: "/localization" },
  { label: "Contato", href: "#contato" },
  { label: "Login", href: "/login" },
  { label: "Cadastro", href: "/register" },
];

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
              <MenuIcon />
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
            {navItems.map(({ label, href }) => (
              <Button key={label} color="inherit" href={href}>
                {label}
              </Button>
            ))}
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
            {navItems.map(({ label, href }) => (
              <ListItem key={label} disablePadding>
                <ListItemButton component="a" href={href}>
                  <ListItemText primary={label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
