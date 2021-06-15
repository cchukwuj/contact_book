import React, { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

const Insert = () => {
    const { user } = useAuth0();

    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");


    const addIt = () => {
         if(first && last && email && number) {
            axios.post("http://localhost:9000/items/addIt", {
                first_name: first,
                last_name: last,
                email_address: email,
                phone_number: number,
                username: user.email,
            }).then((res) => {
                console.log(res);
            });
            window.open("http://localhost:3000/home", "_self");

        } 

    }


    return (
        <div>
        <label>
        First Name:
        </label>
        <input type="text" 
        onChange= {(e) => {
            setFirst(e.target.value);
        }}
         />
        <label>
        Last Name:
        </label>
        <input type="text" 
        onChange= {(e) => {
            setLast(e.target.value);
        }}
         />
                 <label>
        Email:
        </label>
        <input type="text" 
        onChange= {(e) => {
            setEmail(e.target.value);
        }}
         />
                 <label>
        Phone Number:
        </label>
        <input type="text" 
        onChange= {(e) => {
            setNumber(e.target.value);
        }}
         />
                  
        <button onClick = {() => addIt()}> Submit </button>
    </div>
    )
}

export default Insert