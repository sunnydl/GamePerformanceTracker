import { styled } from '@mui/material/styles';
import { Typography, Paper } from '@mui/material';

export const MatchSummaryWrapper = styled('div')(({ theme }) => ({
    width: '100%',
    padding: '20px',
}));

export const MatchSummaryPaper = styled(Paper)(() => ({
    backgroundColor: '#F2F7FD',
    borderRadius: '71px'
}))

export const Header = styled('article')(() => ({
    padding: '30px 30px 0px 30px',
}))

export const ParagraphWrapper = styled('div')(() => ({
    padding: '5px',
    fontSize: '2rem'
}))

export const Paragraph = styled(Typography)(() => ({
    fontSize: '1.2rem'
}))

export const ButtonsWrapper = styled('div')(() => ({
    width: '100%',
    textAlign: 'center',
    paddingBottom: '4rem'
}))

export const GraphWrapper = styled('div')(() => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
    height: '600px',
    paddingBottom: '3rem',
}))
