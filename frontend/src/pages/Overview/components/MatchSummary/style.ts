import { styled } from '@mui/material/styles';
import { Typography, Paper, Button } from '@mui/material';

export const MatchSummaryWrapper = styled('div')(({ theme }) => ({
    // width: '100%',
    padding: '20px',
    minHeight: '1200px',
    height: 'fit-content',
}));

export const MatchSummaryPaper = styled('div')(() => ({
    backgroundColor: '#F2F7FD',
    borderRadius: '71px',
    minHeight: '1100px',
    height: 'fit-content',
}))

export const Header = styled(Typography)(() => ({
    padding: '2rem 2rem 0 2rem',
    margin: 'auto',
    fontSize: '3rem',
    width: '90%',
    overflowWrap: "break-word"
}))

export const Paragraph = styled(Typography)(() => ({
    fontSize: '1.7rem',
    padding: '0.5rem',
}))

export const ButtonSelections = styled('div')(() => ({
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    height: 'fit-content',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: '2rem',
}))

export const Buttons = styled(Button)(() => ({
    marginLeft: '2rem',
    marginRight: '2rem',
    width: '120px',
    backgroundColor: '#18A0FB'
}))

export const GraphWrapper = styled(Paper)(() => ({
    display: 'flex',
    flexWrap: 'wrap',
    width: '90%',
    paddingLeft: 'auto',
    paddingRight: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignContent: 'center',
    justifyContent: 'center',
    height: '750px',
    paddingBottom: '1rem',
    paddingTop: '2rem',
}))
