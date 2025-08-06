"use client";

import { useState } from "react";
import { Stack, Typography, Button } from "@mui/material";
import { services } from "@/components/export";
import CardServico from "@/app/(modules)/agendar/components/ServiceCard";
import { Servico } from "@/app/(modules)/agendar/types/types";

type EscolherServicoProps = {
  onNext: (key: "servico", value: Servico) => void;
};

export default function EscolherServico({ onNext }: EscolherServicoProps) {
  const [selecionado, setSelecionado] = useState<Servico | null>(null);

  return (
    <Stack spacing={2}>
      <Typography variant="h6">Escolha um serviço</Typography>

      <Stack spacing={2}>
        {services.map((servico) => (
          <CardServico
            key={servico.id}
            {...servico}
            selected={selecionado?.id === servico.id}
            onClick={() => setSelecionado(servico)}
          />
        ))}
      </Stack>

      <Button
        variant="contained"
        disabled={!selecionado}
        onClick={() => selecionado && onNext("servico", selecionado)}
        sx={{ mt: 2, alignSelf: "flex-start" }}
      >
        Próximo
      </Button>
    </Stack>
  );
}
