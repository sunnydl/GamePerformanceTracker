import { Grid, List } from '@mui/material';
import { styled } from '@mui/material/styles';

export const MatchListing = styled(List)(({ theme }) => ({
    '& > .MuiListItem-root': {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        flexDirection: 'column',
        alignItems: 'flex-end'
    },

    "& .MuiAvatar-root": {
        width: "144px",
        height: "144px"
    }
}));

export const MatchResultsWrapper = styled('div')(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    '& > .header-wrapper': {
        marginBottom: theme.spacing(4),
        fontSize: theme.typography.h5.fontSize,
        fontWeight: 'bold',

        '&.victory': {
            color: theme.palette.success.main
        },

        '&.defeat': {
            color: theme.palette.error.main
        }
    },

    '& > .body-wrapper' : {
        '& > .kills': { color: theme.palette.success.main },
        '& > .deaths': { color: theme.palette.error.main },
        '& > .assists': { color: theme.palette.info.main }
    }
}));

export const MatchStatisticsGrid = styled(Grid)(({ theme }) => ({
    height: '100%',
    alignItems: 'flex-end',

    '& > .MuiGrid-item > *': {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '128px',
        width: '128px',
        margin: 'auto',
        border: '1px solid',
        borderColor: theme.palette.info.main,
        borderRadius: '50%',
    }
}));

export const MatchSummaryGrid = styled(Grid)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    right: 0,
    width: '25%',
    minWidth: '300px',
    padding: theme.spacing(0.25)
}));
