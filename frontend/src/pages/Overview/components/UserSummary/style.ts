import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const ProfileWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    maxWidth: '512px',
    margin: 'auto',
    padding: '20px 20px 60px 20px',
    backgroundColor: '#F2F7FD',
    borderRadius: '71px',
    fontSize: '1.25rem',

    "& .icon-wrapper": {
        display: "inherit",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "inherit",
        fontSize: "1.5rem",
        fontWeight: "bold"
    },

    "& .header-wrapper": {
        borderBottom: "1px solid",
        paddingBottom: "8px"
    },

    "& *": {
        marginBottom: "8px",
    }
}));

export const ChartsWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    height: 'fit-content',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '20px',
    backgroundColor: '#F2F7FD',
    borderRadius: '71px',

    "& *": {
        marginLeft: 'auto',
        marginRight: 'auto',
    }
}));
