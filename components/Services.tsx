"use client";

import { useState } from "react";
import { Typography, TextField, Stack, Autocomplete } from "@mui/material";
import { services } from "@/components/export";
import CardDeServico from "@/components/CardDeServico"; // ⬅️ importe aqui

const collaborators = [{ name: "Romário" }, { name: "Nei" }];

export default function ServicesSection() {
  const [serviceSearch, setServiceSearch] = useState("");
  const [selectedColab, setSelectedColab] = useState("");

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(serviceSearch.toLowerCase())
  );

  return (
    <>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ md: "center" }}
        mb={2}
      >
        <Typography variant="h6" color="white">
          Serviços
        </Typography>

        <Stack direction="row" spacing={1}>
          <Autocomplete
            size="small"
            options={collaborators}
            getOptionLabel={(option) => option.name}
            value={collaborators.find((c) => c.name === selectedColab) || null}
            onChange={(event, newValue) => {
              setSelectedColab(newValue ? newValue.name : "");
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Colaboradores"
                InputLabelProps={{ sx: { color: "white" } }}
                InputProps={{
                  ...params.InputProps,
                  sx: {
                    color: "white",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "gray",
                    },
                  },
                }}
              />
            )}
            sx={{ minWidth: 160 }}
          />

          <TextField
            label="Buscar serviço"
            variant="outlined"
            size="small"
            value={serviceSearch}
            onChange={(e) => setServiceSearch(e.target.value)}
            InputLabelProps={{ sx: { color: "white" } }}
            InputProps={{
              sx: {
                color: "white",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "gray",
                },
              },
            }}
          />
        </Stack>
      </Stack>

      <Stack
        justifyContent="center"
        gap={2}
        flexDirection={{ xs: "column", md: "row" }}
      >
        {filteredServices.map((service, index) => (
          <CardDeServico
            key={index}
            service={service}
            selectedColab={selectedColab}
          />
        ))}
      </Stack>
    </>
  );
}
