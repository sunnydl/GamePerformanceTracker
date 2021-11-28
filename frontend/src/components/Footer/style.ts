import { styled } from '@mui/material/styles';

export const FooterWrapper = styled('div')(({ theme }) => ({
    position: 'absolute',
    bottom: '0',
    width: '100%',
    height: theme.spacing(20),
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center',

    '& .MuiTab-root': {
        fontSize: theme.typography.caption.fontSize,
        fontWeight: 'bold',

        '&.gpt': {
            fontSize: theme.typography.h5.fontSize,
            fontWeight: 'normal'
        }
    }
}));

export const FooterBreak = styled('hr')(({ theme }) => ({
    backgroundColor: theme.palette.grey[600],
    border: 'none',
    height: '1px',
    width: '90%'
}));

export const ParticipantsWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'inherit',
    color: 'inherit',
    textAlign: 'inherit',

    "& *": {
        margin: theme.spacing(1)
    }
}));