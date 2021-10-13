import React from 'react';

import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { setUserData } from '../redux/slices/user';

function Overview() {
  const userData = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    let prevLevel = userData.summoner_level || 0
    dispatch(setUserData({ summoner_level: prevLevel + 1 }))
  }

  return (
    <header>
      <button onClick={handleClick}>Increment level</button>
      <div>Summoner Level: {userData.summoner_level}</div>
    </header>
  );
}

export default Overview;
