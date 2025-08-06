"use client";

import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

type CardServicoProps = {
  title: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  selected: boolean;
  onClick: () => void;
};

export default function CardServico({
  title,
  description,
  duration,
  price,
  image,
  selected,
  onClick,
}: CardServicoProps) {
  return (
    <Card
      onClick={onClick}
      sx={{
        width: 300,
        cursor: "pointer",
        border: selected ? "2px solid #1976d2" : "2px solid transparent",
        bgcolor: "#1e1e1e",
        color: "white",
        transition: "0.2s",
        ":hover": {
          border: "2px solid #1976d2",
          transform: "scale(1.02)",
        },
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{ height: 160, objectFit: "cover" }}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="grey.400">
          {description}
        </Typography>
        <Box mt={1}>
          <Typography variant="body2">Duração: {duration}</Typography>
          <Typography variant="body2" fontWeight="bold">
            R$ {price}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
