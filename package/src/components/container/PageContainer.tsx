// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Box } from '@mui/material';


import { Helmet } from 'react-helmet';

type Props = {
  description?: string;
  children: any | any[];
  title?: string;
  isFullLayout?:boolean;
};

const PageContainer = ({ title, description, children , isFullLayout=true }: Props) => (
  <Box sx={{marginTop:isFullLayout ? "30px" :"0px"}} >
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
    {children}
  </Box>
);

export default PageContainer;
