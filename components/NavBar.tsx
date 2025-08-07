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
import { HomeFilled, EventNote, LocationOn, ContactPage, Login,  } from '@mui/icons-material';
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

type NavItem = {
  icon?: React.ElementType;
  label?: string;
  href: string;
  customComponent?: React.ReactNode;
};


const navItems: NavItem[] = [
  { icon: HomeFilled, label: "Home", href: "/" },
  { icon: ContactPage, label: "Contato", href: "#contato" },
  { icon: LocationOn, label: "Localização", href: "/localization" },
  { icon: EventNote, label: "Agendar", href: "/agendar" },
{
  customComponent: (
    <a
      className="login-button"
      style={{
        padding: "8px 12px",
        backgroundColor: "#1976d2",
        color: "#fff",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        textDecoration: "none"
      }}
      href="/login"
    >
      <Login style={{ marginRight: 8 }} htmlColor="#fff" />
      <strong>Entrar</strong>
    </a>
  ),
  href: "/login",
}

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
            {navItems.map(({ label, href, icon }) => (
              <Button
                key={href}
                startIcon={icon ? React.createElement(icon) : undefined}
                color="inherit"
                href={href}
              >
                    {label && <span>{label}</span>}
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
              <ListItem key={href} disablePadding>
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
