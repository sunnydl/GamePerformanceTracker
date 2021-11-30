import { styled } from '@mui/material/styles';
import { Tabs } from '@mui/material';

export const NavBarTabs = styled(Tabs)(({ theme }) => ({
    margin: 'auto',

    '& .MuiTab-root': {
        color: theme.palette.secondary.contrastText,

        '&.Mui-disabled': {
            color: theme.palette.secondary.contrastText,
            opacity: theme.palette.action.disabledOpacity,
        },
    },
}));
