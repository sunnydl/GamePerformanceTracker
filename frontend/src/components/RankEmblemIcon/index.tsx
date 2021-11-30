import React from 'react';
import { EmblemAvatar } from './style';

interface RankEmblemIconProps {
    rank: string;
    size: number;
}
/**
 * Returns a functional component of the avatar with rank icon in it
 *
 * @returns {JSX.Element} The functional component.
 */
export default function RankEmblemIcon({ rank, size }: RankEmblemIconProps) {
    return (
        <EmblemAvatar
            src={`${process.env.PUBLIC_URL}/emblems/${rank.toLowerCase()}.png`}
            sx={{ width: size, height: size }}
        />
    );
}
