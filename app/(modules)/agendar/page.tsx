"use client";

import { useState } from "react";
import { Typography, TextField, Stack, Button, Box } from "@mui/material";
import { services } from "@/components/export";
import CardDeServico from "@/components/CardDeServico";

export default function ServicesSection() {
  const [serviceSearch, setServiceSearch] = useState("");
  const [selectedColab] = useState("");

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(serviceSearch.toLowerCase())
  );

  return (
    <Stack alignItems="center" width="100%" px={2}>
      {/* Header com título e campo de busca */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        maxWidth={1000}
        py={2}
      >
        <Typography variant="h6" color="white">
          Serviços
        </Typography>

        <TextField
          label="Buscar serviço"
          variant="outlined"
          size="small"
          value={serviceSearch}
          onChange={(e) => setServiceSearch(e.target.value)}
          InputLabelProps={{ sx: { color: "white" } }}
          InputProps={{
            sx: {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "gray",
              },
              color: "white",
            },
          }}
          sx={{ width: 160 }}
        />
      </Stack>

      {/* Conteúdo principal: lista + mapa */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        width="100%"
        maxWidth={1100}
        justifyContent="space-between"
        alignItems="flex-start"
        mt={2}
      >
        {/* Lista de serviços */}
        <Stack
          spacing={2}
          width={{ xs: "100%", md: "50%" }}
          alignItems="center"
        >
          {filteredServices.map((service, index) => (
            <CardDeServico
              key={index}
              service={service}
              selectedColab={selectedColab}
            />
          ))}
        </Stack>

        {/* Mapa */}
        <Stack
          p={2}
          bgcolor="#1e1e1e"
          borderRadius={2}
          color="white"
          width={{ xs: "100%", md: "45%" }}
          boxShadow={3}
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h6" textAlign="center">
            Nossa Localização
          </Typography>
          <Typography variant="caption" textAlign="center">
            R. Agílio Cunha, 651 - Cidade Nova, Itajaí - SC, 88308-150
          </Typography>
          <Button
            size="small"
            href="https://maps.app.goo.gl/oRQPa9eKJjX7t6sU9"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
          >
            Ver no Google Maps
          </Button>

          <Box
            width="100%"
            height={350}
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
      </Stack>
    </Stack>
  );
}
