import React from 'react'

export default function CampusForm() {
    const [campus, setCampus] = React.useState({
        name: "",
        address: ""
    });

    return (
        <>
            Add a new campus:
            <form>
                <label>Name:<br/>
                    <input type="text"
                           name="name"
                           onChange={event => setCampus(event.target.value)}
                    />
                </label><br/>
                <label>Address:<br/>
                    <input type="text"
                           name="address"
                           onChange={event =>
                               setCampus({...campus, [event.target.name]: event.target.value})}
                    />
                </label>
            </form>
        </>
    );
}