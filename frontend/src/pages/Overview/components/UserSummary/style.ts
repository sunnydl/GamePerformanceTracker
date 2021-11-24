import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const ProfileWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    maxWidth: '600px',
    margin: 'auto',
    padding: '40px 20px 40px 20px',
    backgroundColor: '#F2F7FD',
    borderRadius: '71px',
    fontSize: '1.25rem',

    "& .icon-wrapper": {
        display: "inherit",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "inherit",
        fontSize: "1.5rem",
        fontWeight: "bold",

        "& .MuiAvatar-root": {
            width: "256px",
            height: "256px"
        }
    },

    "& .header-wrapper": {
        borderBottom: "1px solid",
        paddingBottom: "16px"
    },

    "& .body-wrapper > div > span": {
        float: "right"
    },

    "& div": {
        marginBottom: "16px",
    }
}));

export const ChartsWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    maxWidth: '600px',
    margin: 'auto',
    padding: '40px 20px 20px 20px',
    backgroundColor: '#F2F7FD',
    borderRadius: '71px',
}));

export const FavoriteChampionsWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    maxWidth: '600px',
    margin: 'auto',
    padding: '40px 20px 40px 20px',
    backgroundColor: '#F2F7FD',
    borderRadius: '71px',

    "& .title-wrapper": {
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '1.5rem'
    },

    "& .icon-wrapper": {
        margin: "16px",
        textAlign: 'center',
        fontSize: "1.25rem",
        fontWeight: "bold",
        
        "& .MuiAvatar-root": {
            width: "128px",
            height: "128px"
        }
    }
}));
