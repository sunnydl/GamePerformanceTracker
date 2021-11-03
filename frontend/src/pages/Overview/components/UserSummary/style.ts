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
        fontWeight: "bold"
    },

    "& .header-wrapper": {
        borderBottom: "1px solid",
        paddingBottom: "16px"
    },

    "& .body-wrapper > div > span": {
        float: "right"
    },

    "& *": {
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

export const FavoriteChampionWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px 20px 20px 20px',
    backgroundColor: '#F2F7FD',
    borderRadius: '71px',

    "& .title-wrapper": {
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '1.5rem'
    },

    "& .body-wrapper": {
        marginTop: "8px",
        textAlign: "center",

        "& .label-wrapper": {
            fontSize: "1.25rem",
            fontWeight: "bold",
            marginBottom: "8px"
        }
    },

    "& .icon-wrapper > .MuiAvatar-root": {
        margin: "auto"
    },

    "& > *": {
        width: "256px",
        marginBottom: "24px",
    }
}));

export const CircleChartWrapper = styled('div')(({ theme }) => ({
    position: "relative",
    width: "fit-content"
}));

// Do we want to create our own title using div, similar to labels?

export const LabelWrapper = styled('div')(({ theme }) => ({
    position: "absolute",
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: '100%',
    width: "100%",
}));
