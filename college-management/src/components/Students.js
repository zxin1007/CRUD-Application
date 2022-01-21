import React from'react';

function Students({props}) {
    return (
        <>
            <h1>All Students</h1>
            <ul>
                {props.map(student =>
                    <li>
                        Name: {student.name}
                    </li>)}
            </ul>
        </>
    );
}

export default Students;