"use client";

import {
  Box,
  Stack,
  Typography,
  Avatar,
  Grid,
  Checkbox,
  FormControlLabel,
  Button,
  Divider,
} from "@mui/material";
import { useState } from "react";
import { providers, extras } from "@/components/export";

export default function Cabelo() {
  const basePrice = 50;
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

  const handleToggle = (label: string) => {
    setSelectedExtras((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const total = extras
    .filter((extra) => selectedExtras.includes(extra.label))
    .reduce((acc, curr) => acc + curr.price, basePrice);

  return (
    <Box>
      {/* Fundo com imagem + gradiente + conteúdo */}
      <Stack position="relative" minHeight="85vh">
        {/* Fundo */}
        <Box
          position="absolute"
          zIndex={0}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            inset: 0,
            backgroundImage: "url('/bgk_inverted.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Conteúdo do serviço */}
        <Box
          position={"relative"}
          width={"100%"}
          maxWidth="1000px"
          mx="auto"
          px={2}
          py={4}
          bgcolor={"black"}
        >
          <Typography variant="h4" fontWeight="bold" mb={1}>
            Cabelo
          </Typography>
          <Typography variant="subtitle1" color="grey.300" mb={3}>
            Cortes • Duração: 40min • Endereço Padrão
          </Typography>

          <Typography variant="h6" gutterBottom>
            Fornecido por
          </Typography>
          <Grid container spacing={2} mb={3}>
            {providers.map((name, index) => (
              <Grid key={index}>
                <Stack alignItems="center" spacing={1}>
                  <Avatar />
                  <Typography variant="body2" align="center">
                    {name}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 3, borderColor: "grey.700" }} />

          <Typography variant="h6" gutterBottom>
            Extras disponíveis
          </Typography>
          <Stack spacing={1}>
            {extras.map((extra, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={selectedExtras.includes(extra.label)}
                    onChange={() => handleToggle(extra.label)}
                    sx={{ color: "white" }}
                  />
                }
                label={
                  <Typography>
                    {extra.label} — R${extra.price.toFixed(2)}
                  </Typography>
                }
              />
            ))}
          </Stack>

          <Divider sx={{ my: 3, borderColor: "grey.700" }} />

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={2}
          >
            <Typography variant="h6">Total: R${total.toFixed(2)}</Typography>
            <Button
              href="/agendar"
              variant="contained"
              sx={{ bgcolor: "black" }}
            >
              Agendar agora
            </Button>
          </Box>

          <Typography variant="caption" color="grey.400" mt={1}>
            Pagamento no local
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
