import React from 'react';
import Avatar from '@mui/material/Avatar';

interface RankEmblemIconProps {
    rank: string;
    size: number;
}

export default function RankEmblemIcon({ rank, size }: RankEmblemIconProps) {
    return (
        <Avatar
            src={`${process.env.PUBLIC_URL}/emblems/${rank.toLowerCase()}.png`}
            sx={{ width: size, height: size, backgroundColor: '#F2F7FD', border: '4px solid #F2F7FD' }}
        />
    );
}
