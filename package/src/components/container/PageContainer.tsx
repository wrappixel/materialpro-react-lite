// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Box } from '@mui/material';


import { Helmet } from 'react-helmet';

type Props = {
  description?: string;
  children: any | any[];
  title?: string;
};

const PageContainer = ({ title, description, children }: Props) => (
  <Box sx={{marginTop:"64px"}}>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
    {children}
  </Box>
);

export default PageContainer;
