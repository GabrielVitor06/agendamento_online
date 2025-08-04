"use client";

import { useState } from "react";
import {
  Stack,
  Typography,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Avatar,
  Box,
} from "@mui/material";
import { Colaborador } from "@/app/(modules)/agendar/types/types";

const colaboradores: Colaborador[] = [
  { id: 1, name: "João" },
  { id: 2, name: "Carlos" },
  { id: 3, name: "Pedro" },
];

type EscolherColaboradorProps = {
  onNext: (key: "colaborador", value: Colaborador) => void;
  onBack: () => void;
};

export default function EscolherColaborador({
  onNext,
  onBack,
}: EscolherColaboradorProps) {
  const [selecionado, setSelecionado] = useState<Colaborador | null>(null);

  return (
    <Stack spacing={3}>
      <Typography variant="h6">Escolha um colaborador</Typography>

      <Stack direction={"column"} spacing={2} flexWrap="wrap">
        {colaboradores.map((colab) => {
          const isSelected = selecionado?.id === colab.id;
          return (
            <Card
              key={colab.id}
              sx={{
                width: 180,
                border: isSelected ? "2px solid #1976d2" : "1px solid #444",
                bgcolor: isSelected ? "#283593" : "#1e1e1e",
                color: "white",
                transition: "all 0.3s ease",
                cursor: "pointer",
                boxShadow: isSelected
                  ? "0 0 10px 2px rgba(25, 118, 210, 0.7)"
                  : "none",
              }}
              onClick={() => setSelecionado(colab)}
              variant="outlined"
            >
              <CardActionArea>
                <CardContent
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    justifyContent: "center",
                  }}
                >
                  <Avatar sx={{ bgcolor: "#1976d2" }}>
                    {colab.name.charAt(0).toUpperCase()}
                  </Avatar>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="subtitle1" align="center">
                      {colab.name}
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Stack>

      <Stack direction="row" spacing={2} justifyContent="flex-end">
        <Button variant="outlined" onClick={onBack}>
          Voltar
        </Button>
        <Button
          variant="contained"
          disabled={!selecionado}
          onClick={() => selecionado && onNext("colaborador", selecionado)}
        ></Button>
      </Stack>
    </Stack>
  );
}
