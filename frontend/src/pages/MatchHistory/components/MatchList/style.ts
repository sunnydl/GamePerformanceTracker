import { TableContainer, TableRow, TableCell } from '@mui/material';
import { styled } from '@mui/material/styles';

export const MatchTableContainer = styled(TableContainer)(({ theme }) => ({
    borderLeft: '1px solid',
    borderRight: '1px solid',
    borderTop: '1px solid',
    borderColor: theme.palette.grey[600],

    '& > .MuiTable-root': {
        '& .MuiTableCell-root': {
            borderColor: theme.palette.grey[600],

            '& .MuiAvatar-root': {
                width: "144px",
                height: "144px",
                marginRight: theme.spacing(4)
            }
        }
    }
}));

export const MatchTableRow = styled(TableRow)(({ theme }) => ({
    position: 'relative',
    
    '& > td.MuiTableCell-root': {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),

        '&.summary': {
            paddingTop: theme.spacing(0.25),
            border: 0
        }
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

export const MatchStatisticsWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '128px',
    width: '128px',
    margin: 'auto',
    border: '1px solid',
    borderColor: theme.palette.primary.main,
    borderRadius: '50%',
}));

export const MatchSummaryCell = styled(TableCell)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    right: 0,
    width: '25%',
    minWidth: '300px',
    padding: theme.spacing(0.25)
}));
