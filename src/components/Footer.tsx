// src/components/Footer.tsx
import { Box, HStack, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box padding="4" textAlign="center" marginTop="auto">
      <Link href="https://rawg.io/" isExternal>
        Data provided by RAWG
      </Link>
    </Box>
  );
};

export default Footer;
