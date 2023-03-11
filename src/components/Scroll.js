import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', height: '35rem', width: "90%", margin: "auto"}}>
            {props.children}
        </div>
    );
};

export default Scroll;