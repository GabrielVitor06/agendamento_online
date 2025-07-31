import { IconButton, Typography, Stack } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";

export default function Footer() {
  return (
    <Stack
      component="footer"
      p={3}
      textAlign={"center"}
      spacing={2}
      color={"white"}
      bgcolor={"black"}
    >
      <Typography variant="body1">Siga a gente nas redes sociais</Typography>

      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        flexWrap="wrap"
      >
        <IconButton
          component="a"
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          component="a"
          href="#"
          color="inherit"
          aria-label="Baixar no app"
        >
          <SmartphoneIcon />
        </IconButton>
        <IconButton component="a" href="#" color="inherit" aria-label="Ver app">
          <AppShortcutIcon />
        </IconButton>
      </Stack>

      <Stack>
        <Typography variant="subtitle2">
          &copy; {new Date().getFullYear()} NEI&apos;S BARBER SHOP.
        </Typography>
        <Typography variant="caption">Todos os direitos reservados.</Typography>
      </Stack>
    </Stack>
  );
}
