import { Paper, Typography, Divider } from "@mui/material";
import { DadosAgendamento } from "@/app/(modules)/agendar/types/types";

export default function CardResumo({ dados }: { dados: DadosAgendamento }) {
  return (
    <Paper
      elevation={4}
      sx={{
        width: 320,
        p: 3,
        borderRadius: 3,
        position: "sticky",
        top: 100,
        bgcolor: "#1e1e1e",
        color: "white",
      }}
    >
      <Typography variant="h6" mb={2}>
        Resumo
      </Typography>
      <Divider sx={{ borderColor: "grey.700", mb: 2 }} />

      <Typography variant="caption">Serviço:</Typography>
      <Typography variant="body2" gutterBottom>
        {dados.servico?.title || "Não selecionado"}
      </Typography>

      <Typography variant="caption">Preço:</Typography>
      <Typography variant="body2" gutterBottom>
        R$ {dados.servico?.price || "Não selecionado"}
      </Typography>

      <Typography variant="caption">Colaborador:</Typography>
      <Typography variant="body2" gutterBottom>
        {dados.colaborador?.name || "Não selecionado"}
      </Typography>

      <Typography variant="caption">Local:</Typography>
      <Typography variant="body2" gutterBottom>
        {dados.local?.name || "Não selecionado"}
      </Typography>

      <Typography variant="caption">Data e Hora:</Typography>
      <Typography variant="body2">
        {dados.dataHora
          ? `${dados.dataHora.dia} às ${dados.dataHora.hora}`
          : "Não selecionado"}
      </Typography>
    </Paper>
  );
}
