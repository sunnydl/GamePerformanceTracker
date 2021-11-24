import React from 'react';
import Avatar from '@mui/material/Avatar';
import { FavoriteChampionsWrapper } from './style';

import { getChampionIconURL } from '../../../../util';
import { useAppSelector } from '../../../../redux/hooks';

export default function UserChamps() {
    const favChamps = useAppSelector((state) => state.user.favChamps) ?? [];

    return (
        <FavoriteChampionsWrapper>
            {favChamps.length ? (
                <React.Fragment>
                    <div className="title-wrapper">Favorite Champions</div>
                    {favChamps.map((champ, idx) => (
                        <div key={idx} className="icon-wrapper">
                            <Avatar src={getChampionIconURL(champ)} />
                            {champ}
                        </div>
                    ))}
                </React.Fragment>
            ) : (
                <div className="title-wrapper">No champions found...</div>
            )}
        </FavoriteChampionsWrapper>
    );
}
