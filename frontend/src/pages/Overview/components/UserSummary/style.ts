import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const ProfileWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    maxWidth: '600px',
    margin: 'auto',
    padding: `${theme.spacing(4)} ${theme.spacing(3)}`,
    backgroundColor: theme.palette.background.alternate,
    borderRadius: theme.spacing(8),
    fontSize: theme.typography.h6.fontSize,

    "& .icon-wrapper": {
        display: "inherit",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "inherit",
        fontSize: theme.typography.h5.fontSize,
        fontWeight: "bold",

        "& .profile": {
            width: "256px",
            height: "256px"
        }
    },

    "& .header-wrapper": {
        borderBottom: "1px solid",
        paddingBottom: theme.spacing(2)
    },

    "& .body-wrapper > div > span.data-value": {
        float: "right"
    },

    "& div": {
        marginBottom: theme.spacing(2),
    }
}));

export const ChartsWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    maxWidth: '600px',
    margin: 'auto',
    padding: theme.spacing(2),
    paddingTop: theme.spacing(5),
    backgroundColor: theme.palette.background.alternate,
    borderRadius: theme.spacing(8),
}));

export const FavoriteChampionsWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    maxWidth: '600px',
    margin: 'auto',
    padding: `${theme.spacing(4)} ${theme.spacing(3)}`,
    backgroundColor: theme.palette.background.alternate,
    borderRadius: theme.spacing(8),

    "& .title-wrapper": {
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: theme.typography.h5.fontSize,
    },

    "& .icon-wrapper": {
        margin: theme.spacing(2),
        textAlign: 'center',
        fontSize: theme.typography.h6.fontSize,
        fontWeight: "bold",
        
        "& .MuiAvatar-root": {
            width: "128px",
            height: "128px"
        }
    }
}));
