import db from "@/lib/db";
import { services } from "@/lib/schema";
import {
  Box,
  Stack,
  Typography,
  Avatar,
  Grid,
  Divider,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import Link from "next/link";
import { eq } from "drizzle-orm";

const providers = ["Romário", "Nei"];

type Props = {
  params: { id: string };
};

export default async function ServicoPage({ params }: Props) {
  const id = Number(params.id);

  const servico = await db
    .select()
    .from(services)
    .where(eq(services.id, id))
    .limit(1)
    .then((res) => res[0]);

  if (!servico) {
    return <Typography color="error">Serviço não encontrado</Typography>;
  }

  return (
    <Box>
      <Stack
        position="relative"
        minHeight="85vh"
        px={2}
        py={4}
        maxWidth="1000px"
        mx="auto"
      >
        <Card sx={{ bgcolor: "black", color: "white", borderRadius: 4 }}>
          {/* Imagem no topo do card */}
          <CardMedia
            component="img"
            image={servico.image}
            alt={servico.title}
            sx={{
              height: 300,
              objectFit: "cover",
              borderRadius: "4px 4px 0 0",
            }}
          />

          <CardContent>
            <Typography variant="h4" fontWeight="bold" mb={1}>
              {servico.title}
            </Typography>
            <Typography variant="subtitle1" color="grey.300" mb={3}>
              {servico.description} • Duração: {servico.durationMinutes} min
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
              Preço
            </Typography>
            <Typography variant="body1" fontWeight="bold" mb={3}>
              R$ {servico.price}
            </Typography>

            <CardActions
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="caption" color="grey.400">
                Pagamento no local
              </Typography>
              <Button
                component={Link}
                href={`/agendar?servico=${servico.id}`}
                variant="contained"
              >
                Agendar agora
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
}
