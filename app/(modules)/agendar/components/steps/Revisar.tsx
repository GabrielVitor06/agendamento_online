import { Stack, Typography, Button } from "@mui/material";
import { DadosAgendamento } from "@/app/(modules)/agendar/types/types";

type RevisarProps = {
  dados: DadosAgendamento;
  onBack: () => void;
};

export default function Revisar({ dados, onBack }: RevisarProps) {
  return (
    <Stack spacing={2}>
      <Typography variant="h6">Revisar Agendamento</Typography>

      <Typography>
        <strong>Serviço:</strong> {dados.servico?.title || "Não selecionado"}
      </Typography>

      <Typography>
        <strong>Colaborador:</strong>{" "}
        {dados.colaborador?.name || "Não selecionado"}
      </Typography>

      <Typography>
        <strong>Local:</strong> {dados.local?.name || "Não selecionado"}
      </Typography>

      <Typography>
        <strong>Data e Hora:</strong>{" "}
        {dados.dataHora
          ? `${dados.dataHora.dia} às ${dados.dataHora.hora}`
          : "Não selecionado"}
      </Typography>

      <Stack direction="row" spacing={2}>
        <Button onClick={onBack}>Voltar</Button>
        <Button variant="contained" color="primary">
          Confirmar
        </Button>
      </Stack>
    </Stack>
  );
}
