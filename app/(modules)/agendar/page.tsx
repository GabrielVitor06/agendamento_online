"use client";

import { useState } from "react";
import { Stack, Stepper, Step, StepLabel, Box } from "@mui/material";
import CardResumo from "@/app/(modules)/agendar/components/CardResumo";
import EscolherServico from "@/app/(modules)/agendar/components/steps/EscolherServico";
import EscolherColaborador from "@/app/(modules)/agendar/components/steps/EscolherColaborador";
import EscolherLocal from "@/app/(modules)/agendar/components/steps/EscolherLocal";
import EscolherDataHora from "@/app/(modules)/agendar/components/steps/EscolherDataHora";
import Revisar from "@/app/(modules)/agendar/components/steps/Revisar";
import type { DadosAgendamento } from "@/app/(modules)/agendar/types/types";

const steps = ["Serviço", "Colaborador", "Local", "Data e Hora", "Revisar"];

export default function PageAgendamento() {
  const [activeStep, setActiveStep] = useState(0);
  const [dados, setDados] = useState<DadosAgendamento>({
    servico: null,
    colaborador: null,
    local: null,
    dataHora: null,
  });

  const next = <K extends keyof DadosAgendamento>(
    key: K,
    value: DadosAgendamento[K]
  ) => {
    setDados((prev) => ({ ...prev, [key]: value }));
    setActiveStep((prev) => prev + 1);
  };

  const back = () => setActiveStep((prev) => prev - 1);

  const renderStep = () => {
    switch (activeStep) {
      case 0:
        return <EscolherServico onNext={next} />;
      case 1:
        return <EscolherColaborador onNext={next} onBack={back} />;
      case 2:
        return <EscolherLocal onNext={next} onBack={back} />;
      case 3:
        return <EscolherDataHora onNext={next} onBack={back} />;
      case 4:
        return <Revisar dados={dados} onBack={back} />;
      default:
        return null;
    }
  };

  return (
    <Stack spacing={4} width="100%" maxWidth={1100} mx="auto" mt={4} px={2}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        alignItems="flex-start"
      >
        <Box flex={1}>{renderStep()}</Box>
        <CardResumo dados={dados} />
      </Stack>
    </Stack>
  );
}
