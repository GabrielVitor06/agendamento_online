// components/CardDeServico.tsx
"use client";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import Link from "next/link";

interface CardDeServicoProps {
  service: {
    title: string;
    description: string;
    duration: string;
    saibaMais: string;
    price: string;
    image: string;
  };
  selectedColab?: string;
}

export default function CardDeServico({
  service,
  selectedColab,
}: CardDeServicoProps) {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: 400 },
        bgcolor: "#1e1e1e",
        color: "white",
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
          Duração: {service.duration}
        </Typography>
        <Typography variant="body2" mb={1}>
          {service.description}
        </Typography>
        <Typography variant="body2" fontWeight="bold">
          R$ {service.price}
        </Typography>
        {selectedColab && (
          <Typography variant="caption" color="primary">
            Executado por: {selectedColab}
          </Typography>
        )}
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between", gap: 1 }}>
        <Button
          component={Link}
          href={service.saibaMais}
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
  );
}
