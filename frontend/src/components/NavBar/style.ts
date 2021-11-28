import { alpha, styled } from '@mui/material/styles';
import { InputBase, Tabs } from '@mui/material';

export const NavBarTabs = styled(Tabs)(({ theme }) => ({
    margin: 'auto',

    '& .MuiTab-root': {
        color: theme.palette.secondary.contrastText,

        '&.Mui-disabled': {
            color: theme.palette.secondary.contrastText,
            opacity: theme.palette.action.disabledOpacity
        }
    }
}));

export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));
  
export const SearchIconWrapper = styled('div')(({ theme }) => ({
    color: theme.palette.primary.light,
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
  
export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: theme.palette.primary.light,
    border: '1px solid',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));
