import { styled } from '@mui/material/styles';
import { Typography, Box } from '@mui/material';

export const TopSectionWrapper = styled(Box)(() => ({
    padding: '4rem 4rem 0 4rem',
}))

export const Header = styled(Typography)(() => ({
    padding: '2rem 2rem 0 2rem',
    margin: 'auto',
    fontSize: '3rem',
    width: '90%',
    overflowWrap: "break-word"
}));

export const SelectorsWrapper = styled(Box)(() => ({
    padding: '2rem',
    margin: 'auto',
    textAlign: 'center',
}))

export const SelectWrapper = styled('div')(() => ({
    marginLeft: '2rem',
    marginRight: '2rem',
    width: '120px',
}))
