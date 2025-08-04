"use client";

import { useState } from "react";
import {
  Stack,
  Typography,
  Button,
  Card,
  CardActionArea,
  CardContent,
} from "@mui/material";
import { Local } from "@/app/(modules)/agendar/types/types";

const locais: Local[] = [
  { id: 1, name: "Unidade Centro" },
  { id: 2, name: "Unidade Norte" },
];

type EscolherLocalProps = {
  onNext: (key: "local", value: Local) => void;
  onBack: () => void;
};

export default function EscolherLocal({ onNext, onBack }: EscolherLocalProps) {
  const [selecionado, setSelecionado] = useState<Local | null>(null);

  return (
    <Stack spacing={3}>
      <Typography variant="h6">Escolha um local</Typography>

      <Stack direction={"column"} spacing={2} flexWrap="wrap">
        {locais.map((local) => {
          const isSelected = selecionado?.id === local.id;
          return (
            <Card
              key={local.id}
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
              onClick={() => setSelecionado(local)}
              variant="outlined"
            >
              <CardActionArea>
                <CardContent
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 80,
                  }}
                >
                  <Typography variant="subtitle1" align="center" noWrap>
                    {local.name}
                  </Typography>
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
          onClick={() => selecionado && onNext("local", selecionado)}
        >
          Próximo
        </Button>
      </Stack>
    </Stack>
  );
}
