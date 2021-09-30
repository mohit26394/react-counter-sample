import { useState, useEffect } from "react";
import axios from "axios";

const APIComponent = () => {

    const [data, setData] = useState();
    const getData = () => {
        setData(data);
    }

    
    useEffect(() => {
        async function getCourses() {
            // Make a request for a user with a given ID
            await axios.get('/api/courses')
                .then(function (response) {
                    // handle success
                    console.log(response);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });
        }

        getCourses();
    });

    return (<div>
        <button onClick={getData}>Get</button>
        <button>Post</button>
    </div>);
}


export default APIComponent;