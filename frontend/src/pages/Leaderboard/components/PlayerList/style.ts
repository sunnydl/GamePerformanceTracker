import { TableContainer } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

export const PlayerTableContainer = styled(TableContainer)(({ theme }) => ({
    width: 'auto',
    margin: '4rem',
    borderLeft: '1px solid',
    borderRight: '1px solid',
    borderTop: '1px solid',
    borderColor: theme.palette.grey[600],

    '& > .MuiTable-root': {
        '& .MuiTableCell-root': {
            borderColor: theme.palette.grey[600],

            '& .MuiAvatar-root': {
                width: '48px',
                height: '48px',
                marginRight: theme.spacing(2),
            },
        },
    },
}));

export const PlayerLink = styled(Link)(({ theme }) => ({
    color: theme.palette.text.primary,
    textDecoration: 'none',
    fontWeight: 'bold',
}));
