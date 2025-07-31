import Services from "@/components/Services";
import { Box, Stack } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Stack
        position="relative"
        height={{ xs: "40vh", sm: "45vh", md: "55vh" }}
      >
        <Box
          position="absolute"
          zIndex={0}
          sx={{
            inset: 0,
            backgroundImage: "url('/newNeiShop.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </Stack>
      <Stack position="relative" height={{ xs: "150vh", sm: "50vh" }}>
        <Box
          position="absolute"
          zIndex={0}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            inset: 0,
            backgroundImage: "url('/bgk_inverted.png')",
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
            <Services />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
