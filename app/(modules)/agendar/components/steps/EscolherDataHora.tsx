"use client";

import { useState, useMemo } from "react";
import { Stack, Typography, Button, Tooltip, Box } from "@mui/material";
import { format, parseISO, isBefore, startOfDay } from "date-fns";

type DataHora = {
  dia: string;
  hora: string;
};

const horarios = ["09:00", "10:00", "11:00", "13:00", "14:00"];

function getNext28DaysFromToday(): string[] {
  const days = [];
  const today = startOfDay(new Date());

  for (let i = 0; i < 28; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() + i);
    days.push(d.toISOString().slice(0, 10));
  }

  return days;
}

function groupDaysByWeek(days: string[]): string[][] {
  const weeks: string[][] = [];
  let currentWeek: string[] = [];

  days.forEach((day) => {
    const date = parseISO(day);
    const dayOfWeek = date.getDay();

    currentWeek.push(day);

    if (dayOfWeek === 6) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  });

  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }

  return weeks;
}

export default function EscolherDataHora({
  onNext,
  onBack,
}: {
  onNext: (key: "dataHora", value: DataHora) => void;
  onBack: () => void;
}) {
  const [dia, setDia] = useState<string | null>(null);
  const [hora, setHora] = useState<string | null>(null);

  const days = useMemo(() => getNext28DaysFromToday(), []);
  const weeks = useMemo(() => groupDaysByWeek(days), [days]);

  const horariosMarcados = ["2025-08-02 09:00", "2025-08-05 10:00"];

  function isHorarioDisponivel(dia: string, horario: string) {
    return !horariosMarcados.includes(`${dia} ${horario}`);
  }

  return (
    <Stack spacing={3}>
      <Typography variant="h5" fontWeight="bold" mb={1}>
        Escolha a data e hora
      </Typography>

      {weeks.map((week, i) => (
        <Stack
          key={i}
          direction="row"
          spacing={1}
          flexWrap="wrap"
          justifyContent="start"
        >
          {week.map((d) => {
            const date = parseISO(d);
            const isWeekend = date.getDay() === 0 || date.getDay() === 6;
            const isPast = isBefore(date, startOfDay(new Date()));
            const isDisabled = isWeekend || isPast;
            const isSelected = dia === d;

            return (
              <Tooltip key={d} title={format(date, "EEEE, dd MMMM yyyy")} arrow>
                <Box
                  onClick={() => {
                    if (!isDisabled) {
                      setDia(d);
                      setHora(null);
                    }
                  }}
                  sx={{
                    cursor: isDisabled ? "not-allowed" : "pointer",
                    bgcolor: isSelected
                      ? "primary.main"
                      : isDisabled
                      ? "grey.800"
                      : "background.paper",
                    color: isSelected
                      ? "primary.contrastText"
                      : isDisabled
                      ? "grey.500"
                      : "text.primary",
                    borderRadius: 2,
                    boxShadow: isSelected ? 4 : 1,
                    minWidth: 70,
                    minHeight: 70,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    userSelect: "none",
                    transition: "background-color 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      bgcolor: isDisabled
                        ? undefined
                        : isSelected
                        ? "primary.dark"
                        : "grey.100",
                      boxShadow: isDisabled ? undefined : 3,
                    },
                  }}
                >
                  <Typography variant="h6" fontWeight="bold">
                    {format(date, "dd")}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ textTransform: "capitalize" }}
                  >
                    {format(date, "EEE")}
                  </Typography>
                </Box>
              </Tooltip>
            );
          })}
        </Stack>
      ))}

      {dia && (
        <Stack
          direction="row"
          spacing={1}
          flexWrap="wrap"
          justifyContent="center"
          mt={2}
        >
          {horarios.map((h) => {
            const disabled = !isHorarioDisponivel(dia, h);
            const selected = hora === h;

            return (
              <Button
                key={h}
                variant={selected ? "contained" : "outlined"}
                disabled={disabled}
                onClick={() => setHora(h)}
                sx={{
                  minWidth: 65,
                  minHeight: 40,
                  borderRadius: "20px",
                  fontWeight: "medium",
                  color: selected ? "primary.contrastText" : undefined,
                  bgcolor: selected ? "primary.main" : undefined,
                  borderColor: selected ? "primary.main" : undefined,
                  cursor: disabled ? "not-allowed" : "pointer",
                  "&:hover": {
                    bgcolor: disabled
                      ? undefined
                      : selected
                      ? "primary.dark"
                      : "grey.200",
                  },
                }}
              >
                {h}
              </Button>
            );
          })}
        </Stack>
      )}

      <Stack direction="row" spacing={2} justifyContent="flex-end" mt={3}>
        <Button variant="outlined" onClick={onBack}>
          Voltar
        </Button>
        <Button
          variant="contained"
          disabled={!dia || !hora}
          onClick={() => dia && hora && onNext("dataHora", { dia, hora })}
        >
          Próximo
        </Button>
      </Stack>
    </Stack>
  );
}
