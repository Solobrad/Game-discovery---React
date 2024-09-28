// src/components/Footer.tsx
import { Box, HStack, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box padding="4" textAlign="center" marginTop="auto">
      <Link href="https://rawg.io/" isExternal>
        Data provided by RAWG
      </Link>
      <Link href="https://my-portfolio-react18-qm3e.vercel.app/" isExternal>
        Check Out My Portfolio!
      </Link>
    </Box>
  );
};

export default Footer;
