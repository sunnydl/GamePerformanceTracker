import { styled } from '@mui/material/styles';

export const CircleChartWrapper = styled('div')(({ theme }) => ({
    position: 'relative',
    width: 'fit-content',
}));

export const TitleWrapper = styled('div')(({ theme }) => ({
    position: 'absolute',
    bottom: '90%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontSize: theme.typography.h5.fontSize,
    fontWeight: 'bold',
}));

export const LabelWrapper = styled('div')(({ theme }) => ({
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
}));
