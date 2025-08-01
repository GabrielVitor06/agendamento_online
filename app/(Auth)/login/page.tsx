"use client";

import React from "react";
import {
  Stack,
  Box,
  InputAdornment,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function InputAdornments() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <Stack position="relative" height="100vh">
        <Box
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            inset: 0,
            backgroundImage:
              "url('https://i.pinimg.com/736x/30/e9/1e/30e91e43ee687ec584744c0c209257c6.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            height="100%"
            sx={{
              background: "linear-gradient(to bottom, black, transparent)",
              pointerEvents: "none",
            }}
          />

          <Stack
            bgcolor={"rgba(0, 0, 0, 0.5)"}
            p={3}
            borderRadius={2}
            width="100%"
            maxWidth="30vh"
            spacing={2}
            component="form"
          >
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white", // cor padrão
                  },
                  "&:hover fieldset": {
                    borderColor: "#1976d2", // cor ao passar o mouse
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#1976d2", // cor quando focado
                  },
                },
                input: {
                  color: "white", // cor do texto digitado
                },
                label: {
                  color: "white", // cor do label
                  "&.Mui-focused": {
                    color: "#1976d2", // cor do label quando focado
                  },
                },
              }}
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
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white", // cor padrão
                  },
                  "&:hover fieldset": {
                    borderColor: "#1976d2", // cor ao passar o mouse
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#1976d2", // cor quando focado
                  },
                },
                input: {
                  color: "white", // cor do texto digitado
                },
                label: {
                  color: "white", // cor do label
                  "&.Mui-focused": {
                    color: "#1976d2", // cor do label quando focado
                  },
                },
              }}
            />
            <Button variant="contained">Enviar</Button>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
