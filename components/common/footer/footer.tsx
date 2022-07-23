import { Facebook, GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import { Box, Icon, Stack, Typography } from '@mui/material';

export interface FooterProps {}

export function Footer(props: FooterProps) {
  const socialLinks = [
    {
      icon: Facebook,
      url: 'https://www.facebook.com/banhuy1811/',
    },
    {
      icon: Instagram,
      url: 'https://www.facebook.com/banhuy1811/',
    },
    {
      icon: GitHub,
      url: 'https://github.com/tihii8898',
    },
    {
      icon: LinkedIn,
      url: 'https://github.com/tihii8898',
    },
  ];

  return (
    <Box component="footer" py={2} textAlign="center">
      <Stack direction="row" justifyContent="center" spacing={3} pt={6} pb={3.5}>
        {socialLinks.map((item, index) => (
          <Box key={index} component="a" href={item.url} target="_blank" rel="noopener noreferrer">
            <Icon
              component={item.icon}
              sx={{
                fontSize: 48,
              }}
            />
          </Box>
        ))}
      </Stack>
      <Typography>Copyright ©2020 All rights reserved </Typography>
    </Box>
  );
}
