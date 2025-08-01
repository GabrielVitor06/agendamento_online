"use client"

import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Stack, Box } from '@mui/material';

export default function InputAdornments() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <>
    <Stack position="relative" height={{ xs: "150vh", sm: "50vh" }}>
            <Box
              position="absolute"
              zIndex={0}
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{
                inset: 0,
                backgroundImage: "url('https://i.pinimg.com/736x/30/e9/1e/30e91e43ee687ec584744c0c209257c6.jpg')",
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
    
              <Box
                zIndex={1}
                px={{ xs: 2, sm: 4, md: 6 }}
                width="100%"
                maxWidth="1200px"
                mt={{ md: 8 }}
              >
              <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
              </Box>
            </Box>
          </Stack>
      
      </>
    );
  }