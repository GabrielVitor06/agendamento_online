import { Box } from "@mui/material";
import { Stack, Typography, Button } from "@mui/material";

export default function Localizacao() {
  return (
    <Stack
      p={{ xs: 2, xl: 3 }}
      bgcolor="#1e1e1e"
      borderRadius={2}
      color="white"
      width={{ xs: "90%", md: "45%" }}
      height={{ xs: "auto", md: 400, xl: 500 }}
      boxShadow={3}
      spacing={2}
      direction={"row"}
      mx={"auto"}
    >
      <Stack spacing={2} alignSelf="center">
        <Typography variant="h6">Localização</Typography>
        <Typography variant="caption">
          R. Agílio Cunha, 651 - Cidade Nova, Itajaí - SC, 88308-150
        </Typography>
        <Button
          size="small"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          variant="text"
        >
          47984584826
        </Button>
        <Typography variant="subtitle1">Horários de funcionamento</Typography>
        <Typography variant="caption">Seg á Sex - 09:00h ás 19:00h</Typography>
        <Typography variant="caption">Sab, dom - Fechado</Typography>
        <Button
          size="small"
          href="https://maps.app.goo.gl/oRQPa9eKJjX7t6sU9"
          target="_blank"
          rel="noopener noreferrer"
          variant="outlined"
        >
          Ver no Google Maps
        </Button>
      </Stack>

      <Box
        width="90%"
        height="auto"
        borderRadius={2}
        overflow="hidden"
        boxShadow={3}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.5011802287922!2d-48.6961496262739!3d-26.919321676643282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8cc9bd252e9bb%3A0xb4f35ac23e796bd4!2sNei&#39;s%20Barber%20Shop!5e0!3m2!1spt-BR!2sbr!4v1751237630754!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização da Barbearia"
        />
      </Box>
    </Stack>
  );
}
