import React from 'react';

const PageButton = ({offset, limit, onClickPrev,  onClickNext}) => {
    return (
        <div className="flex items-center justify-center pa4">
        <a onClick={onClickPrev} href={`#${limit}#${offset}`} className="f5 no-underline black bg-animate hover-bg-gray hover-white inline-flex items-center pa3 ba border-box mr4">
            <span className="pl1">Previous</span>
        </a>
        <a onClick={onClickNext} href={`#${limit}#${offset}`} className="f5 no-underline black bg-animate hover-bg-gray hover-white inline-flex items-center pa3 ba border-box">
            <span className="pr1">Next</span>
        </a>
        </div>
    )
}

export default PageButton;