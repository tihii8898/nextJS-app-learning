import { Box, Button, Stack, Typography } from '@mui/material';
import { Container } from '@mui/system';

import Image from 'next/image';
import bob from '~/images/bob.gif';

export interface HeroProps {}

export function Hero(props: HeroProps) {
  return (
    <Box component="section" pt={{ xs: 4, md: 15 }} pb={{ xs: 7, md: 9 }}>
      <Container>
        <Stack
          spacing={4}
          direction={{ xs: 'column-reverse', md: 'row' }}
          alignItems={{ xs: 'center', md: 'flex-start' }}
          textAlign={{ xs: 'center', md: 'left' }}
        >
          <Box>
            <Typography
              component="h1"
              variant="h3"
              fontWeight="bold"
              mb={{ xs: 21 / 8, md: 29 / 8 }}
            >
              Hi, I am John,
              <br /> Creative Technologist
            </Typography>
            <Typography mb={{ xs: 27 / 8, md: 47 / 8 }}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </Typography>
            <Button variant="contained" size="large">
              Download Resume
            </Button>
          </Box>
          <Box
            sx={{
              minWidth: '240px',
              boxShadow: '-5px 13px',
              color: 'secondary.light',
              borderRadius: '50%',
            }}
          >
            <Image src={bob} layout="responsive" alt="avatar" style={{ borderRadius: '50%' }} />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
