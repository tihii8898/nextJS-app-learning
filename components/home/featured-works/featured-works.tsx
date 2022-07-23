import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { WorkList } from '~/components/work';

import { Work } from '~/models';

export interface FeaturedWorkProps {}

export function FeaturedWork(props: FeaturedWorkProps) {
  const workList: Work[] = [
    {
      id: 1,
      title: 'Designing Dashboards',
      createdAt: '2020',
      updatedAt: '',
      tagList: ['Dashboard'],
      fullDescription: '',
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      imageUrl:
        'https://res.cloudinary.com/dwpygd7bb/image/upload/v1658547168/learn-nextjs/img1_rb1ank.jpg',
    },
    {
      id: 2,
      title: 'Vibrant Portraits of 2020',
      createdAt: '2018',
      updatedAt: '',
      tagList: ['Illustration'],
      fullDescription: '',
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      imageUrl:
        'https://res.cloudinary.com/dwpygd7bb/image/upload/v1658547168/learn-nextjs/img2_pzketq.jpg',
    },
    {
      id: 3,
      title: '36 Days of Malayalam type',
      createdAt: '2018',
      updatedAt: '',
      tagList: ['Typography'],
      fullDescription: '',
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      imageUrl:
        'https://res.cloudinary.com/dwpygd7bb/image/upload/v1658547168/learn-nextjs/img3_vwhtzh.jpg',
    },
  ];
  return (
    <Box component="section">
      <Container>
        <Typography component="h4" variant="h5" mb={3} mt={2}>
          Featured Works
        </Typography>

        <WorkList workList={workList} />
      </Container>
    </Box>
  );
}
