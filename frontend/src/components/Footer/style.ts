import { styled } from '@mui/material/styles';

export const FooterWrapper = styled('div')(({ theme }) => ({
    position: 'absolute',
    bottom: '0',
    width: '100%',
    height: '10rem',
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center',
}));

export const ParticipantsWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'inherit',
    color: 'inherit',
    textAlign: 'inherit',

    "& *": {
        margin: '8px'
    }
}));