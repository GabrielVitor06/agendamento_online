import Link from "next/link";
import {
  Box,
  Stack,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import db from "@/lib/db";
import { services } from "@/lib/schema";

export default async function ServicesSection() {
  const data = await db.select().from(services);

  return (
    <Box
      zIndex={1}
      px={{ xs: 2, sm: 4, md: 6 }}
      width="100%"
      maxWidth="1200px"
      mt={{ md: 8 }}
    >
      <Typography variant="h6" color="white" mb={2}>
        Serviços
      </Typography>

      <Stack
        justifyContent="center"
        gap={2}
        flexDirection={{ xs: "column", md: "row" }}
      >
        {data.map((service) => (
          <Card
            key={service.id}
            sx={{
              width: { xs: "100%", sm: 400 },
              bgcolor: "#1e1e1e",
              color: "white",
              borderRadius: 4,
              p: 1,
            }}
          >
            <CardMedia
              component="img"
              image={service.image}
              alt={service.title}
              sx={{ height: 200, objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h6">
                {service.title}
              </Typography>

              <Typography variant="body2" color="grey.400" mb={1}>
                Duração: {service.durationMinutes} min
              </Typography>

              <Typography variant="body2" mb={1}>
                {service.description}
              </Typography>

              <Typography variant="body2" fontWeight="bold">
                R$ {service.price}
              </Typography>
            </CardContent>

            <CardActions sx={{ justifyContent: "space-between", gap: 1 }}>
              <Button
                component={Link}
                href={`/saibaMais/servicos/${service.id}`}
                variant="outlined"
                size="small"
                color="inherit"
                fullWidth
              >
                Saiba mais
              </Button>

              <Button
                variant="contained"
                size="small"
                fullWidth
                sx={{ bgcolor: "black" }}
              >
                Agendar
              </Button>
            </CardActions>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}
