import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const MatchChampsGrid = styled(Grid)(({ theme }) => ({
    justifyContent: 'center',

    '& .outlined': {
        borderTop: '1px solid',
        borderLeft: '1px solid',
        borderRight: '1px solid',
        borderColor: theme.palette.grey[600],
        padding: theme.spacing(2),

        '&:last-child': {
            borderBottom: `1px solid ${theme.palette.grey[600]}`,
        },
    },
}));

export const OverallDataWrapper = styled('div')(({ theme }) => ({
    '& > *': {
        ...theme.typography.h4,
    },
}));

export const ChampDataGrid = styled(Grid)(({ theme }) => ({
    '& .MuiAvatar-root': {
        width: '128px',
        height: '128px',
        margin: 'auto',
    },
}));

export const ChampPerformanceWrapper = styled('div')(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    '& > div.win-rate': {
        '& > span.win-ratio': {
            color: theme.palette.success.main,
            fontSize: theme.typography.h4.fontSize,
            fontWeight: 'bold',
        },
        '& > span.win-loss': {
            fontSize: theme.typography.body2.fontSize,
        },
    },

    '& > div.kda': {
        fontSize: theme.typography.body2.fontSize,

        '& > span.kills': {
            color: theme.palette.success.main,
        },
        '& > span.deaths': {
            color: theme.palette.error.main,
        },
        '& > span.assists': {
            color: theme.palette.info.main,
        },
    },
}));

export const LeftButtonsWrapper = styled('div')(({ theme }) => ({
    float: 'left',
    paddingLeft: theme.spacing(10),

    '& > button': {
        marginBottom: theme.spacing(1),

        '&:not(:last-of-type)': {
            marginRight: theme.spacing(1),
        },
    },
}));

export const RightButtonsWrapper = styled('div')(({ theme }) => ({
    float: 'right',
    paddingRight: `calc(1% + ${theme.spacing(2)})`,

    '& > button': {
        marginBottom: theme.spacing(1),

        '&:not(:last-of-type)': {
            marginRight: theme.spacing(1),
        },
    },
}));
