import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const MatchChampsGrid = styled(Grid)(({ theme }) => ({
    justifyContent: 'center',

    '& .outlined': {
        borderTop:'1px solid black',
        borderLeft: '1px solid black',
        borderRight: '1px solid black',
        padding: theme.spacing(2)
    },

    '&:last-child': {
        borderBottom: '1px solid black'
    }
}));

export const OverallDataWrapper = styled('div')(({ theme }) => ({
    '& > *': {
        ...theme.typography.h4
    }
}));

export const ChampDataGrid = styled(Grid)(({ theme }) => ({
    '& .MuiAvatar-root': {
        width: '128px',
        height: '128px',
        margin: 'auto'
    }
}));

export const ChampPerformanceWrapper = styled('div')(({ theme }) => ({
    '& > div.win-rate': {
        '& > span.win-ratio': {
            color: theme.palette.success.main,
            fontSize: theme.typography.h4.fontSize,
            fontWeight: 'bold'
        },
        '& > span.win-loss': {
            fontSize: theme.typography.body2.fontSize
        }
    },

    '& > div.kda': {
        fontSize: theme.typography.body2.fontSize,

        '& > span.kills': {
            color: theme.palette.success.main
        },
        '& > span.deaths': {
            color: theme.palette.error.main
        },
        '& > span.assists': {
            color: theme.palette.info.main
        }
    }
}));
