import React from 'react'
import axios from 'axios';

export default function CampusForm() {
    const [campus, setCampus] = React.useState({
        name: "",
        address: "",
        city: "",
        state: "",
        zip: ""
    });

    const handleChange = (event) => {
        setCampus(prevState => {
            return {...campus, [event.target.name]: event.target.value}
        })
    }

    const addCampus = (event) => {
        event.preventDefault();
        console.log(campus);

        // let formData = new FormData();
        //
        // formData.append("name", campus.name);
        // formData.append("address", campus.address);
        //
        // axios({
        //     method: "POST",
        //     url: "http://localhost:3001/api/campus/",
        //     data: formData,
        //     headers: {"Content-Type": "multipart/form-data"},
        // }).then(function(response) {
        //     console.log(response);
        // }).catch(function(error) {
        //     console.log(error);
        // })

        setCampus(prevState => {
            return {...campus, id: campus.length}
        })
        console.log(campus);

        axios.post("http://localhost:3001/api/campus", campus)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
            console.log(error);
        });
    }

    return (
        <>
            Add a new campus:
            <form onSubmit={addCampus}>
                <label>Name:<br/>
                    <input type="text"
                           name="name"
                           value={campus.name}
                           onChange={handleChange}
                    />
                </label><br/>
                <label>Street address:<br/>
                    <input type="text"
                           name="address"
                           value={campus.address}
                           onChange={handleChange}
                    />
                </label><br/>
                <label>City:<br/>
                    <input type="text"
                           name="city"
                           value={campus.city}
                           onChange={handleChange}
                    />
                </label><br/>
                <label>State:<br/>
                    <input type="text"
                           name="state"
                           value={campus.state}
                           onChange={handleChange}
                    />
                </label><br/>
                <label>Zipcode:<br/>
                    <input type="number"
                           name="zip"
                           value={campus.zip}
                           onChange={handleChange}
                    />
                </label><br/>
                <input type="submit" value="Submit"/>
            </form>
        </>
    );
}