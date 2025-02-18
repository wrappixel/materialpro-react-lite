// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useContext } from 'react';
import { Card, CardHeader, CardContent, Divider } from '@mui/material';


type Props = {
  title: string;
  children: any | any[];
};

const BaseCard = ({ title, children }: Props) => {



  return (
    <Card
      sx={{ padding: 0 }}
      elevation={9}
      variant={ undefined}
    >
      <CardHeader title={title} />
      <Divider />
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default BaseCard;
