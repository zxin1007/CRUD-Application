import React from'react';

function Campuses({props}) {
    return (
        <>
            <h1>All Campuses</h1>
            <ul>
                {props.map(campus =>
                <li>
                    Name: {campus.name}
                    <img src={campus.image} alt={campus.id}/>
                </li>)}
            </ul>
        </>
    );
}

export default Campuses;