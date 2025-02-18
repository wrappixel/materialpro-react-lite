import { Card } from '@mui/material';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useContext } from 'react';



type Props = {
  className?: string;
  children: any | any[];
  sx?: any;
};

const BlankCard = ({ children, className, sx }: Props) => {

  return (
    <Card
      sx={{ p: 0, border: 'none', position: 'relative', sx }}
      className={className}
      elevation={9}
      variant={undefined}
    >
      {children}
    </Card>
  );
};

export default BlankCard;
