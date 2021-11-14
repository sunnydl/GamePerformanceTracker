import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const Header = styled(Typography)(() => ({
    padding: '2rem 2rem 0 2rem',
    margin: 'auto',
    fontSize: '3rem',
    width: '90%',
    overflowWrap: "break-word"
}));

export const SelectorsWrapper = styled('div')(() => ({
    padding: '2rem 2rem 0 2rem',
}))

export const SelectWrapper = styled('div')(() => ({
    marginLeft: '2rem',
    marginRight: '2rem',
    width: '120px',
}))
