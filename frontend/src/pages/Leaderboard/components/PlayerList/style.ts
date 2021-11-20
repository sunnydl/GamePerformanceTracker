
import { List, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PlayerListing = styled(List)(({ theme }) => ({
    paddingLeft: '4rem',
    paddingRight: '4rem',

    '& > .MuiListItem-root': {
        paddingTop: theme.spacing(0.5),
        paddingBottom: theme.spacing(0.5),
        flexDirection: 'column',
        alignItems: 'flex-end',
        borderTop:'1px solid black',
        borderLeft: '1px solid black',
        borderRight: '1px solid black',
        backgroundColor: theme.palette.background.paper,

        '&:last-child': {
            borderBottom: '1px solid black'
        }
    },

    "& .MuiAvatar-root": {
        width: "48px",
        height: "48px"
    }
}));

export const PlayerGrid = styled(Grid)(({ theme }) => ({
    alignItems: 'center'
}));
