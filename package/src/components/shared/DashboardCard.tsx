// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useContext } from 'react';
import { Card, CardContent, Typography, Stack, Box } from '@mui/material';


type Props = {
  title?: string;
  subtitle?: string;
  action?: any | any;
  footer?: any;
  cardheading?: string | any;
  headtitle?: string | any;
  headsubtitle?: string | any;
  children?: any;
  middlecontent?: string | any;
};

const DashboardCard = ({
  title,
  subtitle,
  children,
  action,
  footer,
  cardheading,
  headtitle,
  headsubtitle,
  middlecontent,
}: Props) => {


  return (
    <Card
      sx={{ padding: 0, border: 'none' }}
      elevation={ 9}
      variant={ undefined}

    >
      {cardheading ? (
        <CardContent>
          <Typography variant="h5">{headtitle}</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {headsubtitle}
          </Typography>
        </CardContent>
      ) : (
        <CardContent sx={{ p: "30px" }}>
          {title ? (
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              alignItems={'center'}
              mb={3}
            >
              <Box>
                {title ? <Typography variant="h5">{title}</Typography> : ''}

                {subtitle ? (
                  <Typography variant="subtitle2" color="textSecondary">
                    {subtitle}
                  </Typography>
                ) : (
                  ''
                )}
              </Box>
              {action}
            </Stack>
          ) : null}

          {children}
        </CardContent>
      )}

      {middlecontent}
      {footer}
    </Card>
  );
};

export default DashboardCard;
