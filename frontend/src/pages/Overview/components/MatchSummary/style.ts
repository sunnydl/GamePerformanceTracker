import { styled } from '@mui/material/styles';
import { Typography, Paper, Button } from '@mui/material';

export const MatchSummaryWrapper = styled('div')(({ theme }) => ({
    // width: '100%',
    padding: theme.spacing(2),
    // minHeight: '1200px',
    height: 'fit-content',
}));

export const MatchSummaryPaper = styled('div')(({ theme }) => ({
    paddingBottom: theme.spacing(8),
    backgroundColor: theme.palette.background.alternate,
    borderRadius: theme.spacing(8),
    height: 'fit-content',
}));

export const Header = styled(Typography)(({ theme }) => ({
    padding: theme.spacing(4),
    paddingBottom: 0,
    margin: 'auto',
    fontSize: theme.typography.h3.fontSize,
    width: '90%',
    overflowWrap: 'break-word',
}));

export const Paragraph = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.h5.fontSize,
    padding: theme.spacing(1),
}));

export const ButtonSelections = styled('div')(({ theme }) => ({
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    height: 'fit-content',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: theme.spacing(4),
}));

export const Buttons = styled(Button)(({ theme }) => ({
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    width: theme.spacing(15),
}));

export const GraphWrapper = styled(Paper)(({ theme }) => ({
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
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(4),
}));
