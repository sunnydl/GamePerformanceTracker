import { styled } from "@mui/material/styles";

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