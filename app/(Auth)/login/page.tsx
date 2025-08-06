"use client";

import React from "react";
import {
  Stack,
  Box,
  InputAdornment,
  IconButton,
  TextField,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const whiteTextFieldStyles = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
  input: {
    color: "white",
  },
  label: {
    color: "white",
    "&.Mui-focused": {
      color: "white",
    },
  },
};

export default function InputAdornments() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => event.preventDefault();

  return (
    <Stack position="relative" height="100vh">
      {/* Plano de fundo */}
      <Box
        position="absolute"
        sx={{
          inset: 0,
          backgroundImage:
            "url('https://i.pinimg.com/736x/30/e9/1e/30e91e43ee687ec584744c0c209257c6.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: -2,
        }}
      />
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        sx={{
          background: "linear-gradient(to bottom, black, transparent)",
          pointerEvents: "none",
          zIndex: -1,
        }}
      />

      {/* Card centralizado */}
      <Box
        height="100%"
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        px={2}
      >
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          width={{ xs: "100%", md: "1200px" }}
          minHeight="30vh"
          borderRadius={4}
          overflow="hidden"
           boxShadow="0px 2px 12px rgba(255, 255, 0, 0.4)"
        >
          {/* Formulário */}
          <Box
            flex={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
            bgcolor="rgba(0, 0, 0, 0.6)"
            p={4}
          >
            <Stack spacing={2} width="100%" component="form" maxWidth="400px">
              <Typography variant="h4" color="white" textAlign="center">
                Login
              </Typography>

              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                sx={whiteTextFieldStyles}
              />
              <TextField
                label="Password"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        sx={{ color: "white" }}
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        aria-label={
                          showPassword ? "hide password" : "show password"
                        }
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={whiteTextFieldStyles}
              />
              <Button
                variant="contained"
                sx={{ bgcolor: "white", color: "black" }}
              >
                Entrar
              </Button>
              <Divider sx={{ borderColor: "grey.700" }} />
              <Button href="/register" color="inherit">
                Não possui uma conta?
              </Button>
            </Stack>
          </Box>

          {/* Imagem */}
          <Box
            flex={1}
            display={{ xs: "none", md: "block" }}
            sx={{
              backgroundImage:
                "url('https://images.squarespace-cdn.com/content/v1/54212c92e4b02579387a8877/1732483037941-EKIN36LWYY5W8O0KUT5C/IMG_5544.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Box>
      </Box>
    </Stack>
  );
}
