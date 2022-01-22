import React, {useReducer} from 'react';
import students from "./Students";
import campuses from "./Campuses"

const ACTIONS = {
    ADD_STUDENT: "addStudent",
    ADD_CAMPUS: "addCampus",
    REMOVE_STUDENT: "removeStudent",
    REMOVE_CAMPUS: "removeCampus"
}

const initialState = {students: 0, campuses: 0};

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.ADD_STUDENT:
            return [...students, newStudent()];
        case ACTIONS.ADD_CAMPUS:
            return [...campuses, newCampus()];
        // case ACTIONS.REMOVE_STUDENT:
        //     return [...students, students.splice(index, 1];
        // case ACTIONS.REMOVE_CAMPUS:
        //     return [...campuses, campuses.splice(index, 1];
        default:
            throw new Error();
    }
}

function newStudent() {
    return {

    }
};
function newCampus() {
    return {

    }
};

export default function AddRemove() {
    // const [state, dispatch] = useReducer(reducer, initialState);

    function addStudent() {
        dispatch({type: ACTIONS.ADD_STUDENT});
    }
    function addCampus() {
        dispatch({type: ACTIONS.ADD_CAMPUS});
    }
    function removeStudent() {
        dispatch({type: ACTIONS.REMOVE_STUDENT});
    }
    function removeCampus() {
        dispatch({type: ACTIONS.REMOVE_CAMPUS});
    }

    return (
      <>
        <button onClick={addStudent}>Add Student</button>
        <button onClick={addCampus}>Add Campus</button>
        <button onClick={removeStudent}>Delete</button>
        <button onClick={removeStudent}>Delete</button>
      </>
    );
}

