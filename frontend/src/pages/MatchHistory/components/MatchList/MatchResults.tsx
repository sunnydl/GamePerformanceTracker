import React from 'react';

import { MatchResultsWrapper } from './style';

function MatchResults() {
    const result = false ? 'victory' : 'defeat';

    return (
        <MatchResultsWrapper>
            <div className={`header-wrapper ${result}`}>Placeholder</div>
            <div className='body-wrapper'>
                <span className='kills'>a</span>
                &nbsp;/&nbsp;
                <span className='deaths'>b</span>
                &nbsp;/&nbsp;
                <span className='assists'>c</span>
            </div>
            <div>XX KDA</div>
        </MatchResultsWrapper>
    );
}

export default MatchResults;
