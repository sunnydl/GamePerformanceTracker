import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { calculateWinRate } from '../util';

interface RatioBarProps {
    title?: string;
    firstValue?: number;
    secondValue?: number;
    firstColor: string;
    secondColor: string;
}

const Ratio = styled(Box)(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    width: '100px',
    height: '15px',

    '& > div': {
        height: '100%',
        borderRadius: theme.shape.borderRadius,
        color: theme.palette.primary.contrastText,
        fontSize: theme.typography.caption.fontSize,

        '&.title': {
            width: '100%',
            textAlign: 'center',
            color: theme.palette.text.primary,
            fontSize: theme.typography.body2.fontSize,
            position: 'absolute',
            bottom: '100%',
            marginBottom: theme.spacing(0.5),
        },

        '&.first': {
            textAlign: 'left',
            paddingLeft: theme.spacing(0.5),
        },

        '&.second': {
            textAlign: 'right',
            paddingRight: theme.spacing(0.5),
        },
    },
}));

export default function RatioBar({
    title,
    firstValue,
    secondValue,
    firstColor,
    secondColor,
}: RatioBarProps) {
    const firstPercent = calculateWinRate(firstValue, secondValue).intValue;
    const secondPercent = 100 - firstPercent;

    return (
        <React.Fragment>
            <Ratio>
                <div className='title'>{title}</div>
                <div
                    className='first'
                    style={{
                        width: `${firstPercent}%`,
                        background: firstColor,
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                    }}
                >
                    {firstValue}
                </div>
                <div
                    className='second'
                    style={{
                        width: `${secondPercent}%`,
                        background: secondColor,
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                    }}
                >
                    {secondValue}
                </div>
            </Ratio>
        </React.Fragment>
    );
}
