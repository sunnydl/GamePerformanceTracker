import React from 'react'
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export default function Footer() {

    const FooterWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 1),
        position: 'absolute',
        bottom: '0',
        width: '100%',
        height: '4.5rem',
        backgroundColor: 'burlywood',
        color: 'black',
        textAlign: 'center',
      }));

    return (
        <FooterWrapper>
            <Typography>hi</Typography>
        </FooterWrapper>
    )
}
