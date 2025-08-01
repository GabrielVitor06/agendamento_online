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

      {/* Responsivo */}
      <Stack direction={{ xs: "column", md: "row" }} width="100%" height="100%">
        {/* Formulário de Login */}
        <Box
          flex={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
          p={2}
        >
          <Stack
            bgcolor="rgba(0, 0, 0, 0.5)"
            p={4}
            ml={{ xs: 0, md: 4 }}
            height="60vh"
            width="100%"
            maxWidth="400px"
            spacing={2}
            component="form"
            sx={{
              borderRadius: { xs: 2, md: 0 },
              borderTopLeftRadius: { md: 16 },
              borderTopRightRadius: { md: 0 },
              borderBottomLeftRadius: { md: 16 },
              borderBottomRightRadius: { md: 0 },
              width: "100%",
            }}
          >
            <Typography 
            variant="h4" 
            color="white" 
            textAlign="center">
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
            <Button
              href="/register"
              color="inherit"
            >
              Não possui uma conta?
            </Button>
          </Stack>
          <Box
            flex={1}
            mr={4}
            display={{ xs: "none", md: "block" }}
            height="60vh"
            sx={{
              backgroundImage:
                "url('https://images.squarespace-cdn.com/content/v1/54212c92e4b02579387a8877/1732483037941-EKIN36LWYY5W8O0KUT5C/IMG_5544.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderTopLeftRadius: 0,
              borderTopRightRadius: 16,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 16,
            }}
          />
        </Box>
      </Stack>
    </Stack>
  );
}
